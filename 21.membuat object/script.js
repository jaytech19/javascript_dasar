// membuat object pada javascript
// 1. object literal
// 2. function declaration
// 3. constructor function (keyword new)
// 4. object.create()

// 1. object literal
var mhs1 = {
  nama: "Wijaya",
  nim: "140310190024",
  email: "wijaya5521@gmail.com",
  jurrusan: "fisika",
};

var mhs2 = {
  nama: "adil",
  nim: "140310190025",
  email: "adilhilmi@gmail.com",
  jurrusan: "fisika",
};

// 2. function declaration
function buatObjectmahasiswa(nama, nim, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nim = nim;
  mhs.email = email;
  mhs.jurrusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectmahasiswa(
  "Nofa",
  "123456789",
  "12345@gmail.com",
  "biologi"
);

// 3. constructor
function Mahasiswa(nama, nim, email, jurusan) {
  // this = {}
  this.nama = nama;
  this.nim = nim;
  this.email = email;
  this.jurusan = jurusan;
  //   return this;
}
var mhs4 = new Mahasiswa("lia", "1982821029", "lia@gmail.com", "biologi");
