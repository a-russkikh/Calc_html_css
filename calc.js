document.addEventListener("DOMContentLoaded", function (event) {
  let a = ""; //first number
  let b = ""; //second number
  let sign = ""; //operation sign
  let finish = false;

  const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  const action = ["-", "+", "X", "/"];

  //display

  const out = document.querySelector(".calc-screen p");

  function clearAll() {
    a = ""; //first number and result
    b = ""; //second number
    sign = ""; //sign
    finish = false;
    out.textContent = 0;
  }

  document.querySelector(".ac").onclick = clearAll;
  document.querySelector(".buttons").onclick = (event) => {
    //not button pressed
    if (!event.target.classList.contains("btn")) return;
    //clearAll ac button pressed
    if (event.target.classList.contains("ac")) return;

    out.textContent = "";
    //getting pressed button
    const key = event.target.textContent;

    //if 0-9 or . button has pressed
    if (digit.includes(key)) {
      if (b === "" && sign === "") {
        a += key;
        out.textContent = a;
      } else if (a !== "" && b !== "" && finish) {
        b = key;
        finish = false;
        out.textContent = b;
      } else {
        b += key;
        out.textContent = b;
      }
      console.table(a, b, sign);
      return;
    }
    //if + - / * button pressed
    if (action.includes(key)) {
      sign = key;
      out.textContent = sign;
      console.log(sign);
      return;
    }

    // = pressed
    if (key === "=") {
      if (b === "") b = a;
      switch (sign) {
        case "+":
          a = +a + +b;
          break;
        case "-":
          a = a - b;
          break;
        case "X":
          a = a * b;
          break;
        case "/":
          if (b === "0") {
            out.textContent = "Error";
            a = "";
            b = "";
            sign = "";
            return;
          }
          a = a / b;
          break;
      }
      finish = true;
      out.textContent = a;
      console.table(a, b, sign);
    }
  };
});
