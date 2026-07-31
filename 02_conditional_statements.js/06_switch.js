let day = 2; // in switch we cant give condition like 15>7 unlike in if else

switch (day) {
  case 1:
    console.log("monday");
    break;

  case 2:
  case 3:
  case 4:
    console.log("tuesday");
    break;

  default:
    console.log("invalid");
}

//***************************we cant give condition in switch but can give condition in case  */

switch (true) {
  case 12 > 5:
    console.log("hello");
    break;

  case 34 > 55:   //if it will 34 < 55 then both condition are true but only the first case will run
    console.log("hii");
    break;

  default:
    console.log("invalid");
}

// ******************************

let num = Number((0.2 + 0.4).toFixed(1));

switch (num){
    case 0.6 : console.log("hello");
    break;

    case 0.5 : console.log("hii");
    break;

    default : console.log("hey")
    
}
