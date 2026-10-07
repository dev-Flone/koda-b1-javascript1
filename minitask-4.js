const mode = "oddeven";
let i;

switch(mode) {
  case "fizzbuzz":
    for (i = 1; i <= 20; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
      }
    console.log(i)
    }
    break;

  case "oddeven":
    for (i = 1; i <= 20; i++) {
      if (i % 2 == 0) {
        console.log("Genap");
      } else {
        console.log("Ganjil");
      }
      console.log(i);
    }
    break; // 💡 Added break to prevent falling through

  case "multiplication":
    for (i = 1; i <= 20; i++) {
      console.log(`1 + ${i} = ` + ( 1 + i ));
    }
    break;
}
