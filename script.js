
function calcul()
{
    // On recupère l'heure a partir de la value
    var start = document.getElementById("starttime").value;
    var end = document.getElementById("endtime").value; 

    // On transforme leur valeur en minute
    var parts1 = start.split(":");
    var parts2 = end.split(":");
    

    // Instruction pour trouver la différence 
    var minutes = (Number(parts2[0])*60 + Number(parts2[1]))-(Number(parts1[0])*60 + Number(parts1[1]));
    var interH = parseInt(minutes/60);
    console.log(interH);
    var interM = minutes%60;
    console.log(interM);

    document.getElementById("duree").value = interH +"h"+ interM;
}
