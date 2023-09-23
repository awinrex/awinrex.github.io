fetch('https://script.google.com/macros/s/AKfycbzFTU-R0G2uAwmv9a7sb-JPVBrNr0kUAis9eY_UOcDNjM6IfUgpmpUgYna_Yl-XYEzoQg/exec')
    .then(response => response.json())
    .then(data => {
        var table = document.getElementById('tentor-table').getElementsByTagName('tbody')[0];
        var counter = 1; // Counter untuk nomor urut
        data.forEach(row => {
            var newRow = table.insertRow();
            var cellNo = newRow.insertCell(0); // Kolom No
            cellNo.appendChild(document.createTextNode(counter));
            var cellNama = newRow.insertCell(1); // Kolom Nama
            cellNama.appendChild(document.createTextNode(row[0])); // Kolom Nama diambil dari kolom pertama
            var cellBidang = newRow.insertCell(2); // Kolom Bidang
            cellBidang.appendChild(document.createTextNode(row[1])); // Kolom Bidang diambil dari kolom kedua

            // Kolom "Jadwal"
            var cellJadwal = newRow.insertCell(3);
            cellJadwal.appendChild(document.createTextNode(row[2] || '')); // Menggunakan data jika ada atau string kosong jika tidak

            // Kolom "Rekap Absen"
            var cellRekapAbsen = newRow.insertCell(4);
            cellRekapAbsen.appendChild(document.createTextNode(row[3] || '')); // Menggunakan data jika ada atau string kosong jika tidak

            // Kolom "Berkas"
            var cellBerkas = newRow.insertCell(5);
            cellBerkas.appendChild(document.createTextNode(row[4] || '')); // Menggunakan data jika ada atau string kosong jika tidak

            // Tambahkan gaya CSS ke semua sel
            newRow.querySelectorAll("td").forEach(cell => {
                cell.style.border = "1px solid #ccc"; // Atur border untuk semua sel
                cell.style.padding = "8px"; // Atur padding untuk semua sel
            });

            counter++; // Increment nomor urut
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });