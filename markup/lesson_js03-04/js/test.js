
var app = {
    createElement: function(tagName, className, content) {
        var element = document.createElement(tagName);
        element.className = className;
        element.innerHTML = content;
        
        return element;
    }
}

var body = document.querySelector('body');

var el = app.createElement('div', 'wrapper', 'test HTML');

body.appendChild(el);