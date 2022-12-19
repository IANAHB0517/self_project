// function onload(){
let part_name = "part_name";

// OBJECT
let newest = {
  name: "newest",
  class: "newest upper",
  link: "newest.html",
};
let logo = {
  name: "logo",
  class: "logo",
  link: "index.html",
};
let login = {
  name: "login",
  class: "login",
  link: "login.html",
};
let chart = {
  name: "chart",
  class: "chart upper",
  link: "chart.html",
};
let rising = {
  name: "rising",
  class: "rising upper",
  link: "rising.html",
};
let radioStation = {
  name: "radio station",
  class: "radioStation upper",
  link: "radioStation.html",
};
let hardboiledStage = {
  name: "hardboiled stage",
  class: "hardboiledStage upper",
  link: "hardboiledStage.html",
};
let instrumental = {
  name: "instrumental",
  class: "instrumental upper",
  link: "instrumental.html",
};
let risingMusicain = {
  name: "rising musicain",
  class: "risingMusicain upper",
  link: "risingMusicain.html",
};
let outOfScreen = {
  name: "out of screen",
  class: "outOfScreen upper",
  link: "outOfScreen.html",
};
let nextStage = {
  name: "next stage",
  class: "nextStage upper",
  link: "nextStage.html",
};
let openMic = {
  name: "open mic",
  class: "openMic upper",
  link: "openMic.html",
};
let serveceIntroduce = {
  name: "servece introduce",
  class: "serveceIntroduce upper",
  link: "serveceIntroduce.html",
};
let membership = {
  name: "membership",
  class: "membership upper",
  link: "membership.html",
};
// ARRAY

let objArray = [
  newest,
  logo,
  login,
  chart,
  rising,
  radioStation,
  hardboiledStage,
  instrumental,
  risingMusicain,
  outOfScreen,
  nextStage,
  openMic,
  serveceIntroduce,
  membership,
];

function part(part_name) {
  if (part_name === "nav") {
    document.write(
      `<ul class="nav_menu upper">
                    <li class="logo">               <a href="#"><img src="" alt="hiphublogo"></a></li>
                    <li class="login">              <a href="#"><FontAwesomeIcon icon="fa-solid fa-user"/>로그인</a></li>
                    ${write_menu(newest)}
                    ${write_menu(chart)}
                    ${write_menu(rising)}
                    ${write_menu(radioStation)}
                    ${write_menu(hardboiledStage)}
                    ${write_menu(instrumental)}
                    ${write_menu(risingMusicain)}
                    ${write_menu(outOfScreen)}
                    ${write_menu(nextStage)}
                    ${write_menu(openMic)}
                    ${write_menu(serveceIntroduce)}
                    ${write_menu(membership)}
                </ul>`
    );
  } else if (part_name === "article") {
    document.write(
      `
                `
    );
  } else if (part_name === "footer") {
    document.write(`sdsdsd`);
  } else {
  }
}

// }
