//uniary operator: it has single operand

let x = 1;
x = -x;
alert(x); 

//binary operator: it has two operands.
let a = 1, y = 3;
alert(y -x);
//////

"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)


/////////////////////////////////
z=0;
z++;
alert(z); // Outputs 1

z=0;
++z;
alert(z); //Outputs 1

// But if we include now these expressions in another expression (alert for example) then we can see
//the difference:

let z=0;
alert(z++); //Outputs 0

z=0;
alert(++z); // Outputs 1


///////
let d = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(d + b); // 12

// promt returns string
// convert is using +prompt