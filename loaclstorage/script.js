//simpan ke local storgae
localStorage.setItem("npm", 123);
//baca data local storage
console.log(localStorage.getItem("npm"))


//tampilkan di paragraf id=npm
document.getElementById("npm").innerHTML = 
localStorage.getItem("npm")