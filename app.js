// !------------ Grading System -------------!

var input = +prompt("Enter your percentage");

if (input >= 80)
    alert("Great ! A+ grade");
else if (input <= 79 && input >= 70)
    alert("Good ! A grade");
else if (input <= 69 && input >= 60)
    alert("Can Improve ! B grade");
else if (input <= 599 && input >= 50)
    alert("Need hard work ! C grade");
else if (input <= 49)
    alert("Sorry ! You are fail");