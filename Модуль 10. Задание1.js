let custNum = +prompt("Введите значение");

if (typeof custNum != 'number' || isNaN(custNum)) {
    console.log("Упс, кажется, Вы ошиблись")
    // alert("Упс, кажется, Вы ошиблись")
} else if (custNum % 2 === 0) {
    console.log("Это число четное")
    // alert("Это число четное")
} else {
    console.log("Это число нечетное")
    // alert("Это число нечетное")
}