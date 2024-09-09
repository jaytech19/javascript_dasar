// function tampilAngka(n) {
//   if (n === 0) {
//     return;
//   }
//   console.log(n);
//   tampilAngka(n - 1);
// }

// tampilAngka(100);

// contoh penerapan dengan faktorial
function faktorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * faktorial(n - 1);
}

var ulang = true;
while (ulang) {
  var faktorialDari = parseInt(
    prompt(
      "Program Menghitung Nilai Faktorial Dimulai \nSilakan Masukkan Angka : "
    )
  );
  var hasil = faktorial(faktorialDari);
  alert("Nilai faktorial dari " + faktorialDari + " adalah " + hasil);
  ulang = confirm("Mau lagi?");
}
