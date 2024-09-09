// var angka = parseInt(prompt("masukkan angka"));
var item = prompt(
  "masukkan nama makanan / minuman :\n(contoh : nasi daging,susu,hamburger,soft drink)"
);

// prompt - yang dimasukkan ke prompt outputnya adlah string
// == operator perbandingan - perbandingan nilai
// === operator identitas - bukan cuma perbandingan nilai tapi perbadingan tipe data juga

// contoh dengan if else
// if (angka === 1) {
//   alert("anda memasukkan angka 1");
// } else if (angka === 2) {
//   alert("anda memasukkan angka 2");
// } else {
//   alert("angka yang anda masukkan salah");
// }

// contoh dengan switch
// switch (angka) {
//   case 1:
//     alert("anda memasukkan angka 1");
//     break;
//   case 2:
//     alert("anda memasukkan angka 2");
//     break;
//   default:
//     alert("angka yang anda masukkan salah");
//     break;
// }

switch (item) {
  case "nasi":
    alert("makanan / minuman SEHAT");
    break;
  case "daging":
    alert("makanan / minuman SEHAT");
    break;
  case "susu":
    alert("makanan / minuman TIDAK SEHAT");
    break;
  case "hamburger":
    alert("makanan / minuman TIDAK SEHAT");
    break;
    case "soft drink":
        alert("makanan / minuman TIDAK SEHAT ");
        break;
  default:
    alert("nama makanan / minuman yang masukkan tidak ada dalam daftar");
    break;
}