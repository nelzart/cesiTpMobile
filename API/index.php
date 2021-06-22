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