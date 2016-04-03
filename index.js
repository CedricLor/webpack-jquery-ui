require('./main.css');
require('jquery-ui/themes/base/jquery.ui.core.css');
require('jquery-ui/themes/base/jquery.ui.menu.css');
require('jquery-ui/themes/base/jquery.ui.autocomplete.css');
require('jquery-ui/themes/base/jquery.ui.theme.css');
var $ = require('jquery');
var autocomplete = require('jquery-ui/autocomplete');

$('<h1>Welcome to the programming languages quiz</h1>').appendTo('body');
new autocomplete({
  source: ['javascript', 'css', 'c', 'objectivec']
}).element.appendTo('body').focus();
