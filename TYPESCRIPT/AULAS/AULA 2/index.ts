interface User {
    name: string,
    age: number, 
    address?: string
}

function userAdd(user: User) : void {
    console.log(user);
}

userAdd({name: "John", age: 30});

interface SquareConfig {
    color?: string,
    width?: number
}

function createSquare(sc : SquareConfig) : {color: string; area: number}{
    let newSquare = {color: "black", area:50};

    if (sc.color) {
        newSquare.color = sc.color;
    }

    if (sc.width) {
        newSquare.area = sc.width * sc.width;
    }

    return newSquare;
}

let mySquare = createSquare(
    {}
);

console.log(mySquare);
