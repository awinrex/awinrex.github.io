
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

