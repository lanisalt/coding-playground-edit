//make comments like this in the script.js file
//by adding two slashes at the start of lines of code you can 'comment out' the code
//it's helpful to write comments to keep track of what each line of code does

//a function to select random item from a list (do not edit)
const buttonEmail = document.getElementById("poem");
function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
var i = 0;
var speed = 50;

//function for network error message
const sent1 = [
  "They see right through me.",
  "Can you see right through me?",
  "I see right through me.",
  "always an angel, never a god",
];

const buttonRetry = document.getElementById("button-network");

function changeResultsError() {
  const paragraph = document.getElementById("networkError");
  paragraph.innerText = getRandomFromList(sent1);
}
buttonRetry.addEventListener("click", changeResultsError);
//end of network error function

//function dropdown menu (do not edit this first part)
function addEval(evalText) {
  const subjectContent = document.getElementById("subject-content");
  subjectContent.innerText = evalText;
}
//when selected in the dropdown menu, the x variables trigger the associated text. Edit the x variables (and make sure to also update them in the index.html file) and edit the associated text/emojis within the quotes
//think about what use you might have for a dropdown menu: you could have someone select their 'mood' and give them an appropriate song, a bit of good or bad advice, an emoji, etc.
function dropdownFun() {
  var x = document.getElementById("subject").value;
  if (x === "stage 1 - denial") {
    addEval("haunted - taylor swift");
  } else if (x === "stage 2 - anger") {
    addEval("babe - sugarland");
  } else if (x === "stage 3 - bargaining") {
    addEval("the man who can't be moved - the script");
  } else if (x === "stage 4 - depression") {
    addEval("torn - natalie imbruglia");
  } else if (x === "stage 5 - acceptance") {
    addEval("good grief - bastille");
  }
}
//end of dropdown function

//start of haiku function
//lists of variables: replace all of the 5 and 7 syllable constants in the two arrays below. The more constants you write, the more variety you will have in your poem
const fiveSyllables = [
  "damsel in distress",
  "notes app poetry",
  "forever alone",
  "save me jane austen",
  "aphrodite who?",
  "tinder, hinge, bumble",
  "in wine, there is truth",
  "table for one, please",
];
const sevenSyllables = [
  "plenty of fish in the sea",
  "i wish i were meg ryan",
  "if you're a bird, i'm a bird",
  "strong, independent woman",
  "alexa, play taylor swift",
  "will i always feel like this?",
  "too many romance novels",
];
//code for haiku function (do not edit)
const buttonHaiku = document.getElementById("button-haiku");
function changeResults() {
  const paragraph = document.getElementById("haiku-1-1");
  const paragraphTwo = document.getElementById("haiku-1-2");
  const paragraphThree = document.getElementById("haiku-1-3");
  const paragraphFour = document.getElementById("haiku-2-1");
  const paragraphFive = document.getElementById("haiku-2-2");
  const paragraphSix = document.getElementById("haiku-2-3");
  const paragraphSeven = document.getElementById("haiku-3-1");
  const paragraphEight = document.getElementById("haiku-3-2");
  const paragraphNine = document.getElementById("haiku-3-3");
  paragraph.innerText = getRandomFromList(fiveSyllables);
  paragraphTwo.innerText = getRandomFromList(sevenSyllables);
  paragraphThree.innerText = getRandomFromList(fiveSyllables);
  paragraphFour.innerText = getRandomFromList(fiveSyllables);
  paragraphFive.innerText = getRandomFromList(sevenSyllables);
  paragraphSix.innerText = getRandomFromList(fiveSyllables);
  paragraphSeven.innerText = getRandomFromList(fiveSyllables);
  paragraphEight.innerText = getRandomFromList(sevenSyllables);
  paragraphNine.innerText = getRandomFromList(fiveSyllables);
}
buttonHaiku.addEventListener("click", changeResults);
//end of haiku function

//start of search function
const textWrapper = document.getElementById("text-wrapper");
const textInput = document.getElementById("text-input");
//search function constants
//play with Google search function to come up with search terms most relevant to you. Think about how these search terms tell a story. Replace all of the placeholder text below (phrases in red font) with search terms of your own. If you keep the phrases organised alphabetically, you can ensure you have enough results for each word.
const words = [
  "pride and prejudice watch for free online no ads",
  "pride and prejudice hand flex scence",
  "pinterest",
  "PTV journey tracker",

  "taylor swift",
  "taylor swift foolish one lyrics",
  "t2 tea",

  "RMIT love letters",
  "readings bookshop near me",
  "riley green worst way music video",
  "recipes with potatoes",

  "adf elistment",
  "avoidant attachment",
  "accidentally cut bangs too short",

  "benefits of being single",
  "best things to do alone in melbourne",
  "bumble sign up",

  "how to date celebrity crush",
  "how to cut bangs at home",
  "hobbies for lonely girls in their 20s",

  "from eden lyrics hozier",

  "speed dating",
  "sebastian stan",
  "sebastian stan girlfriend",

  "where to find a boyfriend",
  "work visa ireland",

  "gone with the wind",
  "glitter nail polish",
  "glitch",
  "github",

  "does he like me quiz",
  "dresses for tall girls",

  "lighthouse keeper jobs near me",

  "netflix",

  "archive of our own",

  "is sebastian stan single",
  "is it normal to be single at 20",
  "is cereal a soup",

  "cures for burnout",
  "can i still find fulfilment as a single woman",
  "cat videos",

  "when harry met sally",
  "wine",
  "winter soldier",
  
  "evermore taylor swift",
  "easycite",
  "enlistment tips",
  
  "jobs near me",
  
  "kiss me sixpence none the richer",
  "knives out",
  
  "medic roles adf",
  
  "outlander",
  
  "quiche recipe",
  
  "us gracie abrams ft. taylor swift",
  
  "vce results relevant for how long",
  
  "x.com",
  
  "youtube",
  
  "zendaya",

  
];
//search function (do not edit)
function changeText(e) {
  const searchWord = e.target.value.toLowerCase().trim();
  const resultWords = words.filter((word) =>
    word.toLowerCase().startsWith(searchWord)
  );
  // clear exist words
  while (textWrapper.firstChild) {
    textWrapper.removeChild(textWrapper.firstChild);
  }
  if (searchWord != "") {
    for (var i = 0; i < resultWords.length; i++) {
      const line = document.createElement("div");
      line.innerHTML = resultWords[i];
      textWrapper.appendChild(line);
    }

    if (resultWords.length === 0) {
      const line = document.createElement("div");
      line.innerHTML = "no results";
      textWrapper.appendChild(line);
    }
  }
}
textInput.addEventListener("input", changeText);
// end search function code

//start of code for poem

const subjects =
    "jaded spinsters, childless cat ladies, single young women, I".split(","),
  verbs = "lie dead, yearn shamelessly, scout for love, sit alone".split(","),
  objects =
    "in empty bed sheets, on a bustling city street, in a soulless nightclub, amongst a crowd of strangers, at another birthday party, on a university campus, on train platforms".split(
      ","
    );
// set up the counter
let counter = 0;

// a function to pull a random item from a list
function getRandomFromList2(list) {
  return list[Math.floor(Math.random() * list.length)];
}
// add a line to the poem constructed from the lists of words
function addLine(indent = false) {
  // create the line
  const line = document.createElement("div");
  if (indent === true) {
    // indent is true so add an indent class
    line.classList.add("indent");
  }
  const text =
    getRandomFromList2(subjects) +
    " " +
    getRandomFromList2(verbs) +
    " " +
    getRandomFromList2(objects);
  const lineText = document.createTextNode(text);
  line.appendChild(lineText);
  // get the poem
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// add a blank line to the poem
function addBlankLine() {
  const line = document.createElement("div");
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// remove the first line from the poem
function removeFirstLine() {
  const poem = document.getElementById("poem");
  poem.removeChild(poem.childNodes[0]);
}
// implement the rules of the poem
function processPoem() {
  counter++;
  if (counter % 5 === 0) {
    addBlankLine();
  } else if (counter % 5 === 2 || counter % 5 === 4) {
    // if the second or fourth line add the line with an indent
    addLine(true);
  } else {
    addLine();
  }
  if (counter > 15) {
    removeFirstLine();
  }
}
window.setInterval(processPoem, 2000);
