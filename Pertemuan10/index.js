// var,let,const

//Misalkan
//var nama ="iren";
//var nama ="kurnia";
//console.log(nama);
// Disini harus diperhatikan pendeklarasian variabel tdk boleh sama

//Next coba pake let
//let nama ="iren";
//let nama = "kurnia"
//console.log(nama);


//Ada 2 jenis scope : 1.fungction scope 2.block scope

/*for(var i=0; i<10; i++)
{
    console.log(i);
}
console.log(i);
*/

/*
function tes()
{
    for(var i=0; i<10; i++)
{
console.log(i);
}
}
tes();
*/

//console.log(i);



/*for (let i=0; i<10; i++)
{
    console.log(i);

}
console.log(i);
*/

//TEMPLATE literal

const person=
{
    firstname:"iren",
    lastname:"wowor",
    age:19,

};
console.log("Hallo nama saya"+""
+ person.firstname+""+
person.lastname
+"umur saya adalah"
+person.age
+"tahun.");