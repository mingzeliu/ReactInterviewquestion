function q1(num: number) {
  if (num % 2 === 0) {
    console.log("candy");
  } else if (num % 11 === 0) {
    console.log("bar");
  } else if (num % 2 === 0 && num % 11 === 0) {
    console.log("candybar");
  } else {
    console.log(num.toString());
  }
}
