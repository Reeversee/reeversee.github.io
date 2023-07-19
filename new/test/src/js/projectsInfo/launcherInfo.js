function getLauncherLatestVersion() {     
    var xmlHttp = new XMLHttpRequest(); 
    var requestLink = "https://api.github.com/repos/Reeversee/ReverseLauncherBeta/releases/latest"; 
    xmlHttp.open("GET", requestLink, false); 
    xmlHttp.send(null); 
    var releaseInfo = JSON.parse(xmlHttp.responseText); 
    return releaseInfo.tag_name;
}

function getLauncherPreRelease() {     
    var xmlHttp = new XMLHttpRequest(); 
    var requestLink = "https://api.github.com/repos/Reeversee/ReverseLauncherBeta/releases/latest"; 
    xmlHttp.open("GET", requestLink, false); 
    xmlHttp.send(null); 
    var releaseInfo = JSON.parse(xmlHttp.responseText); 
    return releaseInfo.prerelease;
}

function getLauncherInfo() {
    var version = getLauncherLatestVersion();
    var prerelease = getLauncherPreRelease();
    if (prerelease == 'false'){
        prerelease = 'beta'
    }
    else {
        prerelease = 'release'
    }
    document.getElementById("launcher_version").innerHTML = 'Reverse Launcher | App | ' + 'v' + version + ' | ' + prerelease;
}