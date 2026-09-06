/* ============================================================
   ENGLISH — TOPICS  (25HSMC-ENG-101H)
   Source: content/05-English.md
   ============================================================ */

const ENG_UNIT1_TOPICS = [
{
  id: 'e1-agreement', course: 'english', unit: 1, category: 'Grammar',
  title: 'Subject-Verb and Noun-Pronoun Agreement',
  summary: 'Match verbs to true subjects and pronouns to their antecedents.',
  overview: `The verb in a sentence must agree in number (singular/plural) and person with its subject. A pronoun must agree in number and gender with the noun (antecedent) it replaces.`,
  working: `Subject-verb rules: singular subject → singular verb ("She writes"); plural → plural ("They write"). Collective nouns (team, family, committee) usually take a singular verb acting as one unit ("The team is winning"). Subjects joined by "and" take plural ("Ram and Shyam are here"); with "or/nor" the verb agrees with the NEARER subject ("Neither the teacher nor the students were late").
"Each", "every", "either", "neither", "everyone", "nobody" are always SINGULAR — "Each of the boys HAS a book" (subject is "Each", not "boys").
Noun-pronoun: "Every student must submit his or her assignment" (traditional formal rule — singular antecedent → singular pronoun); "Each girl must bring her own book".`,
  formulas: null,
  examTip: `"Each/every/either/neither/everyone/nobody are singular" is a very frequently tested error-correction pattern — match verbs to the TRUE subject, not the nearest noun ("The list of items WAS long").`,
  commonMistake: `Matching the verb to the noun physically closest to it (often inside an intervening phrase), or using a plural pronoun ("they/their") for a singular antecedent like "everyone" in formal writing.`,
  quickCheck: [{ q: 'Is "Neither of the answers is correct" grammatically correct?', a: 'Yes — "Neither" is singular, so it correctly takes "is".' }]
},
{
  id: 'e1-prepositions', course: 'english', unit: 1, category: 'Grammar',
  title: 'Governance of Nouns through Prepositions',
  summary: 'Fixed word+preposition pairs — memorized, not derived.',
  overview: `Certain verbs, adjectives and nouns are conventionally followed by SPECIFIC prepositions (not interchangeable) — a matter of fixed usage/idiom, not logic.`,
  working: `Common pairs: depend ON, arrive AT/IN, married TO, different FROM, afraid OF, good AT, interested IN, angry WITH (a person)/AT (a situation), capable OF, responsible FOR.
Warning case: "discuss" takes NO preposition — "discuss the topic", never "discuss about the topic".`,
  formulas: null,
  examTip: `Fill-in-the-blank preposition questions are a guaranteed short-answer type — maintain a personal list of 20+ common pairs and revise near the exam (pure memorization).`,
  commonMistake: `Translating prepositions directly from the first language — usage doesn't map 1:1 across languages, causing errors like "discuss about".`,
  quickCheck: [{ q: 'Fill in: "She is good ___ mathematics."', a: '"at" ("good at").' }]
},
{
  id: 'e1-verb-patterns', course: 'english', unit: 1, category: 'Grammar',
  title: 'Basic Verb Patterns: V, SV, SVO, SVOO, SVC, SVOC, SVOA',
  summary: 'Seven sentence skeletons built from S, V, O, C, A.',
  overview: `English sentences follow recognizable structural patterns based on which sentence elements are present: Subject (S), Verb (V), Object (O), Complement (C), Adverbial (A).`,
  working: `The seven patterns: V (imperative, subject implied — "Run!"); SV ("Birds fly"); SVO ("She reads books"); SVOO (two objects — "He gave her a gift"); SVC (subject complement — "She is happy"); SVOC (object complement — "They elected him president"); SVOA (object + adverbial — "He put the book ON THE TABLE").
Worked example: "The teacher (S) gave (V) the students (indirect O) homework (direct O)" → SVOO. "He made her happy" → SVOC (object + complement describing the object).`,
  formulas: null,
  examTip: `Practice identifying the pattern of 8–10 varied sentences — "identify the sentence pattern" is a standard, quick-scoring Unit I question.`,
  commonMistake: `Confusing SVC (a complement RENAMES/describes the subject — linking verbs: is, seems, becomes) with SVO (an object RECEIVES the action — action verbs).`,
  quickCheck: [{ q: 'What pattern is "He made her happy"?', a: 'SVOC — object "her" plus complement "happy" describing the object.' }]
}
];

const ENG_UNIT2_TOPICS = [
{
  id: 'e2-vocabulary', course: 'english', unit: 2, category: 'Vocabulary',
  title: 'Vocabulary Building and One-Word Substitutions',
  summary: 'Synonyms, antonyms and single words for long phrases.',
  overview: `Building precise, exam-relevant vocabulary through synonyms, antonyms and one-word substitutions (a single word replacing a long descriptive phrase) sharpens both reading comprehension and writing concision.`,
  working: `Samples: "A person who loves books" = Bibliophile. "One who studies the stars" = Astronomer. "A place where clothes are kept" = Wardrobe. "One who cannot read or write" = Illiterate. "A word that reads the same backward" = Palindrome. "One who speaks many languages" = Polyglot.`,
  formulas: null,
  examTip: `One-word substitution questions reward broad exposure — keep a running personal list from every practice paper rather than memorizing a pre-made exhaustive list.`,
  commonMistake: `Confusing near-synonym substitutions (writing "bibliophile" when the definition describes a "librarian") — read the FULL definition before answering.`,
  quickCheck: [{ q: 'One word for "a person who can speak many languages"?', a: 'Polyglot.' }]
},
{
  id: 'e2-idioms-time', course: 'english', unit: 2, category: 'Vocabulary',
  title: 'Common Idioms and Referring to Time',
  summary: 'Figurative fixed expressions — meaning over literal reading.',
  overview: `Idioms are fixed expressions whose overall meaning cannot be derived literally from the individual words — used to add natural fluency to writing and speech.`,
  working: `Examples: "Break the ice" = initiate conversation in an awkward situation. "Once in a blue moon" = very rarely. "Hit the nail on the head" = say/do something exactly right. "Under the weather" = slightly unwell. "A piece of cake" = very easy. "Spill the beans" = reveal a secret.
Time expressions and tense choices (refer to time in language) pair with these for narrative fluency.`,
  formulas: null,
  examTip: `Idiom questions ask for the MEANING, not literal translation — answer with the figurative sense; keep example sentences simple and clearly non-literal.`,
  commonMistake: `Explaining an idiom word-by-word literally instead of giving its figurative meaning.`,
  quickCheck: [{ q: 'What does "spill the beans" mean?', a: 'To reveal a secret.' }]
},
{
  id: 'e2-tenses-voice', course: 'english', unit: 2, category: 'Grammar',
  title: 'Tenses, Active Voice and Passive Voice',
  summary: '12 tense forms; passive = be + past participle, tense-matched.',
  overview: `English has three basic tenses (Present, Past, Future), each with four aspects (Simple, Continuous, Perfect, Perfect Continuous) — 12 forms total, precisely locating actions in time. Voice converts between doer-focused (active) and receiver-focused (passive) framing.`,
  working: `Active: subject performs the action ("The chef cooked the meal"). Passive: formed with "be" + past participle, original subject in an optional "by" phrase ("The meal was cooked by the chef") — common in formal/scientific writing where the doer is unknown or unimportant.
Conversion must mirror the original tense: "The manager will sign the letter" → "The letter will be signed by the manager"; "was cooking" → "was being cooked"; "has eaten" → "has been eaten".
Worked example: "They are building a bridge" → "A bridge is being built (by them)".`,
  formulas: null,
  examTip: `Active↔passive conversion is a guaranteed question — the auxiliary in the passive must match the ORIGINAL tense exactly (perfect/continuous forms are where marks are lost).`,
  commonMistake: `Rendering "has eaten" as passive "is eaten" instead of the correct "has been eaten".`,
  quickCheck: [{ q: 'Convert to passive: "They are building a bridge."', a: '"A bridge is being built (by them)." — continuous aspect preserved.' }]
},
{
  id: 'e2-cohesion', course: 'english', unit: 2, category: 'Writing',
  title: 'Creating Grammatical Cohesion',
  summary: 'Reference, substitution, conjunctions, lexical ties — flowing paragraphs.',
  overview: `Cohesion makes a paragraph flow as connected ideas rather than a disjointed list of sentences, achieved through reference, substitution/ellipsis, conjunctions and lexical cohesion.`,
  working: `Devices: Reference (pronouns referring back to earlier nouns); Substitution/Ellipsis (avoiding repetition); Conjunctions (and, but, however, therefore, moreover — showing logical relationships: contrast, cause-effect, addition); Lexical cohesion (repeating key words or using related/synonym terms).`,
  formulas: null,
  examTip: `When writing a paragraph or letter, deliberately use 2–3 different cohesive devices (a pronoun reference PLUS "however"/"consequently") — examiners specifically award marks for demonstrated cohesion.`,
  commonMistake: `Overusing "and" as the only connector — vary connectors by the actual logical relationship (contrast: "however"; cause-effect: "therefore"; addition: "moreover").`,
  quickCheck: [{ q: 'Name one cohesive device besides pronoun reference.', a: 'Conjunctions/linking words ("however", "therefore") or lexical repetition of key terms.' }]
}
];

const ENG_UNIT3_TOPICS = [
{
  id: 'e3-phonetics', course: 'english', unit: 3, category: 'Phonetics',
  title: 'Basic Phonetics: Vowels, Consonants, Phonemes, Syllables',
  summary: 'Sounds, not letters — articulation classifies every phoneme.',
  overview: `Phonetics studies the actual sounds of speech, independent of spelling. A phoneme is the smallest unit of sound that can change a word's meaning (switching /k/ to /b/ turns "cat" into "bat").`,
  working: `Vowels: produced with an open, unobstructed vocal tract; classified by tongue position (front/central/back) and height (close/mid/open) — e.g. /iː/ as in "see", /ɑː/ as in "car".
Consonants: produced with some airflow obstruction; classified by PLACE of articulation (bilabial /p,b/, dental /θ,ð/, velar /k,g/) and MANNER (plosive, fricative, nasal, …).
Syllable: a pronunciation unit built around a vowel sound ("water" = 2 syllables; "beautiful" = 3).`,
  formulas: null,
  examTip: `Be ready to classify 4–5 common sounds by manner/place ("/p/ is a voiceless bilabial plosive") — a standard short-answer format.`,
  commonMistake: `Confusing letters (written symbols) with phonemes (sound units) — "c" sounds different in "cat" vs "city". Count syllables by vowel SOUNDS, not vowel letters ("code" = one syllable).`,
  quickCheck: [{ q: 'What is a phoneme?', a: 'The smallest sound unit that can distinguish one word\'s meaning from another.' }]
},
{
  id: 'e3-transcription', course: 'english', unit: 3, category: 'Phonetics',
  title: 'Transcription and Pronunciation (IPA)',
  summary: 'IPA spells sounds, not letters — through tricky spellings.',
  overview: `Transcription uses the International Phonetic Alphabet (IPA) to represent a word's actual pronunciation unambiguously, independent of its spelling.`,
  working: `Example: "though" is transcribed /ðəʊ/. Spelling and sound diverge constantly in English ("enough", "colonel", "queue"), which is why IPA matters for pronunciation work and the lab's phoneme-recognition component.`,
  formulas: null,
  examTip: `Practice transcribing 10–15 common tricky-spelling words (though, enough, colonel, queue) into IPA — this directly overlaps with the language lab's phoneme-recognition practical.`,
  commonMistake: `Counting syllables by written vowel LETTERS rather than vowel SOUNDS ("code": two vowel letters, one sound).`,
  quickCheck: [{ q: 'How many syllables does "beautiful" have?', a: 'Three (beau-ti-ful).' }]
}
];

const ENG_UNIT4_TOPICS = [
{
  id: 'e4-literary-texts', course: 'english', unit: 4, category: 'Reading',
  title: '"The Secret of Work" and "Patriotism beyond Politics and Religion"',
  summary: 'Vivekananda\'s work ethic; Azad\'s composite-culture patriotism.',
  overview: `Two prescribed texts anchor reading practice: Swami Vivekananda's lecture on Karma Yoga ("The Secret of Work") and Maulana Abul Kalam Azad's essay arguing for patriotism transcending religious and political divisions.`,
  working: `"The Secret of Work" (Vivekananda): "work as worship" — ordinary tasks become significant when done with full sincerity and focus; working with attachment to results brings anxiety, working with detachment brings better outcomes and mental peace; helping others is ultimately self-development for the helper.
"Patriotism beyond Politics and Religion" (Azad): India as a shared homeland built from long cultural intermixing; rejection of narrow, divisive nationalism; an inclusive, composite national identity — faith and unified secular nationhood as complementary, not conflicting.`,
  formulas: null,
  examTip: `For Azad, lead with "composite culture"/"unity in diversity" — the core thesis examiners look for. For Vivekananda, answer in your own words about selfless action and detachment; paraphrased understanding scores better than rote recall.`,
  commonMistake: `Treating Vivekananda's lecture as purely religious rather than a practical WORK-ETHIC philosophy, or reducing Azad's essay to politics only — complete answers transcend BOTH divisions.`,
  quickCheck: [{ q: 'According to Vivekananda, what should one focus on?', a: 'The work itself, performed with full sincerity, while remaining detached from anxiety over results.' }]
},
{
  id: 'e4-official-letters', course: 'english', unit: 4, category: 'Writing',
  title: 'Official Letters on Student Academic and Social Issues',
  summary: 'Fixed formal skeleton: address → subject → salutation → 3-paragraph body.',
  overview: `Formal/official letter writing (to a Principal, HOD or authority) follows a fixed structure, applied to common student scenarios from academic and social life.`,
  working: `Structure: sender's address (top) → date → receiver's designation/address → subject line → salutation ("Respected Sir/Madam") → body (3 paragraphs: introduction/purpose, details, request/conclusion) → closing ("Yours sincerely/faithfully") → signature with name and roll number.
Academic topics: bonafide certificate request, re-examination request, library/lab facility complaint, fee concession/scholarship. Social topics: event permission, hostel facility improvement, mess food/hygiene complaints.`,
  formulas: null,
  examTip: `Memorize the exact structural skeleton and practice it for 3–4 scenarios — the STRUCTURE earns as many marks as the content in formal letter questions.`,
  commonMistake: `Omitting the Subject line, or writing an unfocused body that doesn't state the specific request in the first paragraph.`,
  quickCheck: [{ q: 'What must the first paragraph of a formal request/complaint clearly state?', a: 'The purpose of the letter — precisely what is being requested or complained about.' }]
}
];
