let npm = document.getElementById("npm");
let nama = document.getElementById("nama");

function simpan() {

    console.log(npm.value)
    console.log(nama.value)

    // localStorage.setItem("npm", npm.value)
    // localStorage.setItem("nama", nama.value)

    // jika local storage belum ada isi/value
    if (localStorage.getItem("mahasiswa") === null) {
        //simpan array ksoong[]
        localStorage.setItem("mahasiswa", "[]")
    }
    //panggil local storage(konversi string ke object)
    let data = JSON.parse(localStorage.getItem("mahasiswa"))
    console.log(data)

    //simpan value.npm dan nama ke dalam object
    data.push({
        npm: npm.value,
        nama: nama.value
    })
    console.log(data)

    //simpan data terbaru kedalam local storage
    //konver dari ob ject ke string
    localStorage.setItem("mahasiswa", JSON.stringify(data))
    //panggil tampil()
    tampil()
}

function tampil() {
    //panggil dulu locak storage 
    let hasil = JSON.parse(localStorage.getItem("mahasiswa"))

    //clear
    document.getElementById("list-mhs").innerHTML = ""

    //lakukan perulangan atau looping(foreacrh)
    hasil.forEach(element => {
        // console.log(element)
        document.getElementById("list-mhs").innerHTML += `<li> ${element.npm} ${element.nama}<li>`
    });
}
//jalankan function tampil()
tampil()
