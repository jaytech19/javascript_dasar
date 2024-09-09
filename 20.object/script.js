var mahasiswa = ["wijaya", false, [3.4, 3.3, 3.5, 3.0, 3.5]];

// var namaObject = {
//     nama properti 1 : "isi properti 1"
//     nama properti 2 : "isi properti 1"
//     method : function () {
//         isi function
//     }
// }

var mahasiswa = {
  nama: "Wijaya",
  lulus: false,
  IPSemester: [3.4, 3.3, 3.5, 3.0, 3.5],
  IPKumulatif: function () {
    var total = 0;
    var ips = this.IPSemester;
    for (var i = 0; i < ips.length; i++) {
      total += ips[i];
    }
    return total / ips.length;
  },
};

mahasiswa.IPKumulatif();
