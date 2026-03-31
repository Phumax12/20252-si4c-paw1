//alert('belajar javascript');
function kirim(){

//ambil valule nama
let nama = document.getElementById('nama').value;
console.log('Nama :'+ nama);
let saran = document.getElementById('saran').value;

//tampilkan nama ke ui id list pesan
document.getElementById('list-pesan').innerHTML += `<tr><td>${nama}</td><td>${saran}</td></tr>`;
}