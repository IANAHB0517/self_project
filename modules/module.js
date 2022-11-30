// function onload(){
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

    // for(let key in obj){
    //     objname = `${obj[key]}`;
    //     objclass = `${obj[key]}`;
    //     objlink = `${obj[key]}`;
    // }

    // FUNCTION

    // classWrite = objArray[i].class;
    // linkWrite = objArray[i].link;
    // nameWrite = objArray[i].name;

    function listWrite(){
        for(let i =0; i < objArray.length; i++){
            document.write =
            `<li class="` + objArray[i].class + `">
                <a href="` + objArray[i].link + `">
                    ` + objArray[i].name + `
                </a>
            </li>`;
        }
    }

    function part(part_name){
        if (part_name === 'nav'){

            
                document.getElementsByClassName("nav").innerHtml = `<ul class="nav_menu upper">` + listWrite(); +`</ul>`
                    // document.write(`<ul class="nav_menu upper">` + listWrite() + `</ul>`);

            // document.write(
            //     `<ul class="nav_menu upper">
            //         <li class="logo">               <a href="#"><img src="" alt="hiphublogo"></a></li>
            //         <li class="login">              <a href="#"><FontAwesomeIcon icon="fa-solid fa-user"/>로그인</a></li>
            //         <li class="newest">             <script>menu_li('newest');</script></li>
            //         <li class="chart">              <script>menu_li('chart');</script></li>
            //         <li class="rising">             <script>menu_li('rising');</script></li>
            //         <li class="radio_station">      <script>menu_li('radio station');</script></li>
            //         <li class="hardboiled_stage">   <script>menu_li('hardboiled stage');</script></li>
            //         <li class="instrumental">       <script>menu_li('instrumental');</script></li>
            //         <li class="rising_musicain">    <script>menu_li('rising musician');</script></li>
            //         <li class="out_of_screen">      <script>menu_li('#out_of_screen');</script></li>
            //         <li class="next_stage">         <script>menu_li('next stage');</script></li>
            //         <li class="open_mic">           <script>menu_li('open mic');</script></li>
            //         <li class="servece_introduce">  <script>menu_li('서비스 소개');</script></li>
            //         <li class="membership">         <script>menu_li('멤버십');</script></li>
            //     </ul>`
            //   );
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



// }