console.log("TASK 3");
let user = prompt("Random eded daxil edin:");
function randomMachine() {
    let num = 0;
    let num1 = 100;

    while (num1 <= 999) {
        if (num1 % user === 0) {
            num += num1;
        }
        num1++;
    }

    return num;
}

let result = randomMachine();
console.log("CAVAB:", result);
