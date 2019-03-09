function cargarDatos4() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
    var obj = this.responseText;
    var obj1 = JSON.parse(obj);
    document.getElementById("d1").innerHTML =
    obj1["concesionario"][0].info;

    document.getElementById("d2").innerHTML =
    obj1["concesionario"][1].info;

    document.getElementById("d3").innerHTML =
    obj1["concesionario"][2].info;

    document.getElementById("d4").innerHTML =
    obj1["concesionario"][3].info;
    
    document.getElementById("d5").innerHTML =
    obj1["concesionario"][4].info;

    document.getElementById("d6").innerHTML =
    obj1["concesionario"][5].info;

  
    // document.getElementById("d1").innerHTML =
   
    }
    };
    xhttp.open("GET", "datos.json", true);
    xhttp.send();
   };
  

