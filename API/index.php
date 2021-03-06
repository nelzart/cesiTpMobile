<?php

include("db_connect.php");
$request_method = $_SERVER['REQUEST_METHOD'];

function getArticlesAll(){
    global $conn;
    $query = "SELECT * FROM article a INNER JOIN catagoriearticle c ON a.cat_Id= c.Cat_Id ORDER BY Art_Maj DESC";

    $response = array();
    $result = mysqli_query($conn, $query);
    while($row = mysqli_fetch_array($result))
    {
            $response[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($response, JSON_PRETTY_PRINT);

}

function getCategoriesAll(){
        global $conn;
        $query = "SELECT * FROM categoriearticle ORDER BY Cat_Libelle DESC";
        $response = array();
        $result = mysqli_query($conn, $query);
        while($row = mysqli_fetch_array($result))
        {
                $response[] = $row;
        }
        header('Content-Type: application/json');
        echo json_encode($response, JSON_PRETTY_PRINT);
    
}

function getArticlesbyCategorie($catId){
    global $conn;
    $query = "SELECT * FROM article WHERE Cat_Id=".$catId." ORDER BY Art_Maj DESC";
    $response = array();
    $result = mysqli_query($conn, $query);
    while($row = mysqli_fetch_array($result))
    {
            $response[] = $row;
    }
    header('Content-Type: application/json');
    echo json_encode($response, JSON_PRETTY_PRINT);


}

function getArticlesbyTitre($titre){
        global $conn;
        $query = "SELECT * FROM article where Art_Titre LIKE '%".$titre."%' ORDER BY Art_Maj DESC";
        $response = array();
        $result = mysqli_query($conn, $query);
        while($row = mysqli_fetch_array($result))
        {
                $response[] = $row;
        }
        header('Content-Type: application/json');
        echo json_encode($response, JSON_PRETTY_PRINT);
}

function getArticleById($id){
        global $conn;
        $query = "SELECT * FROM article a INNER JOIN catagoriearticle c ON a.cat_Id= c.Cat_Id where Art_Id=".$id;


        $response = array();
        $result = mysqli_query($conn, $query);
        while($row = mysqli_fetch_array($result))
        {
                $response[] = $row;
        }
        header('Content-Type: application/json');
        echo json_encode($response, JSON_PRETTY_PRINT);
    
    
}

function addArticle(){
    global $conn;
                $content = file_get_contents("php://input");
                $decoded = json_decode($content, true);

                //$relDate = date("Y-m-d H:i:s");  // date g??r??e par mysql

                $Article_titre = $decoded['Art_Titre'];
                $Article_Contenu = $decoded['Art_Contenu'];
                $Article_SousTitre = $decoded['Art_SousTitre'];
                $Article_Autheur = $decoded['Art_Autheur'];
                $Categorie_id = $decoded['Cat_Id'];

               
             

		$query = mysqli_prepare($conn, "INSERT INTO article(Art_Titre, Art_Contenu, Art_SousTitre, Art_Autheur, Cat_Id) VALUES(?,?,?,?,?)");
                mysqli_stmt_bind_param($query, "ssssi", $Article_titre, $Article_Contenu, $Article_SousTitre, $Article_Autheur, $Categorie_id);

                if($conn)
                {
                        $response1=array(
                        'status' => 1,
                        'status_message' =>'Connexion ??tablie et requ??te envoy??e.'
                        );
                        mysqli_stmt_execute($query);
                }
                else
                {
                        $response1=array(
                        'status' => 0,
                        'status_message' =>'Erreur connexion et donc la requ??te non envoy??e.'
                        );
                };
                header('Content-Type: application/json');
                echo json_encode($response1);
}

function updateArticle($id){

    global $conn;
    $content = file_get_contents("php://input");
    $decoded = json_decode($content, true);

                $Article_titre = $decoded['Art_Titre'];
                $Article_Contenu = $decoded['Art_Contenu'];
                $Article_SousTitre = $decoded['Art_SousTitre'];
                $Categorie_id = $decoded['Cat_Id'];
                date_default_timezone_set('Europe/Paris');
                $DateMaj=  date("Y-m-d H:i:s");
                echo $DateMaj;
               

    $query= mysqli_prepare($conn, "UPDATE article SET Art_Titre =?, Art_Contenu=?, Art_SousTitre=?, Cat_Id=?, Art_Maj=? WHERE Art_Id=?");
    mysqli_stmt_bind_param($query, "sssisi", $Article_titre, $Article_Contenu, $Article_SousTitre,  $Categorie_id, $DateMaj,$id);

    if($conn)
        {
                mysqli_stmt_execute($query);
                 $response=array(
                    'status' => 1,
                    'status_message' =>'Article mis a jour avec succes.'
                );
        }
    else
     {
            $response=array(
                    'status' => 0,
                    'status_message' =>'Echec de la mise ?? jour du article. '
             );

     }

    header('Content-Type: application/json');
    echo json_encode($response);

}

function deleteArticle($id){

    global $conn;
    $query = mysqli_prepare($conn, "DELETE FROM article WHERE Art_Id = ?");
    mysqli_stmt_bind_param($query, "i", $id);

    if($conn)
    {
        mysqli_stmt_execute($query);       
            $response=array(
                    'status' => 1,
                    'status_message' =>'Capteur supprim?? avec succ??s.'
             );
     }
     else
    {
            $response=array(
                    'status' => 0,
                    'status_message' =>'La suppression du capteur a ??chou??: '
             );
     }
    header('Content-Type: application/json');
    echo json_encode($response);


}

switch($request_method)
        {

                case 'GET':

                        if(!empty($_GET["id"]))  //obtenir un article par id
                        {
                                $id=intval($_GET["id"]);
                                getArticleById($id);
                        }
                        else if(!empty($_GET["Art_Titre"]))  //obtenir un article par Titre
                        {       
                                $titre=$_GET["Art_Titre"];
                                getArticlesByTitre($titre);
                        }
                        else if(!empty($_GET["Cat_Id"]))  //obtenir un article par cat??gorie
                        {       
                                $catId = intval($_GET["Cat_Id"]);
                                getArticlesByCategorie($catId);
                        }
                        else  //obtenir tous les articles
                        {
                                getArticlesAll();
                        }
                        break;

                case 'POST':
                        //Ajouter un article
                            addArticle();
                                break;

                case 'PUT':
                        // Modifier un  article
                        $id = intval($_GET["Art_Id"]);
                        updateArticle($id);
                        break;

                case 'DELETE':
                        // Supprimer un article
                        $id = intval($_GET["Art_Id"]);
                        deleteArticle($id);
                        break;

                default:
                        //Invalid Request Method
                        header("HTTP/1.0 405 Method Not Allowed");
                        break;

        }

?>