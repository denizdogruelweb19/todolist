let button = document.getElementById("btnkaydet");


button.addEventListener("click", function () {
    let table = document.querySelector("table");
    let ad = document.getElementById("adi").value.trim();
    let tarih = document.getElementById("Tarih").value.trim();
    let aciklama = document.getElementById("aciklama").value.trim();
  
    
    let tr = document.createElement("tr");
   
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    td1.textContent=ad;
    td2.textContent=tarih;
    td3.textContent=aciklama;

     tr.appendChild(td1)
     tr.appendChild(td2)
     tr.appendChild(td3)
    table.appendChild(tr)
   


   
   



})