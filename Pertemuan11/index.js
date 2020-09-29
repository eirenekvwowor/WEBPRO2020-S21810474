//Pertemuan11 = Arrow funcion

/*Arrow function adalah sintak penulisan fungsi yang lebih singkat, menggunakan “=>” */

//contoh :
/*
function ucapkanSalam() {
    return "Selamat Pagi";
  };
*/


// Misalnya
/*
const namaFungsi = (parameter1,parameterX) => {
    // kode yang ingin dijalankan dalam fungsi
  };
  
  // atau bila fungsi tersebut tidak memiliki parameter sama sekali
  const namaFungsiTanpaParameter = () => {
    // kode yang ingin dijalankan dalam fungsi
  };
  */


/*
  Contoh buat sendiri

 var perkalian = (x, y) => x * y;
console.log(perkalian (2,5));  // nanti hasilnya 10
*/

/*Contoh lain:
     fungsi dengan parameter
const operasiPenjumlahan = (bilangan1, bilangan2) => {
  const hasil =  bilangan1 + bilangan2;
  return hasil;
};

console.log(operasiPenjumlahan(3, 4)); // Output: 7
*/

/* fungsi yang tidak memiliki parameter
const namaJenisAnjing = () => {
    const anjing = ["Pug", "Bulldog", "Poodle"];
    return anjing[Math.floor(Math.random()*(anjing.length))];
  }
  
  console.log(namaJenisAnjing()); // Output:  (hasil random)
*/

//2. Implicit return -> implicit return value adalah suatu kondisi di mana sebuah fungsi langsung mengembalikan nilai tanpa ada deklarasi variabel atau operasi lainnya di dalamnya.
//contoh :

/*
const greeting = (nama) => `Hi ${nama}`;

console.log(greeting('eirene kv ')); // Output: Hi eirene kv
*/


//TUGAS DARI SIR
function yearUntilRetirement (year, firstName){
  var age = 28;
  var retirement = 65- age;
      if(retirement >0){
        console.log (firstName +"retired in"+ retirement+"years");

      }else{
        console.log (firstName +"is alrady retired.");
    }
}

//ubah ke ES6

const yearUntilRetirement =(year,firstName) => {
  const age=28;
  const retirement = 65 -age;
  if (retirement > 0){
    console.log('$ {firstName} retired in $ {retirement}year.');

  }else
  {
    console.log('${firsName'} is alrady retired');
  }
}
yearUntilRetirement(2020,"Jon");