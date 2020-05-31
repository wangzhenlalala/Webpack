import "./style.css";
import $ from 'jquery';

function renderBtn1() {
    const btnElement = document.createElement('button');
    btnElement.textContent = "button - 1";
    btnElement.classList.add('btn');
    btnElement.addEventListener('click',e => {
        e.target.textContent = "loading...";
        import(/** webpackChunkName common-1*/ './common-1.js').then( module => {
            setTimeout(() => {
                e.target.textContent = "loaded";
            }, 1500);
            console.log(module);
        })
    });
    document.body.appendChild(btnElement)
}

function renderBtn2() {
    const btnElement = document.createElement('button');
    btnElement.textContent = "button - 2";
    btnElement.classList.add('btn');
    btnElement.addEventListener('click',e => {
        e.target.textContent = "loading...";
        import(/** webpackChunkName common-2*/ './common-2.js').then( module => {
            setTimeout(() => {
                e.target.textContent = "loaded";
            }, 1500);
            console.log(module.Name, module.default());
        })
    });
    document.body.appendChild(btnElement)
}
window.addEventListener('load', (e) => {
    $('div').text("xxx");
    renderBtn1();
    renderBtn2();
});
