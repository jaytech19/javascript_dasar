var noAngkot = 1,
  jmlAngkot = 10,
  angkotBeroperasi = 6;
while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot no " + noAngkot + " beroperasi dengan baik");
  noAngkot++;
}

for (angkotBeroperasi+1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log("Angkot no " + noAngkot + " sedang tidak beroperasi");
}
