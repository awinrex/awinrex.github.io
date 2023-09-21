// Fungsi untuk menampilkan formulir yang sesuai dan menyembunyikan yang lainnya
function showForm(formId) {
    const calistungform = document.getElementById("step1-form");
const sekolahform = document.getElementById("step2-form");
    // Semua formulir
    var forms = document.querySelectorAll('form');
    
    // Semua gambar
    var images = document.querySelectorAll('img');
    
    // Menyembunyikan semua formulir
    forms.forEach(function(form) {
       form.style.display = 'none';
    });
    
    // Menampilkan formulir yang sesuai
    var formToShow = document.getElementById(formId);
    if (formToShow) {
       formToShow.style.display = 'block';
    }
    
    // Mengganti tampilan gambar yang sesuai
    images.forEach(function(image) {
       if (image.getAttribute('alt') === formId) {
          image.style.border = '2px solid #0074cc'; // Misalnya, Anda bisa memberikan efek visual seperti border
       } else {
          image.style.border = 'none';
       }
    });
}
