//#region Swap
let swap = (first, second) => {
    var temp = first;
    first = second;
    second = temp;
    console.log(first, second);
};
swap(7, 12);
//#endregion

//#region Fahrenheit to Celsius
let fahrenheit_to_celsius = fahrenheit => (fahrenheit-32)*5/9;
console.log(fahrenheit_to_celsius(100));
//#endregion