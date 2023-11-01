var arr = [1,2,3,4,5,6,7,8,9] // 1 + 2 === sum false means go to next for loop iteration                              // 0 + 1
let sum = 17;
for (let i = 0; i < arr.length; i++)
{
  if (arr[i] + arr[i + 1] === sum) 
  {
    let arr2 = arr[i] + arr[i + 1];
    console.log(arr2 + " "+ "On the" + " " + arr[i] + " & " + arr[i + 1]);
  }
}