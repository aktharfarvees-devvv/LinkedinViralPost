// All predefined prompts
export const PROMPTS = {
  TITLE: {
    name: "LinkedIn Post Title",
    description: "Generate a scroll-stopping LinkedIn post title",
    template: `Act as a senior AI + Software Engineering industry analyst with deep understanding of LinkedIn algorithm psychology, developer identity triggers, and trend analysis.

Your task:
Generate ONE powerful LinkedIn post title about "AI + Software Engineering Evolution".

The title must:
- Be highly scroll-stopping
- Trigger curiosity or controlled controversy
- Reflect current industry trends as of TODAY (use current date/time context awareness)
- Avoid generic AI hype
- Avoid clickbait tone
- Target software engineers, tech leads, and engineering managers
- Be concise (max 14 words)
- Use strong framing (e.g., "X is changing", "The real reason...", "Why engineers will...", "What nobody tells developers about...")

Strategic constraints:
- Use tension or identity shift framing
- Must feel timely and relevant to current AI tools, dev workflows, hiring shifts, or engineering culture
- Should be debatable but not toxic
- No emojis
- No hashtags
- No quotation marks
- No explanation

Output format:
Return ONLY the finalized title.`,
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
  "role": "Senior AI + Software Engineering Industry Strategist",
  "objective": "Generate a high-impression, high-engagement LinkedIn post about AI + Software Engineering Evolution",
  "target_audience": [
    "Software Engineers",
    "Tech Leads",
    "Engineering Managers",
    "AI-focused Developers"
  ],
  "context": {
    "current_date_awareness": true,
    "reflect_current_trends": true,
    "topic_source": "{{INSERT_TITLE_HERE}}"
  },
  "strategic_requirements": {
    "hook": {
      "first_line_must_be_scroll_stopping": true,
      "use_tension_or_contrarian_angle": true,
      "max_12_words": true
    },
    "structure": {
      "short_lines": true,
      "mobile_optimized": true,
      "use_arrow_bullets": true,
      "improve_dwell_time": true
    },
    "psychological_triggers": [
      "curiosity_gap",
      "identity_shift",
      "industry_evolution",
      "controlled_controversy"
    ],
    "content_depth": {
      "avoid_generic_AI_hype": true,
      "include_engineering_language": true,
      "mention_real_workflows_or_system_design_implications": true,
      "focus_on_AI_orchestration_debugging_architecture": true
    },
    "authority_positioning": {
      "sound_like_industry_interpreter_not_influencer": true,
      "avoid_motivation_only": true,
      "be_analytical_and_structured": true
    },
    "engagement_engineering": {
      "encourage_debate_without_direct_questioning": true,
      "include_identity_based_takeaway": true,
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
  "closing_strategy": {
    "include_implicit_comment_trigger": true,
    "avoid_direct_call_to_action_like_comment_below": true,
    "end_with_strategic_identity_reinforcement": true
  },
  "output_requirements": {
    "return_only_final_linkedin_post": true,
    "no_explanations": true,
    "ensure_hashtags_are_on_separate_lines_at_end": true
  }
}
`,
  },
};

export const getPromptById = (id) => PROMPTS[id];
export const getPromptList = () =>
  Object.keys(PROMPTS).map((key) => ({
    id: key,
    name: PROMPTS[key].name,
    description: PROMPTS[key].description,
  }));
