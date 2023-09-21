function tambahData() {
    var nama = document.getElementById("nama").value;
    var pilihan = document.getElementById("pilihan").value;
    var alamat = document.getElementById("alamat").value;

    var table = document.getElementById("dataTabel");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = nama;
    cell2.innerHTML = pilihan;
    cell3.innerHTML = alamat;

    // Reset formulir
    document.getElementById("myForm").reset();
}