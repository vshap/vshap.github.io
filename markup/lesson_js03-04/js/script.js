/**
 * [app description]
 * @type {Object}
 */
var app = {
    createElement: function(params) {
        var element = document.createElement(params.tagName);

        if (params.inputType){
            element.setAttribute('type', params.inputType);
        }

        if (params.className){
            element.className = params.className;
        }

        if (params.content){
            element.innerHTML = params.content;
        }

        if (params.parentElement){
            params.parentElement.appendChild(element);
        }

        return element;
    },
    generateQuestions: function(questionsAmount, answersAmount){

        for (var i = 0; i < questionsAmount; i++){

            this.createElement({
                tagName: 'h2',
                content: 'Вопрос №' + (i + 1),
                parentElement: form
            });

            for (var j = 0; j < answersAmount; j++){

                var label = this.createElement({
                    tagName: 'label',
                    content: 'Вариант ответа №' + (i + 1),
                    parentElement: form
                });

                var checkbox = this.createElement({
                    tagName: 'input',
                    inputType: 'checkbox',
                });

                label.('afterBegin', checkbox);
            }
        }
    }
};

var body = document.querySelector('body');

app.createElement({
    tagName: 'h1',
    className: 'title',
    content: 'Тест по программированию',
    parentElement: body
});

var form = app.createElement({
    tagName: 'form',
    parentElement: body,
    roleName: 'form',
    idName: 'test',
    actionURL: '#',
    methodType: 'post'
});

app.generateQuestions(3, 3);

app.createElement({
    tagName: 'input',
    inputType: 'submit',
    className: 'check-results',
    content: 'Проверить мои результаты',
    parentElement: form
});
