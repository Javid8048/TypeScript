let x: unknown = 'hello';
console.log((x as string).length);

let y: unknown = 1234567;
console.log((y as string).length);

let z: unknown = 'hello there';
console.log((<string>z).length)