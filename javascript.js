document.getElementById('total').addEventListener('click', function() {
    var economie = parseFloat(document.querySelector('.economie').value);
    var nombre = parseInt(document.querySelector('.nombre').value);
    
    if (!isNaN(economie) && !isNaN(nombre) && nombre > 0) {
        var montantParJour = economie / nombre;
        document.querySelector('.reponse').value = montantParJour.toFixed(2);
    } else {
        alert('Veuillez entrer des valeurs valides.');
       }
    });