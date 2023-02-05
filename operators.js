//uniary operator: it has single operand

let x = 1;
x = -x;
alert(x); 

//binary operator: it has two operands.
let a = 1, y = 3;
alert(y -x);

"" + 1 + 0          // "" false
"" - 1 + 0

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2


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