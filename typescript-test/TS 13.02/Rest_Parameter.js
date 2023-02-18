function add(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
console.log(add(10, 10, 10, 10, 10));
function add2(d, e) {
    var best = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        best[_i - 2] = arguments[_i];
    }
    return d + e + best.reduce(function (q, f) { return d + f; }, 0);
}
console.log(add2(20, 20, 20, 20, 20));
