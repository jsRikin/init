/**
 * OBJECT 
 */

const demoObjStudent = {
    lastname: 'last',
    firstname: 'first',
    fullname: function() {
        return `${this.lastname} ${this.firstname}`
    }
}
console.log(demoObjStudent.fullname())

/**
 * VD2
 */
var arrStudent = [
    { lastname: 'aaa', firstname: 'aaa', age: 20, gender: 1  },
    { lastname: 'aaa', firstname: 'aaa', age: 26, gender: 1  },
    { lastname: 'bbb', firstname: 'bbb', age: 25, gender: 1  },
    { lastname: 'ccc', firstname: 'ccc', age: 27, gender: 1  },
    { lastname: 'ddd', firstname: 'ddd', age: 22, gender: 0  }
];

/**
 * PUSH | POP
 */
let userForPush = { lastname: 'push', firstname: 'push', age: 20, gender: 1  };
arrStudent.push(userForPush)
console.log(arrStudent)

arrStudent.pop();
console.log(arrStudent)

// arrStudent.forEach(item => console.log(item))

/**
 * FIND, FIND_INDEX
 * BASIC: MAP, FILTER, SOME, EVERY, SLICE
 * ADVANCE: REDUCE
 */
 
 /**
  * FIND
  */

let objUserResult = arrStudent.find(function(user) {
    return user.lastname === 'aaa';
})
console.log(objUserResult)
/**
 * ES6
 */
const statementQuery = user => user.lastname === 'aaa';  
let objUserResult2 = arrStudent.find(statementQuery);

console.log(objUserResult2)
/**
 * FIND_INDEX
 */
let indexUserResult = arrStudent.findIndex(statementQuery);
console.log(indexUserResult)

/**
 * MAP
 */
let arrDemoMap = arrStudent.map(function(user) {
    return Math.pow(user.age, 2)
})
let arrDemoMapEs6 = arrStudent.map(user => {
    let userAge = user.age;
    user['age'] = Math.pow(userAge, 2)
    return user;
})

console.log(arrDemoMap)
console.log(arrDemoMapEs6)

/**
 * FILTER
 */
let arrDemoFilter = arrStudent.filter(function(user) {
    return user.age > 25;
})

console.log(arrDemoFilter)

/**
 * EVERY
 */
let isEveryUserMaleGender = arrStudent.every(user => user.gender === 1)
console.log(isEveryUserMaleGender)
/**
 * SOME
 */
let isSomeUserMaleGender = arrStudent.some(user => user.gender === 1)
console.log(isSomeUserMaleGender)

/**
 * SPLICE
 */
console.log(`----splice---`);
let infoUserSliced = arrStudent.splice(1, 1);
console.log(infoUserSliced)

console.log(arrStudent)
console.log(`----end splice---`);

let userInfo = {
    lastname: '222',
    firstname: '222'
}

console.log(userInfo.lastname)
console.log(userInfo['lastname'])

