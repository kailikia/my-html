let x = 16;

let marks = prompt("Enter marks");
alert(marks);

//or is || and is &&
if (x > 10 && x < 20)
{
    if(x > 15)
    {
        alert("true");
        console.log("Value when true");
    }
    else if(x > 12)
    {
        alert ("greater than 12")
    }
    else if (x < 12)
    {

    }
    else
    {

    }
}
else
{
    alert("false");
    console.log("Value when false");
}

//Enter a marks that is between 0 and 100
//If the number is above 100 or below 0 give an error
//Return the grade of the student
// >= 70 - A
// <70 and >=60 - B
// <60 and  >=50 - C
// <50 and >=40 - D
// < 40 - E