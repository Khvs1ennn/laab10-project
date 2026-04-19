const totalTransactions = 1000000;
const targetId = 888888;

const transactions = Array.from({ length: totalTransactions }, (_, index) => index + 1);


function linearSearch(arr, target) {
    let comparisons = 0;
    for (let i = 0; i < arr.length; i++) {
        comparisons++; 
        if (arr[i] === target) {
            return comparisons; 
        }
    }
    return comparisons;
}

function binarySearch(arr, target) {
    let comparisons = 0;
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        comparisons++;
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return comparisons; 
        } else if (arr[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }
    return comparisons;
}

console.log("=== RentPay гүйлгээний хайлтын үр дүн ===");
console.log(`Нийт гүйлгээний тоо: ${totalTransactions}`);
console.log(`Хайж буй гүйлгээний дугаар: ${targetId}\n`);

const linearSteps = linearSearch(transactions, targetId);
console.log(`1. Linear Search алгоритм нь: ${linearSteps} удаа шалгах үйлдэл (comparison) хийж оллоо.`);

const binarySteps = binarySearch(transactions, targetId);
console.log(`2. Binary Search алгоритм нь: ${binarySteps} удаа шалгах үйлдэл (comparison) хийж оллоо.`);