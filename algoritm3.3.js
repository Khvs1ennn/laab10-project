function bubleSort(arr)
{
   let i, j, temp;
   let swapped = false;
   for (i = 0; i < arr.length - 1; i++)
   {
        swapped = false;
        for (j = 0; j < arr.length - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                swap(arr, j, j + 1);
                swapped = true;
            }
        }
        if (swapped === false) {
            break;
        }
   }
} 
function swap(arr, i, j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
let arr = [56, 23, 78, 12, 34];
console.log("Ehleh utga:", arr);
bubleSort(arr);
console.log("Erembelsen:", arr);
