const myArr = [1, 2, 3, 4 ,5]
const myArr1 = ["Manika","Piyush","Monika","Shivani"]
const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr1[3]);//Shivani


//+++++++++++++++++++++++++++++++++     ARRAY METHOD    +++++++++++++++++++++++++++++++++++++

myArr.push(6)
myArr.push(7)
myArr.push(8)//push the value at the end of the array that is insert it as last value
myArr.pop()//removes the last value from the array
// console.log(myArr);//[ 1, 2, 3, 4, 5, 6, 7, 8 ]

// Shifting and Unshifting in Array is equivalent to popping, but working on the first element instead of the last
myArr.shift()
// console.log(myArr)//[ 2, 3, 4, 5, 6, 7 ]
myArr.unshift(10)
// console.log(myArr)//[10, 2, 3, 4, 5, 6, 7 ]
