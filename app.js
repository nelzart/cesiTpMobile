M.AutoInit();
//affichage heure
    const d = new Date();
        let date = d.getDate() + ' ' + (d.getMonth()+1) + " " + d.getFullYear();
        let hours = d.getHours() + " :" + d.getMinutes() ;
        let fullDate = '<b>' +date+ '</b> </br> '+hours;
        document.getElementById('hour').innerHTML += fullDate ;


    let connUserName = "User";

//affichage de message du jour
    if((d.getHours() <= 12) && (d.getHours() >= 8 ) && (d.getMinutes() >= 0 )) {
        document.getElementById('message').innerHTML += message = "<b>Bonjour, </b>" +connUserName
    } 
    if ((d.getHours() >= 13 ) && (d.getHours() < 20 ) && (d.getMinutes() >= 0 )) {
        document.getElementById('message').innerHTML += message = "<b>Bon après-midi, </b>" +connUserName
    }
    if ((d.getHours() >= 20 ) && (d.getMinutes() >= 0 )) {
        document.getElementById('message').innerHTML += message = "<b>Bonsoir, </b>" +connUserName
    }
    if ((d.getHours() >= 0 ) && (d.getHours() < 8 ) && (d.getMinutes() >= 0 )) {
        document.getElementById('message').innerHTML += message = "<b>Bonne nuit, </b>" +connUserName
    }

    function burger() {
        let burger = document.getElementById('burger');
        let links = document.getElementById('links');
        let quit = document.getElementById('quit');
        burger.style.padding = '16px 16px 200vh 200vw';
        links.style.display = 'flex';
        quit.style.display = 'inline';
      }
      
      // premet de quitter le menu burger sur la version mobile. 
      function quit() {
        let burger = document.getElementById('burger');
        let links = document.getElementById('links');
        let quit = document.getElementById('quit');
        burger.style.padding = '5px 5px 32px 32px';
        links.style.display = 'none';
        quit.style.display = 'none';
      }