// function dibagi 2 yaitu fuction declaration dan function expression
// function declaration
// function identifier (parameter list : optional) { function body }

// function expression
// function identifier:optional (parameter list:optional) { function body }

// contoh function declaration
function tampilPesan(nama) {
  alert("halo " + nama);
  return;
}

// funtion expression (harus ada variable)
var tampilPesan = function (nama) {
  alert("halo " + nama);
  return;
};

// function declaration flexibel bisa paggil dulu lalu deklarasikan function
// function expression deklarasikan function dulu baru bisa dipanggil
