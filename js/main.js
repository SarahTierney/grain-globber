grains.forEach(function (item) {
  var $ul = $('ul');
  var $li = $('<li>');
  var $img = $('<img>');
  var $p = $('<p>');
  var $h2 = $('<h2>');

  $img.attr('src', 'images/' + grain.img);
  $desc.html(grain.desc);
  $name.html(grain.name);

  $li.append($img);
  $li.append($name);
  $li.append($desc);
  $li.append($li);
});
