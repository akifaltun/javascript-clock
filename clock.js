let Name = prompt("Lütfen Adınızı Giriniz")

let myName=document.querySelector("#myName")
myName.innerHTML=(Name)


function tarihSaat() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var dayName = date.getDay();
     switch (dayName) {
        case 1:
           dayName = "Pazartesi";
           break;
        case 2:
           dayName = "Salı";
           break;
        case 3:
            dayName = "Çarşamba";
            break;
        case 4:
            dayName = "Perşembe";
            break;
        case 5:
            dayName = "Cuma";
            break;
        case 6:
            dayName = "Cumartesi";
            break;
        case 7:
            dayName = "Pazar";
            break;           
     }

     h = h < 10 ? "0" + h : h; 
     m = m < 10 ? "0" + m : m;
     s = s < 10 ? "0" + s : s;
     
     var timer = ` ${h} : ${m} : ${s}  - ${dayName} `;
    document.querySelector('#zaman').innerHTML = timer ; 

    setInterval(tarihSaat, 1000); 
}
tarihSaat(); 