staircase = () => {

    const char = "#";
    let spaces = 0

    for (let i = 0; i < 7; i++) {
        spaces = " ".repeat(7 - i);
        if (i < 7) {
            console.log(spaces, char.repeat(i));
        }
    }
}

staircase();

//Fonte: https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true