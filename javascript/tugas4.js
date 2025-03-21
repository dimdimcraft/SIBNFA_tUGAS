// Class untuk kendaraan
class Kendaraan {
    constructor(nama, tipe) {
        this.nama = nama;
        this.tipe = tipe;
    }

    getInfo() {
        return `${this.nama} (${this.tipe})`;
    }
}

// Class untuk pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    sewaKendaraan(kendaraan) {
        if (this.kendaraanDisewa) {
            console.log(`${this.nama} sudah menyewa kendaraan.`);
        } else {
            this.kendaraanDisewa = kendaraan;
            console.log(`${this.nama} menyewa ${kendaraan.getInfo()}`);
        }
    }

    getInfo() {
        return `${this.nama} - ${this.nomorTelepon} | Kendaraan: ${this.kendaraanDisewa ? this.kendaraanDisewa.getInfo() : "Tidak ada"}`;
    }
}

// Class untuk sistem manajemen transportasi
class SistemManajemenTransportasi {
    constructor() {
        this.pelangganList = [];
    }

    tambahPelanggan(pelanggan) {
        this.pelangganList.push(pelanggan);
    }

    tampilkanPelanggan() {
        console.log("Daftar Pelanggan yang Sedang Menyewa Kendaraan:");
        this.pelangganList.forEach(pelanggan => {
            console.log(pelanggan.getInfo());
        });
    }
}


const kendaraan1 = new Kendaraan("Toyota Avanza", "Mobil");
const kendaraan2 = new Kendaraan("Honda Vario", "Motor");

const pelanggan1 = new Pelanggan("Aldi", "081234567890");
const pelanggan2 = new Pelanggan("Budi", "089876543210");

const sistemTransportasi = new SistemManajemenTransportasi();

pelanggan1.sewaKendaraan(kendaraan1);
pelanggan2.sewaKendaraan(kendaraan2);

sistemTransportasi.tambahPelanggan(pelanggan1);
sistemTransportasi.tambahPelanggan(pelanggan2);

sistemTransportasi.tampilkanPelanggan();
