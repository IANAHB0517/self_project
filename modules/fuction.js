function write_menu(menuName) {
  document.write(
    `<li class="${menuName.class}"><a href="${menuName.link}">${menuName.name}</a></li>`
  );
}

// function menu_li(menuName){
//     document.write(`<a href="${menuName.link}">${menuName.name}</a>`);
// }
// exports.menu_li =
