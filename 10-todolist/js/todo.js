var inputDOM = document.querySelector("#task");
var ekleButtonDOM = document.querySelector("#liveToastBtn");
// listElementsDOMS.forEach(e => e.innerHTML="deneme")

var listElementsDOMS = document.getElementsByTagName("li");
var listElementsValues = [''];
var currentListItemValues = [''];

// for (let i = 0; i < listElementsDOMS.length; i++) {
//     listElementsValues.push(listElementsDOMS[i].textContent);
// }
// function inpectValues() {
//     currentListItemValues = localStorage.getItem("Values");
//     console.log(currentListItemValues);
//     for (let i = 0; i < listElementsDOMS.length; i++) {
//         if (listElementsDOMS[i].textContent != currentListItemValues[i]) {
//             let li = document.createElement('li');
//             li.textContent = listElementsValues[i];
//             var butonSpan = document.createElement("span");
//             var buton = document.createTextNode("\u00D7");
//             butonSpan.className = "close";
//             butonSpan.appendChild(buton);
//             li.appendChild(butonSpan);
//             listParentDOM.append(li);
//         }
//     }
// }

for (let i = 0; i < listElementsDOMS.length; i++) {

    var butonSpan = document.createElement("span");
    var buton = document.createTextNode("\u00D7");
    butonSpan.className = "close";
    butonSpan.appendChild(buton);
    listElementsDOMS[i].appendChild(butonSpan);
}

function newElement() {
    var isWord = new RegExp("[a-zA-Zçğıöşü]+");  //karakter varsa, geçerli giriş mi diye kontrol. true'ysa vardır

    if (inputDOM.value != "" && isWord.test(inputDOM.value)) {
        let newJob = inputDOM.value;
        newJob = newJob.replace(/ +/g, " ");   //fazlalık boşlukları tek boşlukla değiştirdik
        if (newJob[0] == " ") {                               //ilk karakter boşluk mu
            newJob = newJob.substring(1);       //boşluksa içeriği 1'inci elemandan itibaren al
        }

        let li = document.createElement('li');
        li.textContent = newJob;
        var butonSpan = document.createElement("span");
        var buton = document.createTextNode("\u00D7");
        butonSpan.className = "close";
        butonSpan.appendChild(buton);
        li.appendChild(butonSpan);

        listParentDOM.append(li);
        inputDOM.value = "";
        listElementsValues.push(newJob);
        localStorage.setItem("Values", listElementsValues);

        $(".success").toast("show");

        for (let i = 0; i < closeElementDOMS.length; i++) {
            closeElementDOMS[i].onclick = function () {
                var parentElement = this.parentElement;
                parentElement.style.display = "none";
            }
        }
    }
    else {
        inputDOM.value = "";
        $(".error").toast("show");
    }
}

var closeElementDOMS = document.getElementsByClassName("close");
for (let i = 0; i < closeElementDOMS.length; i++) {
    closeElementDOMS[i].onclick = function () {
        var parentElement = this.parentElement;
        parentElement.style.display = "none";
    }
}

var listParentDOM = document.querySelector("#list");
listParentDOM.addEventListener("click", function (listElement) {
    if (listElement.target.tagName == "LI") {
        listElement.target.classList.toggle("checked");
    }
},
    false
);