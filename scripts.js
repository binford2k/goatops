$( document ).ready(function() {
  // shuffle the list
  $('ul').each(function() {
    var list  = $(this);
    var items = list.children();

    while (items.length) {
        list.append(items.splice(Math.floor(Math.random() * items.length), 1)[0]);
    }
  });

});
