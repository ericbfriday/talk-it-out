/*
1. Start with the number 42 and set that equal to the variable `majorKey`

2. Create conditional logic to check if `majorKey` is greater than or equal to 53
2-1. If true, add 42 to `majorKey`
2-2. If false, subtract 13 from `majorKey`

3. Add a string with a value of 11 to `majorKey`

4. Create an array named `keyChars`, then loop through `majorKey` using the `charAt` method and set 
`keyChars[i]` to each value

5. Remove the first and last values from `keyChars`

6. Create a new variable. Loop **backwards** through `keyChars` and store each value into the new variable, combining each of the values of `keyChars`

7. `parseInt` both the `majorKey` and the new variable created in Step 6, ensure that both `majorKey` and the new variable are set to these new parsed values.

******* SWITCH PROGRAMMERS *******

8. Add `majorKey` and the new variable created in Step 6 together and store them in `majorKey`

9. If the new value of `majorKey` is less than 60, set `majorKey` equal to 14. If not, check to see if it is equal to 2930, if it is, set `majorKey` equal to 27.
If neither of these are true, set `majorKey` to 2.

10. Create a while loop that counts down from 10 and increments `majorKey` by 1.

11. Create a function that accepts an argument `val`. The function should convert `val` to a string, then drop the first character off the string, but only if there
is more than one character in the string. Return `val` and set `majorKey` to the returned value.

12. Call the function.

13. Console log `majorKey`. 

14. Create an index.html file, link in this JavaScript file. Load in the browser and check the value from Step 13.

15. Your answer should be a string value that equals 7. Is that what you got?
*/

// 1. 
var majorKey = 42;
console.log(majorKey);


// 2. 
if (majorKey >= 53) {
    majorKey += 42;
} else {
    majorKey -= 13;
}
console.log(majorKey);

// 3.
majorKey += '11';

// 4.
var keyChars = [];

for (i = 0; i < majorKey.length ; i++) {
    keyChars[i] = majorKey.charAt(i);
}

console.log(keyChars);

// 5. 
keyChars.shift(0);
keyChars.pop(keyChars.length - 1);
console.log(keyChars);

// 6.
console.log('showing step 6:');

var reverseKeyChars = [];
for (var i = keyChars.length - 1 ; i >= 0 ; i --) {
    reverseKeyChars.push(keyChars[i]);
    console.log([i]);
}

var reverseKeyChars = reverseKeyChars.join('');

console.log('showing reverseKeyChars:');
console.log(reverseKeyChars);

// 7.
console.log('showing step 7:');

for (i = 0; i <= majorKey.length - 1 ; i++) {
    parseInt(majorKey[i]);
//    console.log([i])
}

for (i = 0; i <= reverseKeyChars.length - 1 ; i++) {
    parseInt(reverseKeyChars[i]);
//   console.log([i])
}
console.log(reverseKeyChars);

var reverseKeyChars = parseInt(reverseKeyChars);
var majorKey = parseInt(majorKey);
// Note to self on 7 - we forgot to declare variables for unning parseInt


// 8. (switched)

majorKey += reverseKeyChars;
console.log(majorKey);

// 9. 
if (majorKey < 60) {
    majorKey = 14;
} // end if
else if (majorKey === 2930) {
    majorKey = 27;
} // end else if
else {
    majorKey = 2;
}
console.log(majorKey);

// 10.

var counter = 10;
while (counter > 0) {
    majorKey = majorKey - 1;
    counter = counter - 1;
}
console.log(majorKey);

// 11.
/**
function myFunction(val) {
    var cake = val.toString();
    console.log('logging string ' + cake);
    if (val.length > 1) {
        console.log('long enough');
        var cake = val.substring(1);
        console.log('Logging substringed val');
        console.log(cake);
        return cake;
    }
}
*/

function myFunction(val){
    var cake = val.toString();
    console.log(cake);
        if (cake.length > 1) {
            console.log('string is long enough');
            var cake = cake.substring(1);
            console.log(cake);
            return cake;
        }
    var cake = majorKey;
}

var majorKey = myFunction(majorKey);

// 12. 



// 13.
console.log('final call - Step 13:');

console.log(majorKey);
