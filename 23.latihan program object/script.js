// parameter dalam program
// - sopir
// - trayek
// - kas
// - penumpang
// - penumpang naik
// - penumpang turun

function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  // penumpang naik
  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  // penumpang turun
  this.penumpangTurun = function (namaPenumpang, bayar) {
    // telusuri seluruh kursi
    for (var i = 0; i < this.penumpang.length; i++) {
      // jika kursi kosong
      if (this.penumpang.length == 0) {
        // tampilkan pesan kesalahan
        alert("Angkot masih kosong");
        return false;
      }
      // jika nama penumpang ada
      else if (namaPenumpang == this.penumpang[i]) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        // return array penumpang
        return this.penumpang;
      }
    }
  };
}
var Angkot1 = new Angkot("indra", ["cicaheum", "cibiru"], [], 0);
