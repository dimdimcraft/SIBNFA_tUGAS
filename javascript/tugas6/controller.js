import user from "./data.js";

// menampilkan data user
const showUser = () => {
    console.log(user);
}

// manambahkan data user
const addUser = (nama, umur, alamat, email) => {
    user.push({nama, umur, alamat, email});
}

// menghapus data user
const deleteUser = (index) => {
    user.splice(index, 1);
}  

export {showUser, addUser, deleteUser};