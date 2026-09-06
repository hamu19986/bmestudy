/* ============================================================
   ENGLISH — QUESTION BANK
   Source: content/05-English.md
   ============================================================ */

const ENG_QUESTIONS = [
/* -------- Unit I -------- */
{ id:'engq1', course:'english', unit:1, topic:'e1-agreement', type:'mcq', difficulty:'Easy', marks:1,
  question:'Choose the correct sentence:',
  options:['Each of the boys have a book','Each of the boys has a book','Each of the boys are having a book','Each of the boy have a book'], answer:'Each of the boys has a book',
  explanation:'The subject is "Each" (singular), not "boys" — always match the true grammatical subject.' },

{ id:'engq2', course:'english', unit:1, topic:'e1-agreement', type:'mcq', difficulty:'Medium', marks:1,
  question:'"Neither the teacher nor the students ___ late." Choose the correct verb.',
  options:['was','is','were','has been'], answer:'were',
  explanation:'With "or/nor", the verb agrees with the NEARER subject — "students" (plural).' },

{ id:'engq3', course:'english', unit:1, topic:'e1-agreement', type:'short', difficulty:'Medium', marks:2,
  question:'Correct the error: "Every student must submit their assignment on time" (formal usage).',
  answer:'"Every student must submit his or her assignment on time." "Every student" is singular, so formal usage requires a singular pronoun (modern usage increasingly accepts singular "their", but exams follow the traditional rule).',
  explanation:'Singular antecedent → singular pronoun in formal/exam writing.' },

{ id:'engq4', course:'english', unit:1, topic:'e1-prepositions', type:'mcq', difficulty:'Easy', marks:1,
  question:'She is very good ___ mathematics.',
  options:['in','at','on','with'], answer:'at',
  explanation:'Fixed pair: "good at" — prepositions follow idiom, not logic.' },

{ id:'engq5', course:'english', unit:1, topic:'e1-prepositions', type:'short', difficulty:'Medium', marks:2,
  question:'Give the correct prepositions: depend ___, married ___, different ___, capable ___.',
  answer:'depend ON, married TO, different FROM, capable OF.',
  explanation:'These fixed pairs are pure memorization — maintain a personal list of 20+.' },

{ id:'engq6', course:'english', unit:1, topic:'e1-verb-patterns', type:'mcq', difficulty:'Medium', marks:1,
  question:'"He gave her a gift." The pattern is:',
  options:['SVO','SVC','SVOO','SVOC'], answer:'SVOO',
  explanation:'Two objects — indirect ("her") and direct ("a gift").' },

{ id:'engq7', course:'english', unit:1, topic:'e1-verb-patterns', type:'short', difficulty:'Medium', marks:2,
  question:'Identify the patterns: (a) "Birds fly." (b) "They elected him president." (c) "She is happy." (d) "He put the book on the table."',
  answer:'(a) SV — subject + verb. (b) SVOC — object + object complement. (c) SVC — subject complement (linking verb). (d) SVOA — object + adverbial.',
  explanation:'Linking verbs signal SVC; action verbs with receivers signal SVO-family.' },

/* -------- Unit II -------- */
{ id:'engq8', course:'english', unit:2, topic:'e2-vocabulary', type:'mcq', difficulty:'Easy', marks:1,
  question:'One word for "a person who loves books":',
  options:['Librarian','Bibliophile','Polyglot','Astronomer'], answer:'Bibliophile',
  explanation:'A librarian manages books (profession); a bibliophile LOVES them.' },

{ id:'engq9', course:'english', unit:2, topic:'e2-vocabulary', type:'short', difficulty:'Easy', marks:2,
  question:'Give one-word substitutions: (a) one who cannot read or write; (b) a word that reads the same backward.',
  answer:'(a) Illiterate. (b) Palindrome.',
  explanation:'Read the FULL definition carefully — near-synonym traps abound.' },

{ id:'engq10', course:'english', unit:2, topic:'e2-idioms-time', type:'mcq', difficulty:'Easy', marks:1,
  question:'"Once in a blue moon" means:',
  options:['Every month','Very rarely','At night','During a full moon'], answer:'Very rarely',
  explanation:'Idioms demand figurative meaning, never word-by-word reading.' },

{ id:'engq11', course:'english', unit:2, topic:'e2-idioms-time', type:'short', difficulty:'Easy', marks:2,
  question:'Give meanings: (a) break the ice; (b) hit the nail on the head; (c) under the weather.',
  answer:'(a) Initiate conversation in an awkward situation. (b) Say/do something exactly right. (c) Feeling slightly unwell.',
  explanation:'Answer with the figurative sense and keep example sentences clearly non-literal.' },

{ id:'engq12', course:'english', unit:2, topic:'e2-tenses-voice', type:'short', difficulty:'Medium', marks:2,
  question:'Convert to passive voice: "The manager will sign the letter."',
  answer:'"The letter will be signed by the manager." The passive auxiliary ("will be" + past participle) exactly mirrors the original future tense.',
  explanation:'Tense-matching of the auxiliary is the mark-scoring point.' },

{ id:'engq13', course:'english', unit:2, topic:'e2-tenses-voice', type:'mcq', difficulty:'Medium', marks:1,
  question:'Passive of "They are building a bridge":',
  options:['A bridge is built','A bridge is being built','A bridge has been built','A bridge was being built'], answer:'A bridge is being built',
  explanation:'Present continuous stays continuous in the passive: is/are + being + past participle.' },

{ id:'engq14', course:'english', unit:2, topic:'e2-cohesion', type:'short', difficulty:'Medium', marks:2,
  question:'Name three cohesive devices and give one example word for each.',
  answer:'Reference (pronouns: he, she, it, they); Conjunctions/linking words (however, therefore, moreover); Lexical cohesion (repeating key words or synonyms). (Substitution/ellipsis also accepted.)',
  explanation:'Deliberately use 2–3 devices per paragraph — examiners award marks for demonstrated cohesion.' },

/* -------- Unit III -------- */
{ id:'engq15', course:'english', unit:3, topic:'e3-phonetics', type:'mcq', difficulty:'Medium', marks:1,
  question:'A phoneme is:',
  options:['A written letter','The smallest sound unit distinguishing meaning','A syllable','A full word'], answer:'The smallest sound unit distinguishing meaning',
  explanation:'Swapping /k/ → /b/ turns "cat" into "bat" — meaning changes at the sound level.' },

{ id:'engq16', course:'english', unit:3, topic:'e3-phonetics', type:'short', difficulty:'Medium', marks:2,
  question:'Classify the sound /p/ by place and manner of articulation.',
  answer:'/p/ is a voiceless bilabial plosive — bilabial place (both lips), plosive manner (complete airflow blockage then release), no vocal-cord vibration.',
  explanation:'Place + manner (+ voicing) is the standard classification format.' },

{ id:'engq17', course:'english', unit:3, topic:'e3-phonetics', type:'mcq', difficulty:'Medium', marks:1,
  question:'How many syllables does "beautiful" have?',
  options:['2','3','4','1'], answer:'3',
  explanation:'beau-ti-ful — count vowel SOUNDS, not written vowel letters.' },

{ id:'engq18', course:'english', unit:3, topic:'e3-transcription', type:'short', difficulty:'Medium', marks:2,
  question:'Why is IPA transcription necessary despite English spelling?',
  answer:'English spelling is inconsistent with pronunciation (e.g. "though", "enough", "colonel", "queue") — IPA represents actual sounds unambiguously, independent of spelling, which is essential for pronunciation work.',
  explanation:'Tricky-spelling transcriptions overlap directly with the language lab practical.' },

/* -------- Unit IV -------- */
{ id:'engq19', course:'english', unit:4, topic:'e4-literary-texts', type:'long', difficulty:'Medium', marks:5,
  question:'Summarize, in your own words, the central ideas of "The Secret of Work".',
  answer:'Vivekananda\'s Karma Yoga philosophy: treat work as worship — ordinary tasks become significant when done with full sincerity and focus. Attachment to results breeds anxiety and lowers quality; detachment brings both better outcomes and mental peace. Helping others, done rightly, is ultimately self-development for the helper, not mere charity.',
  explanation:'Paraphrased understanding scores better than memorized lines; keep the work-ethic framing.' },

{ id:'engq20', course:'english', unit:4, topic:'e4-literary-texts', type:'short', difficulty:'Medium', marks:2,
  question:'State the central argument of "Patriotism beyond Politics and Religion".',
  answer:'Genuine patriotism and national identity should transcend narrow religious and political divisions, grounded in India\'s shared, composite culture ("unity in diversity") built from long historical intermixing.',
  explanation:'Lead with "composite culture"/"unity in diversity" — the thesis examiners look for.' },

{ id:'engq21', course:'english', unit:4, topic:'e4-official-letters', type:'long', difficulty:'Medium', marks:5,
  question:'Write an official letter to the Principal requesting a bonafide certificate, showing the correct formal structure.',
  answer:'Sender\'s address (top) — Date — The Principal, [College name/address] — Subject: Request for issue of a bonafide certificate — Respected Sir/Madam, — Para 1: state purpose (I am a student of…; I require the certificate for…). Para 2: details (roll number, course, semester, why needed). Para 3: courteous request for early issue. — Yours sincerely, Name, Roll No.',
  explanation:'The structure (address → date → subject → salutation → 3-paragraph body → closing) earns as many marks as the content.' },

{ id:'engq22', course:'english', unit:4, topic:'e4-official-letters', type:'mcq', difficulty:'Easy', marks:1,
  question:'Which element is essential in a formal letter and often forgotten?',
  options:['A photograph','The Subject line','A postage stamp','An appendix'], answer:'The Subject line',
  explanation:'The subject line states the purpose at a glance — omitting it costs marks.' }
];
