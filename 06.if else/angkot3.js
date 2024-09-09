// for (var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
//   console.log("hello world " + nilaiAwal + "x");
// }

var noAngkot = 1,
  jmlAngkot = 10,
  angkotBeroperasi = 6;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot no " + noAngkot + " beroperasi dengan baik");
  } else {
    console.log("Angkot no " + noAngkot + " sedang tidak beroperasi");
  }
}
