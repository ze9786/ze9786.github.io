var theButton = document.getElementById("alert");

theButton.onclick = function () {
    var thePrompt = window.prompt("Please enter password", "");
    var theHTML = "";

    // theHTML += "<p>The server http://localhost:8888 requires a username and password. The server says: These are restricted files, please authenticate yourself.</p>";
    // theHTML += "<br/>";
    // theHTML += "Username: <input type='text' id='theUser' placeholder='Enter Username...'/>";
    // theHTML += "<br />";
    theHTML += "Password: <input type='password' id='thePass' placeholder='Enter Password...'/>";
    theHTML += "<br />";
    theHTML += "<input type='button' value='OK' id='authOK'/>";
    thePrompt.document.body.innerHTML = theHTML;

    var thePass = thePrompt.document.getElementById("thePass").value;
    thePrompt.document.getElementById("authOK").onclick = function () {
        doAuthentication(thePass);
    }
}

function doAuthentication(pass) {
    //do authentication
    if(pass=="1234"){
        window.location.href="www.zelinato.com";
    }else{
        window.location.href="www.zelinato.com";
    }
}