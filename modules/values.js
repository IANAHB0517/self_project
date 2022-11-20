

function menu_li(menu_name){
    document.write('<a href="'+'menu_name'+'.html">'+menu_name+'</a>');
}

function write_menu(object){
    document.write('<li class="'+object.class+'"><a href="'+object.link+'.html">'+object.name+'</a></li>');
}


// exports.menu_li = 