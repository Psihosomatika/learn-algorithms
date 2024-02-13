// const arr = [
//   87, 34, 12, 56, 78, 93, 27, 19, 45, 67, 89, 10, 31, 42, 53, 64, 75, 86, 97, 8,
//   19, 30, 41, 52, 63, 74, 85, 96, 7, 18, 29, 39, 49, 59, 69, 79, 89, 99, 100,
//   11, 22, 33, 44, 55, 66, 77, 88, 98, 9, 20, 31, 42, 53, 64, 75, 86, 97, 8, 19,
//   30, 41, 52, 63, 74, 85, 96, 7, 100, 11, 22, 33, 44, 55, 66, 77, 88, 98, 9, 20,
//   19, 30, 41, 52, 63, 74, 85, 96, 7, 100, 11, 22, 33, 44, 55, 66, 77, 88, 98, 9,
//   20, 19, 30, 41, 52, 63, 74, 85, 96, 7, 100, 11, 22, 33, 44, 55, 66, 77, 88,
//   98, 9, 20, 19, 30, 41, 52, 63, 74, 85, 96, 7, 100, 11, 22, 33, 44, 55, 66, 77,
//   88, 98, 9, 20, 19,
// ];
const arr = [2, 1, 4, 3, 6, 8, 10, 5, 9, 7];

const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallest_index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }

  return smallest_index;
};

const selectionSort = (arr) => {
  const newArr = [];
  console.log(arr.length);

  while (arr.length !== 0) {
    let smallest = findSmallest(arr);
    let removed = arr.splice(smallest, 1);
    console.log(arr);
    newArr.push(removed[0]);
  }
  return newArr;
};
const res = selectionSort(arr);
console.log(res);
