function add(a: number, b:number, ...rest: number[]) {
    return a + b + rest.reduce((p,c) => p+c, 0)
}
console.log(add(10,10,10,10,10));

function add2(d: number, e: number, ...best: number[]) {
    return d+e+best.reduce((q, f) => d+f, 0);
}
console.log(add2(20,20,20,20,20));