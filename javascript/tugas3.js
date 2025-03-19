// Array produk
let produk = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
 ];
 

 function tambahProduk(nama, harga, stok) {
    let idBaru = produk.length + 1;
 
    produk.push({ id: idBaru, nama, harga, stok });
    console.log(`Produk "${nama}" berhasil ditambahkan.`);
 }
 
 function hapusProduk(id) {
    let index = produk.findIndex(item => item.id === id);
 
    if (index !== -1) {
       let namaProduk = produk[index].nama;
       produk.splice(index, 1);
       console.log(`Produk "${namaProduk}" berhasil dihapus.`);
    } else {
       console.log(`Produk dengan ID ${id} tidak ditemukan.`);
    }
 }
 

 function tampilkanProduk() {
    console.log("Daftar Produk:");
    produk.forEach(item => {
       console.log(`ID: ${item.id}, Nama: ${item.nama}, Harga: Rp${item.harga}, Stok: ${item.stok}`);
    });
 }
 

 tambahProduk("Monitor", 2000000, 3); 
 tampilkanProduk(); 
 hapusProduk(2); 
 tampilkanProduk(); 
 