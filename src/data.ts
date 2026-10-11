export const readings = [
 {label:'ea [i:]',word:'please, teacher',text:'please, What’s your name, please?; teacher, a teacher — teachers, my teacher, your teacher, I like my teacher. Is your mother a teacher? No, she is not a teacher.'},
 {label:'or [ɔ:]',word:'worker',text:'worker, a worker — workers, They are workers. My father is a worker. Is your father a worker? No, he isn’t a worker. He is a pilot.'},
 {label:'[ɔ]',word:'want',text:'want, want to be, want to be a cosmonaut, want to be a worker, They want to be workers.'},
 {label:'ow [au]',word:'how',text:'how, How is your mother? She is fine, thanks. How is your grandfather? He is fine, thanks. How are you? I’m fine, thanks.'}
];
export const pronunciation = [['please','/pliːz/'],['teacher','/ˈtiːtʃə/'],['worker','/ˈwɜːkə/'],['want','/wɒnt/'],['how','/haʊ/']];
export const jobs = ['teacher','worker','pilot','driver','doctor','cosmonaut'];
export const translations = ['учитель','рабочий','пилот','водитель','врач','космонавт'];
export const storyParts = ['My name is Vasya. I’m from Russia. I’ve got a friend. His name is Alf. He is not from Russia. He is from Africa.','His father is a driver. His mother is a worker.','Alf has got a sister and a brother. They want to be drivers.'];
export const story = storyParts.join(' ');
export const spelling = ['driver','doctor','thanks','but','her'];
export const questionWords = ['Who','What','How','What','Where'];
export const questionEnds = ['he from?','your mother?','he?','your name?','she?'];
export const questions = [ ['Спроси, откуда он','Where is he from?'],['Спроси, кем работает мама','What is your mother?'],['Спроси, кто он','Who is he?'],['Спроси имя','What is your name?'],['Спроси, как она','How is she?'] ];
export const rounds = [
 {answer:'teacher',options:['teacher','worker','pilot']}, {answer:'worker',options:['worker','doctor','driver']},
 {answer:'pilot',options:['pilot','teacher','cosmonaut']}, {answer:'driver',options:['driver','worker','doctor']},
 {answer:'doctor',options:['doctor','pilot','teacher']}, {answer:'cosmonaut',options:['cosmonaut','driver','worker']},
 {answer:'pilot',options:['pilot','driver','doctor'],prompt:'He is a pilot.'},
 {answer:'worker',options:['worker','pilot','doctor'],prompt:'They want to be workers.'}
];
export const comprehension = [
 ['His name is ...','Alf','Vasya','Max'],['Alf is from ...','Africa','Russia'],['His father is a ...','driver','doctor','pilot'],['His mother is a ...','worker','teacher','doctor'],['His sister and brother want to be ...','drivers','workers','pilots']
];
export const missions = [
 {name:'Welcome',icon:'⌁',start:0,end:5,phase:'Lead-in',task:'Познакомься с Bit, проверь звук и активируй два переключателя. Ответь на приветствия.',say:'Hello! How are you? I’m fine, thanks. What’s your name, please? Welcome to our secret base! Read, say, then shoot.',result:'Ученик отвечает и понимает управление.'},
 {name:'Sound Lab',icon:'♫',start:5,end:12,phase:'Presentation',task:'Карточка → слушание → повторение → самостоятельное чтение. Прочитайте короткие цепочки упр. 8.',say:'Listen: please, teacher. Look at ea. Say it with me. Now read on your own. Listen: worker. Say worker. How are you?',result:'Слышит образец, повторяет, читает.'},
 {name:'Crew Briefing',icon:'♧',start:12,end:17,phase:'Presentation',task:'Шесть профессий. Прочитайте остальные предложения упр. 8 и разыграйте how-диалог.',say:'He is a pilot. Is your father a worker? No, he isn’t. He is a pilot. I want to be a cosmonaut. What about you? How is your mother?',result:'Весь упр. 8 прочитан; различает профессию и мечту.'},
 {name:'Target Range',icon:'◎',start:17,end:23,phase:'Practice',task:'Шесть раундов слушания и два чтения. Устный ответ перед выстрелом.',say:'Listen and find the driver. Read the word. Say: He is a driver. Now activate the target. Read the sentence again.',result:'Узнаёт профессии и произносит полные фразы.'},
 {name:'Alf’s File',icon:'▤',start:23,end:30,phase:'Practice',task:'Упр. 9: самостоятельное чтение трёх фрагментов, затем общий смысл и детали. Найдите подтверждающее предложение.',say:'Read about Vasya’s friend. What is his name? Where is Alf from? Is his father a doctor? What is his mother? What do his sister and brother want to be?',result:'Находит Alf и drivers, подтверждает ещё три детали.'},
 {name:'Robot Recharge',icon:'↟',start:30,end:32,phase:'Пауза',task:'Встаньте, потянитесь, расслабьте руки и посмотрите вдаль.',say:'Stand up. Stretch. Shake your hands. Look away from the screen. Sit down.',result:'Отдых для глаз и тела.'},
 {name:'Question Terminal',icon:'?',start:32,end:39,phase:'Practice',task:'Упр. 10: собрать, прочитать и записать пять вопросов. Первый вместе, затем меньше поддержки.',say:'Choose the first word. Where does is go? Make a question. Read it. Now write your five questions.',result:'Пять написанных вопросов.'},
 {name:'Word Repair',icon:'✎',start:39,end:43,phase:'Practice',task:'Упр. 11: Look → Cover → Write → Check для всех пяти слов.',say:'Read: driver, doctor, thanks, but, her. Look carefully. Now hide the words. Write them. Check your spelling.',result:'Каждое слово введено.'},
 {name:'Crossword Lock',icon:'▦',start:43,end:49,phase:'Practice',task:'Упр. 12: заполнить исходную сетку. Затем прочитать четыре слова и сказать одну фразу.',say:'Read clue two. How many letters? Spell the word. Check the crossing letter. Read all four words.',result:'Сетка решена, пересечения проверены.'},
 {name:'Agent Interview',icon:'☏',start:49,end:57,phase:'Production',task:'Вымышленная карточка: минимум три самостоятельных вопроса, ответы и 4–5 связанных предложений. Во втором раунде скрыть опоры.',say:'Choose your agent. Ask me questions. Now tell me about your agent. What do you want to be? Tell me without the word cards.',result:'Сам задаёт вопросы, отвечает, рассказывает.'},
 {name:'Base Online',icon:'⚡',start:57,end:60,phase:'Итог',task:'Прочитать слово, произнести предложение и задать вопрос. Самооценка.',say:'Read one word. Tell me one sentence. Ask me one question. What can you do now? Great work! Our base is online.',result:'Перенос навыков и завершение.'}
];
export const crosswordWords = [
 {id:1,direction:'down',row:1,col:6,answer:'TEACHER',clue:'Профессия.'},
 {id:2,direction:'across',row:2,col:3,answer:'FRIEND',clue:'Друг, подруга.'},
 {id:3,direction:'across',row:5,col:5,answer:'THANKS',clue:'Слово, выражающее благодарность.'},
 {id:4,direction:'across',row:7,col:1,answer:'DOCTOR',clue:'Профессия.'}
];
export function path(word:typeof crosswordWords[number]) {return [...word.answer].map((_,i)=>`${word.row+(word.direction==='down'?i:0)},${word.col+(word.direction==='across'?i:0)}`);}
export function grid(){const cells:Record<string,string>={}; crosswordWords.forEach(w=>path(w).forEach((key,i)=>{if(cells[key]&&cells[key]!==w.answer[i])throw Error('Invalid crossing');cells[key]=w.answer[i];}));return cells;}
export function normalize(s:string){return s.toLowerCase().replace(/[’‘]/g,"'").trim().replace(/\s+/g,' ');}
export function checkQuestion(value:string,expected:string){if(normalize(value)===normalize(expected))return 'correct';if(normalize(value)===normalize(expected).replace(/\?$/,''))return 'punctuation';return 'retry';}
export function award(done:string[],id:string){return done.includes(id)?done:[...done,id];}
// Map an exact English text to a relative MP3 file when recordings are supplied.
export const audioFiles:Record<string,string> = {};
