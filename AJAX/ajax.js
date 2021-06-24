

var getHttpRequest = function(){
    var httpRequest = false;
  // ------------------- FONCTION verification de Compatibilité des écrans ----------------------
  
  if(window.XMLHttpRequest){
    httpRequest = new XMLHttpRequest();
    if(httpRequest.overrideMimeType){
      httpRequest.overrideMimeType('text/xml')
    }
  }
  else if (window.ActiveXObject){ 
    try {
        httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
      }
      catch (e){
        try{
          httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) {}
    }
  }
  if(!httpRequest){
      alert('Abandon :( Impossible de créer une instance XMLHTTP');
      return false;
  }
  return httpRequest;
  }
  
  // ---------------------   FONCTION recup de tous les articles ------------------------------------
  
  
  getArticlesAll = function(){

    var url_id = "http://localhost/tpMobile2/cesiTpMobile/API/index.php" //et au fait pense à changer l'url !!!!
  
    var httpRequest = getHttpRequest()
   
    httpRequest.onreadystatechange = function(){
      

      if(httpRequest.readyState === 4){

        var data = JSON.parse(httpRequest.responseText)

      console.log (data)
          for(i=0 ; i < data.length ; i++){
            // faire une requete pour recuperer infos des articles
            // Afficher les informations dans la page html
            
            var artId = data[i].Art_Id
            var artDateCreation = data[i].Art_DateCreation 
            var artMaj = data[i].Art_Maj  
            var artTitre = data[i].Art_Titre 
            var artAutheur = data[i].Art_Autheur  
            var artCategorie = data[i].Cat_Id 
            
            var parent = document.getElementsByClassName("galery")[0]
            var newDiv =  document.createElement("div ");
            newDiv.innerHTML = '\
            <a href="article.html?id='+artId+'"><div class="galeryCard">  \
            <img src="./img/panda.jpg">\
            <div class="item-info">\
              <h2>'+artTitre+'</h2>\
              <span>'+artAutheur+'</span>\
            </div>\
          <span class="myCard-categorie">'+artCategorie+'</span>\
        </div></a>\
      ';
      parent.append(newDiv)
      
      var parent2 = document.getElementsByClassName("galeryOnMobile")[0]
      var newDiv2 =  document.createElement("div");
      newDiv.innerHTML = '\
      <div class="container" >	\
      <img src="./img/panda.jpg">\
      <div class="tuile-info">\
        <h2>'+artTitre+'</h2>\
        <span>'+artAutheur+'</span>\
      </div>\
    <span class="myCard-categorie">'+artCategorie+'</span>\
  </div>\
';
parent2.append(newDiv2)*/
          }
      }

    }
    httpRequest.open('GET', url_id, true)
    httpRequest.send()
  }      
  getArticlesAll();
   