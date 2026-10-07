const mode = "fizzbuzz";
let i;

switch(mode) {
    case "fizzbuzz":
        for (i = 1; i <= 20; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
            } else {
                console.log(i)
            }
        }
    break;

    case "oddeven":
        for (i = 0; i <= 20; i++) {
            if (i % 2 == 0) {
            console.log(`${i} Genap`);
            } else {
                console.log(`${i} Ganjil`);
            }
        }
    break;

    case "multiplication":
        for (i = 1; i <= 20; i++) {
            console.log(`1 + ${i} = ` + ( 1 + i ));
        }
    break;
}
