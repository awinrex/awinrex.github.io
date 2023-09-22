document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('calistung-form');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Mencegah pengiriman formulir langsung
  
      // Mengambil nilai dari input dan elemen select
      const nama = document.getElementById('nama').value;
      const tempat_lahir = document.getElementById('tempat_lahir').value;
      const tanggal_lahir = document.getElementById('tanggal_lahir').value;
      const asal_sekolah = document.getElementById('asal_sekolah').value;
      const alamat = document.getElementById('alamat').value;
      const agama = document.getElementById('agama').value;
      const email = document.getElementById('email').value;
      const telepon = document.getElementById('telepon').value;
      const telepon_ortu = document.getElementById('telepon_ortu').value;
      const kategori = document.getElementById('kategori').value;
      const meet = document.getElementById('meet').value;
  
      // Mengirim data ke Google Apps Script
      fetch('https://script.google.com/macros/s/AKfycbzFTU-R0G2uAwmv9a7sb-JPVBrNr0kUAis9eY_UOcDNjM6IfUgpmpUgYna_Yl-XYEzoQg/exec', {
        method: 'POST',
        body: new URLSearchParams({
          nama: nama,
          tempat_lahir: tempat_lahir,
          tanggal_lahir: tanggal_lahir,
          asal_sekolah: asal_sekolah,
          alamat: alamat,
          agama: agama,
          email: email,
          telepon: telepon,
          telepon_ortu: telepon_ortu,
          kategori: kategori,
          meet: meet
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(response => response.text())
      .then(data => {
          alert(data); // Menampilkan respons dari Google Apps Script
          form.reset(); // Mengosongkan formulir setelah berhasil dikirim
      })
      .catch(error => {
          console.error('Terjadi kesalahan:', error);
          alert('Terjadi kesalahan. Data tidak dapat dikirim.');
      });
  });
});