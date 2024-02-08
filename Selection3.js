function DisplayTime(Division) {
    if (Division == "A") {
        console.log("Your Exam is at 7 AM");
    }
    else if (Division == "B") {
        console.log("Your Exam is at 8 AM");
    }
    else if (Division == "C") {
        console.log("Your Exam is at 9 AM");
    }
    else if (Division == "D") {
        console.log("Your Exam is at 10 AM");
    }
    else {
        console.log("Input is wrong...It should be either A,B,C,D");
    }
}
var value = "C";
DisplayTime(value);
