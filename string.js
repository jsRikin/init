/**
 * indexOf
 * includes
 */

/**
 * replace
 * toUpperCase
 * toLowerCase
 */

/**
 * substr
 * slice
 * split
 * substring
 */
let temp = 'hello js 2019 js';
console.log(temp.indexOf('js'));
console.log(temp.includes('js'));

let  temp2 = 'Hello JS 2019 Hello Bitto ndasuy  Hello'
console.log(temp2.slice(2, 6));
console.log(temp2.substr(2, 4));
console.log(temp2.substring(2, 6));
console.log(temp2.substring(7, 3));
// doi cho neu end < start
console.log(temp2.substring(7, -3));
// doi cho truoc , -3 <0, 0 => 7
console.log(temp2.slice(7, 16));
console.log(temp2.length);
// 7 start point, endPoint : sumString - |-3| : 16
//replace
let newString = temp2.replace('Hello', 'hi');
// console.log(newString);
let  temp3 = 'hi JS 2019 Hello Bitto ndasuy  Hello'

function replaceALL(content, oldText, newtext){
    var result = content;
    while(result.includes(oldText)){
        result = result.replace(oldText, newtext);
    }
    return result;
}

let result = replaceALL(temp3, 'Hello', 'hi');
console.log(result)

