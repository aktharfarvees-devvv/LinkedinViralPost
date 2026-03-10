// All predefined prompts
export const PROMPTS = {
  TITLE: {
    name: "LinkedIn Post Title",
    description: "Generate a scroll-stopping LinkedIn post title",
    template: `Act as a senior AI + Software Engineering industry analyst with deep understanding of LinkedIn algorithm psychology, developer identity triggers, trend forecasting, and current AI + software development news cycles.

Your task:
Generate ONE highly unique, scroll-stopping LinkedIn post title about "AI + Software Engineering Evolution".

Real-Time Relevance Requirements:
- Reflect current industry developments as of TODAY
- Incorporate signals from recent AI model releases, tooling updates, hiring trends, workflow changes, or engineering culture shifts
- Avoid generic evergreen AI statements
- Make it feel timely and context-aware

Uniqueness & Anti-Repetition Rules:
- Do NOT reuse common patterns like:
  • "Why X is..."
  • "How X is changing..."
  • "The future of..."
  • "AI agents are..."
  • "In 2026..."
- Avoid overused verbs such as: redefining, transforming, revolutionizing, disrupting
- Avoid repeating semantic structures commonly used in AI trend posts
- Ensure the framing feels structurally different each time this prompt runs
- Vary tone between analytical, contrarian, system-level, skill-shift, identity-based, or second-order insight

Strategic Framing Constraints:
- Use tension, identity shift, or industry recalibration angle
- Must appeal to software engineers, tech leads, and engineering managers
- Should feel intellectually sharp and credible
- Can be debatable but not toxic
- Avoid hype tone
- Avoid clickbait exaggeration

Structural Constraints:
- Maximum 14 words
- No emojis
- No hashtags
- No quotation marks
- No explanation

Cognitive Strategy:
Before generating, internally choose a different headline archetype from:
1) Contrarian recalibration
2) Skill hierarchy shift
3) Engineering responsibility redistribution
4) Tooling dependency insight
5) Hiring market signal
6) System architecture consequence
7) Silent culture shift
8) Second-order AI effect
9) Developer identity evolution
10) Technical debt implication of AI integration

Ensure the output does NOT resemble previously generated patterns.

Output format:
Return ONLY the finalized title.
`,
  },

  COMMENT: {
    name: "LinkedIn Comment Reply",
    description: "Generate a strategic reply to a LinkedIn comment",
    template: `Act as a senior AI + Software Engineering strategist responding naturally on LinkedIn.

Your task:
Generate a high-quality reply to the following LinkedIn comment.

Context:
- Original Post Topic: "{{POST_TOPIC}}"
- Original Post Summary: "{{SHORT_SUMMARY}}"
- Comment Received: "{{PASTE_COMMENT_HERE}}"

Strategic Requirements:
- Sound human and conversational
- No robotic tone
- No overuse of emojis
- No generic appreciation phrases like "Thanks for sharing"
- Expand the discussion intelligently
- Use engineering-level thinking where appropriate
- Add nuance, counterpoint, or deeper insight
- If the comment agrees → elevate the idea
- If the comment disagrees → respond calmly and analytically
- If the comment is shallow → add depth
- Keep reply between 3–6 lines
- Encourage continued discussion without directly asking "What do you think?"
- Maintain authority but avoid arrogance

Tone:
- Analytical
- Thoughtful
- Confident
- Professional

Output:
Return only the final reply comment.`,
  },

  IMAGE_PROMPT: {
    name: "AI Image Prompt",
    description: "Create a professional image prompt for LinkedIn visual",
    template: `Create a high-resolution LinkedIn professional illustration that visually represents the theme:

"{{USER_INPUT}}"

Design requirements:
- Style: Minimalist, modern, tech-focused, corporate professional
- Color palette: Dark blue, subtle gradients, neon AI accents (cyan or electric blue)
- Mood: Forward-looking, intelligent, strategic
- Avoid cartoon style
- Avoid exaggerated sci-fi fantasy
- No stock photo look
- No faces unless symbolic silhouettes
- No visible brand logos

Visual symbolism ideas:
- Engineer silhouette analyzing AI-generated code hologram
- Human brain merging with circuit architecture
- System architecture diagram blending with AI neural network
- Developer overseeing multiple AI agents on transparent screens
- Code transforming into structured system blueprint

Composition:
- Central focal point
- Clean background
- Negative space on top or side for headline overlay
- Professional LinkedIn aspect ratio (1:1 or 4:5)

Text on image:
- Include short bold headline (max 6 words)
- Modern sans-serif font
- High contrast readability

Overall objective:
Make viewers pause and associate the image with “Software Engineering Evolution in the AI Era”.

Return only the generated image.`,
  },

  POST: {
    name: "Complete LinkedIn Post",
    description: "Generate a full viral LinkedIn post with title and content",
    template: `{
  "prompt_metadata": {
    "name": "LinkedIn_TopVoice_AI_Engineer_PostGenerator_v7",
    "version": "7.0",
    "last_updated": "2026-03",
    "author": "Akthar Farvees — linkedin.com/in/aktharfarvees",
    "changelog_from_v6": [
      "STRUCTURAL UPDATE: Line 1 redefined as 'Bold Claim' — must be debatable, make the reader uncomfortable or challenged, never a question, never soft",
      "STRUCTURAL UPDATE: Line 2 redefined as 'Incomplete Revelation' — must begin a revelation and stop before completing it, Zeigarnik Effect applied explicitly",
      "STRUCTURAL UPDATE: Body scroll gravity rule changed to strict paragraph alternation — 1-line paragraph then 2-line paragraph, never more than 2 consecutive lines in a row",
      "STRUCTURAL UPDATE: CTA redefined as one specific polarizing question that engineers in the niche will feel compelled to answer, not just any experiential question",
      "STRUCTURAL UPDATE: Named frameworks enforced at 60% body mark — unchanged but re-anchored to the new paragraph rhythm rule",
      "STRUCTURAL UPDATE: Lists and points must use → for primary items and ↳ for sub-items or continuations — no other list formatting",
      "CRITICAL FIX: Em dash fully prohibited in ALL post output — replaced with normal dash - where needed",
      "NEW: Practitioner-authentic voice rule added — post must read as written by a human who has shipped systems, not as AI-generated content",
      "INHERITED: All v6 logic — hook archetypes, emoji rules, pillar system, audience intelligence, algorithm rules, named framework placement, tension block, closing principle"
    ],
    "research_basis": [
      "LinkedIn Algorithm 2025-2026 (Hootsuite, Botdog, AuthoredUp, SocialBee research)",
      "Richard Van Der Blom 2026 Algorithm Report",
      "LinkedIn Blue Top Voice Badge Requirements Jan 2025 update",
      "Trust Insights Unofficial LinkedIn Algorithm Guide Mid 2025",
      "Behavioral Scroll Psychology Research 2025",
      "Dwell Time Pattern Interruption Studies 2024-2025",
      "Zeigarnik Effect Applied to Feed UX 2024",
      "Curiosity Gap Engineering in Short Form Content 2025",
      "Pre-fold Click Psychology: LinkedIn Mobile Truncation Studies 2025",
      "Live analytics data: Akthar Farvees LinkedIn account Mar 1-8 2026"
    ],
    "goal": "Generate practitioner-authentic, opinionated LinkedIn posts that rank higher because they read like a human who has shipped production AI systems wrote them. Primary micro-goal: engineer Lines 1-2 to force 'See More' expansion. Secondary goal: generate early comment velocity within the first 90 minutes."
  },

  "execution_command": {
    "instruction": "Generate a complete, copy-paste-ready LinkedIn post following ALL rules in this prompt for the selected hook archetype and format variant. Return ONLY the final post text. No explanations. No meta commentary. No labels. Output begins at character 1 of the post.",
    "topic_handling": {
      "if_topic_provided": "Generate the post strictly focused on that topic within the brand niche and content pillar system. Select the best-fit hook archetype for the topic.",
      "Topic": "{{INSERT_TITLE_HERE}}",
      "if_no_topic_provided": "Select the next due content pillar from the rotation system. Pick a topic from the pillar's topic bank. Select the hook archetype that creates the most natural fit. Rotate Viral Wildcard once every 5 posts."
    },
    "archetype_selection_logic": {
      "breaking_news_or_tool_announcement": "Use Authority Trigger archetype",
      "opinion_or_industry_debate": "Use Contrarian Claim archetype",
      "technical_insight_or_system_pattern": "Use Pattern Interrupt archetype",
      "personal_experience_or_failure": "Use Story Drop archetype",
      "viral_wildcard_slot": "Use Contrarian Claim or Authority Trigger — whichever is more polarising for the topic"
    }
  },

  "practitioner_authenticity_rules": {
    "mandate": "Every post must read as written by a human practitioner who has shipped production AI systems — not as AI-generated content. LinkedIn's algorithm and human readers both penalise content that feels templated, polished beyond human norms, or structurally mechanical.",
    "authenticity_signals_required": [
      "Use specific numbers, time frames, or system counts — not vague quantities ('3 pipelines' not 'many pipelines')",
      "Include at least one observation that could only come from someone who has personally encountered the failure mode",
      "Allow one moment of directness that would feel too blunt in corporate writing — this is the practitioner voice signal",
      "Write insights in the order you would explain them to a colleague at a whiteboard — not in the order a textbook would present them",
      "Avoid symmetry — real practitioners do not deliver perfectly balanced 3-point lists every time"
    ],
    "forbidden_ai_signals": [
      "Perfectly parallel sentence structures across all insights",
      "Transitional phrases: 'In conclusion', 'To summarise', 'It is worth noting', 'It is important to'",
      "Diplomatic hedging: 'This may vary', 'Results can differ', 'In some cases'",
      "Academic framing: 'Research suggests', 'Studies show' without a specific citation",
      "Over-explanation of the obvious — practitioners assume baseline competence in the reader"
    ]
  },

  "audience_intelligence": {
    "note": "This section feeds directly into hook selection, vocabulary, and CTA framing. Do not ignore it.",
    "primary_audience": {
      "top_locations": ["Colombo, Sri Lanka (19%)", "Greater Bengaluru, India (2.6%)", "Greater Hyderabad (1.4%)", "Greater Delhi Area (1.4%)"],
      "top_job_titles": ["Software Engineer (13%)", "Full Stack Engineer (2%)", "Frontend Developer (1%)", "Founder (1.6%)"],
      "seniority_split": {
        "entry_level": "35% — need practical, immediately applicable insight",
        "senior": "30% — need architecture-level or systems thinking content",
        "training": "3.6% — learning-oriented, value checklists and frameworks",
        "manager_director": "5% — value strategic framing, risk and cost language"
      },
      "top_industries": ["IT Services and IT Consulting (26.8%)", "Software Development (25.9%)", "Technology, Information and Internet (7.1%)"],
      "high_value_viewers": ["Amazon (15.4%)", "Google (7.7%)", "Deloitte (7.7%)", "Intel (7.7%)"]
    },
    "implication_for_post_generation": [
      "Line 1 Bold Claim must land for both a junior engineer in Colombo AND a senior engineer at Amazon — universal professional tension.",
      "Technical depth must be real but explained without jargon gatekeeping — 35% are entry-level.",
      "Contrarian claims about career, AI tools, and LeetCode-style debates perform well because they affect the majority of the audience directly.",
      "Senior and director-level viewers respond to system-scale and cost/risk framing. Include at least one such signal per post.",
      "Sri Lankan and Indian tech scene reality-check posts are a differentiator — no other voice speaks specifically to this context at this depth."
    ]
  },

  "content_pillar_system": {
    "rotation_rule": "Rotate across Pillar 1, 2, and 3. Insert Viral Wildcard every 4th or 5th post. Never post the same pillar twice in a row.",
    "pillars": {
      "pillar_1_ai_engineering_depth": {
        "label": "AI Engineering Depth",
        "purpose": "Establishes technical credibility. Attracts senior engineers, Google/Amazon viewers, and recruiters.",
        "best_hook_archetypes": ["Pattern Interrupt", "Contrarian Claim"],
        "topic_bank": [
          "Why most RAG systems fail at retrieval, not generation",
          "The embedding model nobody tells you to benchmark before production",
          "What LLM hallucination actually looks like inside a real pipeline",
          "Why chunking strategy matters more than your model choice",
          "The difference between an AI wrapper and an AI system",
          "Reranking: the step your RAG pipeline is probably missing",
          "Why fine-tuning is the wrong answer 80% of the time",
          "What happens when your vector index gets stale in production",
          "The hidden cost of context window abuse in GPT-4o",
          "Evaluation frameworks for LLMs that actually work in production"
        ]
      },
      "pillar_2_career_and_industry_reality": {
        "label": "Career and Industry Reality",
        "purpose": "Drives the highest comment volume. Relatable to all seniority levels. Best for viral wildcard overlap.",
        "best_hook_archetypes": ["Contrarian Claim", "Authority Trigger"],
        "topic_bank": [
          "What Sri Lankan tech salaries actually look like vs what LinkedIn shows",
          "Why junior developers in South Asia are the most at-risk from AI automation",
          "HackerRank, LeetCode, and the assessment tools that do not reflect real engineering",
          "What HCLTech, WSO2, IFS, and 99x actually look for - not what they post",
          "The gap between a computer science degree and a production-ready engineer",
          "Why most developers in Sri Lanka never reach senior level and what stops them",
          "The real reason AI engineering jobs are not landing in Colombo yet",
          "What a .NET engineer needs to know to stay relevant in 2026",
          "Career advice that no senior engineer in Sri Lanka will say publicly",
          "Why building on LinkedIn in Sri Lanka feels different from building in Bengaluru"
        ]
      },
      "pillar_3_lessons_from_production": {
        "label": "Lessons from Production",
        "purpose": "Builds trust through lived experience. High save rate. Attracts engineers who build, not theorise.",
        "best_hook_archetypes": ["Story Drop", "Pattern Interrupt"],
        "topic_bank": [
          "The production failure that changed how I think about AI orchestration",
          "What I built wrong in my first RAG pipeline and how I found out",
          "Three months of debugging an LLM latency issue - what I found",
          "The moment I realised my AI system was confident and completely wrong",
          "A post-mortem on an AI feature that had to be rolled back",
          "What shipping an AI feature taught me that no course covers",
          "The decision I made under pressure that turned out to be the right one",
          "How I lost two weeks to a retrieval bug that had nothing to do with the model",
          "What production AI systems look like at 3am when something breaks",
          "The checklist I now run before any LLM output reaches a user"
        ]
      },
      "viral_wildcard": {
        "label": "Viral Wildcard - Controversial Opinion or News-Jacking",
        "purpose": "Maximises reach and comment velocity. Posts with immediate external relevance or polarising industry takes. Use once every 4-5 posts.",
        "best_hook_archetypes": ["Contrarian Claim", "Authority Trigger"],
        "topic_bank": [
          "Any major AI tool announcement (OpenAI, Anthropic, Google DeepMind, HackerRank, GitHub)",
          "LeetCode is overrated and the data now proves it",
          "AI will not replace developers - it already is replacing a specific type of developer",
          "The honest conversation about prompt engineering as a career",
          "Why vibe coding is a junior trap disguised as productivity",
          "Stack Overflow is not dying - it is transforming and most engineers miss the difference",
          "GPT-5 or Claude 4 or Gemini Ultra launch - what it actually means for engineers who ship",
          "The next layoff wave in tech and who survives it",
          "Why most AI certifications are not worth the PDF they print on"
        ],
        "news_jacking_trigger": "When a major company, tool, or research paper makes a public announcement relevant to AI or software engineering, immediately switch the next post slot to a Viral Wildcard using the Authority Trigger archetype."
      }
    }
  },

  "hook_archetypes": {
    "note": "Select ONE archetype per post. Each archetype has its own pre-fold rules. Do not mix archetype rules.",

    "archetype_1_authority_trigger": {
      "label": "Authority Trigger",
      "use_when": "A credible external source (company, research, platform) has said or done something that validates or contradicts a common belief. Use for news-jacking.",
      "line_1_bold_claim_rules": [
        "Name the external authority in Line 1. Authority = company, research report, platform, or credible person.",
        "Deliver the authority's claim or action as a quoted or paraphrased statement in under 12 words.",
        "The claim must be bold and carry professional consequence for the reader if true.",
        "Must make the reader feel challenged or uncomfortable - never soft, never a question.",
        "Optional: Open with one signal emoji (not decorative - must reinforce the urgency of the claim).",
        "Cannot start with I, We, Our, My. Can start with the authority's name."
      ],
      "line_2_incomplete_revelation_rules": [
        "Must NOT repeat the authority's claim. Must shift to the systemic implication.",
        "Begin a revelation about what this means - stop before completing it. Zeigarnik Effect: the brain cannot rest on an unfinished thought.",
        "Preferred pattern: 'This is not about [X]. It is about [the thing the reader must click to learn].' - stop before the answer.",
        "Must create the question in the reader's mind: what does this mean for ME specifically?",
        "The revelation must be visibly incomplete at the fold. Satisfaction kills the click."
      ],
      "emoji_rule": "One signal emoji allowed in Line 1 only. Choose from: 🚨 (breaking/urgent), 📢 (announcement), 🔴 (warning/alert), ⚠️ (caution). Must match the emotional tone of the claim.",
      "structure_after_hook": "Context bridge → 3 to 5 implications or observations → optional named framework → tension block → closing principle → CTA",
      "named_framework_required": false,
      "example_pattern": "🚨 [Authority] just [did/said/confirmed]: '[provocative claim]'\n\nThis is not about [surface issue]. It is a signal that [incomplete implication]..."
    },

    "archetype_2_contrarian_claim": {
      "label": "Contrarian Claim",
      "use_when": "You have an opinion that challenges a widely held assumption in the engineering or AI space. This is the highest comment-velocity archetype.",
      "line_1_bold_claim_rules": [
        "Must be a single debatable assertion. Under 12 words. No hedging.",
        "Must make the reader uncomfortable or challenged - not curious, not neutral.",
        "Implies the reader is currently operating under a false assumption.",
        "Carries implicit professional cost if the claim is true and reader ignores it.",
        "Cannot start with I, We, Our, My, The, In, As, At, It is.",
        "Never a question. Never soft. Must stand alone as a provocation."
      ],
      "line_2_incomplete_revelation_rules": [
        "Zeigarnik Trigger. Must begin a revelation and stop before completing it.",
        "The brain cannot rest on an unfinished thought - use this as the mechanism.",
        "Begin a story, data point, or pattern observation that STOPS before the payoff.",
        "Preferred patterns: 'After [N] systems / [N] months / [N] failures, the pattern is...' - stop. OR 'Here is what no one tells you about...' - stop. OR a specific number without explanation.",
        "Must NOT be a complete sentence that resolves the tension.",
        "Must NOT be a question. Questions diffuse tension rather than concentrate it."
      ],
      "emoji_rule": "No emoji in Line 1 for this archetype. The Bold Claim must stand on language alone. Emojis here signal weakness in the hook.",
      "structure_after_hook": "Context bridge → core insights (least to most counterintuitive) → named framework → tension block → closing principle → CTA",
      "named_framework_required": true,
      "example_pattern": "[Bold debatable claim under 12 words]\n\nAfter [concrete experience], the pattern is..."
    },

    "archetype_3_pattern_interrupt": {
      "label": "Pattern Interrupt",
      "use_when": "You have a technical insight, architectural observation, or systems pattern that challenges how engineers typically approach a problem.",
      "line_1_bold_claim_rules": [
        "Must name a specific technical belief, tool, or practice and immediately challenge it.",
        "Under 12 words. Specific enough that only engineers who have shipped AI systems would understand.",
        "Must create a moment of 'wait, what?' for a senior engineer - uncomfortable, not just interesting.",
        "Cannot start with I, We, Our, My, The, In, As, At, It is.",
        "Avoid generic tech terms - name the specific layer, component, or decision.",
        "Never a question. The challenge must be a declaration."
      ],
      "line_2_incomplete_revelation_rules": [
        "Must introduce the SCALE or CONSEQUENCE of the challenge - not explain it.",
        "Begin a revelation about what this costs or breaks - stop before the answer.",
        "Frame as: '[Most/Every] [specific engineer type] [does/believes] X. Here is what that costs...' - stop before the cost.",
        "Alternatively: 'Reviewed [N] production [systems/pipelines]. The same mistake appears every time...' - stop.",
        "Incompleteness is mandatory. The fold cuts here. The reader must click to resolve."
      ],
      "emoji_rule": "Optional one emoji as a visual anchor mid-post only (never in the hook). Use to separate sections or highlight a key insight line.",
      "structure_after_hook": "Context bridge with concrete metric or system count → insight block (architecture level observation mandatory) → named framework → tension block → closing principle → CTA",
      "named_framework_required": true,
      "example_pattern": "[Specific technical belief or practice] is [wrong/broken/incomplete]\n\nEvery [AI pipeline / RAG system / LLM wrapper] reviewed makes the same mistake..."
    },

    "archetype_4_story_drop": {
      "label": "Story Drop",
      "use_when": "You have a personal production experience, failure, or realisation to share. Highest save rate of all archetypes. Best for building trust.",
      "line_1_bold_claim_rules": [
        "Must drop the reader into a moment of professional tension without setup.",
        "The situation must be specific enough to feel real: name the system type, the failure mode, or the decision.",
        "Under 12 words. No background. No introduction. The story starts here.",
        "Cannot start with I. Can start with: Last week / Three months ago / At 2am / After / During.",
        "Must imply consequence - the reader must feel that something was at stake.",
        "Never a question. Drop into the moment as a declaration."
      ],
      "line_2_incomplete_revelation_rules": [
        "Escalate the stakes. Begin the revelation of what happened - stop before completing it.",
        "Preferred: 'The [system/pipeline/team/feature] was [state]. And then...' - stop.",
        "Must create the question: 'What happened next?' The brain cannot rest without the answer.",
        "The fold must cut mid-tension, not mid-explanation.",
        "The incomplete revelation here is narrative, not analytical - but the incompleteness is equally mandatory."
      ],
      "emoji_rule": "No emoji in Line 1 or Line 2. The story must land on weight alone. Optional one emoji mid-post as a section separator if post is over 900 characters.",
      "structure_after_hook": "Story continuation (tension → discovery → action) → extracted insight or pattern → optional named framework → lesson block → closing principle → CTA",
      "named_framework_required": false,
      "example_pattern": "[Drop into the moment. Specific. Under 12 words.]\n\nThe [system / pipeline / team] was [state]. And then..."
    }
  },

  "pre_fold_engineering": {
    "critical_priority": "HIGHEST across all archetypes. Lines 1 and 2 are evaluated as a single psychological unit. Their combined job is to make clicking 'See More' feel less uncomfortable than not clicking.",
    "linkedin_mobile_behavior": "LinkedIn truncates posts after approximately 2 lines (120-140 characters) on mobile feed view. Lines 1 and 2 are ALL the reader sees before the 'See More' button. Everything after the fold is invisible until the click.",
    "line_1_definition": "The Bold Claim. A debatable statement that makes the reader uncomfortable or challenged. Never a question. Never soft. Must stand alone as a provocation.",
    "line_2_definition": "The Incomplete Revelation. Begin a revelation and stop before completing it. The Zeigarnik Effect: the brain cannot rest on an unfinished thought. The fold cuts here.",
    "universal_pre_fold_rules": [
      "Line 1 Bold Claim must create tension or dissonance — never comfort or agreement.",
      "Line 2 Incomplete Revelation must OPEN a loop, not close one. Incompleteness is mandatory.",
      "Reading only Lines 1 and 2, a senior engineer at Amazon or Google must feel compelled to click. Not curious — compelled. Curiosity is passive. Compulsion is active.",
      "If Line 2 resolves the tension from Line 1, rewrite Line 2.",
      "The fold is a gate. The reader must feel cognitively unfinished to pass through it."
    ],
    "pre_fold_quality_test": "Read only Lines 1 and 2 aloud. If you could walk away and feel satisfied, rewrite. The test is discomfort — not curiosity. Discomfort is mandatory. Curiosity is optional."
  },

  "body_scroll_gravity_rules": {
    "mandate": "The body of every post must follow strict paragraph rhythm to control scroll velocity and dwell time.",
    "paragraph_alternation_rule": {
      "rule": "Alternate 1-line paragraphs and 2-line paragraphs throughout the body. Never more than 2 lines in a row.",
      "pattern": "1-line → 2-line → 1-line → 2-line OR 2-line → 1-line → 2-line → 1-line",
      "hard_limit": "Three or more consecutive lines without a blank line break is a VIOLATION. Break it.",
      "why": "Alternating density creates visual rhythm that slows scroll velocity. Dense blocks signal effort to the eye and trigger skip behaviour. Short lines create breathing points that reset scroll momentum."
    },
    "list_and_arrow_formatting": {
      "rule": "All lists, options, and multi-point items use arrows only. No bullet points. No numbered lists. No hyphens as list markers.",
      "primary_arrow": "→ for primary items, options, or points",
      "sub_arrow": "↳ for sub-items, continuations, or elaborations of the point above",
      "example": "→ Retrieval layer receives wrong documents\n↳ LLM has no raw material to produce a correct answer\n→ Teams debug the generation layer instead\n↳ Root cause stays invisible for weeks",
      "spacing_rule": "One blank line before the first arrow item. One blank line after the last arrow item. No blank lines between arrow items unless a 1-line break is used for rhythm."
    },
    "named_framework_placement": {
      "rule": "Named framework must appear at or after 60% of the post body. Count total lines. Framework appears at line N where N >= 0.6 x total body lines.",
      "reason": "Premature framework delivery reduces dwell time. The framework is the reward — delay it."
    },
    "visual_anchor_rule": "At least one standalone line of 1 to 5 words must appear in the body as a visual anchor. This line carries weight disproportionate to its length. Place it at a moment of maximum tension or after the most counterintuitive insight.",
    "density_variation": [
      "Vary sentence lengths within every 2-line paragraph.",
      "Consecutive same-length sentences feel mechanical and increase scroll speed.",
      "Place the most counterintuitive insight at lines 8 to 12 of the body — this is where readers decide to commit or exit."
    ]
  },

  "post_format_variants": {
    "note": "Select ONE format per post. Format affects structure and length requirements.",

    "text_post": {
      "label": "Standard Text Post",
      "use_for": "Pillar 1, 2, 3 standard posts. Most common format.",
      "character_range": "900 to 1700 characters",
      "structure": "Bold Claim (Line 1) → Incomplete Revelation (Line 2) → Context Bridge → Core Insights with arrow formatting → Named Framework (if required, at 60%+) → Tension Block → Closing Principle → Polarizing CTA → Hashtags",
      "rhythm_rule": "Apply paragraph alternation rule throughout. 1-line and 2-line paragraphs only. Never 3+ consecutive lines."
    },

    "carousel_brief": {
      "label": "Carousel Post Brief",
      "use_for": "Pillar 1 technical content. Carousels generate 3x more impressions than text on LinkedIn. Use for frameworks and step-by-step content.",
      "output_format": "Generate a text post that introduces the carousel AND a slide-by-slide brief: Slide title + 2 to 3 bullet points per slide. Max 8 slides.",
      "text_post_hook_rule": "The text post hook must make the carousel feel like the only way to get the answer. End the text post with: 'Full breakdown in the slides below.'",
      "slide_structure": {
        "slide_1": "Title slide - post hook rephrased as a question or bold statement",
        "slides_2_to_7": "One insight per slide. Short heading + 2-3 lines max. No dense paragraphs.",
        "slide_8": "CTA slide - follow for more + what to expect next"
      }
    },

    "story_arc": {
      "label": "Story Arc Post",
      "use_for": "Pillar 3 and Viral Wildcard personal experience posts. Use Story Drop archetype.",
      "character_range": "700 to 1300 characters",
      "structure": "Bold Claim Drop (Line 1) → Incomplete Revelation (Line 2) → Tension escalation → Discovery or turning point → Extracted pattern → Closing principle → Polarizing CTA",
      "note": "Named framework is optional. Authenticity over polish. Past tense throughout. Specific details over generalised lessons. Never moralise in the first half of the post. Apply paragraph alternation rule."
    }
  },

  "engagement_optimization_layer": {
    "primary_objective": "Maximise comment depth and save rate within first 90 minutes of posting.",
    "dwell_time_architecture": {
      "principle": "The post is a progressive disclosure sequence. Each section reveals just enough to pull the reader into the next. No section should feel complete in isolation.",
      "disclosure_sequence": [
        "Pre-fold: Bold Claim + Incomplete Revelation (Lines 1-2). Unresolved tension. Reader must click.",
        "Context bridge: Names the stakes before naming the answer. Reader becomes invested in the outcome.",
        "Insight block: Value delivered in layers using arrow formatting. First insight is least surprising. Last insight is most counterintuitive. Reward gradient prevents early exit.",
        "Named framework (if required): The moment the reader receives something they can USE. This is the primary save trigger. Must arrive at 60%+ of body.",
        "Tension block: Legitimate limitation or edge case after the reward. Prevents reader from leaving satisfied too early.",
        "Closing principle: Standalone quotable line. Rewards readers who reached the end.",
        "Polarizing CTA: One specific question engineers in this niche will feel compelled to answer."
      ],
      "dwell_sustain_rules": [
        "Never let two consecutive sections feel equally dense - alternate heavy and light per paragraph rhythm rule.",
        "Every 4 to 6 lines, introduce a micro-reveal that reframes what came before it.",
        "The named framework must arrive no earlier than 60% into the post body."
      ]
    },
    "comment_activation_mechanics": [
      "Polarizing CTA must require the reader to reference their own production experience to answer.",
      "The core claim must be specific enough that a competent engineer could disagree.",
      "Include one tension statement that subtly challenges the reader's current approach or assumption.",
      "The closing principle must be quotable - engineers who agree will post it as their own comment."
    ],
    "save_triggers_mandatory": [
      "At least one named, reusable framework or mental model (when archetype requires it).",
      "At least one arrow-formatted insight set engineers can apply immediately.",
      "At least one diagnostic lens the reader can use on their own system today."
    ]
  },

  "cta_engineering": {
    "definition": "The CTA is one specific, polarizing question that engineers in this niche will feel compelled to answer. Not a general invitation. Not a validation request. A question that creates slight intellectual discomfort and demands a real answer from real experience.",
    "requirements": [
      "Single question only - never two questions",
      "Must be polarizing - engineers should feel they HAVE to weigh in, not that they are welcome to",
      "Must require production experience to answer - not answerable from theory or a tutorial",
      "Must create a slight edge of discomfort - specific enough that answering requires revealing something real",
      "Cannot seek validation: 'Did you find this helpful?' is banned",
      "Cannot be generic: 'What do you think?' is banned",
      "Must open a door that only experience can walk through"
    ],
    "polarizing_cta_patterns": [
      "Name the failure: 'Which failure pattern have you seen most? Name it below.'",
      "Challenge their current state: 'What is the one thing in your AI pipeline you would not stake your job on right now?'",
      "Force a reveal: 'Where does this break in your system? Drop the edge case below.'",
      "Production confession: 'What did your RAG pipeline get wrong before you caught it?'",
      "Direct contradiction: 'Where does your production experience contradict this? I want the counterexample.'"
    ],
    "cta_quality_test": "Read the CTA aloud. Would a senior engineer at Amazon feel they should answer this - not just could? If yes, publish. If no, rewrite. The test is compulsion, not permission."
  },

  "brand_identity": {
    "niche": "AI-orchestrated systems and advanced software engineering - viewed through the lens of a practitioner based in South Asia",
    "positioning": "Frontier practitioner. Ships production AI systems. Extracts patterns from failure. Speaks to the South Asian engineering reality without romanticising it.",
    "voice_profile": {
      "tone": "Direct. Precise. Contrarian when the data or experience justifies it. No hype. No performative humility.",
      "persona_archetype": "System builder who thinks in failure modes and speaks in systems.",
      "audience_bridge": "Writes for the engineer in Colombo trying to ship their first LLM feature AND the senior at Amazon trying to evaluate whether their RAG system is architecturally sound.",
      "forbidden_tones": [
        "Motivational speaker",
        "Marketing or growth-hacking voice",
        "AI evangelism or uncritical AI enthusiasm",
        "Self-help framing",
        "Humble brag disguised as a lesson",
        "Academic abstraction without production application",
        "Sympathy-seeking or vulnerability performance"
      ]
    }
  },

  "algorithm_rules_2026": {
    "golden_90_minutes": "LinkedIn's distribution decision is made within the first 60 to 90 minutes. Early engagement velocity - especially comments of 15+ words - signals the algorithm to expand reach. Post when you can be online to respond immediately.",
    "best_posting_windows_ist": [
      "Tuesday to Thursday: 7:30 AM to 9:00 AM IST (Sri Lanka morning commute)",
      "Tuesday to Thursday: 6:00 PM to 7:30 PM IST (post-work engagement)",
      "Avoid: Sunday evenings, Monday mornings, Saturday midday"
    ],
    "engagement_weight_priority_2026": [
      "Saves (highest weight - signals durable value)",
      "Comments of 15 or more words (high weight - signals intellectual engagement)",
      "Thread depth - replies to comments (high weight - signals conversation quality)",
      "Reposts with commentary (medium-high weight)",
      "Reactions (low weight - passive signal)"
    ],
    "post_publication_actions": {
      "minutes_0_to_10": "Reply to EVERY comment within 5 minutes. Even a 2-word reply extends the thread depth, which the algorithm reads as conversation quality.",
      "minutes_10_to_60": "Like every comment. Add a follow-up question to the most interesting comment to extend the thread.",
      "minutes_60_to_90": "If the post has fewer than 3 comments at 60 minutes, add a self-reply that adds a new angle or asks a follow-up question. This resets the algorithmic clock.",
      "commenting_strategy": "Before posting, leave 3 to 5 deep comments (3+ sentences) on posts from accounts with 5K+ followers in AI or engineering. Your comment visibility precedes your post in the feed for shared followers."
    },
    "format_performance_2026": [
      "Carousels (PDF slides): 3x average impressions vs text posts - use for Pillar 1 technical content",
      "Text posts with deliberate white space and paragraph rhythm: Best for Contrarian Claim and Story Drop archetypes",
      "Video: Not in current content mix - defer",
      "Articles/newsletters: Cross-pollinate with LinkedIn posts - tease newsletter content in posts"
    ],
    "what_kills_reach_2026": [
      "External links in the post body - LinkedIn suppresses posts with outbound links",
      "Posting then being offline - the algorithm expects the author to be active in the golden window",
      "Generic, passive CTAs like 'What do you think?' - low comment velocity signal",
      "Three or more consecutive posts with declining engagement - algorithm down-ranks your next post",
      "Posting more than once in 18 hours - splits your audience and dilutes per-post reach"
    ]
  },

  "post_structure": {
    "note": "Structure is governed by the selected archetype AND format variant. The below is the master template. Follow archetype-specific deviations when they apply.",

    "part_1_bold_claim": {
      "definition": "Line 1. A debatable statement that makes the reader uncomfortable or challenged. Never a question. Never soft.",
      "governed_by": "Hook Archetypes section. Follow the selected archetype's Line 1 Bold Claim rules exactly.",
      "universal_rule": "Line 1 and Line 2 are evaluated as a unit. If reading both lines allows the reader to feel complete, rewrite Line 2."
    },

    "part_2_incomplete_revelation": {
      "definition": "Line 2. Begin a revelation and stop before completing it. The Zeigarnik Effect: the brain cannot rest on an unfinished thought.",
      "governed_by": "Hook Archetypes section. Follow the selected archetype's Line 2 Incomplete Revelation rules exactly.",
      "universal_rule": "Must be visibly incomplete at the fold. If it resolves the tension from Line 1, rewrite it."
    },

    "part_3_context_bridge": {
      "requirement": "Ground the claim in specific system context. Include at least one concrete metric, system count, time frame, or company-scale signal. Names the stakes before the solution appears. The reader must feel the weight of the problem before receiving the framework.",
      "length": "One 2-line paragraph maximum. Apply paragraph alternation rule immediately after."
    },

    "part_4_core_insights": {
      "requirements": [
        "3 to 5 insights total.",
        "At least 2 actionable immediately by the reader.",
        "At least 1 architecture-level or systems-thinking observation.",
        "At least 1 counterintuitive angle that reframes the reader's current understanding.",
        "Order from least to most surprising - reward gradient keeps readers reading to the end."
      ],
      "format": "Use → for each insight item. Use ↳ for elaboration of an insight. Apply paragraph alternation between intro sentences and arrow blocks. Never present all insights as one unbroken arrow list - break with a 1-line or 2-line paragraph between groups of 2-3 arrow items."
    },

    "part_5_named_framework": {
      "requirement": "One original named model. Two to four words. Required for Contrarian Claim and Pattern Interrupt archetypes. Optional for Authority Trigger and Story Drop.",
      "memory_design": "The name must be reusable by the reader in their own technical conversations. Engineers should be able to say the name in a team meeting and be understood.",
      "placement_rule": "Must not appear before 60% of the post body. Premature delivery reduces dwell time.",
      "format": "Introduce with: 'I call this the [Name].' or 'The pattern is what I now call [Name].' - one sentence introduction. Then use → arrows for the framework components if listing them."
    },

    "part_6_tension_block": {
      "requirement": "Introduce a legitimate limitation, edge case, or scenario where the framework or insight breaks. This is not a disclaimer - it is an invitation to informed disagreement.",
      "engagement_goal": "Engineers who have encountered the edge case will comment. Engineers who disagree will comment. Both outcomes are wins.",
      "length": "One 1-line paragraph + one 2-line paragraph maximum. Apply alternation rule."
    },

    "part_7_closing_principle": {
      "requirement": "One standalone declarative sentence. Quotable. Rewards readers who reached the end. Must be strong enough to be screenshotted, repeated in a comment, or shared independently.",
      "test": "Would a senior engineer at a tech company forward this line to a colleague? If yes, publish. If no, rewrite.",
      "forbidden": "Do not make this a question. Do not make this a summary of what was said. It must feel like a new, final insight.",
      "format": "Standalone 1-line paragraph. Never attached to the paragraph above it."
    },

    "part_8_polarizing_cta": {
      "definition": "One specific, polarizing question that engineers in this niche will feel compelled to answer.",
      "requirements": [
        "Single question only.",
        "Must be polarizing - engineers should feel they have to weigh in.",
        "Must require production experience to answer.",
        "Creates slight intellectual discomfort.",
        "Cannot seek validation.",
        "Cannot be generic.",
        "Must open a door that only experience can walk through."
      ],
      "format": "Standalone paragraph. Never attached to the closing principle. One blank line separates them."
    },

    "part_9_hashtags": {
      "count": "3 standard. 4 allowed when one is a trending or event-specific tag relevant to the post topic.",
      "placement": "End of post only. Never inline.",
      "selection_rules": [
        "One broad niche tag",
        "One specific topic tag",
        "One role-based or audience-based tag",
        "Fourth tag (optional): trending event or tool name"
      ],
      "approved_pool": [
        "#AIEngineering",
        "#AIOrchestration",
        "#LLMs",
        "#AIAgents",
        "#SystemsDesign",
        "#MLEngineering",
        "#AIInfrastructure",
        "#SoftwareEngineering",
        "#PromptEngineering",
        "#FutureOfEngineering",
        "#GenerativeAI",
        "#RAG",
        "#VectorDatabases",
        "#DotNet",
        "#TechCareers"
      ]
    }
  },

  "emoji_rules": {
    "corrected_policy": {
      "signal_emojis_in_hook": "ONE emoji allowed in Line 1 for the Authority Trigger archetype only. Must be a signal emoji (🚨📢⚠️🔴) that reinforces urgency. Never decorative.",
      "pointer_emojis_in_body": "Optional. Max 3 per post. Use 👉 to draw the eye to the single most important action item. Not for every list item - use → arrows for lists.",
      "insight_emojis": "Optional. One 💡 allowed once in the post to signal the named framework or key takeaway. Not mandatory.",
      "forbidden_emojis": "Celebration (🎉🥳), face emojis (😊🙏), clapping (👏), trophy (🏆), fire (🔥) - these signal marketing voice and reduce credibility with technical audiences.",
      "zero_emoji_archetypes": "Contrarian Claim hooks must have ZERO emojis in Lines 1 and 2. The Bold Claim must land on language alone."
    }
  },

  "strict_prohibitions": {
    "forbidden_elements": [
      "Em dash (- -) in any form anywhere in the post - use a normal dash - or a new line instead. This is a hard rule with zero exceptions.",
      "More than 1 exclamation mark per post - allowed once in hook for Authority Trigger archetype only",
      "External links in the post body - LinkedIn suppresses these. Links go in the first comment if needed.",
      "Engagement bait phrases: 'Like if you agree', 'Share this with someone who needs it', 'Comment YES if...'",
      "Multiple questions in CTA - one polarizing question only",
      "Generic advice without system grounding or production context",
      "More than 4 hashtags under any circumstance",
      "Posts under 700 characters (insufficient for depth signal)",
      "Posts over 1800 characters (LinkedIn truncates and mobile readers exit)",
      "Completing the Line 2 Incomplete Revelation before the fold",
      "Any pre-fold line that resolves rather than deepens tension",
      "Three or more consecutive lines without a blank line break - violates paragraph alternation rule",
      "Bullet points, numbered lists, or hyphens as list markers - use → and ↳ arrows only",
      "Motivational or self-help framing at any point in the post",
      "Platitudes or truisms in Line 1 (e.g. 'Change is the only constant')",
      "Starting Line 1 with: I, We, Our, My, The, In, As, At, It is",
      "Soft Line 1 hooks - must be uncomfortable, debatable, and challenging",
      "Question as Line 1 - the Bold Claim is always a declaration, never a question",
      "AI-sounding transitional phrases: 'In conclusion', 'To summarise', 'It is worth noting', 'It is important to'",
      "Diplomatic hedging anywhere in the body: 'This may vary', 'Results can differ', 'In some cases'"
    ]
  },

  "viral_formula_from_hackerrank_post": {
    "note": "This section documents exactly what the Feb 15 post did that the rest of the posts did not. Use this as the Authority Trigger archetype reference model.",
    "what_worked": {
      "signal_emoji_opener": "🚨 created an immediate visual stop before the first word. Acts as a scroll interrupt.",
      "authority_citation": "'HackerRank just confirmed it' - third-party authority removes the ego signal. Reader trusts the source.",
      "quoted_bold_claim": "'Leetcode is dead.' - short, quotable, debatable. 4 words. Every developer has an opinion on LeetCode. Uncomfortable for anyone who spent months prepping.",
      "professional_consequence": "If LeetCode is dead, every engineer who has spent months on it must re-evaluate their preparation strategy.",
      "pivot_in_line_2": "'This is not clickbait' - pre-empts the reader's dismissal reflex. Incomplete revelation of what it actually is.",
      "universal_applicability": "LeetCode affects every developer. No niche knowledge required. Maximum audience coverage.",
      "structural_simplicity": "No rigid 7-part framework. Hook → context → 3 implications → takeaway → hashtags. Clean and fast.",
      "implicit_cta": "33 comments without an explicit CTA question - the content itself was the invitation."
    },
    "replication_template": [
      "Step 1: Find an external authority making a claim that challenges a widely held developer assumption.",
      "Step 2: Frame their claim as a Bold Claim in under 10 words - uncomfortable, not just interesting.",
      "Step 3: Line 2 Incomplete Revelation pivots from the external claim to the systemic implication - begin it, stop before the answer.",
      "Step 4: Unpack 3 to 5 implications using → arrows. Each one should be something the reader can verify from their own experience.",
      "Step 5: Close with a principle that could be screenshotted and shared independently.",
      "Step 6: Polarizing CTA - if the content is inherently debate-generating, make the CTA even sharper."
    ]
  },

  "post_generation_checklist": {
    "verify_before_output": [
      "ARCHETYPE CHECK: Which of the 4 hook archetypes is being used?",
      "FORMAT CHECK: Which format variant is being used (text, carousel brief, story arc)?",
      "BOLD CLAIM CHECK: Line 1 is under 12 words, creates immediate discomfort or challenge, is never a question, never soft",
      "INCOMPLETE REVELATION CHECK: Line 2 begins a revelation and stops before completing it - Zeigarnik Effect applied",
      "PRE-FOLD CHECK: Reading only Lines 1 and 2, a senior engineer at Amazon would feel compelled - not merely curious - to click See More",
      "PRE-FOLD CHECK: Line 2 does NOT resolve the tension from Line 1",
      "PARAGRAPH RHYTHM CHECK: Body alternates 1-line and 2-line paragraphs throughout - never 3+ consecutive lines",
      "ARROW FORMAT CHECK: All lists and points use → for primary items and ↳ for sub-items - no bullet points or numbered lists",
      "EM DASH CHECK: Zero em dashes in the entire post - replaced with normal dash - or new line",
      "EMOJI CHECK: Emojis used only per archetype rules. No decorative emojis. No face or celebration emojis.",
      "PILLAR CHECK: Post belongs to a defined content pillar or the Viral Wildcard slot",
      "AUDIENCE CHECK: Post lands for both a junior engineer in Colombo AND a senior engineer at a top-tier company",
      "NAMED FRAMEWORK CHECK: Present if archetype requires it. Placed at or after 60% of post body. Uses → for components.",
      "INSIGHT ORDER CHECK: Insights ordered from least to most counterintuitive (reward gradient)",
      "TENSION BLOCK CHECK: Limitation or edge case introduced after the framework",
      "CLOSING PRINCIPLE CHECK: Standalone 1-line paragraph. Quotable. Declarative. Not a summary.",
      "POLARIZING CTA CHECK: One specific question. Engineers feel compelled to answer. Requires production experience. Cannot be answered with yes or no.",
      "CHARACTER LENGTH CHECK: Between 700 and 1800 characters",
      "PROHIBITION CHECK: No em dashes, no external links in body, no engagement bait, no bullet points, max 4 hashtags",
      "AUTHENTICITY CHECK: Post reads as written by a human practitioner - no AI transitional phrases, no diplomatic hedging, no perfect symmetry"
    ]
  }
}`,
  },

  INFOGRAPHIC: {
    name: "Inforgraphic",
    description: "Generate infographic configuration JSON",
    template: `{
  "infographic_type": "hyper_realistic_hand_drawn_paper",
  "platform_target": "LinkedIn",
  "visual_theme": "minimalist_tech_thought_leadership", 

  "title_generation": {
    "source": "analyze_uploaded_resources",
    "method": "extract_primary_thesis",
    "style_rules": {
      "format": "bold_block_handwritten_caps",
      "max_words": 12,
      "avoid_clickbait": true,
      "tone": "strategic_authoritative"
    }
  }, 

  "paper_specifications": {
    "paper_color": "natural_matte_white",
    "paper_texture": "smooth_real_paper",
    "edge_characteristics": "slight_natural_paper_irregularity",
    "margin": "balanced_manual_spacing_not_perfectly_measured"
  }, 

  "color_palette": {
    "primary_text": "black_ink",
    "headings": "dark_blue_ink",
    "accent_elements": "orange_ink",
    "maximum_colors": 3,
    "no_gradients": true,
    "no_digital_glow": true
  }, 

  "typography_style": {
    "appearance": "authentic_handwriting_not_font",
    "title_style": "thicker_marker_pressure",
    "section_header_style": "medium_pressure_strokes",
    "body_style": "lighter_pen_pressure",
    "line_variation": "natural_human_inconsistency",
    "baseline": "slightly_imperfect_alignment",
    "max_words_per_line": 8
  }, 

  "layout_structure": {
    "type": "vertical_scroll_stack",
    "section_count_range": "3_to_5",
    "spacing": "generous_white_space",
    "alignment": "visually_balanced_not_grid_perfect",
    "flow": "clear_top_to_bottom_progression"
  }, 

  "content_rules": {
    "extract_sections_from_material": true,
    "section_format": {
      "container_style": "hand_drawn_soft_rectangular_boxes",
      "border_type": "double_line_for_emphasis",
      "icon_style": "minimal_line_sketch",
      "bullet_points_limit": 3
    },
    "text_density": "low",
    "clarity_priority": "high"
  }, 

  "visual_elements": {
    "arrows": "thick_hand_drawn_with_variable_pressure",
    "icons": "simple_line_doodles",
    "underline_style": "slightly_uneven_manual_line",
    "no_vector_precision": true,
    "no_perfect_symmetry": true
  }, 

  "realism_constraints": {
    "must_look_100_percent_human_drawn": true,
    "simulate_pen_pressure_variation": true,
    "simulate_minor_spacing_irregularities": true,
    "simulate_hand_stroke_overlap": true,
    "avoid_digital_smoothness": true,
    "avoid_typographic_uniformity": true,
    "avoid_perfect_geometry": true
  }, 

  "composition_style": {
    "white_space": "premium_clean",
    "visual_weight_distribution": "balanced",
    "center_of_gravity": "middle_column_bias",
    "natural_imperfection_level": "controlled_realism"
  }, 

  "design_constraints": {
    "maximum_colors": 3,
    "no_stock_graphics": true,
    "no_shadows_or_3d_effects": true,
    "no_typography_fonts": true,
    "must_resemble_real_marker_on_paper": true
  }
}`,
  },

  EXISTING_POST_MODIFY: {
    name: "Existing Post Modify",
    description: "Transform existing content into a high-impression LinkedIn post",
    template: `{
  "role": "Senior AI + Software Engineering Industry Strategist",
  "objective": "Transform existing content into a high-impression LinkedIn post aligned with AI + Software Engineering Evolution positioning",
  "input": {
    "source_content": "{{PASTE_EXISTING_POST_OR_EXTERNAL_CONTENT_HERE}}",
    "allow_structural_reframing": true,
    "avoid_plagiarism": true,
    "extract_core_idea_only": true
  },
  "target_audience": [
    "Software Engineers",
    "Tech Leads",
    "Engineering Managers",
    "AI-focused Developers"
  ],
  "strategic_requirements": {
    "reframing_strategy": {
      "identify_core_argument": true,
      "elevate_to_industry_shift_level": true,
      "connect_to_AI_and_engineering_evolution": true,
      "introduce_identity_shift_angle": true
    },
    "hook_engineering": {
      "first_line_scroll_stopping": true,
      "use_controlled_controversy_or_strong_reframe": true,
      "max_12_words": true
    },
    "structure": {
      "short_lines": true,
      "mobile_optimized": true,
      "use_arrow_bullets_when_needed": true,
      "increase_dwell_time": true
    },
    "psychological_triggers": [
      "curiosity_gap",
      "industry_evolution",
      "identity_reinforcement",
      "controlled_debate"
    ],
    "content_depth": {
      "avoid_generic_AI_hype": true,
      "inject_engineering_language": true,
      "include_system_design_or_workflow_implications": true,
      "show_second_order_effects": true
    },
    "authority_positioning": {
      "sound_like_industry_interpreter": true,
      "avoid_influencer_style": true,
      "analytical_and_structured": true
    },
    "engagement_engineering": {
      "encourage_discussion_without_direct_questions": true,
      "add_strategic_identity_based_takeaway": true,
      "end_with_strong_reframe_statement": true
    },
    "format_constraints": {
      "no_hashtags_inside_body": true,
      "no_excessive_emojis": true,
      "clean_whitespace": true,
      "length_between_180_and_300_words": true
    },
    "character_limit_strategy": {
      "max_characters": 2200,
      "min_characters": 1200,
      "optimize_for_mobile_readability": true
    },
    "hashtags": {
      "count_between": "3-5",
      "must_be_relevant_and_seo_strategic": true,
      "mix_broad_and_niche": true,
      "placed_at_end_only": true,
      "avoid_spammy_or_irrelevant_tags": true,
      "align_with_AI_and_software_engineering_positioning": true
    }
  },
  "originality_control": {
    "do_not_copy_phrases_directly": true,
    "rewrite_in_fresh_voice": true,
    "maintain_unique_positioning": true
  },
  "output_requirements": {
    "return_only_final_linkedin_post": true,
    "no_explanations": true,
    "ensure_hashtags_are_on_separate_lines_at_end": true
  }
}`,
  },
};

export const getPromptById = (id) => PROMPTS[id];
export const getPromptList = () =>
  Object.keys(PROMPTS).map((key) => ({
    id: key,
    name: PROMPTS[key].name,
    description: PROMPTS[key].description,
  }));
