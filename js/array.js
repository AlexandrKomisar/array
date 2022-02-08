// let gameUHD = [
//     {name: 'Far Cry 6', year: '2021', genre: 'action',
//             video: ['zGMzdiVq7lE', 'Z6d5a3IDKqE', 'Gw2HhTmmzjU', 'VxSNPe6-mts',
//                     'wZhsduP4CHM', '43lEGhlYEdI', 'fN4ZmUqyDvA']},
//     {name: 'Survarium', year: '2021', genre: 'online action', video: ['uRQwR0TlLaI',]},
//     {name: 'Call of Duty: Black Ops Cold War', year: '2020', genre: 'action', video: ['Yv3Sfz-87Wk',]},
//     {name: '', year: '', genre: '', video: []},
// ]

// for (let i = 0; i < gameUHD.length; i++){
//     console.log(gameUHD[i]);
// }

// gameUHD.forEach (function(person, index, gameUHD ){
//     console.log(person);
// })

// gameUHD.forEach (person => console.log (person))
// const newGameUHD = gameUHD.map(person => `${person.name} (${person.video})`)
// console.log(newGameUHD);
// console.log(gameUHD);
// const filtArr = []
// for (let i = 0; i < gameUHD.length; i++){
//     if (gameUHD[i].year <= 2020) {
//         filtArr.push(gameUHD[i])
//     }
// }
// console.log(filtArr);
// let resultOne = gameUHD.find(item => item.name === 'Far Cry 6')
// console.log(resultOne)
// var arr = [3,2,5,6];
// function arraySum(array){
// var sum = 0;
// for(var i = 0; i < array.length; i++){
//     sum += array[i];
// }
// console.log(sum);
// }
// arraySum(arr);
// const arr = [5, 8, 7];
// function getSum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }

//     console.log(sum);
// }
// getSum(arr);

// 1
// Напиши функцію createArray, яка приймає ціле число N і повертає масив, що
// містить усі цілі числа від 1 до N включно.
// Якщо N = 0, поверни порожній масив.
// Приклади:
// createArray(1) === [1]
// createArray(3) === [1, 2, 3]
// createArray(0) === []
// function createArray(N) {
//   let number = [];
//   for (let i = 1; i <= N; i++) {
//     if (N == 0) {
//       return number;
//     }
//     number.push(i);
//   }
//   console.log(number);
//   return number;
// }
// createArray(0);

// 2
// Настав час запускати масове виробництво роботів! Щоб роботи на лінії збиралися правильно, потрібно маркувати деталі. Різні частини робота будуть складатися з різної кількості деталей. Давай зробимо наліпки для них!
// Напиши програму для принтера makeStickers, яка приймає число detailsCount і рядок robotPart. Функція повинна повертати масив рядків в такому форматі: {{partOfRobot}} detail #{{n}}.
// Якщо detailsCount = 0, поверни порожній масив.
// Приклади:
// makeStickers(3, 'Body') === ['Body detail #1', 'Body detail #2', 'Body detail #3']
// makeStickers(4, 'Head') === ['Head detail #1', 'Head detail #2', 'Head detail #3', 'Head detail #4']
// makeStickers(0, 'Foot') === []
// function makeStickers(detailsCount, robotPart) {
//   let arr = [];
//   for (let i = 1; i <= detailsCount; i++) {
//     if (detailsCount == 0) {
//       return arr;
//     }
//     arr.push(robotPart + " detail #" + i);
//     console.log(arr);
//   }
//   return arr;
// }
// makeStickers(0, "Head");

// 3
// Наліпки готові? Добре, треба збільшити потужності наших ліній у два рази! До цього ми там тільки попкорн готували.
// Напиши функцію doublePower, яка приймає масив поточних потужностей currentPowers та повертає новий масив з подвоєними значеннями.
// Приклади:
// doublePower([100, 150, 200, 220]) === [200, 300, 400, 440]
// doublePower([45, 34, 56, 67]) === [90, 68, 112, 134]
// doublePower([]) === []
// function doublePower(currentPowers) {
//   let result = [];
//   for (let i = 0; i < currentPowers.length; i++) {
//     console.log(currentPowers[i]);
//     if (currentPowers == "") {
//       return result;
//     }
//     result.push(currentPowers[i] * 2);
//     console.log(result);
//   }
//   return result;
// }
// doublePower([2, 6, 10]);

// 4
// Давай навчимо наших роботів сортувати коробки на складі. Всі коробки мають номери, а роботи вчаться сортувати їх в порядку зростання.
// Але сортування — справа нелегка, іноді трапляються помилки. Тому нам поки доведеться перевіряти, чи правильно робот відсортував коробки.
// Напиши функцію isSorted, яка отримує масив чисел boxNumbers і повертає true, якщо всі числа в порядку зростання, або false, якщо це не так. Числа можуть повторюватись.
// Приклади:
// isSorted([1, 2, 3, 4, 5]) === true
// isSorted([0, 1, 1, 1, 2]) === true
// isSorted([1, 2, 11]) === true
// isSorted([5]) === true
// isSorted([]) === true
// isSorted([0, 3, 1, 2, 2, 2]) === false
// isSorted([1, 11, 2]) === false
// function isSorted(boxNumbers) {
//   let arr = [];
//   for (let i = 0; i < boxNumbers.length; i++) {
//     if (boxNumbers[i] > boxNumbers[i + 1]) {
//       console.log(false);
//       return false;
//     }
//   }
//   console.log(true);
//   return true;
// }
// isSorted([0, 1, 1, 1, 2]);

// 5
// Наш робот вміє перетворювати команди руху на правильний сигнал і рухатися відповідно до нього:
// 'forward' означає y + 1
// 'back' означає y - 1
// 'right' означає x + 1
// 'left' означає x - 1
// Було б чудово, якби робот знав, де він зараз знаходится навіть без GPS.
// Напиши функцію getLocation, яка приймає масив початкових координат coordinates (у вигляді [x, y]) та массив історії команд commands.
// Функція повинна повертати масив кінцевих координат робота в тому ж форматі ([x, y]) після рухів відповідно до команд з commands.
// Наприклад:
// coordinates = [2, 1]
// commands = ['left', 'back', 'back']
// Координати після першої команди: [1, 1] // 1 крок вліво
// Координати після другої команди: [1, 0] // 1 крок назад
// Координати після третьої команди: [1, -1] // 1 крок назад
// Результатом буде [1, -1]
// function getLocation(coordinates, commands) {
//   let result = coordinates;
//   for (let i = 0; i < commands.length; i++) {
//     console.log(commands[i]);
//     if (commands[i] == "left") {
//       result[0] -= 1;
//     }
//     if (commands[i] == "right") {
//       result[0] += 1;
//     }
//     if (commands[i] == "back") {
//       result[1] -= 1;
//     }
//     if (commands[i] == "forward") {
//       result[1] += 1;
//     }
//   }
//   console.log(result);
//   return result;
// }
// getLocation([0, 5], ["back", "back", "back", "right", "left", "forward"]);

// 6
// Ну що, коли всі процеси налаштовано, потрібно ставити перед собою правильні цілі. Наші роботи найкращі на ринку, тому потрібно нарощувати оберти і збільшувати обсяги виробництва.
// Напиши функцію getPlan, яка поверне масив з цілями на задану кількість місяців numberOfMonths. Зараз ми виготовляємо startProduction роботів на місяць і хочемо, щоб щомісяця це число зростало на заданий відсоток percent.
// Якщо кількість роботів буде не цілою, округли її вниз (Math.floor(value)). Ціль кожного наступного місяця розраховуй відносно попереднього.
// Приклади:
// getPlan(200, 3, 50) === [300, 450, 675]
// getPlan(10, 4, 30) === [13, 16, 20, 26]
// getPlan(1000, 6, 20) === [1200, 1440, 1728, 2073, 2487, 2984]
// function getPlan(startProduction, numberOfMonths, percent) {
//   let goals = [];
//   let currentProduction = startProduction;
//   for (let i = 0; i < numberOfMonths; i++) {
//     currentProduction += Math.floor(currentProduction * (percent / 100));
//     goals.push(currentProduction);
//     console.log(goals);
//   }
//   return goals;
// }
// getPlan(10, 4, 30);

// 7
// Перша партія роботів готова, тепер їх треба перевірити. Всі роботи унікальні, тому в кожного своя швидкість руху. Треба визначити найнижчу, найвищу та середню швидкість наших роботів.
// Наш сервер приймає масив швидкостей роботів testResults, пропускає його через функцію getSpeedStatistic і повертає статистику у вигляді масиву, де
// перший елемент - це мінімальна швидкість
// другий - максимальна
// третій - середнє значення всіх швидкостей з testResults, округлене вниз (використай Math.floor(result))
// Приклади:
// getSpeedStatistic([10, 10, 11, 9, 12, 8]) === [8, 12, 10]
// getSpeedStatistic([10]) === [10, 10, 10]
// getSpeedStatistic([]) === [0, 0, 0]
// getSpeedStatistic([8, 9, 3, 12]) === [3, 12, 8]
// getSpeedStatistic([5]) === [5, 5, 5]
// function getSpeedStatistic(testResults) {
//   console.log(testResults[0]);
//   let result = [];
//   let big = testResults[0];
//   let small = testResults[0];
//   let center = 0;
//   for (let i = 0; i < testResults.length; i++) {
//     if (big < testResults[i]) {
//       big = testResults[i];
//     }
//     if (small > testResults[i]) {
//       small = testResults[i];
//     }
//     center += testResults[i];
//   }
//   center = center / testResults.length;
//   if (testResults[0] == undefined) {
//     big = 0;
//     small = 0;
//     center = 0;
//   } else {
//     console.log("no empty");
//   }
//   result.push(small);
//   result.push(big);
//   result.push(Math.floor(center));
//   console.log("small - " + small);
//   console.log("big - " + big);
//   console.log("center - " + center);
//   console.log(result);
//   return result;
// }
// getSpeedStatistic([]);

// 8
// Роботи протестовані. Повільні роботи відправлені на апгрейд. Mate Post хоче купити у нас десяток роботів для доставки вантажів по місту. Для цього їм потрібні роботи, які будуть переносити за день найбільшу сумарну вагу.
// Давай напишемо функцію compareRobots, яка приймає 2 масиви. Перший масив firstRobotResults містить вагу кожного вантажу, який перевіз за добу перший робот, другий secondRobotResults - відповідно вага вантажів другого робота.
// Перевір, хто з роботів перевіз більшу вагу за день, та поверни рядок з рекомендацією, кого з роботів варто купити (див. приклади).
// Приклади:
// compareRobots([12, 4, 13], [1, 1, 4, 5, 12]) === 'First robot for sale!' // 29 > 23
// compareRobots([9, 7, 9], [1, 3, 4, 5, 12]) === 'Both robots for sale!' // 25 = 25
// compareRobots([1, 3, 4], [1, 1, 4, 5]) === 'Second robot for sale!' // 8 < 11
// function compareRobots(firstRobotResults, secondRobotResults) {
//   let sum1 = 0;
//   let sum2 = 0;
//   let str = "";
//   for (let i = 0; i < firstRobotResults.length; i++) {
//     sum1 += firstRobotResults[i];
//     console.log("sum1 - " + sum1);
//   }
//   for (let i = 0; i < secondRobotResults.length; i++) {
//     sum2 += secondRobotResults[i];
//     console.log("sum2 - " + sum2);
//   }
//   if (sum1 > sum2) {
//     str = "First robot for sale!";
//   }
//   if (sum1 == sum2) {
//     str = "Both robots for sale!";
//   }
//   if (sum1 < sum2) {
//     str = "Second robot for sale!";
//   }
//   console.log(str);
//   return str;
// }
// compareRobots([12, 3, 13], [1, 1, 4, 5, 12]);

// 9
// function checkNumber(number) {
//   let n = number;
//   let result = [];
//   if (n <= 1) {
//     result.push(false);
//   } else {
//     result.push(true);
//   }
//   if (n % 2 == 0) {
//     result.push(true);
//   } else {
//     result.push(false);
//   }
//   if (n % 10 == 0) {
//     result.push(true);
//   } else {
//     result.push(false);
//   }
//   console.log(result);
//   return result;
// }
// checkNumber(0);

// 10
// function getArraysSum(arr1, arr2) {
//   let sum = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     sum += arr1[i];
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     sum += arr2[i];
//   }
//   console.log(sum);
//   return sum;
// }
// getArraysSum([45, 4, 7, 7], [4, 77, 33, 83]);
