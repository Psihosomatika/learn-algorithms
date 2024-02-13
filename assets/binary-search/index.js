const arr = [];

const generationArray = (number) => {
  for (let i = 0; i <= number; i++) {
    arr.push(i);
  }
};
// const createNewElement = (tag, text, className) => {
//   const elem = document.createElement(`${tag}`);
//   elem.classList.add(`${className}`);
//   elem.textContent = `${text}`;
//   return elem;
// };

// const form = document.querySelector(".form");
// const button = form.querySelector(".form__button");
// const input = form.querySelector(".form__input");
// const validity = () => {
//   if (input.value == "" || input.value == null) {
//     const elem = createNewElement(
//       "p",
//       "Введите число, пожалуйста",
//       "error-message"
//     );
//     input.before(elem);
//     button.disabled = true;
//   }
// };
// input.addEventListener("input", (event) => {
//   if (document.querySelector(".error-message")) {
//     const error = document.querySelector(".error-message");
//     error.remove();
//     button.disabled = false;
//   }
//   validity();
// });

// const result = document.querySelector(".result");
// button.addEventListener("click", (event) => {
//   event.preventDefault();

//   const a = input.value;
//   generationArray(a);
//   result.innerHTML = arr;
//   console.log(arr);
// });
generationArray(100);
console.log(arr);
const binarySearch = (arr, value) => {
  let low = 0;
  let hight = arr.length - 1;
  while (low <= hight) {
    let mid = Math.floor((low + hight) / 2);
    // console.log(mid);
    // console.log(arr[mid]);
    let guess = arr[mid];
    if (value == guess) {
      // console.log(`Позициа искомого числа ${mid}`);
      return mid;
    } else if (value > guess) {
      low = mid + 1;
    } else {
      hight = mid - 1;
    }
  }
  return `нет такого числа`;
};

console.log(binarySearch(arr, 0));

//TODO: хочу доделать ввод пользователем минимального и максимального значения массива, шаг массива, массив из букв (слов), что бы верстка не дергалась. Добавить время за какое прошел поиск и количество операции. + можно предсказывать сколько будет операции в зависимости от количества элементов массива. Можно подсвечивать в прямо в таблице со степенями двойки
