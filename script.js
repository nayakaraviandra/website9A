console.log("Selamat datang di website sederhana!");

// Contoh fungsi untuk menampilkan pesan
function tampilkanPesan() {
 alert("Halo, bu diyah");
}

// Panggil fungsi saat tombol diklik
document.addEventListener("DOMContentLoaded", function() {
 const tombol = document.createElement("button");
 tombol.textContent = "Klik saya!";
 tombol.onclick = tampilkanPesan;
 document.body.appendChild(tombol);
});