// prompt() - Выводит инпут тело куда мы воддим значение возращает строку
// parseInt() - Переводит строку в число
// alert() - Вывод окно в браузере с информацией

// const penciya = parseInt(prompt("Ведите вашу пенсию"));
// const nalog = (penciya / 100) * 20;
// const myMoney = penciya - nalog;

// alert(
//   `Моя пенсия: ${penciya}
//   Налог: ${nalog}
//   Остаток: ${myMoney}
// `
// );

// alert("qweqe qewqeqwewe");

// const age = prompt("Введите возраст");
// alert(`Ваш возраст: ${age}`);
// const stypny = parseInt(prompt("Длина ступни"));
// const rost = ((stypny - 1.5) * 100) / 15.8;
// const dlinaShaga = stypny * 3;
// const ShirinaStypni = rost / 18;
// const dlinaPytki = rost / 27;
// const golova = rost / 8;
// const pleche = (rost - 73.6) / 2.97;
// const predpleche = (rost - 80.4) / 3.65;
// const bedro = (rost - 69.1) / 2.24;
// const golen = (rost - 72.6) / 2.53;
// alert(
//   `1. Рост = ${rost.toFixed(2)}
// 2. Длина шага = ${dlinaShaga.toFixed(2)}
// 3. Ширина ступни = ${ShirinaStypni.toFixed(2)}
// 4. Длина пятки = ${parseInt(dlinaPytki.toFixed(2))}
// 5. Голова = ${golova.toFixed(2)}
// 6. Плече = ${pleche.toFixed(2)}
// 7. Предплечье = ${predpleche.toFixed(2)}
// 8. Бедро = ${bedro.toFixed(2)}
// 9. Голень = ${golen.toFixed(2)}`
// );
const num1 = parseInt(prompt("Число двузначное"));
const n1 = num1 % 10;
const n2 = (num1 - n1) / 10;
const sum = n1 + n2;
alert(`${n2} ${n1} ${sum}`);

const num2 = parseInt(prompt("Число трехзначное"));
const m1 = num2 % 10;
const m2 = ((num2 - m1) % 100) / 10;
const m3 = (num2 - m1 - ((num2 - m1) % 100)) / 100;
const sum2 = m1 + m2 + m3;
alert(`${m3} ${m2} ${m1} ${sum2}`);

const num3 = parseInt(prompt("Число четырехзначное"));
const a1 = num3 % 10;
const a2 = ((num3 - a1) % 100) / 10;
const a3 = ((num3 - a1 - ((num3 - a1) % 100)) % 1000) / 100;
const a4 = (num3 - a1 - ((num3 - a1) % 100)) / 100;
const a5 = (a4 - a3) / 10;
const sum3 = a1 + a2 + a3 + a5;
alert(`${a5} ${a3} ${a2} ${a1} ${sum3}`);
