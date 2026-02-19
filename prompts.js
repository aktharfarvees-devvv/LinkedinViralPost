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
