import "./style.css";

function renderBtn(textContent) {
    const divElement = document.createElement('div');
    const btnElement = document.createElement('button');
    btnElement.textContent = "to load";
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

window.addEventListener('load', (e) => {
    renderBtn();
});
