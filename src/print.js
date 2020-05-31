import $ from 'jquery';

export default function printMe() {
    console.log('I get called from print.js!');

    setTimeout(() => {
        import("./common-1.js").then(module => {
            console.log('prin js: call common-1: ', module.default());
        });
    }, 3000);
    $('div');
}
printMe();