var numItems = 1;


    
    
function createDP() {
    url = $("#imgName").text();

    var list = document.getElementById("imgName");
    
    var reader = new FileReader();

    reader.onloadend = function () {
        
        $('#img1').attr('src', reader.result);
        console.log
        
        var img1 = new Image();
        
        img1.src = $('#img1').attr('src');
        img1.setAttribute('crossOrigin', 'anonymous');
        img1.width = 300;
        img1.height = 300;
        var img2 = new Image();
        img2.src = $('#img2').attr('src');
        img2.setAttribute('crossOrigin', 'anonymous');
        img2.width = 300;
        img2.height = 300;
        
        img2.onload = function() {
            var width = img1.width;
            var height = img1.height;
            canvas.width = width;
            canvas.height = height;
            img2.width = width;
            img2.height = height;

            var context = canvas.getContext("2d");
            
            context.drawImage(img1, 0, 0, img1.width, img1.height);
            context.save();
            if (document.getElementById('chkOpaq').checked) {
                console.log("LOL");
                context.globalAlpha = 0.7;
            }
            context.drawImage(img2, 0, 0, img2.width, img2.height);
            console.log(img2.width);

        };
    }

    var lol =reader.readAsDataURL(list.files[0]);
    
}

$( document ).ready(function() {
    if (window.location.href === "http://www.cse.unsw.edu.au/~z5019263/revuemail/revue.html" ) {
        myInit();
    } else if (window.location.href === "http://www.cse.unsw.edu.au/~z5019263/revuemail/preview.html" ) {
        
        myPreview();
    }
    
});

function myPreview() {

    numItems = 1;
    if (document.cookie.indexOf('nItems') == -1) {
        
        setCookie('nItems', 1, 1);  

    } else {
        numItems = getCookie('nItems');
    }
    $("#heading").html(getCookie('header'));
    $("#subheading").html(getCookie('subheader'));
    $("#greeting").html(getCookie('greeting'));
    /*$("#signature").html(getCookie('signature'));*/
    
    
    for (i = numItems; i > 0; i--) {

        var body = getCookie('body' + (i));
        var newDiv = $("<tr><td bgcolor=\"#FFFFFF\" width=\"600px\" class=\"" + getCookie('type' + (i)) + "\"><h2>" + getCookie('heading' + (i)) +"</h2><p>" + body +"</p></td></tr>");
        $('#greetingTR').after(newDiv);
        
    }
    
}

function myInit() {
    
    numItems = 1;
    if (document.cookie.indexOf('nItems') == -1) {
        
        setCookie('nItems', 1, 1);  

    } else {
        numItems = getCookie('nItems');
    }

    if (numItems > 1) {

        var tmpItems = numItems;
        numItems = 1;
        while (numItems < tmpItems) {
            addItem();
        }
        numItems = tmpItems;
    }
    load();
    setCookie('nItems', numItems, 1);
    
        
}

function addItem() {

    numItems++;
    setCookie('nItems', numItems, 1);
    
    
    var newDiv = $("<div id=\"div" + numItems + "\"><select id=\"type" + numItems + "\"name=\"type" + numItems + "\"><option value =\"announcement\">Announcement</option><option value =\"event\">Event</option><option value>(None)</option></select></div><input id=\"heading" + numItems + "\" type=\"text\"> </input><textarea id=\"body" +numItems+ "\" name=\"body" + numItems + "\"> </textarea>");
    
    $('.myDiv').append(newDiv); 

}





function loadText(index) {
    var newText = getCookie('body' + index);
    var newTextArea = document.getElementById('body' + index);
    if (newText === null || newTextArea === null) newText = "";
    else {
    newText = newText.replace(/\<br>/g, "\n");
    newTextArea.value = newText;}
}



function loadHead(index) {
    var newText = getCookie('heading' + index);
    var newTextArea = document.getElementById('heading' + index);
    if (newText === undefined || newTextArea === null) newText = "";
    else {
    
    newTextArea.value = newText;}
}

function loadHeader() {
    var newText = getCookie('header');
    var newTextArea = document.getElementById('headingInput');
    if (newText === undefined || newTextArea === null) newText = "";
    else {
    newTextArea.value = newText;}
}

function loadGreeting() {
    var newText = getCookie('greeting');
    var newTextArea = document.getElementById('greetingInput');
    if (newText === undefined || newTextArea === null) newText = "";
    else {
    newTextArea.value = newText;}
}

function loadSign() {
    var newText = getCookie('signature');
    var newTextArea = document.getElementById('signatureInput');
    if (newText === undefined || newTextArea === null) newText = "";
    else {
    newTextArea.value = newText;}
}

function loadSubHead() {
    var newText = getCookie('subheader');
    var newTextArea = document.getElementById('subheadingInput');
    if (newText === undefined || newTextArea === null) newText = "";
    else {
    newTextArea.value = newText;}
}

function loadType(index) {
    var newText = getCookie('type' + index);
    var newTextArea = document.getElementById('type' + index);
    if (newText === undefined || newTextArea === null) newText = "";
    else {
    newTextArea.value = newText;}
}

function load() {
    for (i = 1; i <= numItems; i++) {
        loadText(i);
        loadHead(i);
        loadType(i);
    }
    loadGreeting();
    loadHeader();
    /*loadSign();*/
    loadSubHead();
    

}

function saveType(index) {
    var textarea = document.getElementById("type" + index);
    var text = textarea;
    if (text === null) {text = "";}
    text = $("#type" + index + " option:selected").text().toLowerCase();
    setCookie('type' + index, text, 1);
}

function saveText(index) {
    var textarea = document.getElementById("body" + index);
    //var text = textarea.value;
    var text = $(document.getElementById("body" + index)).val();
    text  = text.replace(/\n/g, "<br>")
    if (text === null) {text = "";}
    setCookie('body' + index, text, 1);
}

function saveHead(index) {
    var textarea = document.getElementById("heading" + index);
    var text = textarea.value;
    if (text === null) {text = "";}
    setCookie('heading' + index, text, 1);
}

function saveHeader() {
    var textarea = document.getElementById("headingInput");
    var text = textarea.value;
    if (text === null) {text = "";}
    setCookie('header', text, 1);
}

function saveSubHead() {
    var textarea = document.getElementById("subheadingInput");
    var text = textarea.value;
    if (text === null) {text = "";}
    setCookie('subheader', text, 1);
}

function saveSign() {
    var textarea = document.getElementById("signatureInput");
    var text = textarea.value;
    if (text === null) {text = "";}
    setCookie('signature', text, 1);
}

function saveGreeting() {
    var textarea = document.getElementById("greetingInput");
    var text = textarea.value;
    if (text === null) {text = "";}
    setCookie('greeting', text, 1);
}

function save() {
    for (i = 1; i <= numItems; i++) {
            saveText(i);
            saveHead(i);
            saveType(i);
    }
    saveHeader();
    saveGreeting();
    /*saveSign();*/
    saveSubHead();
    
}

function preview() {
    save();
    url = '/~z5019263/revuemail/preview.html'
    var win = window.open(url, '_blank');
    win.focus();
}

function removeItem() {


    
    if (numItems > 1) {
        save()
        $("div").remove("#div" + numItems);
        $("textarea").remove("#body" + numItems);
        $("input").remove("#heading" + numItems);
        numItems--;
        
    
    

        
        setCookie('nItems', numItems, 1);
    }
    
}

function setCookie(name, value, days) {
    var date = new Date();
    days = 7; //just to have it for a week
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
    document.cookie = name + "=" + value +
    expires + "; path=/";
}

function getCookie(name) {
    
    var cArr = document.cookie.split(';');

    for(var i=0;i < cArr.length;i++) {
        var cookie = cArr[i].split("=",2);
        cookie[0] = cookie[0].replace(/^\s+/,"");
        if (cookie[0] == name){ 
            return cookie[cookie.length-1]; 
        }
    }   
}


