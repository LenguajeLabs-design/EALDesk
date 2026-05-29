export const WIDA_LEVELS = [
  {
    level: 1,
    name: "Entering",
    program: "Intensive English",
    periods: "8 periods/week",
    description: "Beginning to learn English. May understand very little and communicate primarily through gestures, pointing, or single words. Need maximum visual support and may rely heavily on their home language (L1).",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
  },
  {
    level: 2,
    name: "Emerging",
    program: "Intensive English",
    periods: "8 periods/week",
    description: "Beginning to produce original language but may rely on copying or adapting from models. Understand simple ideas and can respond with single words, phrases, or short sentences. Need lots of visual support and repetition.",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
  },
  {
    level: 3,
    name: "Developing",
    program: "English Lab",
    periods: "4 periods/week",
    description: "Beginning to organize their thinking and can explain simple ideas. May struggle with complex sentence structures and technical vocabulary, but ready to try more challenging tasks with support.",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
  },
  {
    level: 4,
    name: "Expanding",
    program: "Exiting English Lab",
    periods: "Exit at WIDA 4 (Gr 6-8) or 4.5 (Gr 9-10)",
    description: "Can organize multi-paragraph explanations and use more complex sentence structures. Ready to support claims with evidence and engage in more sophisticated discussions. Can handle technical vocabulary and approaching grade-level expectations.",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
  }
];

export const WRITING_STRATEGIES = {
  1: [
    "Accept drawings and labels (students can draw pictures and label with single words)",
    "Use picture dictionaries (provide visual references for key vocabulary)",
    "Allow copying (students can copy words and short phrases from the board or word banks)",
    "Use matching activities (match pictures to words or words to definitions)",
    "Accept home language (allow students to write in their native language (L1) alongside English)"
  ],
  2: [
    "Use fill-in-the-blank templates: \"The _____ is _____,\" \"I see a _____,\" \"The plant has _____\"",
    "Provide sentence stems for short phrases and responses",
    "Provide word banks: List key words students can choose from for their writing",
    "Accept short responses: One or two sentences is appropriate for this level",
    "Use picture labels: Have students label diagrams or drawings with words or short phrases",
    "Create sentence strips: Students arrange pre-made words/phrases in correct order",
    "Allow copying with purpose: Students can copy labels and then add one new word or detail"
  ],
  3: [
    "Provide sentence starters: \"The experiment showed that...,\" \"First, we..., then we...,\" \"This happened because...\"",
    "Use graphic organizers: Simple diagrams showing beginning-middle-end or cause-and-effect relationships",
    "Accept emerging organization: Look for introduction, body, and conclusion—don't expect perfection",
    "Highlight key vocabulary: Create word walls with science terms and their definitions",
    "Model writing: Show students examples of well-organized lab reports or explanations before they write",
    "Encourage 2-3 sentences: Students should write more than WIDA 2 but don't expect a well-organized paragraph yet"
  ],
  4: [
    "Provide more complex sentence frames: \"Based on the data, we can conclude that...,\" \"Although we expected..., the results showed...\"",
    "Require evidence: Ask students to support their explanations with specific observations or data",
    "Teach transitions: Help them use connectors like \"therefore,\" \"as a result,\" \"however,\" \"in contrast\"",
    "Introduce technical vocabulary: Use and expect students to use discipline-specific terms (variables, hypothesis, dependent/independent)",
    "Model multi-paragraph writing: Show how to organize explanations with clear reasoning and supporting details",
    "Encourage 3-4 sentences or short paragraphs: Students should write organized, connected text"
  ]
};

export const SPEAKING_STRATEGIES = {
  1: [
    "Accept non-verbal responses: Pointing, gestures, nodding are valid forms of communication",
    "Use lots of visuals: Show pictures, objects, and demonstrations constantly",
    "Model everything: Show students exactly what to do and say",
    "Use single words: Teach and accept one-word responses (\"water,\" \"hot,\" \"plant\")",
    "Repeat constantly: Say key words many times throughout the lesson"
  ],
  2: [
    "Ask yes/no and either/or questions: \"Is this hot or cold?\" \"Do plants need water?\"",
    "Accept one-word answers: \"Hot,\" \"Yes,\" \"Water\" are complete responses at this level",
    "Use lots of wait time: Give students 5-10 seconds to think and respond",
    "Repeat what they say: Student says \"plant grow,\" you say \"Yes, the plant is growing\"",
    "Use gestures and demonstrations: Point, show, act out meanings while speaking",
    "Encourage repetition: Have students repeat words and phrases after you",
    "Use choral responses: Have the whole class repeat key vocabulary together",
    "Use the \"agree and add on\" strategy"
  ],
  3: [
    "Ask open-ended questions: \"What did you observe?\" \"Why do you think that happened?\"",
    "Give wait time: Pause after asking questions to let students formulate responses",
    "Encourage peer talk: Have students discuss observations with a partner before sharing with the class",
    "Accept simple responses: \"The plant grew\" is a good start—build from there with follow-up questions",
    "Repeat and rephrase: When students speak, repeat their ideas in slightly more complex language",
    "Ask follow-up questions: \"Tell me more,\" \"What else did you notice?\""
  ],
  4: [
    "Ask \"why\" and \"how\" questions: Push for deeper thinking beyond simple observations",
    "Require evidence in discussions: \"What data supports that idea?\" \"Can you explain your reasoning?\"",
    "Facilitate peer debates: Have students defend their conclusions using evidence",
    "Encourage elaboration: Ask follow-up questions like \"Can you tell me more?\" or \"What do you mean by that?\"",
    "Model academic language: Use and highlight phrases like \"The independent variable is...,\" \"This shows a relationship between...\"",
    "Expect longer responses: Students should speak in complete sentences with supporting details"
  ]
};

export const VOCABULARY_SUPPORT = {
  1: [
    "Focus on social-instructional language. Introduce 1-2 academic words per lesson",
    "Use real objects and pictures for every word",
    "Allow use of home language (L1) and translation tools",
    "Create personal picture dictionaries for students / Create a unit vocabulary list (in English and L1): translation, simple definition, image"
  ],
  2: [
    "Use real objects, pictures, and demonstrations to show meanings",
    "Repeat words many times throughout the lesson",
    "Create a visual word wall with pictures and words",
    "Create a unit vocabulary list (in English and L1): translation of word, simple definition, image, sentence using the word",
    "Allow use of home language (L1) and translation tools"
  ],
  3: [
    "Pre-teach key science terms before lessons",
    "Support instruction of scientific/technical vocabulary with instruction of tier 2 (academic) vocabulary",
    "Encourage students to make vocabulary annotations when reading science texts (translation/simplified word/picture)",
    "Create a unit vocabulary list (in English and L1): translation, simple definition, image, sentence using the word",
    "Use visuals, diagrams, and demonstrations to show word meanings",
    "Connect new words to words students already know",
    "Allow students to use simpler words alongside technical terms (e.g., \"heat energy\" and \"hot\")",
    "Make connections between word families and root words explicit"
  ],
  4: [
    "Explicitly teach technical vocabulary in context",
    "Create a unit vocabulary list: simple definition, image, sentence using the word",
    "Have students use new words in sentences and discussions",
    "Create anchor charts showing how words relate to each other",
    "Expect students to use technical terms accurately in writing and speaking"
  ]
};

export const QUICK_TOOLS = [
  {
    id: "describing",
    name: "Describing Observations",
    description: "Students describe what they see, identify, or observe",
    frames: {
      1: ["\"I see ___.\" (point + label)", "Single words: \"hot\", \"blue\", \"big\""],
      2: ["\"I see a ___.\"", "\"The ___ is ___.\"", "\"It looks like ___.\""],
      3: ["\"I can see that ___ .\"", "\"The ___ appears to be ___ because ___.\""],
      4: ["\"Based on my observation, ___ .\"", "\"The data indicates that ___.\""]
    }
  },
  {
    id: "explaining",
    name: "Explaining (Cause & Effect)",
    description: "Students explain why something happens using evidence or reasoning",
    frames: {
      1: ["Draw cause → effect with labels"],
      2: ["\"___ happened because ___.\"", "\"First ___, then ___.\""],
      3: ["\"The experiment showed that ___ because ___.\"", "\"This happened because ___.\""],
      4: ["\"The results demonstrate that ___ as a result of ___ .\"", "\"The evidence suggests a relationship between ___ and ___ .\""]
    }
  },
  {
    id: "comparing",
    name: "Comparing & Contrasting",
    description: "Students compare similarities and differences between ideas",
    frames: {
      1: ["Match pictures", "Circle same", "Cross different"],
      2: ["\"Both ___ and ___ have ___.\"", "\"___ is ___, but ___ is ___.\""],
      3: ["\"___ and ___ are similar because ___. However, they are different because ___.\""],
      4: ["\"While ___ and ___ both ___ , they differ in that ___. In contrast, ___.\""]
    }
  },
  {
    id: "writing",
    name: "Writing Lab Reports",
    description: "Students write reports, conclusions, or extended responses",
    frames: {
      1: ["Draw and label diagram", "Word bank labeling"],
      2: ["Fill-in-the-blank: \"My question was ___. I observed ___. I think ___.\""],
      3: ["\"The purpose of this experiment was to ___ . My hypothesis was ___ . The results showed ___ . I conclude that ___ .\""],
      4: ["\"This investigation examined ___ . Based on the data, we can conclude that ___ , which supports/refutes the hypothesis that ___ . This occurred because ___ .\""]
    }
  }
];

export const TRANSLATION_GUIDELINES = {
  appropriate: [
    {
      title: "Technical Vocabulary Introduction",
      desc: "New, complex content-specific terms (e.g., \"mitochondria,\" \"imperialism,\" \"polynomial\") — ONLY when students already have background knowledge in the topic. Provide translation alongside English term, then use English term consistently.",
      example: "\"Photosynthesis (光合作用) is the process plants use to make food\""
    },
    {
      title: "Complex Directions or Instructions",
      desc: "Multi-step tasks, assessment directions, safety procedures — translate key action words and sequence, not entire text"
    },
    {
      title: "Checking Comprehension of Key Concepts",
      desc: "Student explains concept in home language to demonstrate understanding, then practices explaining in English.",
      example: "\"Explain the water cycle to your partner in Chinese, then try in English\""
    },
    {
      title: "Pre-Reading Complex Texts",
      desc: "Brief L1 summary or key vocabulary preview, then read in English"
    }
  ],
  notAppropriate: [
    {
      title: "Routine Classroom Language",
      desc: "Daily instructions, common phrases, frequently used terms — WIDA 4 students should understand classroom discourse in English. Use visual supports, gestures, modeling instead."
    },
    {
      title: "Entire Texts or Assignments",
      desc: "Prevents language development. Use scaffolded texts, graphic organizers, sentence frames instead."
    },
    {
      title: "Assessments (unless specified in ILP)",
      desc: "Masks true English proficiency. Exception: accommodations specified in ILP."
    },
    {
      title: "As a Substitute for Teaching",
      desc: "Students need explicit language instruction, not just content transfer. Use UDL and differentiated approaches instead."
    }
  ],
  digitalTranslator: {
    approved: [
      "Looking up unknown words during independent reading",
      "Clarifying a confusing sentence after attempting other strategies",
      "Checking understanding of technical terms",
      "Translating notes from English to L1 for home study"
    ],
    notApproved: [
      "Translating entire assignments or readings",
      "Using during assessments (unless approved accommodation)",
      "Avoiding engagement with English text",
      "Submitting translated work as original writing"
    ],
    bestPractices: [
      { title: "Try First Rule", desc: "Attempt to understand using context clues, visuals, or asking peers before translating" },
      { title: "Record & Review", desc: "Keep a vocabulary log of translated words to build English proficiency" },
      { title: "Verify Accuracy", desc: "Check translations with teacher, as automated translations can be inaccurate" }
    ]
  },
  scaffoldingHierarchy: [
    "Visual supports (images, diagrams, videos, realia)",
    "Gestures and modeling (demonstrate what you mean)",
    "Simplified English (shorter sentences, familiar vocabulary)",
    "Sentence frames (provide language structures)",
    "Peer support (language partners, think-pair-share)",
    "Graphic organizers (structure information visually)",
    "Strategic translation (last resort, targeted use only)"
  ],
  monitoringChecklist: [
    "Student attempts other strategies before using translation",
    "Translation use is decreasing over time",
    "Student can explain concepts in English after L1 clarification",
    "Translation is targeted (specific words/phrases, not whole texts)",
    "Student is building English vocabulary, not just translating",
    "Student participates in English classroom discourse"
  ],
  useByLevel: {
    1: "Allow translator use for understanding directions and questions (class work and assessments). Permit students to draft responses in their L1, then translate. Allow translators for end-of-lesson checks.",
    2: "Allow translator use for understanding directions and questions. Permit drafting in L1, then translate. For graded work, students should submit work in both their L1 and the English translation (so teacher can understand what the student can produce in English). Allow translators for end-of-lesson checks.",
    3: "Translators used for key concepts, not every word. Allow for complex academic vocabulary. Encourage students to attempt English first, then use translator to check/refine. Permit for high-stakes assessments of content knowledge. Allow both English and translated versions of assessments simultaneously. Provide glossaries in English and L1.",
    4: "Rely on translations less than 10% of class time. Use English-to-English dictionaries for most vocabulary needs. Ask clarifying questions in English. Engage with grade-level content using scaffolds, not translations. Progress toward WIDA Level 5 (Bridging) proficiency."
  }
};

export const ASSESSMENTS = {
  1: {
    general: [
      "Provide assessments in home language (L1) when possible",
      "Use picture-based assessments with minimal text",
      "Allow extra time (double or triple the standard time)",
      "Read all questions aloud and explain using visuals",
      "Allow use of translation tools or bilingual dictionaries",
      "Provide a quiet testing space with minimal distractions",
      "(Note: WIDA 1 students are eligible to audit Science — a narrative grade/comment can be provided instead of a traditional grade.)"
    ],
    response: [
      "Accept drawings, diagrams, or labeled pictures as responses",
      "Use matching activities (match pictures to words)",
      "Use multiple choice with pictures",
      "Allow pointing to correct answers",
      "Accept one-word responses or short phrases",
      "Provide word banks for all questions"
    ],
    content: [
      "Reduce number of questions (assess 3-5 key concepts only)",
      "Focus on essential vocabulary and concepts",
      "Use simplified language in questions",
      "Provide visual supports for every question",
      "Allow demonstration of understanding through actions or models"
    ]
  },
  2: {
    general: [
      "Modify the scope of the task: focus on key objectives for the assessment",
      "Provide bilingual glossaries or word banks",
      "Allow extended time",
      "Read questions aloud and clarify vocabulary",
      "Use visuals to support text",
      "Provide sentence frames for written responses",
      "Allow use of notes or reference materials",
      "(Note: WIDA 2 students are eligible to audit Science — a narrative grade/comment can be provided instead of a traditional grade.)"
    ],
    response: [
      "Accept short phrases or 1-2 simple sentences",
      "Use fill-in-the-blank with word banks",
      "Provide sentence starters for open-ended questions",
      "Allow labeling of diagrams instead of full explanations",
      "Use multiple choice or matching when appropriate",
      "Accept drawings with labels as evidence of understanding"
    ],
    content: [
      "Reduce number of questions",
      "Simplify language in questions (use high-frequency words)",
      "Break complex questions into smaller parts",
      "Provide examples of expected responses",
      "Focus on comprehension rather than production"
    ]
  },
  3: {
    general: [
      "Provide glossaries with definitions and examples",
      "Allow extended time (1.5x standard time)",
      "Clarify vocabulary and rephrase questions as needed",
      "Use graphic organizers for written responses",
      "Provide sentence starters and transition words",
      "Allow use of notes or reference materials"
    ],
    response: [
      "Accept 2-3 sentence responses for short answer questions",
      "Provide sentence frames for more complex responses",
      "Allow use of graphic organizers to organize thinking",
      "Accept simple explanations with some errors",
      "Use a mix of multiple choice and short answer",
      "Allow students to explain thinking orally if writing is challenging"
    ],
    content: [
      "Reduce number of questions slightly (assess 7-10 key concepts)",
      "Simplify sentence structures in questions",
      "Provide examples of well-organized responses",
      "Break multi-step problems into clear steps",
      "Focus on key concepts rather than nuanced details"
    ]
  },
  4: {
    general: [
      "Provide glossaries for technical terms",
      "Allow slightly extended time (as necessary)",
      "Clarify complex vocabulary as needed",
      "Provide sentence frames for complex explanations",
      "Allow use of notes or reference materials for vocabulary"
    ],
    response: [
      "Accept 3-4 sentence responses or short paragraphs",
      "Provide optional sentence frames for complex responses",
      "Allow use of graphic organizers to plan responses",
      "Accept responses with minor grammatical errors if meaning is clear",
      "Support open-ended questions with some scaffolding",
      "Allow students to demonstrate understanding through multiple formats (written, oral, visual)"
    ],
    content: [
      "Assess most grade-level concepts with minor modifications",
      "Simplify complex sentence structures in questions",
      "Provide examples of expected response format",
      "Focus on content understanding rather than language perfection",
      "Allow students to use simpler language to express complex ideas"
    ]
  }
};