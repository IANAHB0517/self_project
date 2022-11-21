var part_name = 'part_name';


function part(part_name){
    if (part_name === 'nav'){
            document.write(
                `<ul class="nav_menu upper">
                    <li class="logo">               <a href="#"><img src="" alt="hiphublogo"></a></li>
                    <li class="login">              <a href="#"><FontAwesomeIcon icon="fa-solid fa-user"/>로그인</a></li>
                    <li class="newest">             <script>menu_li('newest');</script></li>
                    <li class="chart">              <script>menu_li('chart');</script></li>
                    <li class="rising">             <script>menu_li('rising');</script></li>
                    <li class="radio_station">      <script>menu_li('radio station');</script></li>
                    <li class="hardboiled_stage">   <script>menu_li('hardboiled stage');</script></li>
                    <li class="instrumental">       <script>menu_li('instrumental');</script></li>
                    <li class="rising_musicain">    <script>menu_li('rising musician');</script></li>
                    <li class="out_of_screen">      <script>menu_li('#out_of_screen');</script></li>
                    <li class="next_stage">         <script>menu_li('next stage');</script></li>
                    <li class="open_mic">           <script>menu_li('open mic');</script></li>
                    <li class="servece_introduce">  <script>menu_li('서비스 소개');</script></li>
                    <li class="membership">         <script>menu_li('멤버십');</script></li>
                </ul>`
              );
                                                                        // document.write(
                                                                        //     `<ul class="nav_menu upper">
                                                                        //         <li class="logo">               <a href="#"><img src="" alt="hiphublogo"></a></li>
                                                                        //         <li class="login">              <a href="#"><FontAwesomeIcon icon="fa-solid fa-user"/>로그인</a></li>
                                                                        //         <script>write_menu('newest');</script>
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
                                                                        // );
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



        