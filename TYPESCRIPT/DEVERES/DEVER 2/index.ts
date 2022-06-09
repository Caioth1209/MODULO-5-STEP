interface TriangleConfig {
    color?: string,
    width?: number
}

function createTriangle(tri:TriangleConfig) : {color: string; area: number} {
    let newTriangle = {color: "verde", area:144};

    if (tri.color) {
        newTriangle.color = tri.color;
    }

    if (tri.width) {
        newTriangle.area = (Math.pow(tri.width,2) * Math.sqrt(3))/4;
    }

    return newTriangle;
}


let myTriangle = createTriangle(
    {color: "verde", width: 32}
);

console.log(myTriangle);