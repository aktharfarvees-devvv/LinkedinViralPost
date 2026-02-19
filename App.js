import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
  PanResponder,
  Animated,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { getPromptList, getPromptById } from './prompts';

export default function App() {
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [commentInputs, setCommentInputs] = useState({
    postTopic: '',
    postSummary: '',
    comment: ''
  });
  const [output, setOutput] = useState('');
  const [outputType, setOutputType] = useState('text'); // 'text' or 'json'
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState('prompt-selection'); 
  const [copyFeedback, setCopyFeedback] = useState(false);
  
  const panValue = useRef(new Animated.ValueXY()).current;
  const screenWidth = Dimensions.get('window').width;
  
  // Pan responder for swipe back gesture
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => {
        // Check if touch starts near the left or right edge (like Android back gesture)
        const { locationX } = evt.nativeEvent;
        const edgeThreshold = 50; // pixels from edge
        const isNearEdge = locationX < edgeThreshold || locationX > (screenWidth - edgeThreshold);
        
        return isNearEdge && Math.abs(gestureState.dx) > 10 && Math.abs(gestureState.dy) < 20;
      },
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // Only respond to horizontal swipes from edges, not vertical
        return Math.abs(gestureState.dx) > 20 && Math.abs(gestureState.dy) < 20;
      },
      onPanResponderGrant: () => {
        panValue.setOffset({
          x: panValue.x._value,
          y: panValue.y._value,
        });
        panValue.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event(
        [null, { dx: panValue.x }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (evt, gestureState) => {
        panValue.flattenOffset();
        
        // Check for swipe back gesture (left or right swipe with sufficient distance)
        const swipeThreshold = 50;
        const isSwipeBack = Math.abs(gestureState.dx) > swipeThreshold && step !== 'prompt-selection';
        
        if (isSwipeBack) {
          // Swipe left or right from edge to go back (Android-style)
          handleSwipeBack();
        } else {
          // Reset position if not a back swipe
          Animated.spring(panValue, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
        //Added Comment

      },
    })
  ).current;

  const handleSwipeBack = () => {
    if (step === 'input') {
      setStep('prompt-selection');
    } else if (step === 'output') {
      if (selectedPrompt === 'TITLE') {
        setStep('prompt-selection');
      } else {
        setStep('input');
      }
    }
    // Reset pan position
    panValue.setValue({ x: 0, y: 0 });
  };

  const promptList = getPromptList();

  const handleSelectPrompt = (promptId) => {
    setSelectedPrompt(promptId);
    setUserInput('');
    setCommentInputs({ postTopic: '', postSummary: '', comment: '' });
    setOutput('');
    setOutputType('text');
    
    // For TITLE prompt, skip input and generate directly
    if (promptId === 'TITLE') {
      handleGenerateTitleOutput();
    } else if (promptId === 'INFOGRAPHIC') {
      handleGenerateInfographicOutput();
    } else {
      setStep('input');
    }
  };

  const handleGenerateTitleOutput = async () => {
    setLoading(true);
    
    try {
      const prompt = getPromptById('TITLE');
      // For title, we don't need user input - just return the template as output
      setOutput(prompt.template);
      setStep('output');
    } catch (error) {
      Alert.alert('Error', 'Failed to generate output');
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateInfographicOutput = async () => {
    setLoading(true);
    
    try {
      const prompt = getPromptById('INFOGRAPHIC');
      // For infographic, we don't need user input - just return the template as output
      setOutput(prompt.template);
      setOutputType('json');
      setStep('output');
    } catch (error) {
      Alert.alert('Error', 'Failed to generate output');
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateOutput = async () => {
    // Validate inputs based on prompt type
    if (selectedPrompt === 'COMMENT') {
      if (!commentInputs.postTopic.trim() || !commentInputs.postSummary.trim() || !commentInputs.comment.trim()) {
        Alert.alert('Error', 'Please fill in all three fields');
        return;
      }
    } else {
      if (!userInput.trim()) {
        Alert.alert('Error', 'Please enter your information');
        return;
      }
    }

    setLoading(true);
    
    try {
      const prompt = getPromptById(selectedPrompt);
      let processedPrompt = prompt.template;
      
      if (selectedPrompt === 'COMMENT') {
        // Replace comment-specific placeholders
        processedPrompt = processedPrompt
          .replace('{{POST_TOPIC}}', commentInputs.postTopic.trim())
          .replace('{{SHORT_SUMMARY}}', commentInputs.postSummary.trim())
          .replace('{{PASTE_COMMENT_HERE}}', commentInputs.comment.trim())
          .replace('{{USER_INPUT}}', commentInputs.comment.trim());
      } else if (selectedPrompt === 'POST') {
        // For POST, use the JSON template and replace with user input
        processedPrompt = prompt.jsonTemplate || processedPrompt;
        // Replace topic placeholder in JSON
        processedPrompt = typeof processedPrompt === 'string' 
          ? processedPrompt.replace('{{INSERT_TITLE_HERE}}', userInput.trim())
          : processedPrompt;
        setOutputType('json');
      } else if (selectedPrompt === 'EXISTING_POST_MODIFY') {
        // For EXISTING_POST_MODIFY, replace with user input
        processedPrompt = typeof processedPrompt === 'string' 
          ? processedPrompt.replace('{{PASTE_EXISTING_POST_OR_EXTERNAL_CONTENT_HERE}}', userInput.trim())
          : processedPrompt;
        setOutputType('json');
      } else {
        // For IMAGE_PROMPT and other text prompts
        processedPrompt = processedPrompt.replace('{{USER_INPUT}}', userInput.trim());
      }

      setOutput(processedPrompt);
      setStep('output');
    } catch (error) {
      Alert.alert('Error', 'Failed to generate output');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyToClipboard = async () => {
    await Clipboard.setStringAsync(output);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  const handlePasteFromClipboard = async (field) => {
    const text = await Clipboard.getStringAsync();
    if (field === 'userInput') {
      setUserInput(text);
    } else if (field in commentInputs) {
      setCommentInputs({ ...commentInputs, [field]: text });
    }
  };

  const handleReset = () => {
    setSelectedPrompt(null);
    setUserInput('');
    setOutput('');
    setStep('prompt-selection');
  };

  // Step 1: Prompt Selection
  if (step === 'prompt-selection') {
    return (
      <Animated.View 
        style={[styles.container, { transform: [{ translateX: panValue.x }] }]}
        {...panResponder.panHandlers}
      >
        <KeyboardAvoidingView 
          style={{ flex: 1 }} 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.header}>
            <Text style={styles.title}>LinkedIn Prompt Generator</Text>
            <Text style={styles.subtitle}>Select a prompt type to get started</Text>
          </View>

          <ScrollView style={styles.promptList} showsVerticalScrollIndicator={false}>
            {promptList.map((prompt) => (
              <TouchableOpacity
                key={prompt.id}
                style={styles.promptCard}
                onPress={() => handleSelectPrompt(prompt.id)}
              >
                <Text style={styles.promptCardTitle}>{prompt.name}</Text>
                <Text style={styles.promptCardDescription}>{prompt.description}</Text>
                <Text style={styles.promptCardArrow}>→</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </KeyboardAvoidingView>
      </Animated.View>
    );
  }

  // Step 2: Input
  if (step === 'input') {
    const currentPrompt = getPromptById(selectedPrompt);
    
    // Render different input forms based on prompt type
    if (selectedPrompt === 'COMMENT') {
      return (
        <Animated.View 
          style={[styles.container, { transform: [{ translateX: panValue.x }] }]}
          {...panResponder.panHandlers}
        >
          <KeyboardAvoidingView 
            style={{ flex: 1 }} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
          >
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setStep('prompt-selection')}>
                <Text style={styles.backButton}>← Back</Text>
              </TouchableOpacity>
              <Text style={styles.title}>{currentPrompt.name}</Text>
              <Text style={styles.subtitle}>{currentPrompt.description}</Text>
            </View>

            <ScrollView 
              style={styles.content} 
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={{ paddingBottom: 100 }}
            >
              <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>Original Post Topic:</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="E.g., AI + Software Engineering"
                    placeholderTextColor="#999"
                    multiline
                    numberOfLines={2}
                    value={commentInputs.postTopic}
                    onChangeText={(text) => setCommentInputs({ ...commentInputs, postTopic: text })}
                    textAlignVertical="top"
                  />
                  <TouchableOpacity
                    style={styles.pasteButton}
                    onPress={() => handlePasteFromClipboard('postTopic')}
                  >
                    <Text style={styles.pasteButtonText}>Paste</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>Original Post Summary:</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Brief summary of the post..."
                    placeholderTextColor="#999"
                    multiline
                    numberOfLines={3}
                    value={commentInputs.postSummary}
                    onChangeText={(text) => setCommentInputs({ ...commentInputs, postSummary: text })}
                    textAlignVertical="top"
                  />
                  <TouchableOpacity
                    style={styles.pasteButton}
                    onPress={() => handlePasteFromClipboard('postSummary')}
                  >
                    <Text style={styles.pasteButtonText}>Paste</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>Comment Received:</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Paste the comment you want to reply to..."
                    placeholderTextColor="#999"
                    multiline
                    numberOfLines={4}
                    value={commentInputs.comment}
                    onChangeText={(text) => setCommentInputs({ ...commentInputs, comment: text })}
                    textAlignVertical="top"
                  />
                  <TouchableOpacity
                    style={styles.pasteButton}
                    onPress={() => handlePasteFromClipboard('comment')}
                  >
                    <Text style={styles.pasteButtonText}>Paste</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={[styles.button, styles.generateButton]}
                onPress={handleGenerateOutput}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.buttonText}>Generate Reply</Text>
                )}
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        </Animated.View>
      );
    }
    
    // Default single input form for other prompts
    return (
      <Animated.View 
        style={[styles.container, { transform: [{ translateX: panValue.x }] }]}
        {...panResponder.panHandlers}
      >
        <KeyboardAvoidingView 
          style={{ flex: 1 }} 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setStep('prompt-selection')}>
              <Text style={styles.backButton}>← Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{currentPrompt.name}</Text>
            <Text style={styles.subtitle}>{currentPrompt.description}</Text>
          </View>

          <ScrollView 
            style={styles.content} 
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ paddingBottom: 100 }}
          >
            <View style={styles.inputSection}>
              <Text style={styles.inputLabel}>
                {selectedPrompt === 'IMAGE_PROMPT' ? 'Enter your post theme or concept:' : 'Enter your information:'}
              </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Type or paste your content here..."
                  placeholderTextColor="#999"
                  multiline
                  numberOfLines={8}
                  value={userInput}
                  onChangeText={setUserInput}
                  textAlignVertical="top"
                />
                <TouchableOpacity
                  style={styles.pasteButton}
                  onPress={() => handlePasteFromClipboard('userInput')}
                >
                  <Text style={styles.pasteButtonText}>Paste</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={[styles.button, styles.generateButton]}
              onPress={handleGenerateOutput}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Generate Output</Text>
              )}
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </Animated.View>
    );
  }

  // Step 3: Output
  if (step === 'output') {
    return (
      <Animated.View 
        style={[styles.container, { transform: [{ translateX: panValue.x }] }]}
        {...panResponder.panHandlers}
      >
        <KeyboardAvoidingView 
          style={{ flex: 1 }} 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.header}>
            <TouchableOpacity 
              onPress={() => {
                if (selectedPrompt === 'TITLE') {
                  setStep('prompt-selection');
                } else {
                  setStep('input');
                }
              }}
            >
              <Text style={styles.backButton}>
                {selectedPrompt === 'TITLE' ? '← Back' : '← Edit Input'}
              </Text>
            </TouchableOpacity>
            <Text style={styles.title}>Generated Output</Text>
            <Text style={styles.subtitle}>Ready to copy and use</Text>
          </View>

          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            <View style={styles.outputSection}>
              <Text style={styles.outputLabel}>
                {outputType === 'json' ? 'JSON Prompt Template:' : 'Your Content:'}
              </Text>
              <View style={styles.outputBox}>
                <Text style={styles.outputText}>
                  {typeof output === 'string' 
                    ? output 
                    : JSON.stringify(output, null, 2)
                  }
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={[styles.button, styles.copyButton, copyFeedback && styles.copyButtonActive]}
              onPress={handleCopyToClipboard}
              disabled={copyFeedback}
            >
              <Text style={styles.buttonText}>
                {copyFeedback ? 'Copied!' : 'Copy to Clipboard'}
              </Text>
            </TouchableOpacity>

            {selectedPrompt !== 'TITLE' && (
              <TouchableOpacity
                style={[styles.button, styles.regenerateButton]}
                onPress={() => setStep('input')}
              >
                <Text style={styles.buttonText}>Edit & Regenerate</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={[styles.button, styles.resetButton]}
              onPress={handleReset}
            >
              <Text style={styles.buttonText}>Start Over</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#0077b5',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  backButton: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 12,
    fontWeight: '600',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#e0e0e0',
  },
  promptList: {
    flex: 1,
    padding: 12,
  },
  promptCard: {
    backgroundColor: '#fff',
    borderRadius: 2,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e1e5e9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  promptCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0077b5',
    marginBottom: 4,
  },
  promptCardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  promptCardArrow: {
    fontSize: 20,
    color: '#0077b5',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  inputSection: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  inputContainer: {
    position: 'relative',
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 2,
    padding: 12,
    paddingRight: 80,
    fontSize: 14,
    color: '#333',
    borderWidth: 1,
    borderColor: '#e1e5e9',
    minHeight: 120,
  },
  pasteButton: {
    position: 'absolute',
    right: 8,
    top: 8,
    backgroundColor: '#0077b5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 2,
  },
  pasteButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  outputSection: {
    marginBottom: 20,
  },
  outputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  outputBox: {
    backgroundColor: '#f8f9fa',
    borderRadius: 2,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e1e5e9',
    minHeight: 200,
  },
  outputText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 2,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  generateButton: {
    backgroundColor: '#0077b5',
    borderColor: '#0077b5',
  },
  copyButton: {
    backgroundColor: '#28a745',
    borderColor: '#28a745',
  },
  copyButtonActive: {
    backgroundColor: '#218838',
    borderColor: '#218838',
  },
  regenerateButton: {
    backgroundColor: '#ffc107',
    borderColor: '#ffc107',
  },
  resetButton: {
    backgroundColor: '#6c757d',
    borderColor: '#6c757d',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
