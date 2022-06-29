-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               10.4.19-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for test
CREATE DATABASE IF NOT EXISTS `test` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `test`;

-- Dumping structure for table test.banner
CREATE TABLE IF NOT EXISTS `banner` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `img` varchar(900) NOT NULL,
  `orden` int(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Dumping data for table test.banner: ~0 rows (approximately)
/*!40000 ALTER TABLE `banner` DISABLE KEYS */;
INSERT INTO `banner` (`id`, `img`, `orden`) VALUES
	(1, 'https://app.nld.gob.mx/assets/noticias/escudoArmas.png', 2);
/*!40000 ALTER TABLE `banner` ENABLE KEYS */;

-- Dumping structure for table test.directorio
CREATE TABLE IF NOT EXISTS `directorio` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `numero` varchar(50) NOT NULL,
  `logo` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table test.directorio: ~3 rows (approximately)
/*!40000 ALTER TABLE `directorio` DISABLE KEYS */;
INSERT INTO `directorio` (`id`, `titulo`, `descripcion`, `numero`, `logo`) VALUES
	(1, 'Gobierno', 'Nuevo Laredo', '8677113500', 'https://app.nld.gob.mx/assets/img/logo.png'),
	(2, 'Inmujer', 'Nuevo Laredo', '8677135281', 'https://app.nld.gob.mx/assets/img/inmujer.png'),
	(3, 'DIF', 'Nuevo Laredo', '8677121032', 'https://app.nld.gob.mx/assets/img/dif.png');
/*!40000 ALTER TABLE `directorio` ENABLE KEYS */;

-- Dumping structure for table test.document
CREATE TABLE IF NOT EXISTS `document` (
  `document_id` int(11) NOT NULL AUTO_INCREMENT,
  `propertie1` varchar(50) DEFAULT NULL,
  `propertie2` varchar(50) DEFAULT NULL,
  `propertie3` varchar(50) DEFAULT NULL,
  `propertie4` varchar(50) DEFAULT NULL,
  `propertie5` varchar(50) DEFAULT NULL,
  `propertie6` varchar(50) DEFAULT NULL,
  `propertie7` varchar(50) DEFAULT NULL,
  `propertie8` varchar(50) DEFAULT NULL,
  `propertie9` varchar(50) DEFAULT NULL,
  `propertie10` varchar(50) DEFAULT NULL,
  `propertie11` varchar(50) DEFAULT NULL,
  `propertie12` varchar(50) DEFAULT NULL,
  `propertie13` varchar(50) DEFAULT NULL,
  `propertie14` varchar(50) DEFAULT NULL,
  `propertie15` varchar(50) DEFAULT NULL,
  `propertie16` varchar(50) DEFAULT NULL,
  `propertie17` varchar(50) DEFAULT NULL,
  `propertie18` varchar(50) DEFAULT NULL,
  `propertie19` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`document_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

-- Dumping data for table test.document: ~4 rows (approximately)
/*!40000 ALTER TABLE `document` DISABLE KEYS */;
INSERT INTO `document` (`document_id`, `propertie1`, `propertie2`, `propertie3`, `propertie4`, `propertie5`, `propertie6`, `propertie7`, `propertie8`, `propertie9`, `propertie10`, `propertie11`, `propertie12`, `propertie13`, `propertie14`, `propertie15`, `propertie16`, `propertie17`, `propertie18`, `propertie19`) VALUES
	(17, 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'mm', 'test', 'test', 'test', 'test', 'test', 'test', 'test'),
	(18, 'prueba', 'prueba', 'prueba', 'prueba', 'prueba', 'prueba', 'prueba', 'prueba', 'prueba', 'prueba', 'prueba', 'ss', 'prueba', 'prueba', 'prueba', 'prueba', 'prueba', 'prueba', 'prueba'),
	(19, 'dsfsdf', 'sdfsdf', 'sdfsdf', 'sdfsdf', 'sdfsdf', 'sdf', 'sdfsdf', 'sdfsdf', 'sdfsdf', 'sdfsdfs', 'sdfsdfsdf', 'mm', 'sdf', 'sdf', 'sdf', 'sdf', 'sdf', 'sdf', 'sdf'),
	(20, 'LOREM upds', 'kkkkkk', 'kkkkkk', 'kkkkkk', 'kkkkkk', 'kkkkkk', 'kkkkkk', 'kkkkkk', 'kkkkkk', 'kkkkkk', 'kkkkkk', 'ss', 'kkkkkk', 'kkkkkk', 'kkkkkk', 'kkkkkk', 'kkkkkk', 'kkkkkk', 'kkkkkk');
/*!40000 ALTER TABLE `document` ENABLE KEYS */;

-- Dumping structure for table test.e
CREATE TABLE IF NOT EXISTS `e` (
  `id_e` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_e`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table test.e: ~2 rows (approximately)
/*!40000 ALTER TABLE `e` DISABLE KEYS */;
INSERT INTO `e` (`id_e`, `name`) VALUES
	(1, 'E1'),
	(2, 'E2'),
	(3, 'E3');
/*!40000 ALTER TABLE `e` ENABLE KEYS */;

-- Dumping structure for table test.f
CREATE TABLE IF NOT EXISTS `f` (
  `id_f` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_f`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table test.f: ~2 rows (approximately)
/*!40000 ALTER TABLE `f` DISABLE KEYS */;
INSERT INTO `f` (`id_f`, `name`) VALUES
	(1, 'item 1'),
	(2, 'item 2'),
	(3, 'item 3');
/*!40000 ALTER TABLE `f` ENABLE KEYS */;

-- Dumping structure for table test.flayers
CREATE TABLE IF NOT EXISTS `flayers` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `idmodulo` varchar(10) NOT NULL,
  `idsubmodulo` varchar(10) NOT NULL,
  `img` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;

-- Dumping data for table test.flayers: ~4 rows (approximately)
/*!40000 ALTER TABLE `flayers` DISABLE KEYS */;
INSERT INTO `flayers` (`id`, `idmodulo`, `idsubmodulo`, `img`) VALUES
	(1, '3', '1', 'https://app.nld.gob.mx/assets/noticias/platicas.jpg'),
	(2, '1', '0', 'https://app.nld.gob.mx/assets/noticias/psicologica.jpg'),
	(34, '3', '4', 'https://app.nld.gob.mx/assets/noticias/yellow_dot.png'),
	(35, '1', '2', 'https://app.nld.gob.mx/assets/noticias/da9b13b377af5b704c14d2928037fd64.jpeg');
/*!40000 ALTER TABLE `flayers` ENABLE KEYS */;

-- Dumping structure for table test.i
CREATE TABLE IF NOT EXISTS `i` (
  `id_i` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_i`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table test.i: ~0 rows (approximately)
/*!40000 ALTER TABLE `i` DISABLE KEYS */;
INSERT INTO `i` (`id_i`, `identifier`) VALUES
	(1, 'abc');
/*!40000 ALTER TABLE `i` ENABLE KEYS */;

-- Dumping structure for table test.markers
CREATE TABLE IF NOT EXISTS `markers` (
  `marker_id` int(11) NOT NULL AUTO_INCREMENT,
  `canvas_id` int(11) NOT NULL DEFAULT 0,
  `trck_id` int(11) NOT NULL DEFAULT 0,
  `x` double DEFAULT NULL,
  `y` double DEFAULT 15000000,
  PRIMARY KEY (`marker_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=335 DEFAULT CHARSET=latin1;

-- Dumping data for table test.markers: ~7 rows (approximately)
/*!40000 ALTER TABLE `markers` DISABLE KEYS */;
INSERT INTO `markers` (`marker_id`, `canvas_id`, `trck_id`, `x`, `y`) VALUES
	(327, 1, 53, 108.5, 121),
	(328, 2, 53, 150000, 150000),
	(329, 3, 53, 316.5, 326),
	(330, 4, 53, 171.5, 351),
	(331, 5, 53, 322.5, 385),
	(332, 6, 53, 178.5, 423),
	(333, 7, 53, 152.5, 237),
	(334, 8, 53, 197.5, 278);
/*!40000 ALTER TABLE `markers` ENABLE KEYS */;

-- Dumping structure for table test.mas
CREATE TABLE IF NOT EXISTS `mas` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `img` varchar(900) NOT NULL,
  `orden` int(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Dumping data for table test.mas: ~3 rows (approximately)
/*!40000 ALTER TABLE `mas` DISABLE KEYS */;
INSERT INTO `mas` (`id`, `img`, `orden`) VALUES
	(1, 'https://nld.gob.mx/assets/img/bannerPrincipal2.jpg', 1),
	(2, 'https://nld.gob.mx/assets/img/bannerPrincipal3.jpg', 2),
	(5, 'https://app.nld.gob.mx/assets/img/ciberseguridad.jpg', 3);
/*!40000 ALTER TABLE `mas` ENABLE KEYS */;

-- Dumping structure for table test.modulos
CREATE TABLE IF NOT EXISTS `modulos` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `numero` varchar(50) NOT NULL,
  `logo` varchar(1000) NOT NULL,
  `submodolo` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table test.modulos: ~3 rows (approximately)
/*!40000 ALTER TABLE `modulos` DISABLE KEYS */;
INSERT INTO `modulos` (`id`, `titulo`, `descripcion`, `numero`, `logo`, `submodolo`) VALUES
	(1, 'Ayuda Psicologica', 'Ayuda Psicologica', '8677121032', 'https://app.nld.gob.mx/assets/img/psico.png', 0),
	(2, 'Asesoria Legal', 'Asesoria Legal', '8677135281', 'https://app.nld.gob.mx/assets/img/legal.png', 1),
	(3, 'Capacitacion', 'Apoyo Alimenticio', '9565310463', 'https://app.nld.gob.mx/assets/img/capacitacion.jpg\r\n', 1);
/*!40000 ALTER TABLE `modulos` ENABLE KEYS */;

-- Dumping structure for table test.multiple
CREATE TABLE IF NOT EXISTS `multiple` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Dumping data for table test.multiple: ~4 rows (approximately)
/*!40000 ALTER TABLE `multiple` DISABLE KEYS */;
INSERT INTO `multiple` (`id`, `name`, `status`) VALUES
	(1, 'Item 1', 1),
	(2, 'Item 2', 0),
	(3, 'Item 3', 0),
	(4, 'Item 4', 0),
	(5, 'Item 5', 0);
/*!40000 ALTER TABLE `multiple` ENABLE KEYS */;

-- Dumping structure for table test.noticias
CREATE TABLE IF NOT EXISTS `noticias` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8_unicode_ci NOT NULL,
  `tipo` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `fecha` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `archivo` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `fecha2` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `destacada` int(1) NOT NULL,
  `visible` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=295 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table test.noticias: ~2 rows (approximately)
/*!40000 ALTER TABLE `noticias` DISABLE KEYS */;
INSERT INTO `noticias` (`id`, `titulo`, `descripcion`, `tipo`, `fecha`, `archivo`, `fecha2`, `destacada`, `visible`) VALUES
	(288, 'AVISO IMPORTANTE', 'Cumpliendo con la normatividad de la ley de revocacion de mandato se informa que esta pagina modificara sus contenidos temporalmente.\r\n', 'inmujer', '04-02-2022 10:59:32', 'https://app.nld.gob.mx/assets/noticias/escudoArmas.png', '04 de Febrero del 2022', 0, 0),
	(289, 'Centro de Rehabilitación Integral', 'Acompañada de la alcaldesa de #NuevoLaredo Carmen Lilia Canturosas, la presidenta del Sistema DIF Claudette Canturosas de Salinas, acudió al Centro de Rehabilitación Integral donde este día se les aplicará la Toxina Botulínica a pacientes de este centro diagnósticados con parálisis cerebral. ', 'dif', '28-01-2022 10:59:32', 'https://app.nld.gob.mx/assets/noticias/272053493_4704515722965203_4778838729352611757_n.jpg', '28 de Enero del 2022', 0, 0),
	(294, 'asdasd', 'asdasdas', '1', '07-04-2022 10:11:53', 'https://app.nld.gob.mx/assets/noticias/google-maps-api-icon-10.jpg', 'asdasd', 0, 1);
/*!40000 ALTER TABLE `noticias` ENABLE KEYS */;

-- Dumping structure for table test.numeros
CREATE TABLE IF NOT EXISTS `numeros` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `numero` varchar(30) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Dumping data for table test.numeros: ~2 rows (approximately)
/*!40000 ALTER TABLE `numeros` DISABLE KEYS */;
INSERT INTO `numeros` (`id`, `nombre`, `numero`, `fecha`) VALUES
	(1, 'emergencia', '911', '2022-05-26 11:40:31'),
	(2, 'whatsapp', '', '2022-05-26 11:40:31'),
	(5, 'asd', 'asd', '2022-05-25 11:40:53');
/*!40000 ALTER TABLE `numeros` ENABLE KEYS */;

-- Dumping structure for table test.p
CREATE TABLE IF NOT EXISTS `p` (
  `id_p` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `id_e` int(11) DEFAULT NULL,
  `id_i` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_p`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table test.p: ~2 rows (approximately)
/*!40000 ALTER TABLE `p` DISABLE KEYS */;
INSERT INTO `p` (`id_p`, `name`, `id_e`, `id_i`) VALUES
	(1, 'P1', 1, 1),
	(2, 'P1', 2, 1);
/*!40000 ALTER TABLE `p` ENABLE KEYS */;

-- Dumping structure for table test.reporte
CREATE TABLE IF NOT EXISTS `reporte` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `tiporeporte` varchar(50) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `reporte` varchar(900) NOT NULL,
  `fecha` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

-- Dumping data for table test.reporte: ~21 rows (approximately)
/*!40000 ALTER TABLE `reporte` DISABLE KEYS */;
INSERT INTO `reporte` (`id`, `tiporeporte`, `nombre`, `telefono`, `correo`, `reporte`, `fecha`) VALUES
	(3, '', 'jesus Pimentel', '8972255054', 'jesuskori@gmail.com', 'pruebas', '01-02-2022 10:44:39'),
	(4, '', 'jesus Pimentel', '8972255054', 'jesuskori@gmail.com', 'pruebas', '01-02-2022 10:44:39'),
	(5, '', 'text', '1234', '', 'text\n', '14-02-2022 12:59:49'),
	(6, '', '', '', '', '', '14-02-2022 12:59:52'),
	(7, '', '', '', '', '', '14-02-2022 12:59:55'),
	(8, '4', '', '', '', 'text\n', '14-02-2022 13:02:11'),
	(9, '4', '', '', '', '', '14-02-2022 13:02:13'),
	(10, '4', '', '', '', '', '14-02-2022 13:02:14'),
	(11, '4', '', '', '', '', '14-02-2022 13:04:03'),
	(12, '', '', '', 'text', 'text\n', '15-02-2022 15:31:30'),
	(13, '', '', '', '', '', '15-02-2022 15:31:33'),
	(14, '', '', '', '', '', '15-02-2022 15:31:37'),
	(15, '', '', '', '', '', '15-02-2022 15:31:39'),
	(16, '4', '', '', 'text', '', '16-02-2022 08:54:30'),
	(17, '4', '', '', '', '', '16-02-2022 08:54:32'),
	(18, '4', '', '', '', '', '16-02-2022 08:54:35'),
	(19, '', 'text', '', 'text', 'text\n', '22-02-2022 05:21:09'),
	(20, '4', '', '', '', '', '24-03-2022 00:53:52'),
	(21, '4', '', '', '', '', '24-03-2022 00:53:55'),
	(22, '4', '', '', '', '', '24-03-2022 00:53:57'),
	(23, '', 'text', '', 'text', '', '24-03-2022 00:54:26');
/*!40000 ALTER TABLE `reporte` ENABLE KEYS */;

-- Dumping structure for table test.submodulos
CREATE TABLE IF NOT EXISTS `submodulos` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `idmodulo` int(10) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

-- Dumping data for table test.submodulos: ~15 rows (approximately)
/*!40000 ALTER TABLE `submodulos` DISABLE KEYS */;
INSERT INTO `submodulos` (`id`, `idmodulo`, `titulo`, `descripcion`) VALUES
	(1, 3, 'Platicas Prematrimoniales', ''),
	(2, 3, 'Otras Platicas', ''),
	(3, 3, 'Talleres', ''),
	(4, 3, 'Programas Especiales', ''),
	(5, 2, 'Patria Potestad', ''),
	(6, 2, 'Pension Alimenticia', ''),
	(7, 2, 'Bienes Patrimoniales', ''),
	(8, 2, 'Custodia Legal', ''),
	(9, 2, 'Reglas de Convivencia', ''),
	(10, 2, 'Divorcio', ''),
	(11, 2, 'Derechos', ''),
	(12, 2, 'Agresiones y Lesiones', ''),
	(13, 2, 'Acoso', ''),
	(14, 2, 'Reconocimientos de Hijos e Hijas', ''),
	(15, 2, 'Sustraccion de Menores', '');
/*!40000 ALTER TABLE `submodulos` ENABLE KEYS */;

-- Dumping structure for table test.trcks
CREATE TABLE IF NOT EXISTS `trcks` (
  `trck_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`trck_id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=latin1;

-- Dumping data for table test.trcks: ~6 rows (approximately)
/*!40000 ALTER TABLE `trcks` DISABLE KEYS */;
INSERT INTO `trcks` (`trck_id`) VALUES
	(53);
/*!40000 ALTER TABLE `trcks` ENABLE KEYS */;

-- Dumping structure for table test.users
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `type` int(11) DEFAULT 0,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table test.users: ~0 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`user_id`, `user_name`, `password`, `type`) VALUES
	(1, 'admin', 'contrasena', 1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for table test.video
CREATE TABLE IF NOT EXISTS `video` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `url` varchar(900) NOT NULL,
  `habilitanoticias` varchar(2) NOT NULL,
  `habilitadif` varchar(2) NOT NULL,
  `habilitainmujer` varchar(2) NOT NULL,
  `habilitavideo` varchar(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table test.video: ~0 rows (approximately)
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` (`id`, `url`, `habilitanoticias`, `habilitadif`, `habilitainmujer`, `habilitavideo`) VALUES
	(1, 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FDIFNLD%2Fvideos%2F294923782527102%2F&show_text=false&width=560&t=0https://www.facebook.com/plugins/video.php?height=295&href=https%3A%2F%2Fwww.facebook.com%2FInmujernl%2Fvideos%2F1225703347833422%2F&show_text=false&width=560&t=0', '0', '0', '1', '0');
/*!40000 ALTER TABLE `video` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
