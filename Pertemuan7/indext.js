// 1.Conditonal 
//Menggunakan if else
/*var angka=-12;
 
if (angka%2==0) 
{
   console.log("Angka = "+angka);
   console.log("Angka adalah bilangan genap");
   if (angka > 0)
   {
      console.log("Angka besar dari 0");
   }
   else
   {
      console.log("Angka kecil dari 0");
   }
}           
else
{
   console.log("Angka = "+angka);
   console.log("Angka adalah bilangan ganjil");
   if (angka > 0)
   {
      console.log("Angka besar dari 0");
   }
   else
   {
      console.log("Angka kecil dari 0");
   }
} */

//untuk conditional dapat menggunakan
//1. if
//2.else if
//3. else


//2.Looping
// ada 5 jenis looping yaitu: for, for in, for of, while

const kucing = {
    species: "anggora",
    color: "white",

}
// Print property names of object
for (attribute in kucing) {
    console.log(attribute);
}
// Print property values of object
for (attribute in kucing) {
    console.log(kucing[attribute]);
}