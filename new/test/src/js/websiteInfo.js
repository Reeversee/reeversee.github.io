function getWebSiteLatestVersion() {     
    var xmlHttp = new XMLHttpRequest(); 
    var requestLink = "https://api.github.com/repos/Reeversee/reeversee.github.io/releases/latest"; 
    xmlHttp.open("GET", requestLink, false); 
    xmlHttp.send(null); 
    var releaseInfo = JSON.parse(xmlHttp.responseText); 
    return releaseInfo.tag_name;
}

function getWebSiteBody() {     
    var xmlHttp = new XMLHttpRequest(); 
    var requestLink = "https://api.github.com/repos/Reeversee/reeversee.github.io/releases/latest"; 
    xmlHttp.open("GET", requestLink, false); 
    xmlHttp.send(null); 
    var releaseInfo = JSON.parse(xmlHttp.responseText); 
    return releaseInfo.body;
}

function getWebSiteAuthor() {     
    var xmlHttp = new XMLHttpRequest(); 
    var requestLink = "https://api.github.com/repos/Reeversee/reeversee.github.io/releases/latest"; 
    xmlHttp.open("GET", requestLink, false); 
    xmlHttp.send(null); 
    var releaseInfo = JSON.parse(xmlHttp.responseText); 
    return releaseInfo.author.login;
}

function getWebSiteInfo() {
    var version = getWebSiteLatestVersion();
    var body = getWebSiteBody();
    var author = getWebSiteAuthor();
    document.getElementById("version_body_author").innerHTML = '| v' + version + ' | Changelog: ' + body + ' | ' + 'Committed by ' + author + ' |';
}