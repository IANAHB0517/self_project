var newest = {
    name : 'newest',
    class : 'newest',
    link : 'newest.html',
}

function write_menu(object){
    document.write('<li class="'+object.class+'"><a href="'+object.link+'.html">'+object.name+'</a></li>');
}

console.log(write_menu(newest));