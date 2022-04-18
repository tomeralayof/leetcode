var removeDuplicates = function(nums) {
    let i = 1;
    while(i < nums.length){
        if (nums[i] - nums[i - 1] === 0) {
            nums.splice(i, 1);
        }
        else {
            i++;
        }
    }
};

function removeElement(nums,val) {
    let i = 0;
    while(i < nums.length){
        if (nums[i] === val) {
            nums.splice(i, 1);
        }
        else {
            i++;
        }
    }
}

var searchInsert = function(nums, target) {    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < target && nums[i + 1] > target) {
            return i + 1;
        }
        
        else if(target < nums[i] || nums[i] === target) {
            return i;
        }
        
    }
    
    return nums.length;
};

var searchInsert2 = function(nums, target) {    

    let start = 0;
    let end = nums.length - 1;

    while(start < end) {
        let middle =  Math.floor((start + end) / 2);

        if(nums[middle] < target && nums[middle + 1] > target) {
            return middle + 1;
        }
        
        if (nums[middle] === target) {
            return middle;
        }

        else if(nums[middle] < target) {
            start = middle + 1;
        }

        else {
            end = middle -1;
        }
    }

    

    return nums.length;
}

var plusOne = function(digits) {
    let sum = 0;
    for(let i = 0; i < digits.length; i++){
        sum = sum * 10 + digits[i];
    }

    sum = sum + 1;
    console.log(sum);
    
    let newArr = [];

    while(sum > 0) {
        newArr.unshift(sum % 10);
        sum = Math.floor(sum / 10);
    }
    
    return newArr
};

var replaceElements = function(arr) {
    let temp = arr[arr.length - 1];
    for(let i = arr.length - 2; i >= 0; i--){
        temp = arr[i + 1];
        let curr = arr[i];
        arr[i] = Math.max(arr[arr.length - 1],temp);
        arr[arr.length -1] = curr;
    }

    arr[arr.length - 1] = -1;
};

var finalValueAfterOperations = function(operations) {
    let x = 0;
    for(let i = 0; i < operations.length; i++){
        operations[i] =  operations[i].replace('X', '');
        x = operations[i] === "--" ? x - 1 : x + 1;
    }

    return x;
};

function mostWordsFound (sentences) {
    let max = 0;
    for(let i = 0; i < sentences.length; i++){
        max = Math.max(max,parser(sentences[i]));
    }
    return max;
};


function parser(str) {
    let counter = 0;
    for(let i = 0; i < str.length; i++){
        if (str[i] === ' ') {
            counter++;
        }
    }

    return  counter + 1;
}

function isRotation(arr1,arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let idx = findIdx(arr1,arr2);

    if (idx === -1) {
        return false;
    }

    let i = 0;
    let counter = 0;

    while (arr1[i] === arr2[idx] && idx < arr2.length) {
        ++i;
        ++idx;
        ++counter;
    }

    idx = 0;

    while (arr1[i] === arr2[idx]) {
        ++i;
        ++idx;
        ++counter
    }

    return counter === arr1.length;
}

let arr2345 = [1,2,2,3];
let anotherArr = [2,3,1,2];
console.log("result",isRotation(anotherArr,arr2345));

function findIdx(arr1,arr2) {
    for(let i = 0; i < arr2.length; i++){
        if (arr2[i] === arr1[0]) {
            return i;
        }
    }

    return -1;
}

var decompressRLElist = function(nums) {  
    let compressedNum = [];
    for(let i = 0; i < nums.length; i+=2){
        for(let j = 0; j < nums[i]; j++){
            compressedNum.push(nums[i + 1]);
        }
    }
    return compressedNum;
};

let MAX = 10;

var countKDifference = function(nums, k) {
    let counter = 0;
    var hashmap = Array(MAX).fill(false);
    for(let i = 0; i < nums.length; i++){
        hashmap[nums[i]]++;
    }
    
    for(let i = 0; i < nums.length; i++){
        let currNum = nums[i];

        if (k + currNum < MAX && hashmap[currNum - k]) {
            ++counter;
        }
        if (k - currNum >=0 &&  hashmap[k - currNum]) {
            ++counter;
        }
    }
    
    return counter;

}