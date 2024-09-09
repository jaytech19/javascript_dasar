function tambah(a, b) {
  return a + b;
}

function kali(a, b) {
  return a * b;
}
var angka1_kali = parseInt(prompt("Masukkan angka pertama perkalian :"))
var angka2_kali = parseInt(prompt("Masukkan angka kedua perkalian :"))
var angka1_tambah = parseInt(prompt("Masukkan angka pertama penjumlahan :"))
var angka2_tambah = parseInt(prompt("Masukkan angka kedua penjumlahan :"))
var hasil_kali = kali(angka1_kali,angka2_kali);
var hasil_tambah = tambah(angka1_tambah,angka2_tambah);
var hasil_penjumlah_kali_tambah = tambah(hasil_kali,hasil_tambah)
var hasil_perkalian_kali_tambah = kali(hasil_kali,hasil_tambah)
alert("Hasil kali adalah : " + hasil_kali)
alert("Hasil tambah adalah : " + hasil_tambah)
alert("Hasil penjumlahan kali dan tambah adalah : " + hasil_penjumlah_kali_tambah)
alert("Hasil perkalian kali dan tambah adalah : " + hasil_perkalian_kali_tambah)
