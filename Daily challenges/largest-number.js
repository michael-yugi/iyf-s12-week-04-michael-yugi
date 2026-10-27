```javascript
function findLargest(numbers) {
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

console.log(findLargest([12, 5, 30, 8, 20]));
console.log(findLargest([4, 9, 2, 15, 7]));
console.log(findLargest([-5, -2, -10, -1]));
```
