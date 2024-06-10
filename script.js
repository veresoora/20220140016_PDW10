function kirimData() {
  var name = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var tanggal = document.getElementById("tanggal").value;
  var jenis_tiket = document.getElementById("jenis_tiket").value;
  var metode_pembayaran = document.querySelector(
    "input[name='metode_pembayaran']:checked"
  ).id;
  var informasi = document.getElementById("informasi").value;

  alert(
    "Nama: " +
      name +
      "\nEmail: " +
      email +
      "\nBooking Tiket: " +
      tanggal +
      "\nJenis Tiket: " +
      jenis_tiket +
      "\nMetode Pembayaran: " +
      metode_pembayaran +
      "\nInformasi Tambahan: " +
      informasi
  );

  return false;
}
