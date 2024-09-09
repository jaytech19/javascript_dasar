function jumlahVolume(a, b) {
  var volumeA;
  var volumeB;
  var totalVolume;

  volumeA = a * a * a;
  volumeB = b * b * b;
  totalVolume = volumeA + volumeB;
  return totalVolume;
}

var a = parseInt(prompt("masukkan sisi kubus pertama :"));
var b = parseInt(prompt("masukkan sisi kubus kedua :"));

alert("Total volume kedua kubus adalah " + jumlahVolume(a, b));
