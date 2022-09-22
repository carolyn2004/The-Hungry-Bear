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
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `restaurant__id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `cuisine` varchar(20) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `about` text COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `map` text COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `region` varchar(10) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `restaurant_address` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `contact` varchar(11) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `operating_hours` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  PRIMARY KEY (`restaurant__id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (1,'Hai Di Lao','haidilao_hotpot.jpg','Chinese','Haidilao International Holding Ltd., doing business as Haidilao, is a chain of hot pot restaurants founded in Jianyang, Sichuan, China in 1994. Its restaurants typically operate under the name Haidilao Hot Pot. It is the largest hotpot chain in China which is widespread through spicy broths and special services.','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7069448228362!2d103.94166801457267!3d1.352388799013658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d749c18183b%3A0x41e5b49b45a6e10f!2z5rW35bqV5o2eIEhhaWRpbGFvIEhvdCBQb3QgQFRhbXBpbmVzIENlbnR1cnkgU3F1YXJl!5e0!3m2!1sen!2ssg!4v1642828466163!5m2!1sen!2ssg','East',' 2 Tampines Central 5, #02-22 Century Square, Singapore 529509','8222 8222','9AM-6PM'),(2,'Prata Wala','eatigo_PrataWalaNorthpoint_20180813172643_6191.jpg','Indian','Prata Wala is part of First Gourmet Pte Ltd which owns 5 restaurant brands.','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.577101893382!2d103.83380711457276!3d1.429211298957685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da146f82d02be5%3A0xab04f2a6de800da8!2sPrata%20Wala%20Northpoint!5e0!3m2!1sen!2ssg!4v1642828393898!5m2!1sen!2ssg','North','930 Yishun Ave 2, Northpoint City North Wing, #B1-57, 769098','6481 1297','9AM-6PM'),(3,'Genki Sushi','GenkiSushiFeature-1024x536.jpg','Japanese','Genki Sushi is a chain of conveyor belt sushi restaurants established in 1990 in Japan. The chain expanded to include locations in Japan, Hong Kong, Indonesia, Singapore, Kuwait, the Philippines, China, Australia, Cambodia, Myanmar and the United States, including, California, Hawaii and Washington.','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.814392616171!2d103.84288031457255!3d1.2853499990625135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190b4c506d41%3A0xaa5ed553ff0b514d!2sGenki%20Sushi%20Chinatown%20Point!5e0!3m2!1sen!2ssg!4v1642828533620!5m2!1sen!2ssg','South','133 New Bridge Road B1, 14 Chinatown Point, 059413','6957 2732','9AM-10PM'),(4,'Pizza Hut','Pizza-Hut-Singapore-Cheesy-7-1.jpg','Western','Pizza Hut is an American multinational restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. They serve their signature pan pizza and other dishes including pasta, breadsticks and desserts. ','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.817470333053!2d103.93969982381013!3d1.3539560341999815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d126179183f%3A0x735f98fa731ae7dc!2sPizza%20Hut%20Express%20-%20Tampines%20Hub!5e0!3m2!1sen!2ssg!4v1642828614228!5m2!1sen!2ssg','East','1 Tampines Walk, #01-13/14 Our Tampines Hub, Singapore 528523','6702 2918','9AM-10PM'),(5,'Din Tai Fung','kyoto_shop22_img01.jpg','Chinese','Din Tai Fung is a Taiwanese restaurant chain that specializes in Chinese Huaiyang cuisine. Outside Taiwan, Din Tai Fung also has branches in Australia, China, Hong Kong, Indonesia, Japan, Macau, Malaysia, Philippines, Singapore, South Korea, Thailand, United Arab Emirates, United Kingdom, and the United States.','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7100050428317!2d103.84640141457263!3d1.3505254990150168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1716f2ef47f9%3A0xcb39ecda42ff0adc!2z6byO5rOw6LGQIERpbiBUYWkgRnVuZywgSnVuY3Rpb24gOA!5e0!3m2!1sen!2ssg!4v1642828735357!5m2!1sen!2ssg','West','9 Bishan Pl, #01-41, Singapore 579837','6356 5228','9AM-10PM'),(6,'CRAVE','promo1.jpg','Malay','CRAVE Nasi Lemak was founded in 2015 when one of the founders of Kiosks Collective ,who was a loyal customer of the Adam Road Nasi Lemak by Selera Rasa reached out to Dr Abdul Malik Hassan, owner of the award-winning stall.','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5768811314865!2d103.83419501457271!3d1.4293383989575787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da15fefc5fc8b1%3A0xec6a9355a364a17e!2sCrave%20Nasi%20Lemak%20%40%20North%20point!5e0!3m2!1sen!2ssg!4v1642828803057!5m2!1sen!2ssg','North','930 Yishun Ave 2, #B1-34 North point, Singapore 769098','9189 9747','9AM-10PM'),(7,'Ichikokudo Ramen','ramen.jpg','Japanese','ICHIKOKUDO is committed to sharing the authentic flavors and culture of Hokkaido with our valued customers. Hokkaido is surrounded by the sea with abundant seafood. The vast pastures, fresh air and clean water allows quality grains and vegetables to be grown.','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127639.30889928793!2d103.63513990085715!3d1.3392686977316126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da112adf29a0ad%3A0x3cdaa16f8716629!2sIchikokudo%20Hokkaido%20Ramen!5e0!3m2!1sen!2ssg!4v1642828879644!5m2!1sen!2ssg','West','17 Petir Rd, #01-01/02, Singapore 678278','9679 9222','11AM-10PM'),(8,'Pasta Mania','western.jpeg','Western','Pastamania is a fast casual restaurant chain in Singapore, Kuwait, Malaysia, India, Sri Lanka, Bangladesh and the Middle East. It offers mainly pasta and also sells pizza.','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7542257593177!2d103.9195067145725!3d1.3233076990348436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da22ac58eab003%3A0xfd65cfc762914a0c!2sPastaMania!5e0!3m2!1sen!2ssg!4v1642829294460!5m2!1sen!2ssg','South','750 Chai Chee Rd, #01-12 ESR BizPark@Chai Chee, Singapore 469000','6443 6076','11AM-10PM'),(9,'Ayam Penyet President','malay.jpeg','Malay','Established In 2009. Ayam Penyet President Was Founded In 2009, Starting With The First Outlet At Lucky Plaza, Orchard Road. Since Then, The Chain Has Expanded To Serangoon, Tampines, And Kallang Area. As An Indonesian, Ayam Penyet President’s Owner Is Quite Familiar With Indonesian Recipes.','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5770886933797!2d103.83391331457273!3d1.4292188989576637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da146f818230eb%3A0x3f08f74d65860828!2sAyam%20Penyet%20President%20-%20Northpoint%20Yishun!5e0!3m2!1sen!2ssg!4v1642829344488!5m2!1sen!2ssg','North','930 Yishun Ave 2, #B1, 54 Northpoint, 769098','6257 3981','11AM-9PM'),(10,'Tiga Roti','western2.jpeg','Western','Tiga Roti offers Halal gourmet burgers and innovative side created by London-based Chef Adam Penney with his secret recipes. Indulge in our signature selection, featuring top quality prime grass-fed beef and lamb from Australian, Argentina and New Zealand slathered with our in-house made sauces, pickles and garnishes, topped with freshly daily baked artisan buns','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5524682015775!2d103.81369591457273!3d1.4433246989473807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da136c330fbc5b%3A0xf56c97db1899a57e!2sTiga%20Roti!5e0!3m2!1sen!2ssg!4v1642829427704!5m2!1sen!2ssg','North','28 Gambas Cres, No. 2 Nordcom II, Kitchen, Singapore 757012','8814 3227','10AM-12AM');
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
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
