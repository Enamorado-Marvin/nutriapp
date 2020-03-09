var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        calcularMacronutrientes();

        console.log('Received Event: ' + id);
    }
};

app.initialize();

function calcularMacronutrientes(){
    var kcal = document.getElementById("kcal").value;
    var cho = document.getElementById("cho").value;
    var chon = document.getElementById("chon").value;
    var cooh = document.getElementById("cooh").value;

    if (Number(cho)+Number(chon)+Number(cooh) >= 101) {
        document.getElementById('mensaje').innerHTML = "Resultado no debe exeder a 100";
    }else if(parseInt(cho)+parseInt(chon)+parseInt(cooh) <= 99) {
        document.getElementById('mensaje').innerHTML = "Resultado debe ser igual a 100";
    }else {
        /*var   calcCho = KCalorias*ChoPor/4;
        var calcChon = KCalorias*ChonPor/4;
        var calcCooh = KCalorias*CoohPor/9;*/
        document.getElementById('mensaje').innerHTML = "";
        var calcCho = (kcal*(cho/100)/4);
        var calcChon = kcal*(chon/100)/4;
        var calcCooh = kcal*(cooh/100)/9;

        localStorage.setItem("KCalorias", kcal);
        localStorage.setItem("ChoPor", calcCho);
        localStorage.setItem("ChonPor", calcChon);
        localStorage.setItem("CoohPor", calcCooh);

        document.getElementById("calcCho").innerHTML = calcCho.toFixed(2);
        document.getElementById("calcChon").innerHTML = calcChon.toFixed(2);
        document.getElementById("calcCooh").innerHTML = calcCooh.toFixed(2);        
        document.getElementById("visible").style.display = "block";

        document.getElementById('leche').value = 0;
    }

    //Obtener los datos de local storage
    var kcalLocal = localStorage.getItem("KCalorias");
    var choLocal = localStorage.getItem("ChoPor");
    var chonLocal = localStorage.getItem("ChonPor");
    var coohLocal = localStorage.getItem("CoohPor");

    document.getElementById("choPor").innerHTML = parseFloat(choLocal).toFixed(2) + " gr";
    document.getElementById("chonPor").innerHTML = parseFloat(chonLocal).toFixed(2) + " gr";
    document.getElementById("coohPor").innerHTML = parseFloat(coohLocal).toFixed(2) + " gr";
    document.getElementById("kcalPor").innerHTML = kcalLocal + " kcal";
}

var kcalLocal = localStorage.getItem("KCalorias");
var choLocal = localStorage.getItem("ChoPor");
var chonLocal = localStorage.getItem("ChonPor");
var coohLocal = localStorage.getItem("CoohPor");

document.getElementById("choPor").innerHTML = parseFloat(choLocal).toFixed(2) + " gr";
document.getElementById("chonPor").innerHTML = parseFloat(chonLocal).toFixed(2) + " gr";
document.getElementById("coohPor").innerHTML = parseFloat(coohLocal).toFixed(2) + " gr";
document.getElementById("kcalPor").innerHTML = kcalLocal + " kcal";

/*Variables Leche*/
var tipoLeche = document.getElementById('lecheTipo').value;
document.getElementById('leche-select').innerHTML = tipoLeche;
document.getElementById('leche-select2').innerHTML = tipoLeche;

var cantLeche = document.getElementById('leche').value;
document.getElementById('choLeche').innerHTML = cantLeche + " gr";
document.getElementById('chonLeche').innerHTML = cantLeche + " gr";
document.getElementById('coohLeche').innerHTML = cantLeche + " gr";
document.getElementById('totalLeche').innerHTML = "0 kcal";

/* Variables para frutas */

var cantFrutas = document.getElementById('frutas').value;
document.getElementById('choFrutas').innerHTML = cantFrutas + " gr";
document.getElementById('chonFrutas').innerHTML = "0 gr";
document.getElementById('coohFrutas').innerHTML = "0 gr";
document.getElementById('totalFrutas').innerHTML = "0 kcal";

/* Variables para vegetales */

var cantVegetales = document.getElementById('vegetales').value;
document.getElementById('choVegetales').innerHTML = cantVegetales + " gr";
document.getElementById('chonVegetales').innerHTML = "0 gr";
document.getElementById('coohVegetales').innerHTML = "0 gr";
document.getElementById('totalVegetales').innerHTML = "0 kcal";

/* Variables Almidones */
var cantAlmidones = document.getElementById('almidones').innerHTML = 0;
document.getElementById('almidones').innerHTML = cantAlmidones;
document.getElementById('choAlmidones').innerHTML = cantAlmidones + " gr";
document.getElementById('chonAlmidones').innerHTML = "0 gr";
document.getElementById('coohAlmidones').innerHTML = "0 gr";
document.getElementById('totalAlmidones').innerHTML = "0 kcal";

/* Variables Carnes Magras */
var cantCarneM = document.getElementById('carneM').innerHTML = 0;
document.getElementById('carneM').innerHTML = cantAlmidones;
document.getElementById('choCarneM').innerHTML = cantCarneM + " gr";
document.getElementById('chonCarneM').innerHTML = "0 gr";
document.getElementById('coohCarneM').innerHTML = "0 gr";
document.getElementById('totalCarneM').innerHTML = "0 kcal";

function obtenerLeche(){
    var tipoLeche = document.getElementById('lecheTipo').value;
    document.getElementById('leche-select').innerHTML = tipoLeche;
    document.getElementById('leche-select2').innerHTML = tipoLeche;
    var cantLeche = document.getElementById('leche').value;
    var lecheNum = document.getElementById('leNum').value;
    var lecheNum2 = document.getElementById('leNum2').value;
    var lecheNum3 = document.getElementById('leNum3').value;
    var lecheNum4 = document.getElementById('leNum4').value;
    var lecheNum5 = document.getElementById('leNum5').value;

    if (tipoLeche === "Leche Descremada") {
        document.getElementById('coohLeche').innerHTML = cantLeche * 3 + " gr";
        document.getElementById('totalLeche').innerHTML = cantLeche * 100 + " kcal";
        if (lecheNum == "" || lecheNum2 == "" || lecheNum3 == "" || lecheNum4 == "" || lecheNum5 == "") {
            document.getElementById('leKcal').innerHTML = 0;
            document.getElementById('leKcal2').innerHTML = 0;
            document.getElementById('leKcal3').innerHTML = 0;
            document.getElementById('leKcal4').innerHTML = 0;
            document.getElementById('leKcal5').innerHTML = 0;
        }
        document.getElementById('leKcal').innerHTML = lecheNum * 100 + " Kcal";
        document.getElementById('leKcal2').innerHTML = lecheNum2 * 100 + " Kcal";
        document.getElementById('leKcal3').innerHTML = lecheNum3 * 100 + " Kcal";
        document.getElementById('leKcal4').innerHTML = lecheNum4 * 100 + " Kcal";
        document.getElementById('leKcal5').innerHTML = lecheNum5 * 100 + " Kcal";       
    }
    if (tipoLeche === "Leche Semi-descremada") {
        document.getElementById('coohLeche').innerHTML = cantLeche * 5 + " gr";
        document.getElementById('totalLeche').innerHTML = cantLeche * 120 + " kcal";
        if (lecheNum == "" || lecheNum2 == "" || lecheNum3 == "" || lecheNum4 == "" || lecheNum5 == "") {
            document.getElementById('leKcal').innerHTML = "";
            document.getElementById('leKcal2').innerHTML = 0;
            document.getElementById('leKcal3').innerHTML = 0;
            document.getElementById('leKcal4').innerHTML = 0;
            document.getElementById('leKcal5').innerHTML = 0;
        }
        document.getElementById('leKcal').innerHTML = lecheNum * 120 + " Kcal";
        document.getElementById('leKcal2').innerHTML = lecheNum2 * 120 + " Kcal";
        document.getElementById('leKcal3').innerHTML = lecheNum3 * 120 + " Kcal";
        document.getElementById('leKcal4').innerHTML = lecheNum4 * 120 + " Kcal";
        document.getElementById('leKcal5').innerHTML = lecheNum5 * 120 + " Kcal";
    }
    if (tipoLeche === "Leche Entera") {
        document.getElementById('coohLeche').innerHTML = cantLeche * 8 + " gr";
        document.getElementById('totalLeche').innerHTML = cantLeche * 160 + " kcal";
        if (lecheNum == "" || lecheNum2 == "" || lecheNum3 == "" || lecheNum4 == "" || lecheNum5 == "") {
            document.getElementById('leKcal').innerHTML = 0;
            document.getElementById('leKcal2').innerHTML = 0;
            document.getElementById('leKcal3').innerHTML = 0;
            document.getElementById('leKcal4').innerHTML = 0;
            document.getElementById('leKcal5').innerHTML = 0;
        }
        document.getElementById('leKcal').innerHTML = lecheNum * 160 + " Kcal";
        document.getElementById('leKcal2').innerHTML = lecheNum2 * 160 + " Kcal";
        document.getElementById('leKcal3').innerHTML = lecheNum3 * 160 + " Kcal";
        document.getElementById('leKcal4').innerHTML = lecheNum4 * 160 + " Kcal";
        document.getElementById('leKcal5').innerHTML = lecheNum5 * 160 + " Kcal";
    }
}

function valores() {

    var kcalLocal = localStorage.getItem("KCalorias");
    var choLocal = localStorage.getItem("ChoPor");
    var chonLocal = localStorage.getItem("ChonPor");
    var coohLocal = localStorage.getItem("CoohPor");

    var cantLeche = document.getElementById('leche').value;
    var lecheNum = document.getElementById('leNum').value;
    var lecheNum2 = document.getElementById('leNum2').value;
    var lecheNum3 = document.getElementById('leNum3').value;
    var lecheNum4 = document.getElementById('leNum4').value;
    var lecheNum5 = document.getElementById('leNum5').value;
    var lecheCho = cantLeche * 12;
    var lecheChon = cantLeche * 8;

    var totalLe = parseInt(lecheNum) + parseInt(lecheNum2) + parseInt(lecheNum3) + parseInt(lecheNum4) + parseInt(lecheNum5);


    document.getElementById('choLeche').innerHTML = lecheCho + " gr";
    document.getElementById('chonLeche').innerHTML = lecheChon + " gr";
    //Elijo el tipo de leche
    var tipoLeche = document.getElementById('lecheTipo').value;
    document.getElementById('leche-select2').innerHTML = tipoLeche;
    if (tipoLeche === "Leche Descremada") {
        var lecheCooh = cantLeche * 3;
        var lecheTotal = cantLeche * 100;
        document.getElementById('coohLeche').innerHTML = lecheCooh + " gr";
        if (lecheNum == "" || lecheNum2 == "" || lecheNum3 == "" || lecheNum4 == "" || lecheNum5 == "") {
            document.getElementById('leKcal').innerHTML = 0;
            document.getElementById('leKcal2').innerHTML = 0;
            document.getElementById('leKcal3').innerHTML = 0;
            document.getElementById('leKcal4').innerHTML = 0;
            document.getElementById('leKcal5').innerHTML = 0;
        }
        var lk1 = lecheNum * 100;
        var lk2 = lecheNum2 * 100;
        var lk3 = lecheNum3 * 100;
        var lk4 = lecheNum4 * 100;
        var lk5 = lecheNum5 * 100;
        document.getElementById('leKcal').innerHTML = lk1 + " Kcal";
        document.getElementById('leKcal2').innerHTML = lk2 + " Kcal";
        document.getElementById('leKcal3').innerHTML = lk3 + " Kcal";
        document.getElementById('leKcal4').innerHTML = lk4 + " Kcal";
        document.getElementById('leKcal5').innerHTML = lk5 + " Kcal";
    }
    if (tipoLeche === "Leche Semi-descremada") {
        var lecheCooh = cantLeche * 5;
        var lecheTotal = cantLeche * 120;
        document.getElementById('coohLeche').innerHTML = lecheCooh + " gr";
        if (lecheNum == "" || lecheNum2 == "" || lecheNum3 == "" || lecheNum4 == "" || lecheNum5 == "") {
            document.getElementById('leKcal').innerHTML = 0;
            document.getElementById('leKcal2').innerHTML = 0;
            document.getElementById('leKcal3').innerHTML = 0;
            document.getElementById('leKcal4').innerHTML = 0;
            document.getElementById('leKcal5').innerHTML = 0;
        }
        var lk1 = lecheNum * 120;
        var lk2 = lecheNum2 * 120;
        var lk3 = lecheNum3 * 120;
        var lk4 = lecheNum4 * 120;
        var lk5 = lecheNum5 * 120;
        document.getElementById('leKcal').innerHTML = lk1 + " Kcal";
        document.getElementById('leKcal2').innerHTML = lk2 + " Kcal";
        document.getElementById('leKcal3').innerHTML = lk3 + " Kcal";
        document.getElementById('leKcal4').innerHTML = lk4 + " Kcal";
        document.getElementById('leKcal5').innerHTML = lk5 + " Kcal";
        
    }
    if (tipoLeche === "Leche Entera") {
        var lecheCooh = cantLeche * 8;
        var lecheTotal = cantLeche * 160;
        document.getElementById('coohLeche').innerHTML = lecheCooh + " gr";
        if (lecheNum == "" || lecheNum2 == "" || lecheNum3 == "" || lecheNum4 == "" || lecheNum5 == "") {
            document.getElementById('leKcal').innerHTML = "";
            document.getElementById('leKcal2').innerHTML = 0;
            document.getElementById('leKcal3').innerHTML = 0;
            document.getElementById('leKcal4').innerHTML = 0;
            document.getElementById('leKcal5').innerHTML = 0;
        }
        var lk1 = lecheNum * 160;
        var lk2 = lecheNum2 * 160;
        var lk3 = lecheNum3 * 160;
        var lk4 = lecheNum4 * 160;
        var lk5 = lecheNum5 * 160;
        document.getElementById('leKcal').innerHTML = lk1 + " Kcal";
        document.getElementById('leKcal2').innerHTML = lk2 + " Kcal";
        document.getElementById('leKcal3').innerHTML = lk3 + " Kcal";
        document.getElementById('leKcal4').innerHTML = lk4 + " Kcal";
        document.getElementById('leKcal5').innerHTML = lk5 + " Kcal";
    }
    //Total de Kcal basado en el tipo de leche
    document.getElementById('totalLeche').innerHTML = lecheTotal + " kcal";
    if (totalLe > cantLeche) {
        document.getElementById('totalLe').style.color="red";
    } else {
        document.getElementById('totalLe').style.color="black";
    }
    document.getElementById('totalLe').innerHTML = totalLe;

    /* Frutas */ 
    var cantFrutas = document.getElementById('frutas').value;   
    var frutasCho = cantFrutas * 15;
    var frutasTotal = cantFrutas * 60;
    var fruNum1 = document.getElementById('fruNum1').value;
    var fruNum2 = document.getElementById('fruNum2').value;
    var fruNum3 = document.getElementById('fruNum3').value;
    var fruNum4 = document.getElementById('fruNum4').value;
    var fruNum5 = document.getElementById('fruNum5').value;
    var totalFru = parseInt(fruNum1) + parseInt(fruNum2) + parseInt(fruNum3) + parseInt(fruNum4) + parseInt(fruNum5);
    
    var fk1 = fruNum1 * 60;
    var fk2 = fruNum2 * 60;
    var fk3 = fruNum3 * 60;
    var fk4 = fruNum4 * 60;
    var fk5 = fruNum5 * 60;
    document.getElementById('fruKcal1').innerHTML = fk1 + " Kcal";
    document.getElementById('fruKcal2').innerHTML = fk2 + " Kcal";
    document.getElementById('fruKcal3').innerHTML = fk3 + " Kcal";
    document.getElementById('fruKcal4').innerHTML = fk4 + " Kcal";
    document.getElementById('fruKcal5').innerHTML = fk5 + " Kcal";

    if (totalFru > cantFrutas) {
        document.getElementById('totalFru').style.color="red";
    } else {
        document.getElementById('totalFru').style.color="black";
    }
    document.getElementById('totalFru').innerHTML = totalFru;

    document.getElementById('choFrutas').innerHTML = frutasCho + " gr";
    document.getElementById('totalFrutas').innerHTML = frutasTotal + " Kcal";

    //vegetales
    var cantVegetales = document.getElementById('vegetales').value;
    var vegetalesCho = cantVegetales * 5;
    var vegetalesChon = cantVegetales * 2;
    var vegetalesTotal = cantVegetales * 25;
    document.getElementById('choVegetales').innerHTML = vegetalesCho + " gr";
    document.getElementById('chonVegetales').innerHTML = vegetalesChon + " gr";
    document.getElementById('totalVegetales').innerHTML = vegetalesTotal + " Kcal";

    var vegNum1 = document.getElementById('vegNum1').value;
    var vegNum2 = document.getElementById('vegNum2').value;
    var vegNum3 = document.getElementById('vegNum3').value;
    var vegNum4 = document.getElementById('vegNum4').value;
    var vegNum5 = document.getElementById('vegNum5').value;
    var totalVeg = parseInt(vegNum1) + parseInt(vegNum2) + parseInt(vegNum3) + parseInt(vegNum4) + parseInt(vegNum5);
    var vk1 = vegNum1 * 25;
    var vk2 = vegNum2 * 25;
    var vk3 = vegNum3 * 25;
    var vk4 = vegNum4 * 25;
    var vk5 = vegNum5 * 25;
    document.getElementById('vegKcal1').innerHTML = vk1 + " Kcal";
    document.getElementById('vegKcal2').innerHTML = vk2 + " Kcal";
    document.getElementById('vegKcal3').innerHTML = vk3 + " Kcal";
    document.getElementById('vegKcal4').innerHTML = vk4 + " Kcal";
    document.getElementById('vegKcal5').innerHTML = vk5 + " Kcal";
    if (totalVeg > cantVegetales) {
        document.getElementById('totalVeg').style.color="red";
    } else {
        document.getElementById('totalVeg').style.color="black";
    }
    document.getElementById('totalVeg').innerHTML = totalVeg;


    /* Para sacar el total de almidones y calcular la fila de almidones */
    var sumCho = lecheCho+frutasCho+vegetalesCho;
    var almidonesTotales = Math.round((choLocal-sumCho)/15);
    var almidonesCho = almidonesTotales * 15;
    var almidonesChon = almidonesTotales * 2;
    var almidonesCooh = almidonesTotales * 1;
    var almidonesTotal =almidonesTotales * 80;
    document.getElementById('almidones').innerHTML = almidonesTotales;
    document.getElementById('choAlmidones').innerHTML = almidonesCho + " gr";
    document.getElementById('chonAlmidones').innerHTML = almidonesChon + " gr";
    document.getElementById('coohAlmidones').innerHTML = almidonesCooh + " gr";
    document.getElementById('totalAlmidones').innerHTML = almidonesTotal + " Kcal";

    var almNum1 = document.getElementById('almNum1').value;
    var almNum2 = document.getElementById('almNum2').value;
    var almNum3 = document.getElementById('almNum3').value;
    var almNum4 = document.getElementById('almNum4').value;
    var almNum5 = document.getElementById('almNum5').value;
    var totalAlm = parseInt(almNum1) + parseInt(almNum2) + parseInt(almNum3) + parseInt(almNum4) + parseInt(almNum5);
    
    var ak1 = almNum1 * 80;
    var ak2 = almNum2 * 80;
    var ak3 = almNum3 * 80;
    var ak4 = almNum4 * 80;
    var ak5 = almNum5 * 80;
    document.getElementById('almKcal1').innerHTML = ak1 + " Kcal";
    document.getElementById('almKcal2').innerHTML = ak2 + " Kcal";
    document.getElementById('almKcal3').innerHTML = ak3 + " Kcal";
    document.getElementById('almKcal4').innerHTML = ak4 + " Kcal";
    document.getElementById('almKcal5').innerHTML = ak5 + " Kcal";

    if (totalAlm > almidonesTotales) {
        document.getElementById('totalAlm').style.color="red";
    } else {
        document.getElementById('totalAlm').style.color="black";
    }
    document.getElementById('totalAlm').innerHTML = totalAlm;

    /* Para sacar el total de Carne Magra y calcular la fila */
    var cantCarneSm = document.getElementById('carnes-sm').value;
    var sumChon = lecheChon+vegetalesChon+almidonesChon;
    var carneMTotales = Math.round(((chonLocal-sumChon)/7)-cantCarneSm);
    var carneMagraChon = carneMTotales * 7;
    var carneMagraCooh = carneMTotales * 3;
    var carneMTotal = carneMTotales * 45;
    document.getElementById('carneM').innerHTML = carneMTotales;
    document.getElementById('choCarneM').innerHTML = "0 gr";
    document.getElementById('chonCarneM').innerHTML =  carneMagraChon + " gr";
    document.getElementById('coohCarneM').innerHTML = carneMagraCooh + " gr";
    document.getElementById('totalCarneM').innerHTML = carneMTotal + " Kcal";

    var cmNum1 = document.getElementById('cmNum1').value;
    var cmNum2 = document.getElementById('cmNum2').value;
    var cmNum3 = document.getElementById('cmNum3').value;
    var cmNum4 = document.getElementById('cmNum4').value;
    var cmNum5 = document.getElementById('cmNum5').value;
    var totalCm = parseInt(cmNum1) + parseInt(cmNum2) + parseInt(cmNum3) + parseInt(cmNum4) + parseInt(cmNum5);
    
    var cmk1 = cmNum1 * 45;
    var cmk2 = cmNum2 * 45;
    var cmk3 = cmNum3 * 45;
    var cmk4 = cmNum4 * 45;
    var cmk5 = cmNum5* 45;
    document.getElementById('cmKcal1').innerHTML = cmk1 + " Kcal";
    document.getElementById('cmKcal2').innerHTML = cmk2 + " Kcal";
    document.getElementById('cmKcal3').innerHTML = cmk3 + " Kcal";
    document.getElementById('cmKcal4').innerHTML = cmk4 + " Kcal";
    document.getElementById('cmKcal5').innerHTML = cmk5 + " Kcal";

    if (totalCm > carneMTotales) {
        document.getElementById('totalCm').style.color="red";
    } else {
        document.getElementById('totalCm').style.color="black";
    }
    document.getElementById('totalCm').innerHTML = totalCm;

    /* Carne Semi Magra */
    var cantCarneSm = document.getElementById('carnes-sm').value;
    var carnesSmChon = cantCarneSm * 7;
    var carnesSmCooh = cantCarneSm * 5;
    var carnesSmTotal = cantCarneSm * 75;
    document.getElementById('choCarneSm').innerHTML = "0 gr";
    document.getElementById('chonCarneSm').innerHTML = carnesSmChon + " gr";
    document.getElementById('coohCarneSm').innerHTML = carnesSmCooh + " gr";
    document.getElementById('totalCarneSm').innerHTML = carnesSmTotal + " Kcal";

    var csmNum1 = document.getElementById('csmNum1').value;
    var csmNum2 = document.getElementById('csmNum2').value;
    var csmNum3 = document.getElementById('csmNum3').value;
    var csmNum4 = document.getElementById('csmNum4').value;
    var csmNum5 = document.getElementById('csmNum5').value;
    var totalCsm = parseInt(csmNum1) + parseInt(csmNum2) + parseInt(csmNum3) + parseInt(csmNum4) + parseInt(csmNum5);
    
    var csmk1 = csmNum1 * 75;
    var csmk2 = csmNum2 * 75;
    var csmk3 = csmNum3 * 75;
    var csmk4 = csmNum4 * 75;
    var csmk5 = csmNum5 * 75;
    document.getElementById('csmKcal1').innerHTML = csmk1 + " Kcal";
    document.getElementById('csmKcal2').innerHTML = csmk2 + " Kcal";
    document.getElementById('csmKcal3').innerHTML = csmk3 + " Kcal";
    document.getElementById('csmKcal4').innerHTML = csmk4 + " Kcal";
    document.getElementById('csmKcal5').innerHTML = csmk5 + " Kcal";

    if (totalCsm > cantCarneSm) {
        document.getElementById('totalCsm').style.color="red";
    } else {
        document.getElementById('totalCsm').style.color="black";
    }
    document.getElementById('totalCsm').innerHTML = totalCsm;

    /* Para sacar el total de Grasa y calcular la fila */
    var sumCooh = lecheCooh+almidonesCooh+carneMagraCooh+carnesSmCooh;
    var grasaTotales = Math.round((coohLocal-sumCooh)/5);
    var grasaCooh = grasaTotales * 5;
    var grasaTotal = grasaTotales * 45;
    document.getElementById('grasa').innerHTML = grasaTotales;
    document.getElementById('choGrasa').innerHTML = "0 gr";
    document.getElementById('chonGrasa').innerHTML ="0 gr";
    document.getElementById('coohGrasa').innerHTML = grasaCooh + " gr";
    document.getElementById('totalGrasa').innerHTML = grasaTotal + " Kcal";

    var graNum1 = document.getElementById('graNum1').value;
    var graNum2 = document.getElementById('graNum2').value;
    var graNum3 = document.getElementById('graNum3').value;
    var graNum4 = document.getElementById('graNum4').value;
    var graNum5 = document.getElementById('graNum5').value;
    var totalGra = parseInt(graNum1) + parseInt(graNum2) + parseInt(graNum3) + parseInt(graNum4) + parseInt(graNum5);
    
    var gk1 = graNum1 * 45;
    var gk2 = graNum2 * 45;
    var gk3 = graNum3 * 45;
    var gk4 = graNum4 * 45;
    var gk5 = graNum5 * 45;
    document.getElementById('graKcal1').innerHTML = gk1 + " Kcal";
    document.getElementById('graKcal2').innerHTML = gk2 + " Kcal";
    document.getElementById('graKcal3').innerHTML = gk3 + " Kcal";
    document.getElementById('graKcal4').innerHTML = gk4 + " Kcal";
    document.getElementById('graKcal5').innerHTML = gk5 + " Kcal";

    if (totalGra > grasaTotales) {
        document.getElementById('totalGra').style.color="red";
    } else {
        document.getElementById('totalGra').style.color="black";
    }
    document.getElementById('totalGra').innerHTML = totalGra;

    /* Totales Kcal*/
    var totalCho = lecheCho + frutasCho + vegetalesCho + almidonesCho;
    var totalChon = lecheChon + vegetalesChon + almidonesChon + carneMagraChon + carnesSmChon;
    var totalCooh = lecheCooh + almidonesCooh + carneMagraCooh + carnesSmCooh + grasaCooh;
    var totalesKcal = lecheTotal + frutasTotal + vegetalesTotal + almidonesTotal + carneMTotal + carnesSmTotal + grasaTotal;

    var sumDesayuno = lk1 + fk1 + vk1 + ak1 + cmk1 + csmk1 + gk1;
    var sumM1 = lk2 + fk2 + vk2 + ak2 + cmk2 + csmk2 + gk2;
    var sumAlmuerzo = lk3 + fk3 + vk3 + ak3 + cmk3 + csmk3 + gk3;
    var sumM2 = lk4 + fk4 + vk4 + ak4 + cmk4 + csmk4 + gk4;
    var sumCena = lk5 + fk5 + vk5 + ak5 + cmk5 + csmk5 + gk5;
    var sumKcals = sumDesayuno + sumM1 + sumAlmuerzo + sumM2 + sumCena;

    var porDesayuno = sumDesayuno/sumKcals * 100;
    var porM1 = sumM1/sumKcals * 100;
    var porAlmuerzo = sumAlmuerzo/sumKcals * 100;
    var porM2 = sumM2/sumKcals * 100;
    var porCena = sumCena/sumKcals * 100;
    var porTotal = (sumKcals/totalesKcal * 100).toFixed(2);
    if (porTotal <= 99.90 || porTotal > 100) {
        document.getElementById('porKcals').style.color ="red";
    }
    if (porTotal == 100) {
        document.getElementById('porKcals').style.color ="green";
    }

    document.getElementById('choTotales').innerHTML = totalCho + " gr";
    document.getElementById('chonTotales').innerHTML = totalChon + " gr";
    document.getElementById('coohTotales').innerHTML = totalCooh + " gr";
    document.getElementById('totalTotales').innerHTML = totalesKcal + " Kcal";
    document.getElementById('sumDesayuno').innerHTML = sumDesayuno + " Kcal";
    document.getElementById('sumM1').innerHTML = sumM1 + " Kcal";
    document.getElementById('sumAlmuerzo').innerHTML = sumAlmuerzo + " Kcal";
    document.getElementById('sumM2').innerHTML = sumM2 + " Kcal";
    document.getElementById('sumCena').innerHTML = sumCena + " Kcal";
    document.getElementById('sumKcals').innerHTML = sumKcals + " Kcal";
    document.getElementById('porDesayuno').innerHTML = porDesayuno.toFixed(2) + "%";
    document.getElementById('porM1').innerHTML = porM1.toFixed(2) + "%";
    document.getElementById('porAlmuerzo').innerHTML = porAlmuerzo.toFixed(2) + "%";
    document.getElementById('porM2').innerHTML = porM2.toFixed(2) + "%";
    document.getElementById('porCena').innerHTML = porCena.toFixed(2) + "%";
    document.getElementById('porKcals').innerHTML = porTotal + "%";

    // Margenes

    var margenCho = Math.round(choLocal - totalCho);
    var margenChon = Math.round(chonLocal - totalChon);
    var margenCooh = Math.round(coohLocal - totalCooh);
    var margenKcal = Math.round(kcalLocal - totalesKcal);

    document.getElementById('choMargen').innerHTML = margenCho + " gr";
    document.getElementById('chonMargen').innerHTML = margenChon + " gr";
    document.getElementById('coohMargen').innerHTML = margenCooh + " gr";
    document.getElementById('totalMargen').innerHTML = margenKcal + " Kcal";

    document.getElementById("visible").style.display = "block";
}