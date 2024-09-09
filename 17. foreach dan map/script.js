// Array Method
// 9. forEach
// 10. map
// 11. sort

// 9. forEach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ["Wijaya", "Ali", "Dion"];
// angka.forEach(function (e, i) {
//   console.log("Mahasiswa ke-" + (i + 1) + " adalah " + e);
// });

// 10. map
// var angka = [2, 4, 3, 5, 7, 5, 1];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join(" - "));

// 11. sort
var angka = [2, 4, , 20, 10, 3, 5, 7, 5, 1];
console.log(angka.join(" - "));
angka.sort(function (a, b) {
  return a - b;
});
console.log(angka.join(" - "));
