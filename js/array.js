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
