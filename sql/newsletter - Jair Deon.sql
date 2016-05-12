# Host: localhost  (Version: 5.5.5-10.1.9-MariaDB)
# Date: 2016-05-12 09:03:55
# Generator: MySQL-Front 5.3  (Build 4.271)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "sakey_newsletter"
#

DROP TABLE IF EXISTS `sakey_newsletter`;
CREATE TABLE `sakey_newsletter` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  `data` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

#
# Data for table "sakey_newsletter"
#

INSERT INTO `sakey_newsletter` VALUES (1,'Jair Deon','deon@sakey.com.br','(35) 98893 - 0885','2016-05-12 09:03:27');
