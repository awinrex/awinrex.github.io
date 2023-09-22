
//AMBIL NAMA USERNAME JADI USERNAME DI DATA TENTOR
document.addEventListener("DOMContentLoaded", function() {
    const kirimButton = document.getElementById("login-button");
    kirimButton.addEventListener("click", function() {
                  // Mengambil nilai dari field "Username"
  const usernameInput = document.getElementById("username").value; 
  sessionStorage.setItem("username", usernameInput);
      // Ganti URL di bawah dengan URL halaman HTML baru yang ingin Anda buka
      const halamanBaruURL = "DATA TENTOR.html";
      window.location.href = halamanBaruURL; // Mengarahkan ke halaman baru di tab yang sama
    });
  });




  //MENGUBAH SEGALA HURUF DALAM USERNAME JADI KAPITAL
          // Pastikan kode ini dijalankan setelah elemen dengan ID "user-name" dimuat dalam DOM
          document.addEventListener("DOMContentLoaded", function() {
            // Mengambil nilai dari field "Username" yang sudah disimpan di session atau cookie
            const usernameInput = sessionStorage.getItem("username");
            
            // Mengubah teks menjadi huruf kapital
            const usernameUpperCase = usernameInput.toUpperCase();
            
            // Mengganti teks dengan nilai yang sudah disimpan
            document.getElementById("username").textContent = usernameUpperCase;
        });


// MENGUBAH SHOW PASSWORD
const passwordInput = document.getElementById("password");
const showPasswordButton = document.getElementById("show-password");

showPasswordButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordButton.innerHTML = '<i class="fa fa-eye"></i>'; // Mengubah ikon ke mata dengan garis miring saat password terlihat
    } else {
        passwordInput.type = "password";
        showPasswordButton.innerHTML = '<i class="fa fa-eye-slash"></i>'; // Mengubah ikon ke mata saat password tersembunyi
    }
});

    
//PINDAH HALAMATN/HTML
        
        // Dapatkan tombol "Data Tentor" dan tambahkan event listener
        const dataTentorButton = document.querySelector(".header-button[data-target='data-tentor']");
        dataTentorButton.addEventListener("click", function () {
            window.location.href = "DATA TENTOR.html"; // Ganti URL dengan halaman "Data Tentor"
        });
        
        const dataSiswaButton = document.querySelector(".header-button[data-target='data-siswa']");
        dataSiswaButton.addEventListener("click", function () {
            window.location.href = "DATA SISWA.HTML"; // Ganti URL dengan halaman "Data Siswa"
        });
        
        const dataKelasButton = document.querySelector(".header-button[data-target='data-kelas']");
        dataKelasButton.addEventListener("click", function () {
            window.location.href = "DATA KELAS.html"; // Ganti URL dengan halaman "Data Kelas"
        });


//KIRIM FORMULIR
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
      fetch('https://script.google.com/macros/s/AKfycbzRz7yCU7dXMxV-VMqAN9bfo0kOngWUMf5adw28YsFt0MiLg9XU8MaJYS-p_1EM-1HNhw/exec', {
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


//untuk mendapatkan data API
// Contoh menggunakan Google Apps Script Web App URL
const scriptUrl = '';

fetch(scriptUrl)
  .then(response => response.json())
  .then(data => {
    // Manipulasi data dan tambahkan ke tabel HTML
    const tableBody = document.querySelector('#table tbody');
    data.forEach((row, index) => {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${index + 1}</td>
        <td>${row.nama}</td>
        <td>${row.bidang}</td>
        <td><button class="lihat-button">Lihat</button></td>
        <td><button class="lihat-button">Lihat</button></td>
        <td><button class="lihat-button">Lihat</button></td>
      `;
      tableBody.appendChild(newRow);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

  function updateTable() {
    // Isi kode JavaScript untuk mengambil data dari Google Sheets dan memperbarui tabel HTML
    // ...
  }
  
  // Buat trigger yang akan menjalankan fungsi updateTable() setiap 5 detik (5000 milidetik)
  const updateInterval = 5000; // 5000 ms (5 detik)
  setInterval(updateTable, updateInterval);
  
  