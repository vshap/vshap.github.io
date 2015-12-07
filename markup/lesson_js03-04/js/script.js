/**
 * Created by Vitalii on 07.12.2015.
 */
var element = document.createElement('div');

element.classList.add('main');
element.innerHTML = 'dynamically created element';

var body = document.querySelector('body');
body.appendChild(element);

// var a = new Element('a', { 'class': 'foo', href: '/foo.html' }).update("Next page");

