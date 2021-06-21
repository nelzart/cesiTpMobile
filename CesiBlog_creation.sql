#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: images
#------------------------------------------------------------

CREATE TABLE images(
        Img_Id  Int  Auto_increment  NOT NULL ,
        Img_Nom Varchar (100) NOT NULL
	,CONSTRAINT images_PK PRIMARY KEY (Img_Id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: catagorieArticle
#------------------------------------------------------------

CREATE TABLE catagorieArticle(
        Cat_Id      Int  Auto_increment  NOT NULL ,
        Cat_Libelle Varchar (100) NOT NULL
	,CONSTRAINT catagorieArticle_PK PRIMARY KEY (Cat_Id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: article
#------------------------------------------------------------

CREATE TABLE article(
        Art_Id           Int  Auto_increment  NOT NULL ,
        Art_DateCreation TimeStamp NOT NULL ,
        Art_Maj          TimeStamp NOT NULL ,
        Art_Titre        Varchar (100) NOT NULL ,
        Art_Contenu      Varchar (63000) NOT NULL ,
        Art_SousTitre    Varchar (100) NOT NULL ,
        Art_Autheur      Varchar (50) NOT NULL ,
        Img_Id           Int ,
        Cat_Id           Int NOT NULL
	,CONSTRAINT article_PK PRIMARY KEY (Art_Id)

	,CONSTRAINT article_images_FK FOREIGN KEY (Img_Id) REFERENCES images(Img_Id)
	,CONSTRAINT article_catagorieArticle0_FK FOREIGN KEY (Cat_Id) REFERENCES catagorieArticle(Cat_Id)
)ENGINE=InnoDB;

