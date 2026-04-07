let npm = document.getElementById("npm");
let nama = document.getElementById("nama");
let image = document.getElementById("image");

function simpan() {

    console.log(npm.value)
    console.log(nama.value)
    console.log(image.value)


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
        nama: nama.value,
        image: image.value
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
        document.getElementById("list-mhs").innerHTML += `<div class="col-lg-4 col-md-6"> 
        <img src="${element.image}" alt="dak moncol" class="card-img-top img-fluid rounded-5">
        <h4 class="text-center bg-dark rounded-5 text-primary p-2 mt-3">${element.npm}</h4> 
        <h6 class="text-center bg-dark rounded-5 text-white p-2"> ${element.nama} </h6>
        <div>`
    });
}
//jalankan function tampil()
tampil()
