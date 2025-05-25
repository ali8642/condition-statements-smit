var op = +prompt("Choose the operation \n" +
    "1. need to check wether user inserts a big value than the 100 or less. \n" +
    "2. need to check userfirst value is greater or user second value. \n" +
    "3. need to check uservalue is perfect divisible by 2 or not. \n" +
    "4. need to check uservalue is perfect divisible by 3 or not. \n" +
    "5. need to check uservalue is perfect divisible by 5 or not. \n" +
    "6. need to check uservalue what is the remainder by divided by 2. \n" +
    "7. need to check uservalue what is the remainder by divided by 3. \n" +
    "8. need to check uservalue what is the remainder by divided by 5. \n"
);

// option 1
if (op === 1) {
    var x = +prompt("Enter your desired value in here: ")
    if (x > 100) {
        alert("The value entered is greater than 100!")
    }
    if (x < 100) {
        alert("The value entered is less than 100!")
    }
    if (x == 100) {
        alert("The value entered is equal to 100!")
    }
}

// option 2
if (op === 2) {
    var x = +prompt("Enter your first desired value: ")
    var y = +prompt("Enter your second desired value: ")
    if (x > y) {
        alert("First Value is greater than Second one which is: " + x)
    }
    if (x < y) {
        alert("Second Value is greater than First one which is: " + y)
    }
    if (x == y) {
        alert("Both Values are equal which is: " + x)
    }
}

// option 3
if (op === 3) {
    var x = +prompt("Enter your desired value: ")
    if (x % 2 === 0) {
        alert("The entered value is divisible by 2! which is: "+ x)
    }
    else {
        alert("The entered value is not divisible by 2! which is: "+ x)
    }
}

// option 4
if (op === 4) {
    var x = +prompt("Enter your desired value: ")
        if (x % 3 === 0) {
        alert("The entered value is divisible by 3! which is: "+ x)
    }
    else {
        alert("The entered value is not divisible by 3! which is: "+ x)
    }
}

// option 5
if (op === 5) {
    var x = +prompt("Enter your desired value: ")
        if (x % 5 === 0) {
        alert("The entered value is divisible by 5! which is: "+ x)
    }
    else {
        alert("The entered value is not divisible by 5! which is: "+ x)
    }
}

// option 6
if (op === 6) {
    var x = +prompt("Enter your desired value: ")
    var y = x % 2
    alert("The remainder is: " + y)
}

// option 7
if (op === 7) {
    var x = +prompt("Enter your desired value: ")
    var y = x % 3
    alert("The remainder is: " + y)
}

// option 8
if (op === 8) {
    var x = +prompt("Enter your desired value: ")
    var y = x % 5
    alert("The remainder is: " + y)
}
