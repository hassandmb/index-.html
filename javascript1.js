document.getElementById('total2').addEventListener('click', function() {
    // Récupérer le salaire et le pourcentage saisis par l'utilisateur
    var salaire = parseFloat(document.querySelector('.salarial').value);
    var pourcentage = parseFloat(document.querySelector('.POURSALA').value);
    
    // Vérifier que les valeurs saisies sont valides
    if (isNaN(salaire) || isNaN(pourcentage) || salaire <= 0 || pourcentage < 0) {
        alert("Veuillez entrer des valeurs valides !");
        return;
    }

    // Calculer le montant économisé par mois
    var economieMensuelle = salaire * (pourcentage / 100);
    
    // Calculer le montant économisé par jour (en supposant 30 jours)
    var economieParJour = economieMensuelle / 30;



    // Afficher le résultat dans le champ de réponse
    document.querySelector('.reponse2').value = economieMensuelle.toFixed(2) ;
});