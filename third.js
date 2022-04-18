var countGoodTriplets = function(arr, a, b, c) {
    let counter = 0;
    for(let i = 0; i < arr.length -2; i++){
        for(let j = i + 1; j < arr.length -1; j++){
            for(let k = j + 1; k < arr.length; k++){
                if ((arr[i] - arr[j] <= a)
                && (arr[j] - arr[k] <= b)  
                &&  (arr[i] - arr[k] <= c)) {
                    ++counter;
                }    
            }
        }
    }
    return counter;
};

var countPairs = function(nums, k) {
    let counter = 0;
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j] && ((i * j) % k) === 0){
                counter++;
            }
        }
    }  
    return counter;
};

var firstPalindrome = function(words) {
    let i = 0;
    for(i = 0; i < words.length && !isPal(words[i]); i++){} /*nothing*/
    return i === words.length ? "" : words[i];
};


function isPal(str){
    let first = 0;
    let last = str.length - 1;

    while(first < last && str[first] === str[last]) {
        ++first;
        --last;
    }
    
    return str[first] === str[last];
}

var largestAltitude = function(gain) {
    let alltidutes = [];
    alltidutes[0] = 0;

    for(let i = 0; i < gain.length; i++){
        alltidutes[i + 1] = alltidutes[i] + gain[i];
    }
    
    let mx = alltidutes[0];

    for(let i = 1; i < alltidutes.length; i++){
       mx = Math.max(mx,alltidutes[i]);
    }
    return mx;
};

var largestAltitudeInPlace = function(gain) {
    
    let currPoint = 0;
    let max = 0;

    for(let i = 0; i < gain.length; i++){
        gain[i] += currPoint;
        currPoint = gain[i];
        max = Math.max(max,gain[i]);
    }
    
    return max;
};

function moveZerosToEnd(arr) {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        if(arr[i] === 0 && arr[j] === 1) {
           swap(arr,i,j);
        }
        arr[i] === 1 ? ++i : --j;
    }
}

function swap (arr,i,j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function binarySearch(arr,num) {
    let first = 0;
    let last = arr.length - 1;

    while (first <= last) {
        let middle = Math.floor((first + last) / 2);
        if (arr[middle] === num) {
            return middle;
        }    
        else if (arr[middle] < num) {
            first = middle + 1;
        }
        else {
            last = middle - 1;
        }
    }

    return -1;
}

var countMatches = function(items, ruleKey, ruleValue) {
    let counter = 0;
    
    let lut = [];
    
    lut['n'] = 0;
    lut['c'] = 1;
    lut ['t'] = 2;
    

   let idx = lut[ruleKey[0]];

    for(let i = 0; i < items.length; i++){
        if(items[i][idx] === ruleValue){
            ++counter;
        }
    }
    
    return counter;
};
var restoreString = function(s, indices) {
    let lut = new Array(256).fill(false);
    let str = "";

    for(let i = 0; i < indices.length; i++){
        lut[indices[i]] = s[i];
    }

    for(let i = 0; i < lut.length && lut[i] ; i++){
        str+=lut[i];
    }

    return str;
};

var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    let n = arr.length - 1;
    for(let i = 0; i < arr.length; i++){
        let start = n - i;
        let end = i + 1;
        let total = start * end;
        let odd = Math.floor(total / 2);
    }

    return sum;
}


function numOfChangeDirextion(arr) {
    let ispos = arr[0] > 0;
    let sum = arr[0];    
    let counter = 0;

    for(let i = 1; i < arr.length; i++){
        let temp = sum + arr[i];
        if (ispos && temp < sum) {
            ++counter;
            ispos = false;
            sum = arr[i];
        }
        else if(!ispos && temp > sum) {
            ++counter;
            ispos = true;
            sum = arr[i];
        }
        else {
            sum += arr[i];
        }
    }

    return counter;
}

var countConsistentStrings = function(allowed, words) {
    let counter = 0;
    let lut = new Array(256).fill(false);
    for(let i = 0; i < allowed.length; i++){
        lut[allowed[i]] = true;
    }
    
    for(let i = 0; i < words.length; i++){
        /*valid- 1,not valid -0*/
        counter+=checkValids(lut,words,i);
    }
    
    return counter;
};

function checkValids(lut,words,i) {

    let isValid = true;

    for(let j = 0; j < words[i].length && isValid; j++) {
        isValid = lut[words[i][j]];
    }

    return isValid === true;
}

var maxProductDifference = function(nums) {
    nums.sort((a,b) => a - b);
    return (nums[nums.length - 1] * nums[nums.length - 2]) - (nums[0] * nums[1]);
};

var findDifference = function(nums1, nums2) {
    let result = [[],[]];
    let lut1 = {};
    let lut2 = {};

    removeDuplicates(lut1,nums1,nums2);
    removeDuplicates(lut2,nums2,nums1);

    addResults(0,lut1,result);
    addResults(1,lut2,result);

    return result;
};


function addResults(idx,lut,result) {
    let keyValPair = Object.entries(lut);
    for(let [key,val] of keyValPair) {
        if(val !== 0) {
            result[idx].push(Number(key));
        }
    }    
}

var intersection = function(nums1, nums2) {

    let lut = {};
    let result = [];

    let oneBigger = nums1.length >= nums2.length;

    let arr1 = oneBigger ? nums1 : nums2;
    let arr2 = oneBigger ? nums2 : nums1;
    
    initLut(lut,arr1,arr2);
    
    let keyValPair = Object.entries(lut);
    for(let [key,val] of keyValPair) {
        if(val === 2) {
            result.push(Number(key));
        }
    }
    
    return result
};

function initLut(lut,arr,arr2){
    
    for(let i = 0; i < arr.length; i++){
        lut[arr[i]] = 1;
    }
    
    for(let i = 0; i < arr2.length; i++){
        if(lut[arr2[i]]) {
            lut[arr2[i]] = 2;
        }
    }
}

function swapArr(arr,idx1,idx2) {
    if (idx1 < 0 || idx1 > arr.length -1 || idx2 < 0 || idx2 > arr.length - 1) {
        throw new Error("out of boundry exeption");
    }

    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function averageArr(arr) {
    if (!arr.length) {
        throw new Error("cannot devide by 0");
    }

    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum+=arr[i];
    }
    return sum / arr.length;
}

function pow(base,exponent) {
    let isPositive = true;
    
    if (!base && exponent <= 0) {
        throw new Error("math error");
    }
    
    else if (!exponent) {
        return base > 0 ? 1 : -1;
    }
    
    else if(exponent < 0) {
        isPositive = !isPositive;
        exponent*=(-1);
    }

    let baseToMultiple = base;
    
    for(let i = 0; i < exponent - 1; i++){
        base*=baseToMultiple;
    }

    return isPositive ? base : 1 / base;
}

function reverseNum(num) {
    let result = 0;
    let flag = 1;
    
    if (num < 0) {
        num*=(-1);
        flag = -1;
    }

    while (num > 0) {
        let temp = num % 10;
        num = Math.floor(num / 10);
        result = result * 10 + temp;
    }

    return result * flag;
}

function reverseArrayNums(arr) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = reverseNum(arr[i]);
    }
}

var smallerNumbersThanCurrent = function(nums) {
    let lut = new Array(101).fill(0);

    for(let i = 0; i < nums.length; i++){
        lut[nums[i]]++;
    }

    for(let i = 1; i < lut.length; i++){
        lut[i]+=lut[i-1];
    }

    for(let i = 0; i < nums.length; i++){
        let position = nums[i];
        nums[i] = position === 0 ? 0 : lut[position - 1];
    }

    return nums;
};

//rotate not in place
var rotate = function(nums,k) {

    k = k % nums.length;
    let result = [];

    let idx = nums.length - k;

    for(let i = 0; i < nums.length; i++){
        result[i] = nums[(idx + i) % nums.length];
    }

    return result;
}

function fibonachi(idx) {
    let curr = 0, 
    next = 1,
    temp;
    
    for(let i = idx; i >  1; i--){
        temp = next;
        next+=curr;
        curr = temp;
    }

    return curr;
}

var maxProduct = function(nums) {
    let max = nums[0];
    let maxIdx = 0;
    
    for(let i = 1; i < nums.length; i++){
        if (nums[i] > max) {
            max = nums[i];
            maxIdx = i;    
        }
    }
    let secMax = max === nums[0] ? nums[1] : nums[0];

    for(let i = 0; i < nums.length; i++){
        if (nums[i] > secMax && i != secMax) {
            secMax = nums[i];
        }
    }
    
    return (max - 1) * (secMax - 1);
};

var max1 = function (nums) {
    nums.sort((a,b) => a - b);
    return ((nums[nums.length - 1] - 1)) * (nums[nums.length - 2] - 1);
}