//Mendeklaeasikan objec
//Pertama secara literal
const mhs1 ={
    namaDepan: "Jhon";
    namaBelakang: "Doe";
    umur: 32,
    sudahLulus: true,
alamat:{
    jalan: "Jln.Arnold mononutu",
    kecamatan: "Airmadidi",
    kabupaten: "Minahasa utara",
    (property) IPsemester: number[]
    IPsemester:[3.05, 3.30, 3.4, 3.25 ]

hitungIPK: function ()
{
let total= 0;
this.IPsemester.forEach(function (el){
    total=total +el;
});
return total / 4;
},
};


//mengajses properti objek
//1. Dot notation
//2. Bracket notation

console.log(mhs1,alamat.jalan);
console.log(mhs1,IPsemester[2]);
console.log(mhs1,hitungIPK[]);