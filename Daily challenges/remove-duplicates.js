```javascript
function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates([10, 10, 20, 30, 30, 40]));
console.log(removeDuplicates([1, 1, 1, 1]));
```
