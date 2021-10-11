let tall = +prompt('Mời nhập chiều cao (m)  ');
let weight = +prompt('Mời nhập cân nặng');
let BMI = weight / (tall*tall);
if (BMI < 18) {
    alert('Underweight')
} else if (BMI <25) {
    alert('nomal')
} else if (BMI <30) {
    alert('Overweight')
} else {
    alert('Obese')
}