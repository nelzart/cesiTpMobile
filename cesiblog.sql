-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 24 juin 2021 à 09:00
-- Version du serveur :  8.0.21
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `cesiblog`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `Art_Id` int NOT NULL AUTO_INCREMENT,
  `Art_DateCreation` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Art_Maj` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Art_Titre` varchar(100) NOT NULL,
  `Art_Contenu` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Art_SousTitre` varchar(100) NOT NULL,
  `Art_Autheur` varchar(50) NOT NULL,
  `Img_Id` int DEFAULT NULL,
  `Cat_Id` int NOT NULL,
  PRIMARY KEY (`Art_Id`),
  KEY `article_images_FK` (`Img_Id`),
  KEY `article_catagorieArticle0_FK` (`Cat_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`Art_Id`, `Art_DateCreation`, `Art_Maj`, `Art_Titre`, `Art_Contenu`, `Art_SousTitre`, `Art_Autheur`, `Img_Id`, `Cat_Id`) VALUES
(3, '2021-06-22 11:46:15', '2021-06-22 11:46:15', 'Blagounetttttte', 'blabla  blibli', 'toto', 'Fred', NULL, 2),
(4, '2021-06-22 13:44:53', '0000-00-00 00:00:00', 'Blagounette', 'c\'est l\'histoire d\'un mec...', 'ttttt', 'Fred', NULL, 1),
(5, '2021-06-22 13:45:10', '2021-06-22 13:45:10', 'toto', 'blabla', 'blague', 'Fred', NULL, 2),
(6, '2021-06-22 13:45:21', '2021-06-22 13:45:21', 'toto bli', 'blabla', 'blague', 'Fred', NULL, 2),
(7, '2021-06-22 14:37:09', '2021-06-22 14:37:09', 'toto bli', 'blabla', 'blague à part c\'est Dorian le comique', 'Fred', NULL, 2),
(8, '2021-06-22 14:40:40', '2021-06-22 14:40:40', 'blague à part c\'est Dorian le comique', 'blabla', 'yes', 'Fred', NULL, 2),
(9, '2021-06-22 14:55:32', '2021-06-22 16:59:53', 'Blagounette', 'c\'est l\'histoire d\'un mec...', 'ttttttttt', 'Fred', NULL, 1),
(10, '2021-06-22 15:35:59', '0000-00-00 00:00:00', 'blague à part c\'est Dorian le comique', 'blabla', 'yes', 'Fred', NULL, 2),
(11, '2021-06-22 15:36:55', '2021-06-22 15:36:55', 'blague à part c\'est Dorian le comique', 'blabla', 'yes', 'Fred', NULL, 2),
(12, '2021-06-22 15:55:53', '2021-06-22 15:55:53', 'blague à part c\'est Dorian le comique', 'blabla', 'yes', 'Fred', NULL, 2),
(13, '2021-06-22 16:58:44', '2021-06-22 17:22:39', 'Blagos', 'c\'est l\'histoire d\'une meuf...', 'ttttttttt', 'Fred', NULL, 1),
(15, '2021-06-23 18:58:07', '2021-06-23 18:58:07', 'blague à part c\'est Dorian le comique', 'blabla', 'yes', 'Fred', NULL, 2);

-- --------------------------------------------------------

--
-- Structure de la table `catagoriearticle`
--

DROP TABLE IF EXISTS `catagoriearticle`;
CREATE TABLE IF NOT EXISTS `catagoriearticle` (
  `Cat_Id` int NOT NULL AUTO_INCREMENT,
  `Cat_Libelle` varchar(100) NOT NULL,
  PRIMARY KEY (`Cat_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `catagoriearticle`
--

INSERT INTO `catagoriearticle` (`Cat_Id`, `Cat_Libelle`) VALUES
(1, 'Blagues'),
(2, 'informatique'),
(3, 'Technologie'),
(4, 'Animaux');

-- --------------------------------------------------------

--
-- Structure de la table `images`
--

DROP TABLE IF EXISTS `images`;
CREATE TABLE IF NOT EXISTS `images` (
  `Img_Id` int NOT NULL AUTO_INCREMENT,
  `Img_Nom` varchar(100) NOT NULL,
  PRIMARY KEY (`Img_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `article_catagorieArticle0_FK` FOREIGN KEY (`Cat_Id`) REFERENCES `catagoriearticle` (`Cat_Id`),
  ADD CONSTRAINT `article_images_FK` FOREIGN KEY (`Img_Id`) REFERENCES `images` (`Img_Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
