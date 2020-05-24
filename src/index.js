import $ from 'jquery';
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

window.addEventListener('load', (e) => {
    $('body').append( component("hello webapck") );
});
