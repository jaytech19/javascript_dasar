// daftar function
// - penumpng naik : tambahPenumpang();
// - penumpang turun : hapusPenumpang();

// parameter tambah penumpang
// - namaPenumpang
// - array penumpang

// rules penumpang naik
// jika angkot kosng, penumpang naik duduk di kursi oertama
// penumpang berikutnya duduk di kursi berikutnya secara berurutan
// jika ada kursi kosong (karena penumpang turun), maka penumpang naik berikutnya akan duduk di kursi kosong terlebih dahulu
// kursi penumpang maksimal adalah 15
// nama penumpang tidak boleh sama, untuk mengindari kebingungan program

// membuat variabel penumpang
var penumpang = ["indra", "wijaya", "dion", "rafi", "lia"];
var penumpangMaks = 5;

// membuat function tambah penumpang
function tambahPenumpang(namaPenumpang, penumpang) {
  // menelusuri kursi penumpang
  for (var i = 0; i < penumpang.length; i++) {
    // jika kursi penumpang kosong
    if (penumpang.length == 0) {
      // tambahkan kursi penumpang
      penumpang.push(namaPenumpang);
      // kembalikan isi array dan keluar dari function
      return penumpang;
    }
    // jika ada kursi kosong
    else if (penumpang[i] == undefined) {
      // penumpang menempati kursi kosong
      penumpang[i] = namaPenumpang;
      // kembalikan isi array dan keluar dari function
      return penumpang;
      // jika nama penumpang sudah ada
    } else if (namaPenumpang == penumpang[i]) {
      // tampilkan pesan penumpang sudah ada
      console.log("nama penumpang sudah ada");
      // jika kursi penumpang penuh
    } else if (i == penumpangMaks - 1) {
      // tampilkan pesan untuk cari angkot lain
      console.log("maaf kursi penumpang sudah penuh, silakan cari angkot lain");
    }
    // jika masih ada kursi tersisa
    else if (i == penumpang.length - 1) {
      // tambahkan penumpang di kursi tersisa secara berurutan
      penumpang.push(namaPenumpang);
      // kembalikan isi array dan keluar dari function
      return penumpang;
    }
  }
}

// membuat function hapus penumpang
function hapusPenumpang(namaPenumpang, penumpang) {
  // telusuri seluruh kursi penumpang
  for (var i = 0; i < penumpang.length; i++) {
    // jika kursi penumpang kosong
    if (penumpang.length == 0) {
      console.log("kursi kosong, tidak ada penumpang di angkot");
    }
    // jika nama penumpang ada
    else if (namaPenumpang == penumpang[i]) {
      // penumpang dihapus
      penumpang[i] = undefined;
      // kembalikan isi arrray dan keluar dari function
      return penumpang;
    }
    // jika nama penumpang tidak ditemukan
    else if (i == penumpang.length - 1) {
      // tampilkan pesan kesalahan
      console.log(
        "maaf, nama penumpang tidak ditemukan. silakan coba dengan nama lain"
      );
    }
  }
}
