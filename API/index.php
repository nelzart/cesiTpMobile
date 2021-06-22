<?php

include("db_connect.php");
$request_method = $_SERVER['REQUEST_METHOD'];

function getArticlesAll(){

}

function getArticlesbyCategorie(){

}

function getArticlesbyTitre($titre){
    
}

function getArticleById($id){

}

function addArticle(){

}

function updateArticle($id){

}

function deleteArticle($id){

}

switch($request_method)
        {

                case 'GET':

                        if(!empty($_GET["id"]))  //obtenir un article par id
                        {
                                $id=intval($_GET["Art_Id"]);
                                getArticleById($id);
                        }
                        else if(!empty($_GET["Art_Titre"]))  //obtenir un article par Titre
                        {       
                                $titre=$_GET["Art_Titre"];
                                getArticlesByTitre($titre);
                        }
                        else if(!empty($_GET["Cat_Id"]))  //obtenir un article par catégorie
                        {       
                                $catId=$_GET["Cat_Id"];
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