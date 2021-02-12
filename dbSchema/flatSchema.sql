CREATE DATABASE  IF NOT EXISTS `kumar_vista` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `kumar_vista`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: kumar_vista
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `flatdetails`
--

DROP TABLE IF EXISTS `flatdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flatdetails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `projectId` int NOT NULL,
  `flatNumber` varchar(45) NOT NULL,
  `buyerName` varchar(45) NOT NULL,
  `dateOfBooking` varchar(45) NOT NULL,
  `basicCost` int NOT NULL,
  `gst` int NOT NULL,
  `registrationCost` int NOT NULL,
  `maintenanceCost` int NOT NULL,
  `otherCost` int NOT NULL,
  `totalCost` int NOT NULL,
  `remarks` varchar(45) NOT NULL,
  `updatedBy` varchar(45) DEFAULT NULL,
  `createdBy` varchar(45) DEFAULT NULL,
  `updatedDate` varchar(45) DEFAULT NULL,
  `createdDate` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flatdetails`
--

LOCK TABLES `flatdetails` WRITE;
/*!40000 ALTER TABLE `flatdetails` DISABLE KEYS */;
INSERT INTO `flatdetails` VALUES (1,1,'202','xyz','2021-01-21',123,123,123,1344,4134,5847,'aa','saurabh','saurabh','2021-01-14 13:33:25.087','2021-01-14 13:33:25.087');
/*!40000 ALTER TABLE `flatdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymentdetails`
--

DROP TABLE IF EXISTS `paymentdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paymentdetails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `projectId` int NOT NULL,
  `flatId` varchar(45) DEFAULT NULL,
  `buyerName` varchar(45) DEFAULT NULL,
  `paymentMode` varchar(45) DEFAULT NULL,
  `checkReceivedDate` varchar(45) DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `checkNumber` varchar(45) DEFAULT NULL,
  `checkDate` varchar(45) DEFAULT NULL,
  `bankName` varchar(45) DEFAULT NULL,
  `depositedBankName` varchar(45) DEFAULT NULL,
  `paymentStatus` varchar(45) DEFAULT NULL,
  `updatedBy` varchar(45) DEFAULT NULL,
  `createdBy` varchar(45) DEFAULT NULL,
  `updatedDate` varchar(45) DEFAULT NULL,
  `createdDate` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymentdetails`
--

LOCK TABLES `paymentdetails` WRITE;
/*!40000 ALTER TABLE `paymentdetails` DISABLE KEYS */;
INSERT INTO `paymentdetails` VALUES (1,1,'1','ssss','cash','2021-01-06',111,NULL,NULL,NULL,NULL,NULL,'saurabh','saurabh','2021-01-14 13:33:25.087','2021-01-14 13:33:25.087'),(2,1,'1','dww','cash','2021-01-07',11111,NULL,NULL,NULL,NULL,NULL,'saurabh','saurabh','2021-01-14 13:33:25.087','2021-01-14 13:33:25.087');
/*!40000 ALTER TABLE `paymentdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projectlist`
--

DROP TABLE IF EXISTS `projectlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projectlist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `projectName` varchar(45) NOT NULL,
  `startDate` varchar(45) NOT NULL,
  `completionDate` varchar(45) NOT NULL,
  `updatedBy` varchar(45) DEFAULT NULL,
  `createdBy` varchar(45) DEFAULT NULL,
  `createdDate` varchar(45) DEFAULT NULL,
  `updatedDate` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projectlist`
--

LOCK TABLES `projectlist` WRITE;
/*!40000 ALTER TABLE `projectlist` DISABLE KEYS */;
INSERT INTO `projectlist` VALUES (1,'Kumar Vista','2020-12-15','2021-02-03','saurabh','saurabh','2021-01-14 13:33:25.087','2021-01-14 13:33:25.087');
/*!40000 ALTER TABLE `projectlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-15  1:00:03
