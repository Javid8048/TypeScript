interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color: string,
    size: number
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "blue",
    size: 100
};

console.log(coloredRectangle);