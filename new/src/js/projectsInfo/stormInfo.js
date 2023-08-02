function getStormLatestVersion() {     
    var xmlHttp = new XMLHttpRequest(); 
    var requestLink = "https://api.github.com/repos/bublickkk/StormImg/releases/latest"; 
    xmlHttp.open("GET", requestLink, false); 
    xmlHttp.send(null); 
    var releaseInfo = JSON.parse(xmlHttp.responseText); 
    return releaseInfo.tag_name;
}

function getStormPreRelease() {     
    var xmlHttp = new XMLHttpRequest(); 
    var requestLink = "https://api.github.com/repos/bublickkk/StormImg/releases/latest"; 
    xmlHttp.open("GET", requestLink, false); 
    xmlHttp.send(null); 
    var releaseInfo = JSON.parse(xmlHttp.responseText); 
    return releaseInfo.prerelease;
}

function getStormInfo() {
    var version = getStormLatestVersion();
    var prerelease = getStormPreRelease();
    if (prerelease == 'false'){
        prerelease = 'beta'
    }
    else {
        prerelease = 'release'
    }
    document.getElementById("storm_version").innerHTML = 'The Ocean Shore | Game | ' + 'v' + version + ' | ' + prerelease;
}