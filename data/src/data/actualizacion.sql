# CREATE DATABASE  IF NOT EXISTS `travelspain`;
USE `travelspain`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: travelspain
-- ------------------------------------------------------
-- Server version	8.0.31


DROP TABLE IF EXISTS `espana`;

 CREATE TABLE `espana` (
  `ID_PROVINCIAS` int NOT NULL,
  `PROVINCIAS` varchar(160) 
) ;


UNLOCK TABLES;

INSERT INTO `espana` VALUES (01,"Almería");
INSERT INTO `espana` VALUES (02,"Cádiz");
INSERT INTO `espana` VALUES (03,"Córdoba");
INSERT INTO `espana` VALUES (04,"Granada");
INSERT INTO `espana` VALUES (05,"Huelva");
INSERT INTO `espana` VALUES (06,"Jaén");
INSERT INTO `espana` VALUES (07,"Málaga");
INSERT INTO `espana` VALUES (08,"Sevilla");
INSERT INTO `espana` VALUES (09,"Huesca");
INSERT INTO `espana` VALUES (10,"Teruel");
INSERT INTO `espana` VALUES (11,"Zaragoza");
INSERT INTO `espana` VALUES (12,"Asturias");
INSERT INTO `espana` VALUES (13,"Baleares");
INSERT INTO `espana` VALUES (14,"Las Palmas");
INSERT INTO `espana` VALUES (15,"Santa Cruz de Tenerife");
INSERT INTO `espana` VALUES (16,"Cantabria");
INSERT INTO `espana` VALUES (17,"Ávila");
INSERT INTO `espana` VALUES (18,"Burgos");
INSERT INTO `espana` VALUES (19,"León");
INSERT INTO `espana` VALUES (20,"Palencia");
INSERT INTO `espana` VALUES (21,"Salamanca");
INSERT INTO `espana` VALUES (22,"Segovia");
INSERT INTO `espana` VALUES (23,"Soria");
INSERT INTO `espana` VALUES (24,"Valladolid");
INSERT INTO `espana` VALUES (25,"Zamora");
INSERT INTO `espana` VALUES (26,"Albacete");
INSERT INTO `espana` VALUES (27,"Ciudad Real");
INSERT INTO `espana` VALUES (28,"Cuenca");
INSERT INTO `espana` VALUES (29,"Guadalajara");
INSERT INTO `espana` VALUES (30,"Toledo");
INSERT INTO `espana` VALUES (31,"Barcelona");
INSERT INTO `espana` VALUES (32,"Gerona");
INSERT INTO `espana` VALUES (33,"Lérida");
INSERT INTO `espana` VALUES (34,"Tarragona");
INSERT INTO `espana` VALUES (35,"Alicante");
INSERT INTO `espana` VALUES (36,"Castellón");
INSERT INTO `espana` VALUES (37,"Valencia");
INSERT INTO `espana` VALUES (38,"Badajoz");
INSERT INTO `espana` VALUES (39,"Cáceres");
INSERT INTO `espana` VALUES (40,"La Coruña");
INSERT INTO `espana` VALUES (41,"Lugo");
INSERT INTO `espana` VALUES (42,"Orense");
INSERT INTO `espana` VALUES (43, "Pontevedra");
INSERT INTO `espana` VALUES (44,"La Rioja");
INSERT INTO `espana` VALUES (45,"Madrid");
INSERT INTO `espana` VALUES (46,"Murcia");
INSERT INTO `espana` VALUES (47,"Navarra");
INSERT INTO `espana` VALUES (48,"Álava");
INSERT INTO `espana` VALUES (49,"Guipúzcoa");
INSERT INTO `espana` VALUES (50,"Vizcaya");
INSERT INTO `espana` VALUES (51,"Ceuta");
INSERT INTO `espana` VALUES (52,"Melilla");


DROP TABLE IF EXISTS `input`;

CREATE TABLE `input` (
  `PROVINCIAS` varchar(160) NOT NULL,
  `ENTORNO` varchar(160) NOT NULL,
  `ACTIVIDADES` varchar(160)  NOT NULL
) ;


DROP TABLE IF EXISTS `output`;

CREATE TABLE `output` (
  `UBICACION` varchar(160),
  `NOMBRE` varchar(160)
) ;


LOCK TABLES `output` WRITE;

UNLOCK TABLES;



DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `ID_USUARIO` int NOT NULL,
  `EMAIL` varchar(160),
  `PASS` varchar(160),
  `NOMBRE_USUARIO` varchar(160),
  `CIUDAD_ORIGEN` varchar(160),
  `ID_PROVINCIAS` varchar(160)
) ;


LOCK TABLES `user` WRITE;


UNLOCK TABLES;


