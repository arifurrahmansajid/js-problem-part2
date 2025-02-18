const heights = [65, 66, 68, 72, 78, 60, 65, 66];

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const max = getMax(heights);
console.log('max value is', max);

// homework: min number

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const min = getMin(heights);
console.log('min value is', min);
// homework: average number

function getAverage(numbers){
    let sum = 0;
    for(const num of numbers){
        sum += num;
    }
    return sum / numbers.length;
}           
const average = getAverage(heights);
console.log('average value is', average);