import common_1 from './common-1';

export default function printMe() {
    console.log('I get called from print.js!');
    common_1();
}
printMe();