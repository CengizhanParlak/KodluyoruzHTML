

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json()) //parse json data
    .then(function (users) {
        users.forEach((users) => {
            console.log(users); //Başlıkları console' a yazdırma
        });
    });

fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((json) => json.forEach((item) => console.log(item.email)))
    .catch((err) => console.log(err))
    
// //// GET İsteği
// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json()) //parse json data
//     .then(function (todos) {
//         todos.forEach((todo) => {
//             console.log(todo.title); //Başlıkları console' a yazdırma
//         });
//     });

// let payload = {
//     title: "Blog Title",
//     body: "lorem ipsum",
//     userId: 1
// }
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: "POST",
//     body: JSON.stringify(payload),
//     headers: { "Content-type": "application/json; charset=UTF-8" }
// })
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err));


// function valid(){
//     try {
//         if (document.querySelector("#dogumTarihi").value == "") {
//             throw "Doğum tarihini boş geçemezsiniz";
//         };
//     }catch(err) {
//         alert(err);
//     }
// }

// let person = {
//     name: "Jack",
//     age: 20,
//   };
//   let key = prompt("Kişinin hangi özelliğini öğrenmek isterdiniz?", "name");

//   // değişken ile erişim
//   alert(person[key]);      // Jack (prompt’a “name” yazarsak erişeceğimiz değer)


// let person= {};                     // set (oluştur)
// person["likes sea"] = "yes";         // get (getir)
// console.log(person["likes sea"]);   // true (doğru)
// delete person["likes sea"];         // delete (sil)

// let countriesTalkFrench = new Object();     
// countriesTalkFrench.continent = "africa";     
// countriesTalkFrench.language = "french"; 
// countriesTalkFrench.race = "african";
// console.log(countriesTalkFrench);
// delete countriesTalkFrench.language;
// console.log(countriesTalkFrench);

// const sayilar = ["abc"];

// // Dizi içindeki sayıları toplayarak indirgeyecek bir fonksiyon yazalım:
// function indirgeyici (akumulator, sayi) {
//     return akumulator + sayi;
// }

// // Bu fonksiyonu ve toplamaya 0'dan başlayacağımızı belirten 0 sayısını metodumuza parametre olarak girelim ve sonucu bir değişkende tutalım:
// const sonuc1 = sayilar.reduce(indirgeyici,"abc");

// console.log(sonuc1);

// const array1 = [1, 30, 4, 21, 100000];
// const strDizi = ["abc", "def", "beg"];
// array1.sort(function (a, b) {
//   return a - b;
// });
// strDizi.sort().reverse();
// console.log(array1);
// console.log(strDizi);
// expected output: Array [1, 100000, 21, 30, 4]


// Bir dizideki sayıların 5 katından oluşan başka bir dizi oluşturalım:

// const sayilar = [1,2,3];

// let sayilarin5kati = sayilar.map(function(sayi) {
//     return sayi*5;
// });

// console.log(sayilarin5kati);
// // Çıktı olarak [5,10,15] görmeyi bekleriz.

// console.log(sayilar);
// // Çıktı olarak [1,2,3] görmeyi bekleriz. Orijinal dizimiz aynı kalır.


// const alisverisListem = ["elma", "ekmek", "süt"];

// const stringAlisverisListem =  alisverisListem.join();
// console.log(stringAlisverisListem);
// // Çıktıda "elma,ekmek,süt" bekleriz.

// const stringAlisverisListem2 = alisverisListem.join(" kiraz ");
// console.log(stringAlisverisListem2);
// Çıktıda "elma kiraz ekmek kiraz süt" bekleriz.

// var sports = ['basketball', 'football', 'tennis' ];
// console.log(sports); // basketball, football, tennis
// sports.splice(1,4,'baseball');
// console.log(sports); // basketball, baseball, football, tennis

// -----------------------------------------------------------------------------------------

// const form = document.querySelector('form');
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
// const input = document.getElementById('item');
// let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// localStorage.setItem('items', JSON.stringify(itemsArray));
// const data = JSON.parse(localStorage.getItem('items'));

// const liMaker = (text) => {
//   const li = document.createElement('li');
//   li.textContent = text;
//   ul.appendChild(li);
// }

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   itemsArray.push(input.value);
//   localStorage.setItem('items', JSON.stringify(itemsArray));
//   liMaker(input.value);
//   input.value = "";
// });

// data.forEach(item => {
//   liMaker(item);
// });

// button.addEventListener('click', function () {
//   localStorage.clear();
//   while (ul.firstChild) {
//     ul.removeChild(ul.firstChild);
//   }
//   itemsArray = [];
// });

//   //iç içe elementler çağrıldı  
//   const selectBox = document.querySelector('#selectColor')
//   const button = document.querySelector('#button');
//   const form = document.querySelector('.inputText');  
//   const cerceve = document.querySelector('.container');
//   selectBox.addEventListener('click' ,function(){
//   console.log("selectBox");    
//          })
//   form.addEventListener('click',function(){
//   console.log("form"); })
//  cerceve.addEventListener('click',function(){
//     console.log('cerceve');})


//   //id=select olan nesne çağrılarak color değişkenine atandı
//   const color = document.querySelector("#select");
//   //color değişkenine change etkinliği etkinliği atandı ve fonksiyon ismi parametre olarak atandı
//   color.addEventListener('change' ,selectBox);

//   //selectBox isimli fonksiyon ile selectbox her seçildiğinde etkinlik tipi =change ve değeri consola yazılmaktadır 
//    function selectBox(event){
//    console.log("Etkinlik tipi : " + event.type);
//    console.log("deger : " + event.target.value);
//   }

// const keyboard =document.querySelector('#fname');
//     //keyboard isimli değişkene "cut" etkinliği atandı ve fonksiyon ismi parametre olarak atandı
//     keyboard.addEventListener("cut",cuttingFunction);
//     //cuttingFunction isimli fonksiyon ile form inputuna yazılan girdileri klavye ctrl+c ile kesildiğinde etkinlik çalışmaktadır
//     function cuttingFunction(event){
//     console.log("etkinlik tipi: " , event.type)
//     } 

// const button = document.querySelector("#text");
//   button.addEventListener('dblclick',clickFonksiyonu);

//   //fonksiyonda id=text olan element çağrılarak innerHTML ile içeriği değiştirildi.
//       function clickFonksiyonu(){
//   document.getElementById("text").innerHTML = "NEW FORM";
//   }

// // id =button olan nesne seçildi
// const buton = document.getElementById("id");
// const query = document.querySelector("div");
// //Burada ilk olarak tip ('click') ,ikinci olarak da fonksiyonun kendisi parametre olarak eklenir

// buton.addEventListener('click' , function(){
//        alert("Buton Tıklandı");
//  })
// query.addEventListener('click' , function(){
//        alert("query'den seçilen buton tıklandı");
//  })

// -----------------------------------------------------------------------------------------

// var numbers = [4, 9, 16, 25];
// var x = numbers.map(Math.sqrt)
// console.log(x);

// -----------------------------------------------------------------------------------------

// - [1,2,3,4,5] arrayini parametre alan bir arrow fonksiyonumuz olsun. Bu arrayin sonucu bize yeni bir 
// array döndürsün. Oluşan yeni arraydaki çift sayılar 2,  tek sayılar ise 3 ile çarpılmış olsun. 
// [1,2,3,4,5] => [1x3, 2x2, 3x3, 4x2, 5x3] =>Sonuç çıktımız **[3,4,9,8,15]** olacak.


// const fonksiyon = parametre => {
//     parametre.foreach()
// }

// console.log(fonksiyon(5));

// var list = [1,2,3,4,5];

// const seriesList = list => {
//   let array = new Array();
//     list.forEach((number, index) => {
//       if(number%2 == 0){
//           array.push(number*2);
//       }
//       else{
//           array.push(number*3);
//       }
//     });
//     return array;
//   };

//   var dizi = [1,2,3,4,5];
//   console.log(seriesList);



// var bootcamp = "frontend";
// var organizasyon ="kodluyoruz";
// function programDetayi(bootcamp, organizasyon) {
//     // nested yardımcı fonk
//     const tumProgram = () => bootcamp + ' ' + organizasyon;

//     console.log('Basladi, ' + tumProgram());
//     console.log('Bitti, ' + tumProgram());
//   }
//   programDetayi(bootcamp, organizasyon);
// let experience = prompt('Kac yillik gelistirici tecrubeniz var', 4);

// const developer = experience < 5 ? () => alert('Bir cok konuyu biliyorum') : () => alert('Hicbir sey bilmiyorum:)');

// developer();
// var b = (param1,param2) =>  param1**param2;
// console.log(b(2,5));

// -----------------------------------------------------------------------------------------

// var weight = prompt("ağırlığınız!");
// var height= prompt("boyunuz!");

// function vkiHesapla(weight, height) {
// var vki = weight/height * height; //Bu kod satırını değiştiriniz

// if(vki<18.5) return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
// if(vki>= 18.5 && vki <= 24.9) return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
// if(vki>= 25.0 && vki <= 29.9) return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
// if(vki>= 30) return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
// return alert("Girdiğiniz değerleri kontrol ediniz");
// };



// vkiHesapla(weight,height)

// -----------------------------------------------------------------------------------------

// let div = document.querySelector('#content');
// div.classList.toggle('visible');
// div.classList.add('visible');

// -----------------------------------------------------------------------------------------

// var liste = document.querySelector("ul");

// var urun = document.querySelector("#veri"); 
// var ekle = document.querySelector("#ekle");

// ekle.addEventListener("click",function(){
//     // createElement ile yeni bir listItem (li) oluşturuyoruz
//     var li=document.createElement("li"); 

//     // Input ile gelen veriyi "li" içerisine metin olarak giriyoruz.
//     li.textContent=veri.value; 

//     // appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizin içerisine ekliyoruz.
//     liste.appendChild(li);

//     // Veri inputu içerisindeki metni siliyoruz.
//     veri.value = "";
//   });
// var two  = document.getElementsByClassName("alternate");
// for (var i = 0; i < two.length; i++) { 
//     two[i].style.color  = "red"; 
// }


// -----------------------------------------------------------------------------------------


// var isim = prompt("Adınız nedir?");
// console.log("Merhaba, " + isim);
// a  = 5;
// console.log(a);

// -----------------------------------------------------------------------------------------

// let title = document.getElementById('domain');
// console.log(title.innerHTML);

// -----------------------------------------------------------------------------------------

// document.getElementById("domain").innerHTML = "DOM Manipülasyonu yaptık!";

// document.getElementById("btnClick").addEventListener("click", clicked);
// function clicked(){
//        alert("Butona Tıklandı");
//        } 

// -----------------------------------------------------------------------------------------

// var serverName = "api. kodluyoruz.org"
// console. log ("kodluyoruz. org")

// let number = 12
// console.log(number)

// function ab(){
//     a = 20;
//     var a = 30;
// console.log(a);
// }

// ab();

// -----------------------------------------------------------------------------------------

// let number1 = "11";
// number1 = parseInt(number1);
// console.log("number1: ", parseInt(number1), typeof(number1));

// console.log(Number.isInteger(number1))

// var  a = !!2;
// console.log(a);

// console.log("foo" + +"bar")
// console.log(1=== 2)

// var deneme = "bu bir denemedir " + `${a}` 
// console.log(deneme);

// var email = "cengizhan.parlak@deneme.com"
// console.log(email.endsWith("deneme"));