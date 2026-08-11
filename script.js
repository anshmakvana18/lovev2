/* ==========================================================
   BLUEMOON V2
   CORE ENGINE
========================================================== */

"use strict";

/* ==========================================================
   QUIZ DATA
========================================================== */

const quizData = [

    {
        question: "I have something special for you... Ready to begin? 💙",
        yes: "I'm Ready ✨"
    },

    {
        question: "aek promise kar k end sudhi joye aa website",
        yes: "promise"
    },

    {
        question: "AI detected a beutifull person...is that you? 🤭",
        yes: "Maybe 😄"
    },

    {
        question: "aek biju promise kar k tu website na end sudhi smile karti re",
        yes: "haa promise bas"
    },

    {
        question: "tan khbr s me aa website special tara mate banai s",
        yes: "ha khbr s "
    },

    {
        question: "One last smile before we continue? 😊",
        yes: "Always 💙"
    },

    {
        question: "Idntity verificatin complete. Continue?",
        yes: "Verify Identity 💙"
    }

];

const funnyNoTexts = [

    "Not Today 😏",
    "Impossible 😂",
    "Access Denied 🤖",
    "Nice Try 🤭",
    "System Rejected 🚫",
    "Wrong Button 😎",
    "BlueMoon Says No 💙",
    "Retry Failed 😅",
    "No Isn't Available 🌙",
    "Error 404 😆"

];

/* ==========================================================
   APP
========================================================== */

const App = {

    currentScene: "intro",

    scenes: {},

    init() {

        this.cache();

        this.show("intro");

        Intro.init();

        console.log(
            "%cBlueMoon V2 Loaded 💙",
            "color:#60A5FA;font-size:18px;font-weight:bold;"
        );

        setTimeout(showQuiz,5000);

    },



    cache() {

        this.scenes = {

            intro: document.querySelector("#intro"),
            quiz: document.querySelector("#quiz"),
            ai: document.querySelector("#aiTerminal"),
            black: document.querySelector("#blackScreen"),
            moon: document.querySelector("#moonScene"),
            hero: document.querySelector("#heroReveal"),
            krishna: document.querySelector("#krishna"),
            cards: document.querySelector("#cards"),
            letter: document.querySelector("#letter"),
            gallery: document.querySelector("#gallery"),
            cake: document.querySelector("#cake"),
            gift: document.querySelector("#gift"),
            final: document.querySelector("#final"),
            birthday: document.querySelector("#birthdayReveal"),
            ending: document.querySelector("#ending"),

        };

    },

    hideAll() {
Object.values(this.scenes).forEach(scene=>{

    if(scene){

        scene.style.display="none";

    }

});
    },

    show(name) {

        this.hideAll();

        this.currentScene = name;

        const scene = this.scenes[name];

        if (scene) {

            scene.style.display = "flex";

        }

    }

};

/* ==========================================================
   INTRO
========================================================== */

const Intro = {

    init() {

        const intro = document.querySelector("#intro");

        intro.innerHTML = `

<div class="intro-bg">

    <div class="stars"></div>

    <div class="moon-glow"></div>

</div>

<div class="intro-wrapper">

    <h1 class="intro-title">
               
        sunshine studio 🔆

    </h1>

    <p class="intro-subtitle">

        Crafting Something Beautiful...

    </p>

</div>

`;

        gsap.from(".intro-logo",{

            scale:0,

            opacity:0,

            duration:1,

            ease:"back.out(1.7)"

        });

gsap.from(".intro-title",{

    y:60,

    opacity:0,

    delay:.8,

    duration:1

});

gsap.from(".intro-subtitle",{

    y:30,

    opacity:0,

    delay:1.2,

    duration:1

});}
}

/* Floating Moon */

gsap.to(".moon",{

    y:-18,

    duration:4,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

/* Moon Glow */

gsap.to(".moon-glow",{

    scale:1.08,

    opacity:.7,

    duration:3,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

/* Auto Continue */

setTimeout(()=>{

    showQuiz();

},5500);


/* ==========================================================
   START
========================================================== */

document.addEventListener("DOMContentLoaded",()=>{

    App.init();

    const startBtn=document.getElementById("startBtn");

    startBtn.addEventListener("click",()=>{

        playMusic("birthdayMusic");

        gsap.to("#startScreen",{

            opacity:0,

            duration:.8,

            onComplete:()=>{

                document.getElementById("startScreen").remove();

            }

        });

    });
    document
.getElementById("cutCakeBtn")
.addEventListener("click",cutCake);

});

/* ==========================================================
   PREMIUM QUIZ PREVIEW
========================================================== */

let currentQuestion = 0;

function showQuiz(){

    App.show("quiz");

    renderQuestion();

}

function quizEvents(){

    const yes = document.querySelector("#yesBtn");
    const no = document.querySelector("#noBtn");

    yes.addEventListener("click",()=>{

        gsap.to(".quiz-card",{

            scale:.96,
            opacity:0,
            duration:.25,

            onComplete(){

                currentQuestion++;

                if(currentQuestion>=quizData.length){

                    // TEMP
                    startTerminal();
                    return;

                }

                renderQuestion();

                gsap.from(".quiz-card",{

                    scale:1.05,
                    opacity:0,
                    duration:.35

                });

            }

        });

    });

  /* ===============================
   NO BUTTON AI
================================ */

let noClicks = 0;

const noReplies = [

    "Not Today 😏",

    "Impossible 😂",

    "Wrong Button 🤭",

    "Nice Try 😎",

    "System Rejected 🤖",

    "Access Denied 🚫",

    "Mission Failed 😆",

    "BlueMoon Says NO 💙",

    "No Isn't Installed 🤣",

    "Try YES Instead 😉",

    "Error 404 😂",

    "Seriously? 👀"

];

function moveNoButton(btn){

    const card = document.querySelector(".quiz-card");

    const maxX = card.clientWidth - btn.offsetWidth - 40;

    const maxY = card.clientHeight - btn.offsetHeight - 40;

    const x = Math.random() * maxX;

    const y = Math.random() * maxY;

    gsap.to(btn,{

        x:x,

        y:y,

        rotation:Math.random()*40-20,

        scale:.9+Math.random()*.25,

        duration:.35,

        ease:"back.out(1.8)"

    });

}

no.addEventListener("mouseenter",()=>{

    noClicks++;

    no.textContent =

    noReplies[

    Math.floor(

    Math.random()*noReplies.length

    )

    ];

    moveNoButton(no);

});

}

function renderQuestion(){

    const q = quizData[currentQuestion];

    document.querySelector("#quiz").innerHTML = `

    <div class="quiz-stars"></div>

    <div class="quiz-card">

    <div class="ai-scan"></div>

        <div class="quiz-header">

           <div class="quiz-status">

    <span class="status-dot"></span>

    BLUEMOON AI • IDENTITY VERIFICATION

</div>

            <div class="quiz-count">

                ${currentQuestion+1} / ${quizData.length}

            </div>

        </div>

        <div class="progress">

            <div class="progress-fill"
            style="width:${((currentQuestion+1)/quizData.length)*100}%">
            </div>

        </div>

        <h2 class="quiz-question">

            ${q.question}

        </h2>

        <div class="quiz-buttons">

            <button id="yesBtn" class="quiz-yes">

                ${q.yes}

            </button>

            <button id="noBtn" class="quiz-no">

                No 🙃

            </button>

        </div>

    </div>

    `;

    quizEvents();

}

/* ==========================================================
   CARD TILT EFFECT
========================================================== */

document.addEventListener("mousemove",(e)=>{

    const card=document.querySelector(".quiz-card");

    if(!card) return;

    const rect=card.getBoundingClientRect();

    const x=e.clientX-rect.left;

    const y=e.clientY-rect.top;

    if(

        x<0||

        y<0||

        x>rect.width||

        y>rect.height

    ){

        card.style.transform="";

        return;

    }

    const rotateY=

    (x-rect.width/2)/28;

    const rotateX=

    -(y-rect.height/2)/28;

    card.style.transform=

    `perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    translateY(-6px)`;

});

document.addEventListener("mouseleave",()=>{

    const card=document.querySelector(".quiz-card");

    if(card){

        card.style.transform="";

    }

});
   
/* ==========================================================
   BLUEMOON AI TERMINAL
========================================================== */

const terminalLines = [

"sunshine AI v3.0 Booting...",



"> Authenticating User...",

"> Reading Smile Signature...",

"",

"✓ Smile Detected",

"✓ Positive Energy Detected",

"✓ Beautiful Soul Detected",

"✓ Birthday Found 🎂",

"",

"> Searching Hidden Memories...",

"> Matching Identity...",

"",

"💙 MATCH FOUND",

"",

"> Decrypting Surprise...",

"> Unlocking Secret Files...",

"",

"✓ ACCESS GRANTED",

"",

"> Opening Birthday Protocol..."

];

let terminalProgress = 0;

/* ==========================================================
   TERMINAL ENGINE
========================================================== */

let terminalIndex = 0;

function startTerminal(){

    App.show("ai");

    terminalIndex = 0;

    const output = document.querySelector("#terminalOutput");

    output.innerHTML = "";

    typeNextLine();

}

function typeNextLine(){

    if(terminalIndex >= terminalLines.length){

        terminalFinished();

        return;

    }

    const output = document.querySelector("#terminalOutput");

    const line = terminalLines[terminalIndex];

    const p = document.createElement("div");

    if(line.startsWith("[ OK ]")){

    p.className="log-ok";

}

if(line.startsWith(">")){

    p.className="log-process";

}

if(line.includes("MATCH")){

    p.className="log-match";

}

if(line.includes("ACCESS")){

    p.className="log-access";

}

    output.appendChild(p);

    let charIndex = 0;

    const timer = setInterval(()=>{

        p.innerHTML =

line.substring(

0,

charIndex

)

+

'<span class="cursor">|</span>'; line.charAt(charIndex);

        charIndex++;

        output.scrollTop = output.scrollHeight;

        if(charIndex > line.length){

            clearInterval(timer);

            terminalIndex++;

            terminalProgress =

Math.floor(

((terminalIndex)

/terminalLines.length)

*100

);

document.querySelector(

"#terminalBar"

).style.width=

terminalProgress+"%";

document.querySelector(

"#terminalPercent"

).textContent=

terminalProgress+"%";

            setTimeout(typeNextLine,220);

        }

    },25);

}

/* ==========================================================
   TERMINAL COMPLETE
========================================================== */

function terminalFinished(){

    const output = document.querySelector("#terminalOutput");

    output.innerHTML += `

<br>

<div style="
color:#22C55E;
font-weight:700;
font-size:22px;">

✓ SYSTEM READY

</div>

`;

    setTimeout(()=>{

        // Next Scene
        // showBlackScreen();

        showBlackScreen();

    },2000);

}

/* ==========================================================
   BLACK SCREEN ENGINE
========================================================== */

const blackMessages = [

    "desclaimer",

    "a small gift from my side",

    "i hope you will like it",

    "i just want to create a beutiful moment for you",

    "Some moments cannot be explained...",

    "They can only be felt...",

    "Today is one of those moments..."

];

function showBlackScreen(){

    App.show("black");

    const text=document.querySelector("#blackMessage");

    let index=0;

    function nextMessage(){

        if(index>=blackMessages.length){

            revealMoon();

            return;

        }

        text.style.opacity=0;

        setTimeout(()=>{

            text.textContent=blackMessages[index];

            gsap.to(text,{

                opacity:1,

                duration:1.2

            });

            index++;

            setTimeout(nextMessage,2200);

        },500);

    }

    nextMessage();

}

function revealMoon(){

    App.show("moon");

    gsap.from(".moon",{

        scale:.2,

        opacity:0,

        duration:3,

        ease:"power2.out"

    });
    setTimeout(startMoonMessage,2000);

}

gsap.to(".moon",{

    y:-12,

    duration:5,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

/* ==========================================================
   MOON MESSAGE ENGINE
========================================================== */

const moonMessages = [

    

];

function startMoonMessage(){

    const text = document.querySelector("#moonText");

    let msg = 0;

    function next(){

        if(msg >= moonMessages.length){

            setTimeout(moonFlash,2500);

            return;

        }

        text.innerHTML = "";

        gsap.to(text,{
            opacity:1,
            duration:.8
        });

        let char = 0;

        const typing = setInterval(()=>{

            text.innerHTML += moonMessages[msg][char];

            char++;

            if(char >= moonMessages[msg].length){

                clearInterval(typing);

                msg++;

                setTimeout(next,2200);

            }

        },45);

    }

    next();

}

/* ==========================================================
   MOON TRANSITION
========================================================== */

function moonFlash(){

    gsap.timeline()

    .to(".moon",{

        scale:1.45,
        duration:2,
        ease:"power2.inOut"

    })

    .to("#moonFlash",{

        opacity:1,
        duration:1

    },"-=0.7")

    .to("#moonScene",{

        opacity:0,
        duration:1.2,

        onComplete(){

            showBirthdayReveal();

        }

    });

}

/* ==========================================================
   BIRTHDAY REVEAL
========================================================== */

function showBirthdayReveal(){

    App.show("birthday");

    const tl = gsap.timeline();

    tl

    .fromTo(

        "#happyText",

        {
            opacity:0,
            y:60
        },

        {
            opacity:1,
            y:0,
            duration:1
        }

    )

    .fromTo(

        "#birthdayText",

        {
            opacity:0,
            scale:.5
        },

        {
            opacity:1,
            scale:1,
            duration:1.4,
            ease:"back.out(1.6)"
        }

    )

    .fromTo(

        "#nameText",

        {
            opacity:0,
            y:40
        },

        {
            opacity:1,
            y:0,
            duration:1
        }

    )

    .fromTo(

        "#specialName",

        {
            opacity:0,
            scale:.4,
            rotation:-8
        },

        {
            opacity:1,
            scale:1,
            rotation:0,
            duration:1.5,
            ease:"elastic.out(1,.6)"
        }

    );

    launchConfetti();

    gsap.fromTo(

        ".birthday-content",

        {
            x:-4
        },

        {
            x:4,
            duration:.08,
            repeat:12,
            yoyo:true
        }

    );

    setTimeout(()=>{

          showKrishnaScene();

    },4000);

setTimeout(startBlessing,1200);

setInterval(createPetal,350);

}
/* ==========================================================
   CONFETTI BLAST
========================================================== */

function launchConfetti(){

    const duration = 3500;

    const end = Date.now() + duration;

    (function frame(){

        confetti({

            particleCount:4,

            angle:60,

            spread:60,

            origin:{x:0}

        });

        confetti({

            particleCount:4,

            angle:120,

            spread:60,

            origin:{x:1}

        });

        if(Date.now() < end){

            requestAnimationFrame(frame);

        }

    })();

}

/* ==========================================================
   KRISHNA BLESSING
========================================================== */

const blessing = "Radhe Radhe 🦚";

function startBlessing(){

    console.log("Blessing Started");

    const box = document.querySelector("#blessingText");
    const btn = document.querySelector("#continueBtn");

    box.textContent = "";

    let index = 0;

    const chars = Array.from(blessing);

    const typing = setInterval(()=>{

        box.textContent += chars[index];

        index++;

        if(index >= chars.length){

            clearInterval(typing);

            btn.style.display = "inline-block";

            gsap.from(btn,{
                opacity:0,
                y:25,
                duration:1
            });

        }

    },35);

}

/* ==========================================================
   PETAL ENGINE
========================================================== */

function createPetal(){

    const area=document.querySelector("#petals");

    const petal=document.createElement("div");

    petal.className="petal";

    petal.style.left=Math.random()*100+"vw";

    petal.style.top="-30px";

    petal.style.transform=

    `scale(${0.5+Math.random()})`;

    area.appendChild(petal);

    gsap.to(petal,{

        y:window.innerHeight+100,

        x:(Math.random()-0.5)*250,

        rotation:360,

        duration:8+Math.random()*5,

        ease:"none",

        onComplete(){

            petal.remove();

        }

    });

}

function showKrishnaScene(){

       App.show("krishna");

    gsap.from(

        "#krishnaImage",

        {

            opacity:0,

            scale:.8,

            duration:2,

            ease:"power2.out"

        }

    );

    gsap.from(

        ".blessing-box",

        {

            opacity:0,

            y:40,

            duration:1.5,

            delay:1

        }

    );

    setTimeout(startBlessing,1200);

    const music = document.getElementById("krishnaMusic");

music.volume = 0.50; // 50% volume

music.currentTime = 0;

music.play().catch(() => {});

}

/* ==========================================================
   MEMORY GALLERY
========================================================== */

const memories = [

{
image:"assets/images/memory1.png",
text:"No matter what life brings your way, always stay happy and keep smiling.✨"
},

{
image:"assets/images/memory2.png",
text:"Never let this smile fade away, because it's my favorite.😊"
},

{
image:"assets/images/memory3.png",
text:"You look cute even when you're angry.🤗"
},

{
image:"assets/images/memory4.png",
text:"Your elegance has a charm of its own, and I really like it.💕"
},

{
image:"assets/images/memory5.png",
text:"Your playful nature is what attracts me the most.🫶"
},

{
image:"assets/images/memory6.png",
text:"No matter what life brings, always stay confident and believe in yourself. ✨"
},

{
image:"assets/images/memory7.png",
text:"One thing I'll definitely miss is seeing you in your school uniform.😔"
}

];

let currentMemory = 0;

function showMemory(index){

const img=document.getElementById("memoryImage");
const msg=document.getElementById("memoryMessage");
const progress=document.getElementById("galleryProgress");

img.src=memories[index].image;

typeMemory(memories[index].text);

progress.innerHTML=(index+1)+" / "+memories.length;

document.getElementById("progressFill").style.width=

((index+1)/memories.length*100)+"%";

gsap.fromTo(

".memory-card",

{

rotationY:180,
opacity:0,
scale:.88

},

{

rotationY:0,
opacity:1,
scale:1,
duration:.7,
ease:"back.out(1.5)"

}

);

}

document.getElementById("nextMemory").addEventListener("click",()=>{

currentMemory++;

if(currentMemory>=memories.length){

// letter section yaha aayega

showLetter();

return;

}

gsap.to(".memory-card",{

rotationY:-180,

scale:.88,

opacity:0,

duration:.45,

ease:"power2.in",

onComplete(){

showMemory(currentMemory);

}

});

gsap.fromTo(

".glassShine",

{

left:"-150%"

},

{

left:"220%",

duration:1.3,

delay:.3,

ease:"power2.out"

});

});

function showGallery(){

    playMusic("galleryMusic");

App.show("gallery");

currentMemory=0;

showMemory(currentMemory);

setInterval(createHeart,900);

}


/* ==========================================================
   KRISHNA CONTINUE BUTTON
========================================================== */

const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {

    const music = document.getElementById("krishnaMusic");

    if (music) {

        gsap.to(music, {
            volume: 0,
            duration: 1,
            onComplete: () => {
                music.pause();
                music.currentTime = 0;
                showGallery();
            }
        });

    } else {

        showGallery();

    }

});

function typeMemory(text){

const box=document.getElementById("memoryMessage");

box.innerHTML="";

let i=0;

const typing=setInterval(()=>{

box.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(typing);

}

},28);

}

function createHeart(){

const area=document.getElementById("floatingHearts");

const heart=document.createElement("div");

heart.className="fHeart";

heart.innerHTML="🤍";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

area.appendChild(heart);

gsap.to(heart,{

y:-window.innerHeight-150,

x:(Math.random()-.5)*120,

rotation:360,

opacity:0,

duration:6+Math.random()*3,

ease:"none",

onComplete(){

heart.remove();

}

});

}

const letterMessage=`
Wishing you a very happy birthday my dear love.....💖😘🥳🥳🥳🥳
Hal 12 vage birthday wish karu chu kem ke aaj bau khusi no divas che😁 pn mu 
overthinking karin emotional thau chu🥺jyare apado love start thayo tyare me bau
khus hato ke juni badhi vat bhulin navi life chalu karis em kem ke mar jevi joiti evij
mali che mn. Apade banne vachhe true love che❣️ apade kyare aek bijan 6hodva ke
timepass karva love nato karyo hato.

Mn khabar che ke apade sathe vadhar time spend nhi karyo. Apadu releshionship
long distance maj gayu che😳.tn khabar to hasej ke long distance kaik kharab phase che.
Overthinking thay jem hal thayj che apada banne vachhe. Apada ne bau time thayo
malya bhi nhi😳 bs message ane call kyare kyarek🥺 pn jyare me public ma 
kyak couple jovu tyare mn tar yadd aave ke kash tu mar jode joyk😭😭😭. Mtlb mar
fellings tar sathe jodai gai che. Aa badhu join me kyarek to roi bhi jau😣😣 meto
vicharyu hatu ke apade hamesha sathe resu ane badha sapna pura karsu😊😊pn 
khabar nai have apada banne vache hu thay che ke b up ni vat vachee aave che evu 
kem yarr... ano ans to mar jode nhi kadach long distance nade che...... kai problem 
hase to malin solved karsu. Badhi vat nu solution break up j na hoy.....

Kyarek time malse tyare apade malsu ane badhu solution lavsu..  trust che mn 
ke badhu solve thai jase...😓tn mar par kai vat no gusso hoy to kai sake che tu.. marje bs
mn jyare malsu tyare....mu tar ane mar banne nu dil dukhava nhi mangto.. kadach tn 
hal break up keva ma essay lagtu hase pn aatlu essay nhi😣🥺😳 
tu rai lais mar vagr b up karin bhuli jais tartj.. me to aavo vicharto bhi nhi..

Mn lage tya sudhi to tu bhi mar thi dur nhi thava mangti sayad kai biju reasons bhi
hoi sake je ru mn kai na sakti hoy. Trust rakh thai jase solve bahdu..jagda kar lesu 
apade kaik bs😉😉 pn sathej resu.. har man lau chu kyarek to tar vise vicharin pn
strong rau chu to bhi roi jau chu kyarek to😭😭

Mu always tar sathej chu.. love karyo che to nibhavis me dur to na thava dau tn.. 
tn kadach aa badhu nibandh jevu lagtu hase😅 pn me koi vat bija jode shere nhi karti 
sakto tar sivay..tn kain mn haru feel thay😊 mn nhi khabar ke have tu agal su vicharis 
mar sathe rais ke nai pn me always tar sathej reva mangu chu.. tn khabar mane chen
tari ek line bau yadd aave je tu mn har time keti hati chal  Guess kar 🤔🤔 mn khabar che
nai yadd aave tn mej kau "ak maren" aavuj kaik hatun kadach to 😅 tuto bhuli 
bhi gai hase kadach to mn to yadd che tar badhi vato..

aa badhu vanchin face pr smile ☺ lavje mn saru lagse🤗 tar mate special day che to
khuss reje😊😊

Once again wish you a very happy birthday my dear wife 🥰😘💞
🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳
'
function showLetter(){

    playMusic("letterMusic");

App.show("letter");

gsap.from(".envelope",{

scale:.7,

opacity:0,

duration:1

});

}

document.getElementById("envelope").addEventListener("click",()=>{

gsap.to(".envelopeFlap",{

rotationX:-180,

duration:1

});

gsap.to("#letterPaper",{

opacity:1,

y:-35,

duration:1,

delay:.5

});

setTimeout(typeLetter,900);

});

function typeLetter(){

const box=document.getElementById("letterText");

box.innerHTML="";

let i=0;

const timer=setInterval(()=>{

box.innerHTML+=letterMessage.charAt(i);

i++;

if(i>=letterMessage.length){

clearInterval(timer);

const btn=document.getElementById("letterContinue");

btn.style.display="block";

gsap.from(btn,{

opacity:0,

y:30,

duration:.8

});

gsap.to("#letterSignature",{

opacity:1,

duration:1,

delay:.5

});

}

},28);

}

document.getElementById("letterContinue").addEventListener("click",()=>{

App.show("cake");

});

/* ==========================================================
   MUSIC MANAGER
========================================================== */

function stopAllMusic(){

    const musics=[

        "birthdayMusic",
        "galleryMusic",
        "letterMusic",
        "giftMusic",
        "reasonsMusic",

    ];

    musics.forEach(id=>{

        const music=document.getElementById(id);

        if(!music) return;

        gsap.to(music,{

            volume:0,

            duration:.0,

            onComplete(){

                music.pause();
                music.currentTime=0;
                music.volume=.3;

            }

        });

    });

}

function playMusic(id){

    stopAllMusic();

    const music=document.getElementById(id);

    if(!music) return;

    music.volume=0;

    music.play().catch(()=>{});

    gsap.to(music,{
        volume:0.3,
        duration:2
    });

}

function playSound(id, volume = 0.5){

    const sound = document.getElementById(id);

    if(!sound) return;

    sound.pause();
    sound.currentTime = 0;
    sound.volume = volume;

    sound.play().catch(()=>{});

}

const blowBtn=document.getElementById("blowBtn");

if(blowBtn){

blowBtn.onclick=()=>{

const flame=document.getElementById("flame");

gsap.to(flame,{

opacity:0,
scale:0,
duration:.6,

onComplete(){

flame.style.display="none";

confetti({

particleCount:250,

spread:180,

origin:{
y:.6
}

});

}

});

};

}

function cutCake(){

const cake=document.getElementById("birthdayCake");

cake.classList.add("cut");

document.querySelectorAll(".flame").forEach(f=>{

gsap.to(f,{
opacity:0,
scale:0,
duration:.4
});

});

confetti({
particleCount:220,
spread:120,
origin:{y:.6}
});

setTimeout(()=>{

    startFinale();

},2500);

}

setTimeout(()=>{

createBalloons();

},2000);

function createBalloons(){

for(let i=0;i<25;i++){

const b=document.createElement("div");

b.className="balloon";

b.style.left=Math.random()*100+"vw";

b.style.background=
`hsl(${Math.random()*360},90%,65%)`;

document.body.appendChild(b);

gsap.to(b,{

y:-window.innerHeight-300,

duration:6+Math.random()*3,

delay:Math.random(),

ease:"none",

onComplete:()=>b.remove()

});

}

}

function createHearts(){

for(let i=0;i<20;i++){

const heart=document.createElement("div");

heart.className="floating-heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*20)+"px";

document.body.appendChild(heart);

gsap.fromTo(

heart,

{

y:window.innerHeight,

opacity:0

},

{

y:-200,

opacity:1,

duration:5+Math.random()*3,

delay:Math.random(),

ease:"none",

onComplete:()=>heart.remove()

}

);

}

}

function cutCake(){

const cake=document.getElementById("birthdayCake");

cake.classList.add("cut");

document.querySelectorAll(".flame").forEach(f=>{

gsap.to(f,{

opacity:0,
scale:0,
duration:.4

});

});

confetti({

particleCount:220,

spread:120,

origin:{y:.6}

});

playSound("cutSound",0.8);

setTimeout(()=>{

playSound("cheerSound",0.7);

createBalloons();

createHearts();

startFireworks();

},300);

setTimeout(()=>{

App.show("final");

},4000);

}

/* ==========================================================
   FIREWORKS
========================================================== */

const fireCanvas = document.getElementById("fireworks");

let fireCtx = null;

if(fireCanvas){

fireCtx = fireCanvas.getContext("2d");

}

let fireworks=[];

function resizeFireworks(){

fireCanvas.width=window.innerWidth;
fireCanvas.height=window.innerHeight;

}

if(fireCanvas){

resizeFireworks();

window.addEventListener("resize",resizeFireworks);

}

function launchFirework(){

const x=Math.random()*fireCanvas.width;
const y=Math.random()*fireCanvas.height*.5;

for(let i=0;i<80;i++){

fireworks.push({

x:x,
y:y,

dx:(Math.random()-.5)*8,

dy:(Math.random()-.5)*8,

life:80,

color:`hsl(${Math.random()*360},100%,60%)`

});

}

}

function animateFireworks(){

    if(!fireCanvas || !fireCtx) return;

    fireCtx.clearRect(0,0,fireCanvas.width,fireCanvas.height);

    fireworks.forEach((p,index)=>{

        p.x+=p.dx;
        p.y+=p.dy;

        p.dy+=0.05;

        p.life--;

        fireCtx.beginPath();

        fireCtx.arc(p.x,p.y,2,0,Math.PI*2);

        fireCtx.fillStyle=p.color;

        fireCtx.fill();

        if(p.life<=0){

            fireworks.splice(index,1);

        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

function startFireworks(){

if(!fireCanvas) return;

fireCanvas.style.display="block";

let count=0;

const interval=setInterval(()=>{

launchFirework();

count++;

if(count>12){

clearInterval(interval);

setTimeout(()=>{

fireCanvas.style.display="none";

},4000);

}

},600);

}

/* ==========================================================
   GIFT BOX
========================================================== */

const giftBox = document.getElementById("giftBox");
const openGiftBtn = document.getElementById("openGiftBtn");

if (giftBox && openGiftBtn) {

    function openGift() {

        // Gift already opened?
        if (giftBox.classList.contains("open")) return;

        giftBox.classList.add("open");

        // Confetti 🎉
        confetti({
            particleCount: 300,
            spread: 180,
            origin: { y: 0.6 }
        });

        // Button disable
        openGiftBtn.disabled = true;
        openGiftBtn.innerHTML = "❤️ Opening...";

        // Box animation
        gsap.fromTo(
            ".gift-box",
            {
                scale: 0.9
            },
            {
                scale: 1.08,
                duration: 0.4,
                yoyo: true,
                repeat: 1
            }
        );

        // Glow
        gsap.to(".gift-box", {
            boxShadow: "0 0 80px rgba(255,255,255,.8)",
            duration: 1
        });

       setTimeout(() => {
        
        document.getElementById("gift").style.display="none";

document.getElementById("reasons").style.display="flex";

document.getElementById("reasons").scrollIntoView({

    behavior:"smooth"


    });

}, 2000);
    }

    giftBox.onclick = openGift;
    openGiftBtn.onclick = openGift;

}

/* ==========================================================
   372 REASONS BOOK
========================================================== */

// 👇 Abhi demo ke liye 5 reasons hain.
// Baad me inhe 372 tak badha dena.

const reasons = [

"🌸 Tari smile jovu n aetle duniya vadhare sundar lage chhe.",
"✨ Because your eyes always make my heart smile.",
"😁 Tari harkato mari smile nu main karan bane chhe",
"💕 koi pan kaam karto hoy har vastu tara thi automatic relate thay chhe",
"🌼 Tari simplicity mane roj navi rite game che.",
"💖 Tara sathe vaat chalu karvi mushkil lage che pan agar chalu thai toh gurntee mari kadi khtm nai thava dau.",
"💌 Tari aek notification no wait mane roj hoy chhe",
"❤️ Ane sauthi moto reason... tu bas 'tu' che.",
"🌹 Tara message thi mood instantly happy thai jay(aavto nahi ae alg vaat s).",
"🌈 Your kindness makes this world feel much brighter.",
"💖 Tane aek vakht jovu ae mara divas no best moment hoy.",
"🌙 Teri aankhon mein khamoshi bhi pyaari lagti hai.",
"😊 Tu hasse etle badhu perfect lagva lage che.",
"☀️ Because your laugh sounds sweeter than favorite songs.",
"💕 Tari yaad vagar divas adhuro adhuro lage che.",
"🌺 Tera naam sunte hi chehra automatically muskuraata hai.",
"🫶 Tari care nana gestures ma pan dekhay che.",
"⭐ You make silence feel peaceful instead of awkward.",
"🌻 Tara sathe badhu easy ane beautiful lage che.",
"💝 Teri presence sab kuch khubsurat bana deti hai.",
"🌸 Tari aankho ma alag j sukoon dekhay che.",
"💫 Because your smile brightens even my darkest days.",
"❤️ Tu online aave etle excitement vadhi jai che.",
"🌼 Teri ek smile pura din special bana deti.",
"🌷 Tara words mara mate hamesha special raheshe.",
"✨ You inspire me without even trying every day.",
"💌 Tari innocence mara dil ne ghani game che.",
"🌙 Tujhko dekh kar har pal yaadgaar ban jaata hai.",
"🌹 Tara sathe hasvu mara mate therapy jevu che.",
"💖 Because your happiness secretly becomes my happiness too.",
"🌈 Tari smile joya pachi badhu saras lage che.",
"😊 Teri awaaz dil ko shaanti si de jaati.",
"☀️ Tara sathe chalvu pan journey jevu lage.",
"🌺 Your presence feels like home to my heart.",
"💕 Tari vaatoma alag j positivity hoy che.",
"🫶 Tera 'hmm' bhi bahut pyara lagta hai mujhe.",
"🌸 Tari respect karvi naturally easy lage che.",
"⭐ Because every memory with you feels priceless forever.",
"🌼 Tane yaad karu tyare khbr nai time bau jaldi puro thay chhe.",
"❤️ Teri muskaan meri favorite happiness ban chuki hai.",
"🌷 Tari honesty mane roj impress karti rahe che.",
"💫 You carry kindness wherever your beautiful heart goes.",
"🌙 Tara sathe ni silence pan comfortable lage che.",
"💝 Teri aankhon mein ek alag hi duniya dikhe.",
"🌹 Tari ek selfie divas ne beautiful banave che.",
"✨ Because meeting you changed many little beautiful things.",
"🌸 Taru naam sambhalta heartbeat thodi vadhi jai che.",
"🌻 Teri naam dil ko bahut special feel karata he.",
"💖 Tari hasi mara stress ne instantly gayab kare.",
"⭐ You are my favorite unexpected beautiful coincidence ever.",
"🌷 Teri awaaj dil ko hamesha sukoon deti hain.",
"🌼 Tara sathe darek pal yaadgar bani jai che.",
"✨ Because your happiness makes my heart genuinely happier.",
"❤️ Teri muskurahat har din naya ehsaas deti hai.",
"🌸 Tari vaat sambhalvu mane ghanu game (kadi face 2 face vaat nhi ae alg vaat chhe).",
"🌷 You make me feel incredibly meaningful everyday.",
"💌 Taru 'hii' pan hope aape che.",
"🌙 Teri simplicity sabse alag aur khoobsurat lagti hai.",
"🌹 Tari aankho ma lakho sundar sapna dekhay che.",
"☀️ Because your smile deserves endless beautiful compliments everyday.",
"💕 Tara sathe no samay khub jaldi nikli jai.",
"🌺 Teri aankhe bina bole sab samjha deti hai.",
"🫶 Tari presence thi atmosphere pan peaceful bani jai.",
"⭐ You always leave beautiful memories behind every meeting.",
"🌈 Tara words mara mood ne instantly better kare.",
"💖 Teri awaaz dil ko ajeeb sa sukoon deti.",
"🌼 Tari kindness badha karta alag dekhay che.",
"✨ Because you make ordinary smiles feel unforgettable forever.",
"❤️ Tane game jetlu bhulvano try karu pan aa vastu mane impossible lage chhe.",
"🌷 Teri aankhein sach bolna kabhi nahi bhoolti.",
"🌙 Tari yaad random moments ma pan avi jai.",
"💌 You are my favorite reason to smile daily.",
"🌹 Tara sathe badha worries halka halka lage che.",
"❤️ Teri smile joi n badhi negative feelings gayab thai joy s.",
"🌸 Tari honesty mane roj inspire karti rahe che.",
"⭐ Because your heart is even prettier inside.",
"🌺 Tara sathe ni friendship priceless gift jevi lage.",
"❤️ Teri presence har jagah roshan si kar deti.",
"🌼 Tari smile thi badho stress ochho thai jai.",
"🌈 You make life feel softer and much brighter.",
"💫 You make every ordinary moment feel magical somehow.",
"🌙 Teri har chhoti baat dil chhoo jaati hai.",
"🌷 Tari style simple pan ghani classy lage che.",
"✨ Because your kindness speaks louder than beautiful words.",
"🫶 Tara sathe ni memories khub precious lage che.",
"🌹 Teri aankhon mein alag hi confidence dikhta hai.",
"☀️ Tari presence mane hamesha special feel karave che.",
"💌 You never fail to make me smile naturally.",
"🌼 Tara sathe chalvu pan beautiful journey jevu lage.",
"❤️ Teri hasi meri favorite background music ban gayi.",
"🌸 Tari innocence mara dil ne instantly jiti le.",
"🌺 Because your existence makes this world much better.",
"🌙 Tara naam sambhalta smile automatically avi jai che.",
"💕 Teri respect aur values bahut inspiring lagti hain.",
"🌷 Tari sathe darek vaat meaningful lagti rahe che.",
"⭐ You make rejection feel harder than expected.",
"🌹 Taru dukh indirectly maru bani jay chhe",
"❤️ Teri positivity har mushkil aasaan bana deti hai.",
"🌼 Tari ek smile badhu beautiful banavi de che.",
"✨ Because meeting you feels like beautiful destiny always.",
"💖 Mara badha favorite reasons aakhir ma... tu j che.",
"🌸 Tara hasvathi mara divas ma rang bharai jai.",
"✨ Because your smile brightens every little corner beautifully.",
"❤️ Teri masoomiyat dil ko baar baar jeet leti.",
"🌼 Tane jota j badho stress bhulai jai che.",
"🌷 You make every heartbeat feel wonderfully meaningful everyday.",
"💌 Tara sathe no darek moment khub special lage.",
"🌙 Teri aankhon mein sukoon ka chhota sa ghar.",
"🌹 Tari smile mane roj lucky feel karave che.",
"☀️ Because your presence makes everything feel wonderfully alive.",
"💕 Tara sathe hasvu sauthi best therapy lage che.",
"🌺 Teri baatein dil mein der tak rehti hain.",
"🫶 Tari smile joya pachi mood fresh thai jai.",
"⭐ You make beautiful memories without even realizing it.",
"🌈 Tara sathe ni friendship khub precious gift lage.",
"❤️ Teri ek nazar dil ko shaant kar deti.",
"🌸 Tari simplicity sauthi vadhu attractive lage che mane.",
"💖 Because your kindness deserves endless appreciation every single day.",
"🌼 Tara message joyine excitement instantly vadhi jai che.",
"🌹 Teri hasi meri favorite melody ban chuki hai.",
"🌙 Tari sathe vaat karu etle time udi jai.",
"✨ You always bring peace into my noisy thoughts.",
"💌 Tara naam letaj dil thodu fast dhadke che.",
"🌷 Teri presence har jagah positivity faila deti hai.",
"🌺 Tari honesty mane roj impress karti rahe che.",
"☀️ Because your heart feels beautifully pure and genuine.",
"💕 Tara sathe ni darek selfie perfect memory bane.",
"❤️ Teri muskaan har baar nayi umeed de jaati.",
"🌸 Tari aankho ma endless dreams chamakta dekhay che.",
"⭐ You make even rainy days feel beautifully warm.",
"🌼 Tara sathe chalvu favorite habit bani gayu che.",
"🌹 Teri awaaz dil par seedha asar karti hai.",
"🫶 Tari yaado mane roj smile api jai che.",
"✨ Because your laughter feels sweeter than happy songs.",
"🌷 Tara sathe ni silence pan ghani peaceful lage.",
"❤️ Teri smile sabse alag aur sachchi lagti hai.",
"🌈 Tari ek compliment akho divas yaad rahe che.",
"💖 You make happiness look amazingly simple every single day.",
"🌙 Tara sathe ni vaat kyare boring nathi lagti.",
"🌺 Teri aankhein sabse khoobsurat kahani likhti hain.",
"🌸 Tari presence thi badhu positive positive lage che.",
"☀️ Because you make ordinary smiles absolutely unforgettable forever.",
"💌 Tara sathe coffee pan celebration jevi lage che.",
"❤️ Teri simplicity hi sabse bada beautiful surprise hai.",
"🌼 Tari presence thi badha worries halka thai jai.",
"⭐ You make my heart choose you every time.",
"🌹 Tara sathe no samay hamesha ochho lage che.",
"💕 Teri hasi meri favorite daily motivation ban gayi.",
"🌷 Tari respect mara dil ma roj vadhti jai.",
"✨ Because your existence makes countless moments more beautiful.",
"❤️ Mara dil nu favorite answer hamesha tu j che.",
"🌸 Tara sathe darek vaat dil ne sparshi jai che.",
"✨ Because your smile makes every moment worth remembering.",
"❤️ Teri ek muskaan saari thakaan mita deti hai.",
"🌼 Tari aankho ma shanti ane prem banne dekhay.",
"🌷 You make every hello feel incredibly special every time.",
"💌 Tara message aave etle smile automatically avi jai.",
"🌙 Teri baatein har baar dil chhoo jaati hain.",
"🌹 Tari sathe ni yaado khub amulya lage che.",
"☀️ Because your happiness feels strangely important to me.",
"💕 Tara sathe bethu etle samay udi jai che.",
"🌺 Teri simplicity sabse khoobsurat cheez lagti hai.",
"🫶 Tari care vagar pan feel thai jai che.",
"⭐ You make little things feel beautifully unforgettable always.",
"🌈 Tara sathe chalvu pan khas feeling aape che.",
"❤️ Teri hasi meri duniya roshan kar deti hai.",
"🌸 Tari honesty mara mate ghani inspiring lage che.",
"💖 Because your heart shines brighter than precious diamonds.",
"🌼 Tara sathe vaat karvi roj ochhi lage che.",
"🌙 Tari smile joya pachi badhu easy lage che.",
"✨ You always make my heart feel completely peaceful.",
"💌 Tara naam mara mate sauthi sweet word che.",
"🌷 Teri positivity har mushkil aasaan bana deti hai.",
"🌺 Tari sathe no darek divas memorable bani jai.",
"☀️ Because your kindness changes hearts without saying anything.",
"💕 Tara sathe ni friendship blessing jevi lage che.",
"❤️ Teri ek awaaz pura mood change kar deti.",
"🌸 Tari presence mara mate lucky charm jevi che.",
"⭐ You make every goodbye harder than yesterday always.",
"🌼 Tara sathe hasvu favorite routine bani gayu che.",
"🌹 Teri respect aur nature bahut special lagte hain.",
"🫶 Tari vaat sambhalta badhi tension bhulai jai che.",
"✨ Because you always make everything feel beautifully lighter.",
"🌷 Tara sathe ni khamoshi pan ghani sundar lage.",
"❤️ Teri aankhein sabse pyari kahani sunati hain.",
"🌈 Tari smile thi badho divas colorful bani jai.",
"💖 You make my heart smile without any reason.",
"🌙 Tara sathe no darek pal priceless lage che.",
"🌺 Teri aankhe hamesha dil ko sukoon deti hai.",
"🌸 Tari innocence roj mane impress karti rahe che.",
"☀️ Because your soul feels beautifully calm and gentle.",
"💌 Tara sathe vaat karta smile rokati nathi.",
"❤️ Teri har choti baat bahut pyari lagti hai.",
"🌼 Tari sathe ni memories hamesha smile aape che.",
"⭐ You make my world brighter just by existing.",
"🌹 Tara sathe coffee pan unforgettable memory bani jai.",
"💕 Teri muskurahat meri favorite daily blessing ban gayi.",
"🌷 Tari ek nazar dil ne shant kari de.",
"✨ Because every heartbeat whispers your beautiful name softly.",
"❤️ Mara dil nu sauthi sundar chapter hamesha tu che.",
"🌸 Tara sathe darek savar vadhu sundar lage che.",
"✨ Because your smile melts every little fear away.",
"❤️ Teri aankhon mein saccha pyaar sa dikhta hai.",
"🌼 Tari hasi mara dil ne shanti aape che.",
"🌷 You make every heartbeat feel warm and meaningful.",
"💌 Tara sathe vaat karta badhu bhulai jai che.",
"🌙 Teri simplicity har kisi se alag lagti hai.",
"🌹 Tari presence thi darek jagya ghar jevi lage.",
"☀️ Because your kindness makes everything beautifully unforgettable forever.",
"💕 Tara ek message divas banavi de che.",
"🌺 Teri baatein hamesha dil mein bas jaati hain.",
"🫶 Tari sathe no samay bahu jaldi nikli jai.",
"⭐ You make happiness look so effortlessly beautiful everyday.",
"🌈 Tara smile joya pachi hope fari mali jai.",
"❤️ Teri aankhe bina bole sab samjha deti hai.",
"🌸 Tari aankho ma mari favorite duniya dekhay che.",
"💖 Because your laugh sounds better than favorite songs.",
"🌼 Tara sathe ni darek yaad khub special che.",
"🌹 Teri ek nazar din bana deti hai.",
"🌙 Tari sathe hasvu mane ghanu game che.",
"✨ You make every ordinary evening feel magical somehow.",
"💌 Tara naam mara dil nu favorite naam che.",
"🌷 Teri muskaan har baar nayi umeed jagati hai.",
"🌺 Tari care mara mate priceless gift jevi che.",
"☀️ Because your heart deserves endless love and respect.",
"💕 Tara sathe coffee pan perfect date jevi lage.",
"❤️ Teri awaaz sunte hi sukoon mil jaata hai.",
"🌸 Tari vaatoma ek alag j sweetness hoy che.",
"⭐ You make every little memory shine forever brightly.",
"🌼 Tara sathe chalvu sauthi peaceful feeling che.",
"🌹 Teri hasi meri favorite reason ban chuki hai.",
"🫶 Tari honesty mara mate ghani valuable lage che.",
"✨ Because your soul feels wonderfully pure every single day.",
"🌷 Tara sathe ni silence pan bahu pyari lage.",
"❤️ Teri presence har pal khaas bana deti hai.",
"🌈 Tari smile mara badha worries door kari de.",
"💖 You make my life brighter without even trying.",
"🌙 Tara sathe vaat puri karvi mushkil lage che.",
"🌺 Teri aankhon mein sapne bahut khoobsurat lagte hain.",
"🌸 Tari sathe ni friendship mari lucky blessing che.",
"☀️ Because you make simple moments feel absolutely priceless.",
"💌 Tara message ni wait pan sweet lage che.",
"❤️ Teri positivity sabko inspire karti rehti hai.",
"🌼 Tari yaado hamesha smile lai aave che.",
"⭐ You make my heart believe beautiful things again.",
"🌹 Tara sathe no darek divas celebration jevo lage.",
"💕 Teri ek smile hazaar khushiyan de jaati hai.",
"🌷 Tari respect roj mara dil ma vadhe che.",
"✨ Because you are beautifully different from everyone else.",
"❤️ Mara badha favorite moments ma tu j che.",
"🌸 Tara sathe darek mulaqat yaadgar bani jai che.",
"✨ Because your smile makes my heart feel complete.",
"❤️ Teri baatein hamesha dil ke kareeb rehti hain.",
"🌼 Tari ek smile badho mood change kari de.",
"🌷 You make every ordinary second feel truly magical.",
"💌 Tara sathe ni friendship mara mate priceless che.",
"🌙 Teri hasi meri favorite melody ban gayi hai.",
"🌹 Tari aankho ma alag j chamak dekhay che.",
"☀️ Because your kindness deserves endless admiration every single day.",
"💕 Tara message joyine badhi thakan bhulai jai.",
"🌺 Teri smile sabse alag aur bahut pyari lagti.",
"🫶 Tari sathe no samay hamesha ochho pade che.",
"⭐ You make every memory shine brighter than yesterday.",
"🌈 Tara sathe hasvu mara divas nu highlight che.",
"❤️ Teri ek muskaan dil ko jeet leti hai.",
"🌸 Tari simplicity mara mate perfect definition che.",
"💖 Because your presence feels like peaceful sunshine everyday.",
"🌼 Tara naam sambhalta smile automatically avi jai.",
"🌹 Teri aankhon mein sukoon hi sukoon milta hai.",
"🌙 Tari sathe vaat karta waqt udi jai che.",
"✨ You always make my happiest moments even better.",
"💌 Tara sathe chalvu khub saras feeling aape che.",
"❤️ Teri positivity har din motivate karti rehti hai.",
"🌺 Tari care mara mate sauthi precious gift che.",
"☀️ Because your heart makes everything feel wonderfully alive.",
"💕 Tara sathe ni yaado khub close lage che.",
"🌷 Teri ek awaaz dil ko shaanti de jaati.",
"🌸 Tari honesty mane roj inspire karti rahe che.",
"⭐ You make every little smile worth remembering forever.",
"🌼 Tara sathe ni khamoshi pan sukoon aape che.",
"🌹 Teri simplicity sabse khoobsurat quality lagti hai.",
"🫶 Tari smile joya pachi badhu easy lage che.",
"✨ Because your laughter heals invisible pieces of me.",
"🌷 Tara sathe ni darek vaat meaningful lage che.",
"❤️ Teri ek nazar dil ko sambhal leti hai.",
"🌈 Tari sathe darek divas special bani jai che.",
"💖 You make love feel beautifully simple and honest.",
"🌙 Tara message mara mate favorite notification bani gayo.",
"🌺 Teri muskaan meri roz ki happiness ban gayi.",
"🌸 Tari sathe coffee pan memory bani jai che.",
"☀️ Because your soul feels brighter than morning sunshine.",
"💌 Tara naam mara dil ni favorite dhadkan che.",
"❤️ Teri hasi meri duniya aur sundar bana deti.",
"🌼 Tari presence thi badhu positive feel thai che.",
"⭐ You make my heart smile without saying anything.",
"🌹 Tara sathe ni darek yaad bahu precious che.",
"💕 Teri aankhon mein meri khushi nazar aati hai.",
"🌷 Tari respect hamesha mara dil ma raheshe.",
"✨ Because meeting you feels like beautiful destiny everyday.",
"❤️ Mara badha sapna ma sauthi sundar tu j che.",
"🌸 Tara sathe darek divas navo utsav lage che.",
"✨ Because your smile always feels like pure sunshine.",
"❤️ Teri hasi dil ki sabse pyari dhun hai.",
"🌼 Tari sathe vaat karta badhu easy lage che.",
"🌷 You make every heartbeat bloom with quiet happiness.",
"💌 Tara naam sambhalta aankho chamki uthe che.",
"🌙 Teri simplicity sabse pyari baat lagti hai.",
"🌹 Tari sathe no darek pal khas bani jai.",
"☀️ Because your kindness changes ordinary days into memories.",
"💕 Tara smile mara mood ne instantly change kare.",
"🌺 Teri awaaz dil ko sukoon de jaati hai.",
"🫶 Tari care mane roj special feel karave che.",
"⭐ You make every goodbye feel harder than ever.",
"🌈 Tara sathe hasvu sauthi best feeling lage che.",
"❤️ Teri aankhein bahut kuch keh jaati hain chupke.",
"🌸 Tari honesty hamesha dil jiti le che.",
"💖 Because your heart deserves endless love and respect.",
"🌼 Tara sathe chalvu sauthi peaceful moment lage che.",
"🌹 Teri ek smile hazaar khushiyan de jaati.",
"🌙 Tari yaad thi pan smile avi jai che.",
"✨ You make ordinary conversations beautifully unforgettable every single time.",
"💌 Tara sathe ni friendship mara mate blessing che.",
"❤️ Teri positivity har din nayi umeed deti hai.",
"🌺 Tari aankho ma shanti ane prem dekhay che.",
"☀️ Because your presence feels like my favorite place.",
"💕 Tara sathe ni memories khubaj precious lage che.",
"🌷 Teri muskaan meri roz ki inspiration ban gayi.",
"🌸 Tari simplicity badha karta alag dekhay che.",
"⭐ You always make my heart feel wonderfully calm.",
"🌼 Tara message joyine excitement vadhi jai che.",
"🌹 Teri ek nazar sab kuch badal deti hai.",
"🫶 Tari sathe no samay bahu jaldi nikli jai.",
"✨ Because your laughter brightens even cloudy, silent afternoons.",
"🌷 Tara smile thi badho stress door thai jai.",
"❤️ Teri baatein dil mein hamesha zinda rehti hain.",
"🌈 Tari sathe ni silence pan ghani pyari lage.",
"💖 You make my life feel beautifully complete every day.",
"🌙 Tara naam mara dil nu favorite geet che.",
"🌺 Teri care sabse alag aur sachchi lagti hai.",
"🌸 Tari sathe darek moment unforgettable bani jai che.",
"☀️ Because your happiness secretly becomes mine every day.",
"💌 Tara sathe coffee pan perfect memory bani jai.",
"❤️ Teri aankhon mein meri khushi nazar aati hai.",
"🌼 Tari respect roj mara dil ma vadhti jai.",
"⭐ You make every little moment worth remembering forever.",
"🌹 Tara sathe no connection bahu special lage che.",
"💕 Teri hasi meri duniya roshan karti rehti hai.",
"🌷 Tari sathe darek vaat dil sudhi pohnche che.",
"✨ Because you are my favorite beautiful coincidence forever.",
"❤️ Mara dil ni sauthi sundar feeling... tu j che.",
"🌸 Tara sathe vitavel darek pal khajano lage che.",
"✨ Because your smile is my favorite kind of peace.",
"❤️ Teri muskaan meri har dua ka jawab lagti.",
"🌼 Tari aankho ma mara sapna chupayela lage che.",
"🌷 You make forever sound beautifully possible to my heart.",
"💌 Tara sathe ni darek yaad amar bani gai.",
"🌙 Teri awaaz dil ka sabse pyara sukoon hai.",
"🌹 Tari sathe no darek divas gift jevo lage.",
"☀️ Because your kindness makes my world endlessly brighter.",
"💕 Tara naam sambhalta dil shant thai jai che.",
"🌺 Teri hasi meri duniya ki sabse pyari awaaz.",
"🫶 Tari sathe hasvu mara mate sauthi moti khushi.",
"⭐ You are every beautiful reason behind my smile.",
"🌼 Tari care vagar pan prem feel thai jai.",
"❤️ Teri aankhon mein meri khushiyan basti hui lagti.",
"🌷 Tari sathe nu future khub sundar imagine thay che.",
"✨ Because every heartbeat quietly chooses only you, always.",
"🌹 Tara sathe badhu adhik sundar lagva lage che.",
"💖 Teri ek nazar dil ko hamesha jeet leti.",
"🌸 Tari sathe ni story mara mate favorite che.",
"🌈 Because meeting you became my life's sweetest blessing.",
"❤️ Mara dil nu pehlu, antim ane sauthi sundar karan... tu j che. ♾️"

];

let currentReason = 0;

const reasonText = document.getElementById("reasonText");
const reasonNumber = document.getElementById("reasonNumber");
const reasonProgress = document.getElementById("reasonProgress");

const nextReasonBtn = document.getElementById("nextReasonBtn");
const prevReasonBtn = document.getElementById("prevReasonBtn");

function showReason(index){

    if(!reasonText) return;

    currentReason = index;

    reasonText.innerHTML = reasons[currentReason];

    reasonNumber.innerHTML = currentReason + 1;

    reasonProgress.innerHTML =
        (currentReason + 1) + " / " + reasons.length;

    gsap.fromTo(

        ".reason-card",

        {
            opacity:0,
            y:30,
            scale:.96
        },

        {
            opacity:1,
            y:0,
            scale:1,
            duration:.45
        }

    );

}

if(nextReasonBtn){

nextReasonBtn.onclick = ()=>{

    if(currentReason < reasons.length-1){

        showReason(currentReason+1);

    }else{

    confetti({

        particleCount:350,

        spread:180,

        origin:{y:.6}

    });

    setTimeout(()=>{

        App.show("ending");

        playMusic("birthdayMusic");

    },1500);

}

};

}

if(prevReasonBtn){

prevReasonBtn.onclick = ()=>{

    if(currentReason>0){

        showReason(currentReason-1);

    }

};

}

showReason(0);

const surpriseBtn = document.getElementById("surpriseBtn");

if(surpriseBtn){

    surpriseBtn.onclick = ()=>{

        document.getElementById("gift").style.display="flex";

        document.getElementById("gift").scrollIntoView({

            behavior:"smooth"

        });

    };

}

const showGiftBtn = document.getElementById("showGiftBtn");

if(showGiftBtn){

    showGiftBtn.onclick = ()=>{

        App.show("gift");
        playMusic("giftMusic");
    };

}

const finalText = `

Thank you for every smile...
For every laugh...
For every beautiful memory...

You make the world brighter just by being in it.

I hope all your dreams come true.

Happy Birthday ❤️

`;

function startFinale(){

    App.show("final");
    
    createGoldParticles();

    setInterval(shootingStar,7000);

    playMusic("birthdayMusic");

    const msg=document.getElementById("finalMessage");

    msg.innerHTML="";

    let i=0;

    const typing=setInterval(()=>{

        msg.innerHTML+=finalText.charAt(i);

        i++;

        if(i>=finalText.length){

            clearInterval(typing);

        }

    },45);

    gsap.from(".final-title",{

        y:-80,
        opacity:0,
        duration:1.2

    });

    gsap.from(".final-name",{

        scale:.5,
        opacity:0,
        delay:.4,
        duration:1

    });

    gsap.from(".final-photo",{

        y:100,
        opacity:0,
        delay:1,
        duration:1.2

    });

    gsap.from(".premiumBtn",{

        opacity:0,
        y:60,
        delay:2,
        duration:1

    });

}

function createGoldParticles(){

    const container=document.getElementById("goldParticles");

    if(!container) return;

    container.innerHTML="";

    for(let i=0;i<45;i++){

        const p=document.createElement("div");

        p.className="goldParticle";

        p.style.left=Math.random()*100+"%";
        p.style.top=Math.random()*100+"%";

        container.appendChild(p);

        gsap.to(p,{

            y:-120-Math.random()*120,

            x:(Math.random()-.5)*80,

            opacity:0,

            scale:.2,

            duration:4+Math.random()*4,

            repeat:-1,

            delay:Math.random()*5,

            ease:"none"

        });

    }

}

function shootingStar(){

    const final=document.getElementById("final");

    if(!final) return;

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.left=(-250)+"px";

    star.style.top=(Math.random()*250)+"px";

    final.appendChild(star);

    gsap.to(star,{

        x:window.innerWidth+500,

        y:350,

        duration:1.5,

        ease:"power2.out",

        onComplete(){

            star.remove();

        }

    });

}

const restartBtn = document.getElementById("restartJourney");

if(restartBtn){

    restartBtn.onclick = ()=>{

        location.reload();

    };

}

restartBtn.onclick = ()=>{

    gsap.to("body",{

        opacity:0,

        duration:1.5,

        onComplete(){

            location.reload();

        }

    });

};