// array method
// 7. slice : untuk mengiris array
// 8. splice : menyambung/menambal array

// var arr = ["Wijaya", "Ali", "Dion"];
// splice
// splice(indexAwal,maudihapusBerapa,elemenBaru1,elemenBaru2,...)
// arr.splice(1, 2, "Dody", "Fitri");
// console.log(arr.join(" - "));

// slice
// slice(awal,akhir)
var arr = ["Wijaya", "Ali", "Dion", "Dody", "Fitri"];
var arr2 = arr.slice(1, 4);
console.log(arr2.join(" - "));
