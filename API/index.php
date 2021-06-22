<?php

include("db_connect.php");
$request_method = $_SERVER['REQUEST_METHOD'];

function getArticlesAll(){

}

function getArticlesbyCategory(){

}

function getArticlesbyTitle(){
    
}

function getArticles3Lasts($id){

}

function addArticle(){
    global $conn;
                $content = file_get_contents("php://input");
                $decoded = json_decode($content, true);

                //$relDate = date("Y-m-d H:i:s");  // date gérée par mysql

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
                        'status_message' =>'Connexion établie et requête envoyée.'
                        );
                        mysqli_stmt_execute($query);
                }
                else
                {
                        $response1=array(
                        'status' => 0,
                        'status_message' =>'Erreur connexion et donc la requête non envoyée.'
                        );
                };
                header('Content-Type: application/json');
                echo json_encode($response1);
}

function updateArticle($id){

}

function deleteArticle($id){


}

switch($request_method)
        {

                case 'GET':

                        if(!empty($_GET["id"]))  //obtenir un capteur par id
                        {
                                $id=intval($_GET["id"]);
                                getCapteurById($id);
                        }
                        else  //obtenir tous les capteurs
                        {
                                getCapteurAll();
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