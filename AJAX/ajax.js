

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
  
  
  function getArticlesAll(){

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
            var artCategorie = data[i].Cat_Libelle 
            
            var parent = document.getElementsByClassName("galery")[0]
            var newDiv =  document.createElement("a");
            newDiv.setAttribute("href","article.html?id="+artId)
            newDiv.innerHTML = '\
            <div class="galeryCard" id="'+artId+'">\
            <img src="./img/panda.jpg">\
            <div class="item-info">\
              <h2>'+artTitre+'</h2>\
              <span>'+artAutheur+'</span>\
            </div>\
          <span class="myCard-categorie">'+artCategorie+'</span>\
        </div>\
      ';
      parent.append(newDiv)
      
      var parent2 = document.getElementsByClassName("container")[0]
      var newDiv2 =  document.createElement("a");
      newDiv2.setAttribute("href","article.html?id="+artId)
      newDiv2.innerHTML = '\
      <div class="galerytuile" id="'+artId+'">	\
      <img src="./img/panda.jpg">\
      <div class="tuile-info">\
        <h2>'+artTitre+'</h2>\
        <span>'+artAutheur+'</span>\
      </div>\
    <span class="myCard-categorie">'+artCategorie+'</span>\
  </div>\
';
parent2.append(newDiv2)
          }
      }

    }
    httpRequest.open('GET', url_id, true)
    httpRequest.send()
  }      

function createArticle(){

   // On enregistre les données dans des variables respectives
  var AddData_Titre = document.getElementById("titre_article").value
  var AddData_Contenu = document.getElementById("createarticle").value
  var AddData_Categorie = 1/*document.getElementsByClassName("input-field").value*/

   // utilisation du constructeur Object
  var AddData = new Object(); 

  AddData.Art_Titre = AddData_Titre
  AddData.Art_Contenu = AddData_Contenu
  AddData.Art_SousTitre = "--"
  AddData.Cat_Id = AddData_Categorie
  AddData.Art_Autheur = "Fred"

  const POSTMethod = {
      method: 'POST', // MethodE POST
      headers: {
      'Content-type': 'application/json; charset=UTF-8' // ON RENSEINGE LE HEAD DU HTML
    },
    body: JSON.stringify(AddData) // ON ENVOIE LES DATA SOUS FORMAT JSON
  }
   var url_adding = "http://localhost/tpMobile2/cesiTpMobile/API/index.php" 
   // make the HTTP put request using fetch api
   fetch(url_adding, POSTMethod)
   .then(response => response.json())
   .then(data => console.log(data)) // ON AFFICHE LE SUCCÉS DANS LA CONSOLE
   .catch(err => console.log(err)) // ON AFFICHE UN MESSAGE D'ERREUR

}

function getArticleById(){
  var url = window.location.toString(); 
  var decoupe = url.split("id=");
  var id = decoupe[1]
  var url_id = "http://localhost/tpMobile2/cesiTpMobile/API/index.php?id="+id //et au fait pense à changer l'url !!!!
  
  var httpRequest = getHttpRequest()
   
    httpRequest.onreadystatechange = function(){
      

      if(httpRequest.readyState === 4){

        var data = JSON.parse(httpRequest.responseText)

      console.log (data)
          
            var artId = data[i].Art_Id
            var artDateCreation = data[i].Art_DateCreation 
            var artMaj = data[i].Art_Maj  
            var artTitre = data[i].Art_Titre 
            var artAutheur = data[i].Art_Autheur  
            var artCategorie = data[i].Cat_Libelle 
            var artContenu = data[i].Art_Contenu
            
            var parent = document.getElementsByClassName("article")
            var newDiv =  document.createElement("div");
            newDiv.innerHTML = '\
            <img "src=img/panda.jpg">\
           <h2>'+artTitre+'</h2>\
           <h2>'+artAutheur+'+' - '+'+artMaj+'</h2>\
           <p>'+artContenu+'</p>\
           <p class="btn active right">'+artCategorie+'</p>\
           </div>\
      ';
      parent.append(newDiv)
      

    }
    httpRequest.open('GET', url_id, true)
    httpRequest.send()
  }
}
 
  /*createArticle();*/
  /*document.getElementsByClassName('btn left');    // On récupère l'élément sur lequel on veut détecter le clic
  addEventListener('click', createArticle());*/
   