let part_name = "part_name";

// OBJECT
let newest = {
    name : 'newest',
    class : 'newest',
    link : 'newest.html',
}
let logo = {
    name : 'logo',
    class : 'logo',
    link : 'index.html',
}
let login = {
    name : 'login',
    class : 'login',
    link : 'login.html',
}
let chart = {
    name : 'chart',
    class : 'chart',
    link : 'chart.html',
}
let rising = {
    name : 'rising',
    class : 'rising',
    link : 'rising.html',
}
let radioStation = {
    name : 'radio station',
    class : 'radioStation',
    link : 'radioStation.html',
}
let hardboiledStage = {
    name : 'hardboiled stage',
    class : 'hardboiledStage',
    link : 'hardboiledStage.html',
}
let instrumental = {
    name : 'instrumental',
    class : 'instrumental',
    link : 'instrumental.html',
}
let risingMusicain = {
    name : 'rising musicain',
    class : 'risingMusicain',
    link : 'risingMusicain.html',
}
let outOfScreen = {
    name : 'out of screen',
    class : 'outOfScreen',
    link : 'outOfScreen.html',
}
let nextStage = {
    name : 'next stage',
    class : 'nextStage',
    link : 'nextStage.html',
}
let openMic = {
    name : 'open mic',
    class : 'openMic',
    link : 'openMic.html',
}
let serveceIntroduce = {
    name : 'servece introduce',
    class : 'serveceIntroduce',
    link : 'serveceIntroduce.html',
}
let membership = {
    name : 'membership',
    class : 'membership',
    link : 'membership.html',
}
// ARRAY

let objArray = [newest, logo, login, chart, rising, radioStation, hardboiledStage, instrumental, risingMusicain, outOfScreen, nextStage, openMic, serveceIntroduce, membership];

for(let key in obj){
    objname = `${obj[key]}`;
    objclass = `${obj[key]}`;
    objlink = `${obj[key]}`;
}

// FUNCTION

function listWrite(){
    for(let i =0; i < objArray.length; i++){
        document.getElementsByClassName(part_name).innerHTML =
        <li class="objArray[i].class">
            <a href="objArray[i].link">
                objArray[i].name
            </a>
        </li>;}
}

function part(part_name){
    if (part_name === 'nav'){
        // document.getElementsByClassName("nav").innerHtml
            document.write(`<ul class="nav_menu upper">` + listWrite() + `</ul>`);
    } else if (part_name === 'article'){
        document.write(
            `
            `
        );
    } else if (part_name === 'footer'){
        document.write(
            `sdsdsd`
        );
    } else {

    }
}



        