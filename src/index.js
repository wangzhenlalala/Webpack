import "./style.css";
import common_1 from './common-1';

function component(textContent) {
    const $div = $('<div></div>');
    $div.addClass('hello')
        .text(textContent);


    const $btn = $('<button></button>')
        .text('print')
        .off('click')
        .on('click', (e) => {
            common_1();
        });
    
    $div.append($btn);
    
    return $div;
}

function getComponent(text) {
    return import(/* webpackChunkName: "dynamic-load-jquery" */ 'jquery').then( ({default: $}) => {
        // 动态的加载来jquery之后，全局上并没有JQuery,$的实例； 仅仅在这里，我们能够引用jquery模块
        console.log($);
        // return component(text);
    })
}

window.addEventListener('load', (e) => {
    getComponent().then( com => {
        // $('body').append(com);
        console.log($); // 这里并不能引用jquery, // ReferenceError: $ is not defined
    })
});
