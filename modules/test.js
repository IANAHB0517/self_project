var newest = {
    name : 'newest',
    class : 'newest',
    link : 'newest.html',
}

var chart = {
    name : 'chart',
    class : 'chart',
    link : 'chart.html',
}

var rising_tracks = {
    name : 'rising tracks',
    class : 'rising_tracks',
    link : 'rising_tracks.html',
}

var radio_station = {
    name : 'radio station',
    class : 'radio_station',
    link : 'radio_station.html',
}

var hardboiled_stage = {
    name : 'hardboiled stage',
    class : 'hardboiled_stage',
    link : 'hardboiled_stage.html',
}


var menu_list = [newest, chart, rising_tracks, radio_station, hardboiled_stage]

i = 0;

while (i < array.length){
    menu = menu_list[i];
    function write_menu(menu){
        console.log('<li class="'+menu.class+'"><a href="'+menu.link+'.html">'+menu.name+'</a></li>');
    }

    i++;
}

