const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const telemimg = document.querySelector("#telem-img img")
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const coverContainer = document.querySelector(".img-container")
const shuffel = document.getElementById("random");
const songsNumbers = document.getElementById("songs-numbers")
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const fullvolume = document.getElementById("full-volume")
const mute = document.getElementById("mute")
const volumeDisplay = document.getElementById("volime-value")
var currentvolume = slider.value;
const songs = [
  "Amy Winehouse - Tears Dry On Their Own",
  "bee gees- stayin' alive",
  "Blur-End of a Century",
  "C2C - Happy (feat. Derek Martin)",
  "Cheat Codes-Put Me Back Together",
  "Dennis Lloyd - Leftovers",
  "Ed Sheeran - South of the Border (feat. Camila Cabello & Cardi B)",
  "Harry Styles - Watermelon Sugar",
  "High School Musical-We're All In This Together",
  "Linkin Park -  Waiting For The End",
  "MUSE - Get Up and Fight",
  "Orka-Cunaq",
  "אלון עדר ולהקה - היום בישראל",
  "אלון עדר ולהקה - השמרנים שוב באופנה",
  "אלון עדר ולהקה - שיר לאמא",
  "בן אלקיים - פזר עליי אביב",
  "בניה ברבי - תפסת לי מקום",
  "גידי גוב - בואי נישאר",
  "החצר האחורית - השעה מתאחרת",
  "החצר האחורית - כל האופציות על השולחן",
  "החצר האחורית - נגמרה המסיבה",
  "החצר האחורית-זה יגיע",
  "עדן בן זקן - מלכת השושנים",
  "עדן חסון-כפיות",
  "עידן רייכל-למה זה מגיע לנו",
  "שם-טוב לוי - התעוררות",
  "Benny Blanco, Halsey & Khalid - Eastside", "Billie Eilish - bad guy",
  "Cardi B - Bodak Yellow", "Dennis Lloyd - Never Go Back", "Ed Sheeran - Galway Girl", "Ed Sheeran - The A Team", "Harry Styles - Lights Up", "Little Big - Uno", "Lizzo - Good As Hell", "Post Malone -Stay", "Toto - Africa", "Travis Scott - SICKO MODE ft. Drake", "Vance Joy - Fire and the Flood", "אביתר בנאי - כלום לא עצוב", "איתי לוי - קירות", "אליעד - מסע (אקוסטי)", "גידי גוב -בלעדייך", "הפרויקט של עידן רייכל - מנעי קולך מבכי", "חנן בן ארי - אלוף העולם", "חנן בן ארי - אם תרצי", "ישי ריבו - תוכו רצוף אהבה", "עדן חסון - שמישהו יעצור אותי", "עידן רייכל - גלגל מסתובב", "עידן רייכל - לפני שייגמר", "רביד פלוטניק - בור ועם הארץ (מארח את טונה)", "שירי מרפסת -ישראל", "שם טוב לוי, ואפרים שמיר - הידעת את הדרך", "Alice Merton - No Roots", "Alt-J  - Matilda", "Alt-J - Taro", "Bobby Brown - Every Little Step", "Fall Out Boy - HOLD ME TIGHT OR DON’T", "Feker Libi-עדן אלנה", "Fkj & Masego - Tadow", "Giant Heart - theAngelcy", "Lola Marsh - Only For A Moment", "LSD - Thunderclouds ft. Sia, Diplo, Labrint", "Mac Miller - Good News", "Michael Bublé - Haven't Met You Yet", "Michael Buble - Quando Quando (Feat. Nelly Furtado)", "Michael Kiwanuka - Cold Little Heart", "Simple Plan - Everything Sucks", "Skeeter Davis - The End of The World", "The Strokes - Bad Decisions", "אריק אניישטין-קילפתי תפוז", "בניה ברבי - במקום הכי רחוק", "ג׳יין בורדו - זה עוד לא אבוד", "דנה עדיני ודניאל סלומון - רבות הדרכים - גרסת הקורונה", "הפרויקט של עידן רייכל - בקרוב", "הפרויקט של עידן רייכל - שושנים עצובות", "חנן בן ארי - מה אתה רוצה ממני", "יובל דיין - תשאל את המים", "ישי ריבו - מטבע הדברים", "עקיבא - פשוטים", "שלומי שבת ואליעד - מורידים את הירח", "Alice Merton - No Roots", "Arizona Zervas - ROXANNE", "Coco Jambo- Mr. President", "Doja Cat - Say So", "Fkj & Tom Misch - Losing My Way", "Full Trunk ft. Sivan Talmor - As a stone", "Golden Slumbers+ Carry That Weight+The End - The Beatles", "Jake Bugg - Broken", "Love & Hate -Michael Kiwanuka", "MIKA - Relax, Take It Easy", "Oasis - Wonderwall", "R.E.M. - Losing My Religion", "Red Hot Chili Peppers - Californication", "Red Hot Chili Peppers - Under The Bridge", "Rihanna - Love On The Brain", "Somewhere Over The Rainbow - Israel Kamakawiwo'Ole", "Static & Ben El, Pitbull - Further Up", "TASH SULTANA - JUNGLE", "theAngelcy - The Call", "Train - 50 Ways To Say Goodbye", "בניה ברבי - מישהו איתי כאן", "הפרויקט של עידן רייכל - Todas las Palabras", "טונה - אוח (עם אחשתיים)", "עטר מיינר - פרפר (עם דור3 ועדן דרסו)", "עטר מיינר ויובל שם טוב - הדרך שלי", "קפה שחור חזק ואלון אולארצ'יק - בתוך ענייך", "רביד פלוטניק - נענע", "תומר יוסף - אל תטוסי"

]
// console.log(currentvolume);

slider.oninput = function () {
  console.log(this.value)
  slider.value == 0 ? mute.classList.add("white-color") : mute.classList.remove("white-color"), fullvolume.classList.remove("white-color");

  if (slider.value == 100) {
    fullvolume.classList.add("white-color")
  }
  currentvolume = (this.value / 100)
  audio.volume = currentvolume
  volumeDisplay.textContent = `${Math.floor(audio.volume*100)}%`

}

// slider.addEventListener("onmouseup", () => {
//   document.getElementsByClassName("slidecontainer")[0].classList.toggle("active-slider");
//   console.log("here");
// })

function fullvolumeUp() {

  // שנעביר שיר ראשית נבדוק אם כפתור המיוט עדיין פעל
  //במידה וכן לא נרצה להסיר את העובדה שהוא לחוץ
  slider.value == 0 ? mute.classList.add("white-color") : mute.classList.remove("white-color")


  audio.volume = (slider.value / 100)
}
mute.addEventListener("click", () => {

  mute.classList.toggle("white-color")

  if (audio.volume !== 0) {
    // if the vlolime is difrrent then 0
    currentvolume = slider.value
    audio.volume = 0;

  } else {
    // if the voliume is 0
    // נעצור את האנמציה
    // put vlomue wherver the last volume was
    console.log(currentvolume);
    audio.volume = currentvolume / 100

  }

  volumeDisplay.textContent = `${Math.floor(audio.volume*100)}%`

  slider.value = audio.volume * 100

  console.log(audio.volume)
})

fullvolume.addEventListener("click", () => {

  mute.classList.remove("white-color")
  audio.volume = 1
  slider.value = 100
  volumeDisplay.textContent = `${Math.floor(audio.volume*100)}%`
})


let songindex = 0 //האינדקס שממנו נתחיל
let shuffelCounter = 0;
// מעלים את השירים
loadsongs(songs[songindex])

function loadsongs(songTitle) {
  songsNumbers.innerText = `${songindex+1}/${songs.length}`


  title.innerText = songTitle; //שמה את הטקסט שקיבלנו בטייטל

  audio.src = `music/${songTitle}.mp3` //שני השורות הבאות זה פשוט כי בתקיות חייב לשים את אותו שם!
  // cover.src = `images/${songTitle}.jpg`
  cover.src = `images/temp-cover.png`

  console.log(songindex);

  if (slider.value == 100) {
    fullvolume.classList.add("white-color")
  }
}

//לחיצה על הפליי
playBtn.addEventListener("click", () => {
  // toggle the play class

  musicContainer.classList.toggle("play")
  // start playing a song

  playmode()

  //בכל לחיצה אני בודק האם יש את הקלאס שמנגן הכל בקונטיינר
  if (musicContainer.classList.contains("play")) {
    //אם כן צריך להוריד קלאסס עצירה ולקרוא לפונקציה שמנגנת שירים
    musicContainer.classList.remove("pause")
    playmode()
    console.log("play");
  } else {
    pausemode()
    console.log("plause");
    musicContainer.classList.add("pause")
  }

})


function playmode() {

  // בתחתילת הנגינה נרצה להוסיף את הנמציה לטלם
  telemimg.style.animation = "flip-scale-up-hor 1.75s linear infinite"


  // החלפת אייקון לפואס
  playBtn.querySelector("i.fas").classList.remove("fa-play")
  playBtn.querySelector("i.fas").classList.add("fa-pause")

  // אם מצב אפל מופעל


  // ניגון ההאודיו
  audio.play();
  songsNumbers.innerText = `${songindex+1}/${songs.length}`
  console.log(audio.volume);
}


// שיר רנדומלי
shuffel.addEventListener("click", () => {

  shuffel.classList.toggle("shuffel-on")
})

//מעבר שירים אחורה וקדימה

function nextSong() {
  //נרצה שהם ינגנו כמובן
  let previousSongIndex = songindex

  musicContainer.classList.add("play")

  if (shuffel.classList.contains("shuffel-on")) {
    songindex = getRndInteger(0, songs.length - 1)
    console.log("shuffrl on");

    if (previousSongIndex == songindex) {
      console.log("same song index");
      songindex++

    }
  } else {
    // הפונקציה מקבלת כפרמטר שם של
    //שיר הבא משמע אינדקס קדימה
    songindex++
    //בדיקה שלא נחרוג
    if (songindex >= songs.length) {
      songindex = 0
    }
    //נעלה את השירים אם הפרמטרים החדשים
  }

  fullvolumeUp()
  loadsongs(songs[songindex])
  //נקרא לפונקציה שננגן את השיר
  playmode()

}

// prev song func
function prevsong() {
  console.log("prevbtn");
  musicContainer.classList.add("play")
  if (shuffel.classList.contains("shuffel-on")) {
    songindex == prev
  }
  songindex--
  if (songindex <= 0) {
    songindex = 0
  }
  fullvolumeUp()
  loadsongs(songs[songindex])
  playmode()

}



function pausemode() {
  //נעצור את האנמציה
  telemimg.style.animation = ""
  playBtn.querySelector("i.fas").classList.remove("fa-pause")
  playBtn.querySelector("i.fas").classList.add("fa-play")
  audio.pause()
}

// progress

function updateprogress(e) {
  const {
    duration,
    currentTime
  } = e.srcElement

  const precentage = (currentTime / duration) * 100;
  progress.style.width = `${precentage}%`
}


progressContainer.addEventListener("click", (e) => {
  const width = progressContainer.clientWidth
  const clickx = e.offsetX
  const duration = audio.duration
  audio.currentTime = (clickx / width) * duration;
})


// update progressbar
audio.addEventListener("timeupdate", updateprogress)
//  song ends
audio.addEventListener("ended", nextSong)
// next song
nextBtn.addEventListener("click", nextSong)
// prev song
prevBtn.addEventListener("click", prevsong)
let shuffelindex;

// function randomsong(currentindex) {
//   // הפונקציה תיקרא  רק בלחיצה על הבא.

//   //נצטרך לדעת מה האינקס הנוכחי כך שבשאפל לא נחזור לאותו שיר

//   //מגרילרם מספר רדומלי בין האיקנדס הנוכחי
//   //לבין האורך שנשאר 
//   console.log("picking random index");
//   songindex = getRndInteger(0, songs.length - 1)
//   console.log(`the index we got is ${songindex}`);
//   return songindex

// }


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// voleum