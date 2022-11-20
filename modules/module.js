var section_name = 'section_name';


function section(section_name){
    if (section_name === 'nav'){
        document.write(
        `<ul class="nav_menu">
            <li class="logo upper">               <a href="#"><img src="" alt="hiphublogo"></a></li>
            <li class="login upper">              <a href="#"><FontAwesomeIcon icon="fa-solid fa-user"/>로그인</a></li>
            <li class="newest upper">             <script>menu_li('newest');</script></li>
            <li class="chart upper">              <script>menu_li('chart');</script></li>
            <li class="rising upper">             <script>menu_li('rising');</script></li>
            <li class="radio_station upper">      <script>menu_li('radio station');</script></li>
            <li class="hardboiled_stage upper">   <script>menu_li('hardboiled stage');</script></li>
            <li class="instrumental upper">       <script>menu_li('instrumental');</script></li>
            <li class="rising_musicain upper">    <script>menu_li('rising musician');</script></li>
            <li class="out_of_screen upper">      <script>menu_li('#out_of_screen');</script></li>
            <li class="next_stage upper">         <script>menu_li('next stage');</script></li>
            <li class="open_mic upper">           <script>menu_li('open mic');</script></li>
            <li class="servece_introduce upper">  <script>menu_li('서비스 소개');</script></li>
            <li class="membership upper">         <script>menu_li('멤버십');</script></li>
        </ul>`
      );
    } else if (section_name === 'article'){
        document.write(
            `
            `
        );
    }
}



        