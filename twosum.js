//goal is to go through this array ONCE instead of once per number,
//which would result in an n-squared O-Notation

var twoSum = function(nums, target) {
    const prevValues = {}
    for (let i=0; i < nums.length; i++){
        const currentNumber = nums[i]
        const neededValue = target - currentNumber
        const indexTwo = prevValues[neededValue]
        if (indexTwo != null) {
            return [indexTwo, i]
        } else {
            prevValues[currentNumber] = i
        }
    }
};