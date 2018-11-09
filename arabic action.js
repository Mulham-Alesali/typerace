constructor();

function constructor() {

    words = ['يعتبر', 'المعهد', 'التقاني', 'للحاسوب', 'بدمشق', 'من', 'المعاهد'
        , 'الرائدة', 'في', 'مجال', 'المعلوماتية', 'في', 'قطرنا', 'العربي', 'السوري'
        , 'وأحد', 'المؤسسات', 'التعليمية', 'التقنية', 'ذات', 'الوجه', 'الإيجابي', 'و'
        , 'المشرق', 'في', 'قطاع', 'التعليم', 'العالي', 'أنشئ', 'هذا', 'المعهد', 'في'
        , 'عام', 'تحت', 'تسمية', 'معهد', 'هندسة', 'الكمبيوتر', 'وفي', 'العام', 'تم'
        , 'تحديث', 'المناهج', 'الدراسية', 'وإلغاء', 'بعض', 'التخصصات', 'وإحداث', 'تخصصات'
        , 'جديدة', 'تتضمن', 'هندسة', 'البرمجيات', 'هندسة', 'الحواسيب', 'هندسة', 'الشبكات'
        , 'كان', 'المعهد', 'مواكباً', 'لقطاع', 'التعليم', 'العالي', 'في', 'سوريا', ','
        , 'حيث', 'شهدت', 'السنوات', 'القليلة', 'الماضية', 'تحولات', 'في', 'السياسات'
        , 'و', 'التوجهات', 'والبرامج', 'والإجراءات', 'والآليات', 'المتبعة', 'لتفعيل'
        , 'مساهمته', 'في', 'عملية', 'التنمية', 'المستدامة', 'في', 'القطر', 'وليصبح'
        , 'معهدنا', 'رافداً', 'حقيقياً', 'لها', 'بالكفاءات', 'والخبرات', 'الوطنية'
        , 'المدربة', 'والمؤهلة', 'التي', 'تحتاجها', 'عملية', 'النهوض', 'الإقتصادي'
        , 'والإجتماعي', 'الشامل', 'الذي', 'يقوده', 'يتبع', 'المعهد', 'التقاني', 'للحاسوب'
        , 'بدمشق', 'إلى', 'وزارة', 'التعليم', 'العالي', 'بصورة', 'مباشرة', 'حيث', 'يلقى'
        , 'الإهتمام', 'والمتابعة', 'الحثيثة', 'التي', 'تدفع', 'من', 'جودة', 'التعليم'
        , 'في', 'المعهد', 'بما', 'يواكب', 'التطور', 'المتسارع', 'في', 'مجال'
        , 'المعلوماتية', 'في', 'أنحاء', 'العالم', 'المختلفة', 'وقد', 'استطاع', 'خريجوا'
        , 'هذا', 'المعهد', 'في', 'السنوات', 'التي', 'خلت', 'من', 'أن', 'يثبتوا'
        , 'موجودية', 'و', 'كفاءة', 'علمية', 'و', 'عملية', 'عالية', 'في', 'جميع'
        , 'المؤسسات', 'الإقتصادية', 'العامة', 'والخاصة'];

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

    refreshWords();


    htmlTestAgain = document.getElementById("testAgain");
    htmlTestAgain.onclick = testAgain;


    

    //alert(htmlWord[3].innerText);

    
    // alert(htmlWordInput.value);
    // alert("helloworld".indexOf("hello", 0));
    // alert(htmlWords[4].innerHTML);
    htmlFaceBookButton = document.getElementById("shareOnFacebook");
    htmlFaceBookButton.onclick = shareOnFaceBook;

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

    endTest();

    document.getElementById("firstArticle").style.display = "inline-block";
    document.getElementById("afterTest").style.display = "none";
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
        htmlSpeedCode.innerHTML = Math.floor((wordsTyped / (60 - time)) * 60);


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

    htmlWpm.innerHTML = Math.floor((wordsTyped / (60 - time)) * 60);
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
    var v = Math.floor(Math.random() * 500) % words.length;
    return v;
}
