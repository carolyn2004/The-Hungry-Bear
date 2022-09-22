CREATE DATABASE  IF NOT EXISTS `restaurant_review` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `restaurant_review`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: restaurant_review
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `restaurant__id` int NOT NULL,
  `user_id` int NOT NULL,
  `restaurant` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `username` varchar(20) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `review` text COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `rating` int NOT NULL,
  `datePosted` varchar(65) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `fk_comments_restaurant_idx` (`restaurant__id`),
  KEY `fk_comments_user profile1_idx` (`user_id`),
  CONSTRAINT `fk_comments_restaurant` FOREIGN KEY (`restaurant__id`) REFERENCES `restaurant` (`restaurant__id`),
  CONSTRAINT `fk_comments_user profile1` FOREIGN KEY (`user_id`) REFERENCES `user_profile` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (38,1,2,'Hai Di Lao','jovan00','bla bla1',1,'Thu Feb 03 2022 17:47:49 GMT+0800 (Singapore Standard Time)'),(39,1,2,'Hai Di Lao','jovan00','food is bad!',1,'Thu Feb 03 2022 11:10:26 GMT+0800 (Singapore Standard Time)'),(43,3,86,'Genki Sushi','carolyn04','food is good!',4,'Fri Feb 04 2022 12:43:10 GMT+0800 (Singapore Standard Time)'),(44,3,86,'Genki Sushi','carolyn04','service can be improved :(',3,'Fri Feb 04 2022 12:43:25 GMT+0800 (Singapore Standard Time)'),(45,1,86,'Hai Di Lao','carolyn04','staff are super friendly! Definitely would recommend :)',4,'Fri Feb 04 2022 14:08:46 GMT+0800 (Singapore Standard Time)');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-04 14:57:22
