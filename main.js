function sum (arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }
    return sum;
}

function sumDevidedByTwo(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) {
            sum+=arr[i];
        }
    }
    return sum;
}

function changeArrToSum(arr) {
    let sum = arr[0];
    for(let i = 1; i < arr.length; i++){
        sum+= arr[i];
        arr[i] = sum;
    }
}

function cut25PercentArr(arr) {
    let toCut =  Math.floor((arr.length * 0.25));
    for(let i = 0; i < toCut; i++){
        arr.shift();
    }
}

function rotateFirstLast(arr) {
   swap(arr,0,arr.length - 1);
}

function changeOrder(arr) {
    let first = 0;
    let last = arr.length - 1;

    while(first < last) {
        swap(arr,first,last);
        ++first;
        --last
    }
}

function swap (arr,idx1,idx2) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
 
function concutOppositeOrder(arr1,arr2) {
   changeOrder(arr1);
   changeOrder(arr2);
    arr2 = arr2.concat(arr1);
    return arr2;
}

function rotate (arr,k) { 
    for(let i = 0; i < k; i++){
        for(let i = 1; i < arr.length; i++){
            let temp = arr[i];
            arr[i] = arr[0];
            arr[0] = temp;
        }
    }
}

function rotate2(arr) {
    for(let i = 0; i < arr.length; i++){
        arr.unshift(arr.pop());
    }
}

function pop(arr) {
    let toCut = Math.floor((arr.length - 1) * 0.25);
    let j = 0;
    let tempLen = arr.length - toCut - 1;

    for(let i = toCut; i < arr.length; i++){
        arr[j] = arr[i];
        ++j;
    }

    for(let i = arr.length - 1; i > tempLen; i--){
        arr.pop();
    }
}

function rotationFinal(arr) {
    for(let i = 1; i < arr.length; i++){
        let temp = arr[i];
        arr[i] = arr[0];
        arr[0] = temp;
    }
}

function sortedInReverse(arr1,arr2) {
    let newArr = [];
    let last1 = arr1.length - 1;
    let last2 = arr2.length - 1;

    while (last1 >= 0 && last2 >= 0) {
        if (arr1[last1] >= arr2[last2]) {
            last1 = addToArr(newArr,arr1,last1);
        }
        else {
            last2 = addToArr(newArr,arr2,last2);
        }
    }

    addRest(newArr,arr1,last1);
    addRest(newArr,arr2,last2);

    return newArr;
}

function addRest(newArr,arr,idx) {
    while (idx >= 0) {
        idx = addToArr(newArr,arr,idx);
    }
}

function addToArr(newArr,arr,idx) {
    newArr.push(arr[idx]);
    --idx;

    return idx;
}