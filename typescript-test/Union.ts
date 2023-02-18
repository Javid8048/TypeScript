function printStatusCode(code: string | number) {
    console.log(`My Status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');
function printMe(code2: string) {
    console.log(`My Status code is ${code2.toUpperCase()}.`)
}
printMe("javid");

function printIt(code3: string) {
    console.log(`my status code is `+code3);
    console.log(`my status code is `,code3);
}
printIt("Ashwaq");