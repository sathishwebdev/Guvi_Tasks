
//Assessment on 4th sept 2021 by GUVI 
// in GUVI bootcamp

// 1) get count of rotation between two arrays - level  : easy

let sampleInputForRotationCount = [4, [4,3,2,5], [3,2,5,4]] // expected output is 1
const getCountOfRotaion = (array1, array2, length) =>{ 
    if(length<=100000){
    let count = 0
     while(JSON.stringify(array1)!=JSON.stringify(array2)){
        
        //what we gonna do is jst rotate it again to get the count value 
        // this loop will run untill two arrays are equal 
        // step :1
        // seperate the last index value of the array by slice it  and store it in temp array
        
        let temp1 =  array2.slice(0, length-1) // without last value
        let temp2 = array2.slice(length-1) // last val only
        //assign temp array values to original array
        array2 = temp1
        // console.log(array2); //used for check
        // unshift insert the last value (temp2) into 1st index (0) 
        array2.unshift(...temp2)
        // console.log(array2) // used for check
        
        count++
    }

    // returning the count value
   return count
}else{
    return `N value should be <= 100000`
}
}


console.log(`Count of rotation : ${getCountOfRotaion(sampleInputForRotationCount[1], sampleInputForRotationCount[2], sampleInputForRotationCount[0])}`);

// assesment quest 2 -- level : medium
//  get the String as S - T is the value if 1 - to uppercase if 2 - to lowercase - P is the integer which is denotes that mutliple of P value only make changes in String S 

// sample inputs
let  [S, P, T] = ["proFile", 1, 2] // [S, P, T] -- // expected output is profile

// create the function to change the case of char at given creteria 
const caseChanger = (S, P, T) => {
let ans = []
// change to Lowercase
if(T === 2 ){
    for(let i =1; i <= S.length ; i++){
        if(i % P == 0){
   ans.push(S[i-1].toLowerCase());
        }else{
            ans.push(S[i-1])
        }
    }
}else if (T === 1){  //changing to upper case
    for(let i =1; i <= S.length ; i++){
        if(i % P == 0){
   ans.push(S[i-1].toUpperCase());
        }else{
            ans.push(S[i-1])
        }
    }
   
} else ans.push("T can be either 1 or 2") // for invalid iput

return ans.join("") // returning the answer
}

console.log(`case Changing : input = [${S},${P},${T}] - Ouput: ${caseChanger(S,P,T)}`);



// question 3 - level : hard
// Two values are given in array N , Q.  N - length of the following first array (2nd array), Q - No. of arrays which hase 2 values U, V 
// find the sum of the values of array (which is N length)  from U index to V index (1 based indexing) 

let sampleInput = [[5, 3], [1,1,1,1,1], [1,3],[2,4], [3,4]] //sampleInput expected output is 3 3 2

// function to sum the values of array from U index to V index
const sum = ([[N,Q], array, ...sumData]) =>{
    console.log(`inputs : [${N}, ${Q}], [${array}], [${sumData[0]}], [${sumData[1]}], [${sumData[2]}]`);
   
// sub function to do sum process
function subSum (val) {let ans = 0;
   for(let i = val[0]; i <=val[1]; i++){
    ans = ans + +array[i]
   } return ans;
}
// loop for run Q times with values of Q arrays which has U and V value
for(let j = 0; j < Q; j++){ 
    console.log(`inputs(U,V) : ${sumData[j]} Ans : ${subSum(sumData[j])}`); 
} 
   
}
// initiate loop to sum #invoking the function sum
sum(sampleInput)
