document.addEventListener("DOMContentLoaded", function() {
    const plusButton = document.getElementById("plus-button");
    const modal = document.getElementById("modal");
    const closeButton = document.getElementById("close-button");

    plusButton.addEventListener("click", function() {
        modal.style.display = "block";
    });

    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    const kelasForm = document.getElementById("kelas-form");
    kelasForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Mencegah form dikirim
        // Dapatkan nilai dari form
        const namaKelas = document.getElementById("nama-kelas").value;
        const jenisKelas = document.getElementById("jenis-kelas").value;
        const kategori = document.getElementById("kategori").value;
        const jadwal = document.getElementById("jadwal").value;
        const namaSiswa = document.getElementById("nama-siswa").value;
        const namaTentor = document.getElementById("nama-tentor").value;
        const status = document.getElementById("status").value;

        // Sekarang Anda dapat menggunakan nilai-nilai ini untuk melakukan apa yang Anda inginkan, misalnya menyimpan ke database, menambahkan baris baru ke tabel, dll.

        // Setelah selesai, sembunyikan pop-up form
        modal.style.display = "none";
    });
});
