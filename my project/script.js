// Script Direction Mapping Table
const DIR = { en:'ltr', ar:'rtl', th:'ltr', ms:'ltr' };

// Human-Readable Name Lookups
const LANG_NAME = { en:'English', ar:'Arabic', th:'Thai', ms:'Malay' };

/**
 * STATIC VOCABULARY DATABASE
 */
const CATEGORIES = [
  { name:"Greetings", words:[
    {en:"Hello", ar:"مرحبا", th:"สวัสดี", ms:"Helo"},
    {en:"Thank you", ar:"شكرا", th:"ขอบคุณ", ms:"Terima kasih"},
    {en:"Yes", ar:"نعم", th:"ใช่", ms:"Ya"},
    {en:"No", ar:"لا", th:"ไม่", ms:"Tidak"},
    {en:"Goodbye", ar:"مع السلامة", th:"ลาก่อน", ms:"Selamat tinggal"},
    {en:"Please", ar:"من فضلك", th:"โปรด", ms:"Sila"},
    {en:"Sorry", ar:"آسف", th:"ขอโทษ", ms:"Maaf"},
    {en:"Welcome", ar:"أهلا بك", th:"ยินดีต้อนรับ", ms:"Selamat datang"},
    {en:"Good morning", ar:"صباح الخير", th:"อรุณสวัสดิ์", ms:"Selamat pagi"},
    {en:"Good night", ar:"تصبح على خير", th:"ราตรีสวัสดิ์", ms:"Selamat malam"}
  ]},
  { name:"Numbers", words:[
    {en:"One", ar:"واحد", th:"หนึ่ง", ms:"Satu"},
    {en:"Two", ar:"اثنان", th:"สอง", ms:"Dua"},
    {en:"Three", ar:"ثلاثة", th:"สาม", ms:"Tiga"},
    {en:"Four", ar:"أربعة", th:"สี่", ms:"Empat"},
    {en:"Five", ar:"خمسة", th:"ห้า", ms:"Lima"},
    {en:"Six", ar:"ستة", th:"หก", ms:"Enam"},
    {en:"Seven", ar:"سبعة", th:"เจ็ด", ms:"Tujuh"},
    {en:"Eight", ar:"ثمانية", th:"แปด", ms:"Lapan"},
    {en:"Nine", ar:"تسعة", th:"เก้า", ms:"Sembilan"},
    {en:"Ten", ar:"عشرة", th:"สิบ", ms:"Sepuluh"},
    {en:"Twenty", ar:"عشرون", th:"ยี่สิบ", ms:"Dua puluh"},
    {en:"Thirty", ar:"ثلاثون", th:"สามสิบ", ms:"Tiga puluh"},
    {en:"Hundred", ar:"مئة", th:"ร้อย", ms:"Seratus"},
    {en:"Thousand", ar:"ألف", th:"พัน", ms:"Ribu"}
  ]},
  { name:"Colors", words:[
    {en:"Red", ar:"أحمر", th:"สีแดง", ms:"Merah"},
    {en:"Blue", ar:"أزرق", th:"สีฟ้า", ms:"Biru"},
    {en:"Green", ar:"أخضر", th:"สีเขียว", ms:"Hijau"},
    {en:"Yellow", ar:"أصفر", th:"สีเหลือง", ms:"Kuning"},
    {en:"Black", ar:"أسود", th:"สีดำ", ms:"Hitam"},
    {en:"White", ar:"أبيض", th:"สีขาว", ms:"Putih"},
    {en:"Brown", ar:"بني", th:"สีน้ำตาล", ms:"Coklat"},
    {en:"Purple", ar:"بنفسجي", th:"สีม่วง", ms:"Ungu"},
    {en:"Orange", ar:"برتقالي", th:"สีส้ม", ms:"Oren"},
    {en:"Pink", ar:"وردي", th:"สีชมพู", ms:"Merah jambu"},
    {en:"Grey", ar:"رمادي", th:"สีเทา", ms:"Kelabu"}
  ]},
  { name:"Animals", words:[
    {en:"Cat", ar:"قطة", th:"แมว", ms:"Kucing"},
    {en:"Dog", ar:"كلب", th:"หมา", ms:"Anjing"},
    {en:"Bird", ar:"طائر", th:"นก", ms:"Burung"},
    {en:"Fish", ar:"سمكة", th:"ปลา", ms:"Ikan"},
    {en:"Elephant", ar:"فيل", th:"ช้าง", ms:"Gajah"},
    {en:"Horse", ar:"حصان", th:"ม้า", ms:"Kuda"},
    {en:"Cow", ar:"بقرة", th:"วัว", ms:"Lembu"},
    {en:"Sheep", ar:"خروف", th:"แกะ", ms:"Biri-biri"},
    {en:"Lion", ar:"أسد", th:"สิงโต", ms:"Singa"},
    {en:"Rabbit", ar:"أرنب", th:"กระต่าย", ms:"Arnab"},
    {en:"Monkey", ar:"قرد", th:"ลิง", ms:"Monyet"},
    {en:"Snake", ar:"ثعبان", th:"งู", ms:"Ular"},
    {en:"Butterfly", ar:"فراشة", th:"ผีเสื้อ", ms:"Rama-rama"},
    {en:"Tiger", ar:"نمر", th:"เสือ", ms:"Harimau"},
    {en:"Duck", ar:"بطة", th:"เป็ด", ms:"Itik"},
    {en:"Goat", ar:"ماعز", th:"แพะ", ms:"Kambing"}
  ]},
  { name:"Family", words:[
    {en:"Mother", ar:"أم", th:"แม่", ms:"Ibu"},
    {en:"Father", ar:"أب", th:"พ่อ", ms:"Bapa"},
    {en:"Grandmother", ar:"جدة", th:"ยาย", ms:"Nenek"},
    {en:"Grandfather", ar:"جد", th:"ตา", ms:"Datuk"},
    {en:"Son", ar:"ابن", th:"ลูกชาย", ms:"Anak lelaki"},
    {en:"Daughter", ar:"ابنة", th:"ลูกสาว", ms:"Anak perempuan"},
    {en:"Family", ar:"عائلة", th:"ครอบครัว", ms:"Keluarga"},
    {en:"Friend", ar:"صديق", th:"เพื่อน", ms:"Kawan"},
    {en:"Brother", ar:"أخ", th:"พี่ชาย/น้องชาย", ms:"Saudara lelaki"},
    {en:"Sister", ar:"أخت", th:"พี่สาว/น้องสาว", ms:"Saudara perempuan"},
    {en:"Baby", ar:"طفل", th:"ทารก", ms:"Bayi"}
  ]},
  { name:"Food", words:[
    {en:"Rice", ar:"أرز", th:"ข้าว", ms:"Nasi"},
    {en:"Water", ar:"ماء", th:"น้ำ", ms:"Air"},
    {en:"Bread", ar:"خبز", th:"ขนมปัง", ms:"Roti"},
    {en:"Egg", ar:"بيضة", th:"ไข่", ms:"Telur"},
    {en:"Milk", ar:"حليب", th:"นม", ms:"Susu"},
    {en:"Chicken", ar:"دجاج", th:"ไก่", ms:"Ayam"},
    {en:"Fruit", ar:"فاكهة", th:"ผลไม้", ms:"Buah"},
    {en:"Vegetable", ar:"خضار", th:"ผัก", ms:"Sayur"},
    {en:"Sugar", ar:"سكر", th:"น้ำตาล", ms:"Gula"},
    {en:"Tea", ar:"شاي", th:"ชา", ms:"Teh"},
    {en:"Coffee", ar:"قهوة", th:"กาแฟ", ms:"Kopi"},
    {en:"Salt", ar:"ملح", th:"เกลือ", ms:"Garam"},
    {en:"Fish (food)", ar:"سمك", th:"เนื้อปลา", ms:"Ikan"},
    {en:"Apple", ar:"تفاحة", th:"แอปเปิ้ล", ms:"Epal"},
    {en:"Banana", ar:"موز", th:"กล้วย", ms:"Pisang"}
  ]},
  { name:"Body", words:[
    {en:"Head", ar:"رأس", th:"หัว", ms:"Kepala"},
    {en:"Hand", ar:"يد", th:"มือ", ms:"Tangan"},
    {en:"Eye", ar:"عين", th:"ตา", ms:"Mata"},
    {en:"Ear", ar:"أذن", th:"หู", ms:"Telinga"},
    {en:"Nose", ar:"أنف", th:"จมูก", ms:"Hidung"},
    {en:"Mouth", ar:"فم", th:"ปาก", ms:"Mulut"},
    {en:"Leg", ar:"رجل", th:"ขา", ms:"Kaki"},
    {en:"Heart", ar:"قلب", th:"หัวใจ", ms:"Jantung"},
    {en:"Foot", ar:"قدم", th:"เท้า", ms:"Kaki"},
    {en:"Hair", ar:"شعر", th:"ผม", ms:"Rambut"},
    {en:"Tooth", ar:"سن", th:"ฟัน", ms:"Gigi"}
  ]},
  { name:"Weather", words:[
    {en:"Sun", ar:"شمس", th:"ดวงอาทิตย์", ms:"Matahari"},
    {en:"Moon", ar:"قمر", th:"ดวงจันทร์", ms:"Bulan"},
    {en:"Rain", ar:"مطر", th:"ฝน", ms:"Hujan"},
    {en:"Wind", ar:"ريح", th:"ลม", ms:"Angin"},
    {en:"Hot", ar:"حار", th:"ร้อน", ms:"Panas"},
    {en:"Cold", ar:"بارد", th:"หนาว", ms:"Sejuk"},
    {en:"Star", ar:"نجمة", th:"ดาว", ms:"Bintang"},
    {en:"Sky", ar:"سماء", th:"ท้องฟ้า", ms:"Langit"},
    {en:"Cloud", ar:"سحابة", th:"เมฆ", ms:"Awan"},
    {en:"Snow", ar:"ثلج", th:"หิมะ", ms:"Salji"}
  ]},
  { name:"Days", words:[
    {en:"Monday", ar:"الاثنين", th:"วันจันทร์", ms:"Isnin"},
    {en:"Tuesday", ar:"الثلاثاء", th:"วันอังคาร", ms:"Selasa"},
    {en:"Wednesday", ar:"الأربعاء", th:"วันพุธ", ms:"Rabu"},
    {en:"Thursday", ar:"الخميس", th:"วันพฤหัสบดี", ms:"Khamis"},
    {en:"Friday", ar:"الجمعة", th:"วันศุกร์", ms:"Jumaat"},
    {en:"Saturday", ar:"السبت", th:"วันเสาร์", ms:"Sabtu"},
    {en:"Sunday", ar:"الأحد", th:"วันอาทิตย์", ms:"Ahad"}
  ]},
  { name:"Time & Calendar", words:[
    {en:"Today", ar:"اليوم", th:"วันนี้", ms:"Hari ini"},
    {en:"Tomorrow", ar:"غدا", th:"พรุ่งนี้", ms:"Esok"},
    {en:"Yesterday", ar:"أمس", th:"เมื่อวาน", ms:"Semalam"},
    {en:"Hour", ar:"ساعة", th:"ชั่วโมง", ms:"Jam"},
    {en:"Minute", ar:"دقيقة", th:"นาที", ms:"Minit"},
    {en:"Morning", ar:"صباح", th:"เช้า", ms:"Pagi"},
    {en:"Night", ar:"ليل", th:"กลางคืน", ms:"Malam"},
    {en:"Year", ar:"سنة", th:"ปี", ms:"Tahun"},
    {en:"Month", ar:"شهر", th:"เดือน", ms:"Bulan"},
    {en:"Week", ar:"أسبوع", th:"สัปดาห์", ms:"Minggu"}
  ]},
  { name:"Questions", words:[
    {en:"What", ar:"ماذا", th:"อะไร", ms:"Apa"},
    {en:"Who", ar:"من", th:"ใคร", ms:"Siapa"},
    {en:"Where", ar:"أين", th:"ที่ไหน", ms:"Di mana"},
    {en:"When", ar:"متى", th:"เมื่อไหร่", ms:"Bila"},
    {en:"Why", ar:"لماذا", th:"ทำไม", ms:"Kenapa"},
    {en:"How", ar:"كيف", th:"อย่างไร", ms:"Bagaimana"}
  ]},
  { name:"Verbs", words:[
    {en:"Eat", ar:"يأكل", th:"กิน", ms:"Makan"},
    {en:"Drink", ar:"يشرب", th:"ดื่ม", ms:"Minum"},
    {en:"Sleep", ar:"ينام", th:"นอน", ms:"Tidur"},
    {en:"Go", ar:"يذهب", th:"ไป", ms:"Pergi"},
    {en:"Come", ar:"يأتي", th:"มา", ms:"Datang"},
    {en:"See", ar:"يرى", th:"เห็น", ms:"Lihat"},
    {en:"Read", ar:"يقرأ", th:"อ่าน", ms:"Baca"},
    {en:"Write", ar:"يكتب", th:"เขียน", ms:"Tulis"},
    {en:"Speak", ar:"يتكلم", th:"พูด", ms:"Bercakap"},
    {en:"Love", ar:"يحب", th:"รัก", ms:"Cinta"},
    {en:"Run", ar:"يجري", th:"วิ่ง", ms:"Lari"},
    {en:"Walk", ar:"يمشي", th:"เดิน", ms:"Jalan"},
    {en:"Sit", ar:"يجلس", th:"นั่ง", ms:"Duduk"},
    {en:"Listen", ar:"يستمع", th:"ฟัง", ms:"Dengar"},
    {en:"Buy", ar:"يشتري", th:"ซื้อ", ms:"Beli"}
  ]},
  { name:"School", words:[
    {en:"Book", ar:"كتاب", th:"หนังสือ", ms:"Buku"},
    {en:"Pen", ar:"قلم", th:"ปากกา", ms:"Pen"},
    {en:"Table", ar:"طاولة", th:"โต๊ะ", ms:"Meja"},
    {en:"Chair", ar:"كرسي", th:"เก้าอี้", ms:"Kerusi"},
    {en:"School", ar:"مدرسة", th:"โรงเรียน", ms:"Sekolah"},
    {en:"Teacher", ar:"معلم", th:"ครู", ms:"Guru"},
    {en:"Student", ar:"طالب", th:"นักเรียน", ms:"Pelajar"},
    {en:"Paper", ar:"ورقة", th:"กระดาษ", ms:"Kertas"},
    {en:"Classroom", ar:"فصل", th:"ห้องเรียน", ms:"Bilik darjah"},
    {en:"Computer", ar:"حاسوب", th:"คอมพิวเตอร์", ms:"Komputer"}
  ]},
  { name:"Clothing", words:[
    {en:"Shirt", ar:"قميص", th:"เสื้อเชิ้ต", ms:"Kemeja"},
    {en:"Pants", ar:"بنطال", th:"กางเกง", ms:"Seluar"},
    {en:"Shoes", ar:"حذاء", th:"รองเท้า", ms:"Kasut"},
    {en:"Hat", ar:"قبعة", th:"หมวก", ms:"Topi"},
    {en:"Dress", ar:"فستان", th:"ชุดเดรส", ms:"Gaun"},
    {en:"Socks", ar:"جوارب", th:"ถุงเท้า", ms:"Stoking"}
  ]},
  { name:"Places & Travel", words:[
    {en:"House", ar:"بيت", th:"บ้าน", ms:"Rumah"},
    {en:"City", ar:"مدينة", th:"เมือง", ms:"Bandar"},
    {en:"Market", ar:"سوق", th:"ตลาด", ms:"Pasar"},
    {en:"Hospital", ar:"مستشفى", th:"โรงพยาบาล", ms:"Hospital"},
    {en:"Airport", ar:"مطار", th:"สนามบิน", ms:"Lapangan terbang"},
    {en:"Car", ar:"سيارة", th:"รถยนต์", ms:"Kereta"},
    {en:"Bus", ar:"حافلة", th:"รถบัส", ms:"Bas"},
    {en:"Road", ar:"طريق", th:"ถนน", ms:"Jalan"}
  ]},
  { name:"Adjectives", words:[
    {en:"Big", ar:"كبير", th:"ใหญ่", ms:"Besar"},
    {en:"Small", ar:"صغير", th:"เล็ก", ms:"Kecil"},
    {en:"Good", ar:"جيد", th:"ดี", ms:"Baik"},
    {en:"Bad", ar:"سيء", th:"เลว", ms:"Buruk"},
    {en:"Happy", ar:"سعيد", th:"มีความสุข", ms:"Gembira"},
    {en:"Sad", ar:"حزين", th:"เศร้า", ms:"Sedih"},
    {en:"Fast", ar:"سريع", th:"เร็ว", ms:"Laju"},
    {en:"Slow", ar:"بطيء", th:"ช้า", ms:"Perlahan"},
    {en:"New", ar:"جديد", th:"ใหม่", ms:"Baharu"},
    {en:"Old", ar:"قديم", th:"เก่า", ms:"Lama"}
  ]}
];

// GLOBAL APPLICATION STATE MACHINE OBJECT
let state = { 
  device:'phone', 
  mode:'match', 
  from:'en', 
  to:'ar', 
  diff:'easy', 
  roundIndex:0, 
  score:0, 
  timerId:null, 
  timeLeft:0, 
  wordIndex:0, 
  roundWords:[] 
};

let selectedLeft = null, selectedRight = null, matchedCount = 0;

// Sticky Navbar Scroll Listener
const topnav = document.getElementById('topnav');
const heroEl = document.querySelector('.hero');
window.addEventListener('scroll', ()=>{
  const past = window.scrollY > heroEl.offsetHeight - 80;
  topnav.classList.toggle('show', past);
});

// UI Handlers
const devicePanel = document.getElementById('devicePanel');
const modePanel = document.getElementById('modePanel');
const setupPanel = document.getElementById('setupPanel');

document.querySelectorAll('#devicePanel [data-device]').forEach(card=>{
  card.addEventListener('click', ()=>{
    state.device = card.dataset.device;
    document.body.classList.toggle('device-phone', state.device === 'phone');
    document.getElementById('typeBadge').textContent = state.device === 'pc' ? 'Great on PC' : 'Best on PC';
    document.getElementById('typeBadge').className = state.device === 'pc' ? 'badge rec' : 'badge';
    devicePanel.style.display = 'none';
    modePanel.style.display = 'block';
  });
});

document.getElementById('backToDevice').addEventListener('click', ()=>{
  modePanel.style.display = 'none';
  devicePanel.style.display = 'block';
});
document.getElementById('backToMode').addEventListener('click', ()=>{
  setupPanel.style.display = 'none';
  modePanel.style.display = 'block';
});

document.getElementById('exitBtn').addEventListener('click', ()=>{
  if(confirm("Are you sure you want to exit the current session? Your progress will be lost.")){
    clearInterval(state.timerId);
    document.getElementById('gamePanel').style.display = 'none';
    modePanel.style.display = 'block';
  }
});

const MODE_LABEL = { match:'Matching', quiz:'Multiple Choice', type:'Typing Challenge', flash:'Flashcards' };
document.querySelectorAll('#modePanel [data-mode]').forEach(card=>{
  card.addEventListener('click', ()=>{
    state.mode = card.dataset.mode;
    document.getElementById('diffField').style.display = state.mode === 'flash' ? 'none' : 'block';
    document.getElementById('currentPicks').innerHTML =
      'Device: <b>'+(state.device==='phone'?'Phone':'PC')+'</b> &nbsp;·&nbsp; Game: <b>'+MODE_LABEL[state.mode]+'</b>';
    modePanel.style.display = 'none';
    setupPanel.style.display = 'block';
  });
});

const fromSel = document.getElementById('fromLang');
const toSel = document.getElementById('toLang');
document.querySelectorAll('.diff-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.diff-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    state.diff = btn.dataset.diff;
  });
});

function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

document.getElementById('startBtn').addEventListener('click', ()=>{
  state.from = fromSel.value;
  state.to = toSel.value;
  if(state.from === state.to){
    alert("Pick two different languages to match.");
    return;
  }
  state.roundIndex = 0;
  state.score = 0;
  setupPanel.style.display = 'none';
  document.getElementById('resultPanel').style.display = 'none';
  document.getElementById('gamePanel').style.display = 'block';

  document.getElementById('roundLabel').textContent = state.mode === 'flash' ? 'Deck' : 'Round';
  document.getElementById('scoreLabel').textContent = state.mode === 'flash' ? 'Reviewed' : 'Score';
  document.getElementById('boardMatch').style.display = state.mode === 'match' ? 'grid' : 'none';
  document.getElementById('boardQuiz').style.display = state.mode === 'quiz' ? 'block' : 'none';
  document.getElementById('boardType').style.display = state.mode === 'type' ? 'block' : 'none';
  document.getElementById('boardFlash').style.display = state.mode === 'flash' ? 'block' : 'none';

  loadRound();
});

function startTimer(){
  const timerEl = document.getElementById('timerNum');
  clearInterval(state.timerId);
  if(state.diff === 'easy' || state.mode === 'flash'){
    timerEl.textContent = '';
    return;
  }
  state.timeLeft = state.diff === 'medium' ? 45 : 25;
  timerEl.textContent = state.timeLeft + 's';
  state.timerId = setInterval(()=>{
    state.timeLeft--;
    timerEl.textContent = state.timeLeft + 's';
    if(state.timeLeft <= 0){
      clearInterval(state.timerId);
      nextRound();
    }
  }, 1000);
}

function buildProgressDots(count){
  const dotsEl = document.getElementById('progressDots');
  dotsEl.innerHTML = '';
  for(let i=0;i<count;i++){
    const d = document.createElement('span');
    d.className = 'pd';
    dotsEl.appendChild(d);
  }
}
function markDot(i){
  const dots = document.querySelectorAll('#progressDots .pd');
  if(dots[i]) dots[i].classList.add('done');
}

function loadRound(){
  clearInterval(state.timerId);
  const cat = CATEGORIES[state.roundIndex];
  document.getElementById('roundNum').textContent = state.roundIndex + 1;
  document.getElementById('catName').textContent = cat.name;
  document.getElementById('scoreNum').textContent = state.score;
  buildProgressDots(cat.words.length);

  if(state.mode === 'match'){
    loadMatchRound(cat);
    startTimer();
  } else {
    state.wordIndex = 0;
    state.roundWords = shuffle(cat.words);
    renderCurrentWord();
    startTimer();
  }
}

function loadMatchRound(cat){
  selectedLeft = null; selectedRight = null; matchedCount = 0;
  const leftCol = document.getElementById('leftCol');
  const rightCol = document.getElementById('rightCol');
  leftCol.innerHTML = ''; rightCol.innerHTML = '';
  const leftItems = shuffle(cat.words.map((w,idx)=>({id:idx, text:w[state.from]})));
  const rightItems = shuffle(cat.words.map((w,idx)=>({id:idx, text:w[state.to]})));
  leftItems.forEach(item=>leftCol.appendChild(makeTile(item, state.from, 'left')));
  rightItems.forEach(item=>rightCol.appendChild(makeTile(item, state.to, 'right')));
}

function makeTile(item, lang, side){
  const el = document.createElement('button');
  el.className = 'tile';
  el.textContent = item.text;
  el.dataset.id = item.id;
  el.dataset.side = side;
  el.setAttribute('dir', DIR[lang]);
  if(lang==='ar') el.classList.add('lang-ar');
  if(lang==='th') el.classList.add('lang-th');
  el.addEventListener('click', ()=>onTileClick(el));
  return el;
}

function onTileClick(el){
  if(el.classList.contains('matched')) return;
  if(el.dataset.side === 'left'){
    if(selectedLeft) selectedLeft.classList.remove('selected');
    selectedLeft = el;
    el.classList.add('selected');
  } else {
    if(selectedRight) selectedRight.classList.remove('selected');
    selectedRight = el;
    el.classList.add('selected');
  }
  if(selectedLeft && selectedRight) checkMatch();
}

function checkMatch(){
  const a = selectedLeft, b = selectedRight;
  if(a.dataset.id === b.dataset.id){
    a.classList.remove('selected'); b.classList.remove('selected');
    a.classList.add('matched'); b.classList.add('matched');
    state.score++;
    matchedCount++;
    document.getElementById('scoreNum').textContent = state.score;
    markDot(matchedCount-1);
    selectedLeft = null; selectedRight = null;
    if(matchedCount === CATEGORIES[state.roundIndex].words.length){
      setTimeout(nextRound, 500);
    }
  } else {
    a.classList.add('wrong'); b.classList.add('wrong');
    setTimeout(()=>{
      a.classList.remove('selected','wrong');
      b.classList.remove('selected','wrong');
      selectedLeft = null; selectedRight = null;
    }, 450);
  }
}

function renderCurrentWord(){
  const word = state.roundWords[state.wordIndex];
  if(state.mode === 'quiz') renderQuiz(word);
  else if(state.mode === 'type') renderType(word);
  else if(state.mode === 'flash') renderFlash(word);
}

function advanceWord(){
  markDot(state.wordIndex);
  state.wordIndex++;
  if(state.wordIndex >= state.roundWords.length){
    setTimeout(nextRound, state.mode === 'flash' ? 0 : 500);
  } else {
    renderCurrentWord();
  }
}

function renderQuiz(word){
  const wordEl = document.getElementById('quizWord');
  wordEl.textContent = word[state.from];
  wordEl.setAttribute('dir', DIR[state.from]);
  wordEl.className = 'quiz-word' + (state.from==='ar'?' lang-ar':'') + (state.from==='th'?' lang-th':'');

  const cat = CATEGORIES[state.roundIndex];
  const others = cat.words.filter(w => w !== word);
  const distractors = shuffle(others).slice(0,3).map(w=>w[state.to]);
  const options = shuffle([word[state.to], ...distractors]);

  const optsEl = document.getElementById('quizOptions');
  optsEl.innerHTML = '';
  options.forEach(opt=>{
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'quiz-opt' + (state.to==='ar'?' lang-ar':'') + (state.to==='th'?' lang-th':'');
    btn.textContent = opt;
    btn.setAttribute('dir', DIR[state.to]);
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.quiz-opt').forEach(o=>o.classList.add('disabled'));
      if(opt === word[state.to]){
        btn.classList.add('correct');
        state.score++;
        document.getElementById('scoreNum').textContent = state.score;
      } else {
        btn.classList.add('incorrect');
        document.querySelectorAll('.quiz-opt').forEach(o=>{
          if(o.textContent === word[state.to]) o.classList.add('correct');
        });
      }
      setTimeout(advanceWord, 700);
    });
    li.appendChild(btn);
    optsEl.appendChild(li);
  });
}

function renderType(word){
  const wordEl = document.getElementById('typeWord');
  wordEl.textContent = word[state.from];
  wordEl.setAttribute('dir', DIR[state.from]);
  wordEl.className = 'type-word' + (state.from==='ar'?' lang-ar':'') + (state.from==='th'?' lang-th':'');

  const input = document.getElementById('typeInput');
  input.value = '';
  input.className = '';
  input.setAttribute('dir', DIR[state.to]);
  document.getElementById('typeFeedback').textContent = '';
  document.getElementById('typeFeedback').className = '';
  input.focus();

  function submit(){
    const answer = input.value.trim().toLowerCase();
    const correct = word[state.to].trim().toLowerCase();
    const feedback = document.getElementById('typeFeedback');
    if(answer === correct){
      input.className = 'correct';
      feedback.textContent = 'Correct!';
      feedback.className = 'ok';
      state.score++;
      document.getElementById('scoreNum').textContent = state.score;
    } else {
      input.className = 'incorrect';
      feedback.textContent = 'Answer: ' + word[state.to];
      feedback.className = 'no';
    }
    document.getElementById('typeSubmit').onclick = null;
    input.onkeydown = null;
    setTimeout(advanceWord, 900);
  }

  document.getElementById('typeSubmit').onclick = submit;
  input.onkeydown = (e)=>{ if(e.key === 'Enter') submit(); };
}

function renderFlash(word){
  const card = document.getElementById('flashCard');
  const front = document.getElementById('flashFront');
  front.textContent = word[state.from];
  front.setAttribute('dir', DIR[state.from]);
  front.className = 'flash-front' + (state.from==='ar'?' lang-ar':'') + (state.from==='th'?' lang-th':'');
  let flipped = false;
  card.onclick = ()=>{
    flipped = !flipped;
    if(flipped){
      front.textContent = word[state.to];
      front.setAttribute('dir', DIR[state.to]);
      front.className = 'flash-back' + (state.to==='ar'?' lang-ar':'') + (state.to==='th'?' lang-th':'');
    } else {
      front.textContent = word[state.from];
      front.setAttribute('dir', DIR[state.from]);
      front.className = 'flash-front' + (state.from==='ar'?' lang-ar':'') + (state.from==='th'?' lang-th':'');
    }
  };
  document.getElementById('flashNext').onclick = ()=>{
    state.score++;
    document.getElementById('scoreNum').textContent = state.score;
    advanceWord();
  };
}

function nextRound(){
  clearInterval(state.timerId);
  state.roundIndex++;
  if(state.roundIndex < CATEGORIES.length){
    loadRound();
  } else {
    endGame();
  }
}

function endGame(){
  document.getElementById('gamePanel').style.display = 'none';
  const resultPanel = document.getElementById('resultPanel');
  resultPanel.style.display = 'block';
  const total = CATEGORIES.reduce((s,c)=>s+c.words.length,0);
  if(state.mode === 'flash'){
    document.getElementById('finalScore').textContent = total + ' / ' + total;
    document.getElementById('resultLabel').textContent = 'cards reviewed';
  } else {
    document.getElementById('finalScore').textContent = state.score + ' / ' + total;
    document.getElementById('resultLabel').textContent = 'correct across all rounds';
  }

  const colors = ['#2f4d7a','#3f7d54','#b4472f','#a9822f','#c99a3d'];
  resultPanel.querySelectorAll('.confetti').forEach(c=>c.remove());
  for(let i=0;i<28;i++){
    const c = document.createElement('span');
    c.className = 'confetti';
    c.style.left = (Math.random()*100)+'%';
    c.style.background = colors[i % colors.length];
    c.style.animationDuration = (1.4 + Math.random()*1.1)+'s';
    c.style.animationDelay = (Math.random()*0.4)+'s';
    c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    resultPanel.appendChild(c);
  }
}

document.getElementById('replayBtn').addEventListener('click', ()=>{
  document.getElementById('resultPanel').style.display = 'none';
  modePanel.style.display = 'block';
});

// Dictionary Logic
const dictBody = document.getElementById('dictBody');
const dictFilters = document.getElementById('dictFilters');
const dictSearch = document.getElementById('dictSearch');
let activeCategory = 'All';

function buildDictionary(){
  const cats = ['All', ...CATEGORIES.map(c=>c.name)];
  dictFilters.innerHTML = '';
  cats.forEach(name=>{
    const btn = document.createElement('button');
    btn.textContent = name;
    if(name === activeCategory) btn.classList.add('active');
    btn.addEventListener('click', ()=>{
      activeCategory = name;
      dictFilters.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderDictRows();
    });
    dictFilters.appendChild(btn);
  });
  renderDictRows();
}

function highlight(text, query){
  if(!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if(idx === -1) return text;
  return text.slice(0,idx) + '<mark>' + text.slice(idx, idx+query.length) + '</mark>' + text.slice(idx+query.length);
}

function renderDictRows(){
  const query = dictSearch.value.trim();
  dictBody.innerHTML = '';
  CATEGORIES.forEach(cat=>{
    if(activeCategory !== 'All' && cat.name !== activeCategory) return;
    cat.words.forEach(w=>{
      const matches = !query || ['en','ar','th','ms'].some(l => w[l].toLowerCase().includes(query.toLowerCase()));
      if(!matches) return;
      const tr = document.createElement('tr');
      tr.innerHTML =
        '<td class="cat-cell">'+cat.name+'</td>' +
        '<td>'+highlight(w.en, query)+'</td>' +
        '<td dir="rtl" class="lang-ar">'+highlight(w.ar, query)+'</td>' +
        '<td class="lang-th">'+highlight(w.th, query)+'</td>' +
        '<td>'+highlight(w.ms, query)+'</td>';
      dictBody.appendChild(tr);
    });
  });
  if(!dictBody.children.length){
    const tr = document.createElement('tr');
    tr.innerHTML = '<td colspan="5" style="text-align:center;color:var(--muted);padding:24px;">No words match your search.</td>';
    dictBody.appendChild(tr);
  }
}

dictSearch.addEventListener('input', renderDictRows);

// Initialize
buildDictionary();
document.getElementById('totalRounds').textContent = CATEGORIES.length;