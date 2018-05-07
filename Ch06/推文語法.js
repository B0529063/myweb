//推到 twitter 推特//
void(window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(document.title)) .concat(' ') .concat (encodeURIComponent(location.href))));


//推到 plurk 噗浪//
void(window.open('http://www.plurk.com/?qualifier=shares&status=' .concat(encodeURIComponent(location.href)) .concat(' ') .concat('(') .concat(encodeURIComponent(document.title)) .concat(')')));

//推到 facebook 臉書//
void(window.open('http://www.facebook.com/share.php?u='.concat(encodeURIComponent(location.href))));
