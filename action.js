//constructor();

function constructor() {

    words = ["the", "and", "to", "of", "a", "I", "in", "was", "he", "that", "it", "his", "her"
        , "you", "as", "had", "with", "for", "she", "not", "at", "but", "be", "my", "on", "have"
        , "him", "is", "said", "me", "which", "by", "so", "this", "all", "from", "they", "no"
        , "were", "if", "would", "or", "when", "what", "there", "been", "one", "could", "very"
        , "an", "who", "them", "Mr", "we", "now", "more", "out", "do", "are", "up", "their"
        , "your", "will", "little", "than", "then", "some", "into", "any", "well", "much"
        , "about", "time", "know", "should", "man", "did", "like", "upon", "such", "never", "only"
        , "good", "how", "before", "other", "see", "must", "am", "own", "come", "down", "say"
        , "after", "think", "made", "might", "being", "Mrs", "again", "great", "two", "can", "go"
        , "over", "too", "here", "came", "old", "where", "our", "may", "first", "way", "has"
        , "though", "went", "us", "away", "day", "make", "these", "young", "long", "shall", "sir"
        , "back", "don't", "house", "ever", "yet", "take", "every", "hand", "most", "last", "eyes"
        , "its", "miss", "having", "off", "looked", "even", "while", "dear", "look", "many"
        , "life", "still", "mind", "quite", "those", "just", "head", "tell", "better", "always"
        , "saw", "seemed", "put", "face", "let", "took", "poor", "place", "why", "done", "found"
        , "same", "going", "under", "enough", "soon", "home", "give", "indeed", "left", "get"
        , "once", "mother", "heard", "myself", "rather", "love", "knew", "got", "lady", "room"
        , "yes", "thing", "father", "sure", "heart", "oh", "right", "three", "men", "night"
        , "people", "door", "told", "round", "woman", "till", "felt", "both", "side", "seen"
        , "began", "whom", "asked", "things", "part", "almost", "moment", "want", "far", "hands"
        , "gone", "world", "few", "gave", "friend", "name", "best", "word", "turned", "kind"
        , "cried", "since", "next", "find", "half", "hope", "called", "nor", "words", "hear"
        , "set", "each", "wish", "voice", "whole", "manner", "new", "course", "least", "years"
        , "among", "stood", "sat", "speak", "leave", "work", "keep", "taken", "end", "less"
        , "family", "often", "wife", "master", "coming", "mean", "light", "money", "cannot"
        , "whose", "boy", "days", "near", "matter", "used", "says", "really", "rest", "full"
        , "help", "child", "sort", "passed", "lay", "small", "behind", "girl", "feel", "fire"
        , "care", "alone", "open", "person", "call", "given", "I'll", "making", "short", "else"
        , "large", "within", "true", "times", "ask", "answer", "air", "kept", "hour", "letter"
        , "happy", "reason", "pretty", "others", "ought", "does", "known", "it's", "bed", "table"
        , "that's", "ready", "read", "either", "means", "spoke", "taking", "talk", "hard"
        , "walked", "turn", "strong", "thus", "high", "along", "above", "glad", "doubt", "nature"
        , "black", "hardly", "town", "sense", "saying", "deal", "use", "white", "bad", "can't"
        , "wanted", "mine", "close", "return", "dark", "fell", "bear", "fear", "state", "also"
        , "point", "fine", "case", "doing", "held", "walk", "lost", "fellow", "truth", "water"
        , "hold", "afraid", "bring", "honour", "low", "ground", "added", "five", "except", "power"
        , "seeing", "dead", "I'm", "usual", "able", "second", "arms", "late", "window", "live"
        , "four", "none", "death", "arm", "road", "hair", "sister", "sent", "longer", "god"
        , "women", "hours", "ten", "son", "horse", "wonder", "cold", "beyond", "please", "fair"
        , "became", "sight", "met", "eye", "year", "show", "itself", "lord", "wrong", "stay"
        , "won't", "opened", "idea", "change", "laid", "nobody", "fact", "during", "feet", "tears"
        , "run", "body", "ran", "past", "order", "need", "dinner", "soul", "ill", "early", "rose"
        , "aunt", "across", "sit", "worse", "six", "quiet", "chair", "doctor", "tone", "living"
        , "sorry", "stand", "meet", "wished", "ah", "lived", "try", "red", "smile", "sound"
        , "silent", "common", "meant", "tried", "until", "mouth", "cut", "marry", "likely"
        , "length", "story", "visit", "deep", "seems", "street", "become", "led", "giving"
        , "struck", "week", "loved", "drew", "seem", "church", "knows", "object", "ladies"
        , "book", "pay", "I've", "pass", "thank", "form", "lips", "former", "blood", "sake"
        , "corner", "spirit", "ago", "foot", "wind", "comes", "wait", "play", "easy", "real"
        , "clear", "worth", "cause", "send", "chance", "didn't", "view", "party", "horses"
        , "notice", "duty", "he's", "age", "figure", "sleep", "twenty", "fall", "months", "broken"
        , "heavy", "secret", "minute", "act", "human", "fancy", "showed", "pounds", "nearly"
        , "piece", "school", "write", "heaven", "beauty", "shook", "sun", "moved", "bit", "desire"
        , "news", "front", "effect", "laugh", "uncle", "fit", "miles", "caught", "hat", "regard"
        , "easily", "glass", "grew", "green", "unless", "stop", "forth", "expect", "sudden", "free", "grave", "angry", "carry", "looks", "dress", "die", "earth", "latter", "garden", "step"];

    htmlWordBox = document.getElementById("wordsBox");

    htmlWordInput = document.getElementById("wordInput");
    //htmlWordInput.focus();

    htmlWordInput.onkeyup = textChange;


    htmlTimeLeft = document.getElementById("timeLeft");
    htmlSpeed = document.getElementById("speed");


    htmlWordPerMinute = document.getElementById("wordPerMinute");
    htmlKeyStrokes = document.getElementById("keyStrokes");
    htmlCorrectWords = document.getElementById("correctWords");
    htmlWrongWords = document.getElementById("wrongWords");
    htmlPecentage = document.getElementById("pecentage");


    htmlRefreshImage = document.getElementById("refreshButton");
    htmlRefreshImage.onclick = refreshButton;


    htmlTimeCode = document.getElementById("timeLeft");
    htmlSpeedCode = document.getElementById("speed");
    //////////////////////////////////////////////////////////////////////
console.log("befor words refresh");
    refreshWords();
console.log("afterwordsrefresh");

    htmlTestAgain = document.getElementById("testAgain");
    htmlTestAgain.onclick = testAgain;


    

    //alert(htmlWord[3].innerText);

    
    // alert(htmlWordInput.value);
    // alert("helloworld".indexOf("hello", 0));
    // alert(htmlWords[4].innerHTML);
    htmlFaceBookButton = document.getElementById("shareOnFacebook");
    htmlFaceBookButton.onclick = shareOnFaceBook;
console.log("the end of the constructor");
}

var testing = false;//boolean value indicate if test is running or not

var currentWord = 0; //reference the index of the current word
var time = 60;


var wordsTyped = 0;

var keyStroke = 0;

var keyStrokeWrongs = 0;


function shareOnFaceBook() {
    
    var stt = "s" + wordsTyped + "s" + keyStroke + "s" + keyStrokeWrongs;
   // var stt = "23s43s23";
    alert(unEn(en(4)));



}

function en(n) {
    n = (n * 9 / 3) + 5;
    
    return n;
}

function unEn(n) {
    
    return (n - 5) * 3 / 9;

}

function testAgain() {
   // document.getElementById("firstArticle").style.display = "inline-block";
   // document.getElementById("afterTest").style.display = "none";
   //// alert("test again work");
    newTest();
}

function refreshButton() {

    newTest();
    //endTest();

    //document.getElementById("firstArticle").style.display = "inline-block";
    //document.getElementById("afterTest").style.display = none;
    //htmlWordBox.style.display = " inline-block";
    //htmlWordInput.style.display = "inline";
}

function newTest() {
console.log("newTest1");
    endTest();

    document.getElementById("firstArticle").style.display = "inline-block";
    document.getElementById("afterTest").style.display = "none";
	console.log("newTest2");
	
}

function refresh() {    
    try {

        clearInterval(timer);

    } catch (e) {

    }

    time = 60;
    htmlTimeCode.innerHTML = time;
    testing = false;
    HTMLInputElement.value = "";
    refreshWords();
}

function textChange() {

    if (!testing) {
        testing = true;
        startTest();
    }

    checkWord();


    keyStroke++;
    //this code is for playing tick sound wen press a button


    // var audio = new Audio('TYPE.WAV');
  //  audio.play();

}

function checkWord() {

    var input = htmlWordInput.value.trim();
    var htmlCurrentWord = htmlWords[currentWord];


    //htmlCurrentWord.InnerHTML.indexOf(input.trim(), 0) == 0)
    if (input == htmlCurrentWord.innerHTML) {

        htmlCurrentWord.style.backgroundColor = "#374665";

        htmlWordInput.value = "";
        nextWord();
    }
    else if (htmlCurrentWord.innerHTML.indexOf(input, 0) == 0) {

        htmlCurrentWord.style.backgroundColor = "#008A2E";

    } else {
        htmlCurrentWord.style.backgroundColor = "red";
        keyStrokeWrongs++;
      //  alert(keyStrokeWrongs);
    }

}

function nextWord() {

    currentWord++;
    currentWord++;

    wordsTyped++;

    if (currentWord > 19) {
        refreshWords();
    }
    //  alert(currentWord);

    
    textToSpeech(htmlWords[currentWord].innerHTML);

}

function textToSpeech(text) {
    
    var msg = new SpeechSynthesisUtterance(text);
    
    window.speechSynthesis.speak(msg);
    
//    alert(text);
}

function startTest() {

    currentWord = 0;
    wordsTyped = 0;
    keyStroke = 0;
    keyStrokeWrongs = 0;
    timer = setInterval(secondTick, 1000);

}

function secondTick() {
    if (time > 0) {
        time--;
        htmlTimeCode.innerHTML = time;
        htmlSpeedCode.innerHTML = Math.floor((wordsTyped / (60 - time)) * 60 * 1.2)


        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        draw(c, ctx, htmlSpeedCode.innerHTML);

        
    } else endTest();

}

function endTest() {
    document.getElementById("firstArticle").style.display = "none";
    //htmlWordBox.style.display = "none";
    //htmlWordInput.style.display = "none";

    var htmlWpm = document.getElementById("wordPerMinute");
    var htmlKs = document.getElementById("keyStrokes");
    var htmlwrStk = document.getElementById("wrongStrokes");

    htmlWpm.innerHTML = Math.floor((wordsTyped / (60 - time)) * 60 * 1.2);
    htmlKs.innerHTML = keyStroke;
    htmlwrStk.innerHTML = keyStrokeWrongs;
    
    //here we well redraw the canvas result
    var c = document.getElementById("resultCanvas");
    var ctx = c.getContext("2d");
    draw(c, ctx, htmlWpm.innerHTML);



    htmlWordInput.value = "";

    refresh();
   
    document.getElementById("afterTest").style.display = "inline-block";
}

function refreshWords() {

    htmlWordBox.innerHTML = "";
    var text = "";

    for (var i = 0 ; i < 10; i++) {
        text += "<code>" + getRandomWord() + "</code>" + "&nbsp;"
    }

    htmlWordBox.innerHTML = text;
    currentWord = 0;
    htmlWords = htmlWordBox.childNodes;
}

function getRandomWord() {

    return words[randomNumber()];
}

function randomNumber() {
    // var v = Math.floor(Math.random() * (500 - (1 + 1)) + (1 + 1));
    //  Math.floor(Math.random() * (max - (min + 1)) + (min + 1));
    var v = Math.floor(Math.random() * 500);
    return v;
}
