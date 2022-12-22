import React from 'react';

const DuplicateRemove=()=>{
      const arr=["Lion","Rabbit","Mouse","Monkey","Lion","Rabbit"];
      const res = [];
      var len = arr.length;
      for (let i = 0; i < len; i++) {
          for (let j = 0; j < len; j++) {
              if (arr[i] == arr[j]) {
                  if (!res.includes(arr[i])) {
                      res.push(arr[i])
                  }
              }
          }
      }
      console.log("res",res)    


    return res;
}
export default DuplicateRemove;


function animales(arr) {
    const res = [];
    var len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[i] == arr[j]) {
                if (!res.includes(arr[i])) {
                    res.push(arr[i])
                }
            }
        }
    }
    console.log(res)
}
animales(["Lion","Rabbit","Mouse","Monkey","Lion","Rabbit"])


//sorting the name

const obj_res = [
    { "name": "abc", age: 10 },
    { "name": "jaya", age: 11 },
    { "name": "raju", age: 9 },
    { "name": "cderaju", age: 1 },
  ];
  const res = obj_res.sort((a, b) => a.name > b.name ? 1 : -1);
  console.log(res)