alert(2>1); // true
alert(2 == 1); // false
alert(2 != 1); // true


// In string comparison, js follows lexicographical order from first letter of first string to 2nd string.. then goes on.

alert('Z'>'A');  // true 
alert('Glow' > 'Glee'); //true

//comparsion between different types

alert('2'> 1); // true
alert('01'==1); // true


////////////////////////////////
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!


// strict equality check
alert( 0 === false ); // false

/////////////////////////////////
// strange results 
alert( null > 0 );  // false
alert( null == 0 ); // false
alert( null >= 0 ); // true

alert( undefined > 0 ); // false
alert( undefined < 0 ); // false 
alert( undefined == 0 ); // false 

undefined == null  // true
undefined === null  // false

