//affichage heure
    const d = new Date();
        let date = d.getDate() + ' ' + (d.getMonth()+1) + " " + d.getFullYear();
        let hours = d.getHours() + " :" + d.getMinutes() ;
        let fullDate = date+' </br> '+hours;
        document.getElementById('hour').innerHTML += fullDate + "<br>";


    let connUserName = "User";

//affichage de message du jour
    if((d.getHours() <= 12) && (d.getHours() >= 8 ) && (d.getMinutes() >= 0 )) {
        document.getElementById('hour').innerHTML += message = "<b>Bonjour, </b>" +connUserName
    } if ((d.getHours() >= 13 ) && (d.getMinutes() >= 0 )) {
        document.getElementById('hour').innerHTML += message = "<b>Bon après-midi, </b>" +connUserName
    }
    if ((d.getHours() >= 20 ) && (d.getMinutes() >= 0 )) {
        document.getElementById('hour').innerHTML += message = "<b>Bonsoir, </b>" +connUserName
    }
    if ((d.getHours() >= 0 ) && (d.getHours() < 8 ) && (d.getMinutes() >= 0 )) {
        document.getElementById('hour').innerHTML += message = "<b>Bonne nuit, </b>" +connUserName
    }

