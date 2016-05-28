$( document ).ready(function() {

  // shuffle the list
  $('ul').each(function() {
    var list  = $(this);
    var items = list.children();
    var count = items.length;

    // How many items we want in the final list
    var size  = (window.location.search == '?full') ? count : 5;

    list.empty();

    for (i = 0; i < size; i++) {
      list.append(items.splice(Math.floor(Math.random() * count), 1)[0]);
    };

  });

});
