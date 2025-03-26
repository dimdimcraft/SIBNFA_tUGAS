import { showUser, addUser, deleteUser } from './controller.js';

const main = () => {
    console.log("Data awal:");
    showUser(); // Menampilkan data awal

    console.log("\nMenambahkan pengguna baru:");
    addUser('Dewi', 20, 'Jl. K', 'dewi0@gmail.com'); // Menambahkan pengguna baru
    showUser(); // Menampilkan data setelah penambahan

    console.log("\nMenambahkan pengguna baru:");
    addUser('ilham', 40, 'Jl. ngawi', 'ilham@gmail.com'); // Menambahkan pengguna baru
    showUser(); // Menampilkan data setelah penambahan

    console.log("\nMenghapus pengguna dengan indeks ke-3:");
    deleteUser(3); // Menghapus pengguna dengan indeks ke-3
    showUser(); // Menampilkan data setelah penghapusan
};

main();
