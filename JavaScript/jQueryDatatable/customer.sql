-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2021 at 02:03 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `northwind`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `company_name` varchar(40) COLLATE utf8_bin NOT NULL,
  `name` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `title` varchar(30) COLLATE utf8_bin DEFAULT NULL,
  `address` varchar(60) COLLATE utf8_bin DEFAULT NULL,
  `city` varchar(15) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `company_name`, `name`, `title`, `address`, `city`) VALUES
(1, 'Customer NRZBB', 'Allen, Michael', 'Sales Representative', 'Obere Str. 0123', 'Berlin'),
(2, 'Customer MLTDN', 'Hassall, Mark', 'Owner', 'Avda. de la Constitución 5678', 'México D.F.'),
(3, 'Customer KBUDE', 'Peoples, John', 'Owner', 'Mataderos  7890', 'México D.F.'),
(4, 'Customer HFBZG', 'Arndt, Torsten', 'Sales Representative', '7890 Hanover Sq.', 'London'),
(5, 'Customer HGVLZ', 'Higginbotham, Tom', 'Order Administrator', 'Berguvsvägen  5678', 'Luleå'),
(6, 'Customer XHXJV', 'Poland, Carole', 'Sales Representative', 'Forsterstr. 7890', 'Mannheim'),
(7, 'Customer QXVLA', 'Bansal, Dushyant', 'Marketing Manager', '2345, place Kléber', 'Strasbourg'),
(8, 'Customer QUHWH', 'Ilyina, Julia', 'Owner', 'C/ Araquil, 0123', 'Madrid'),
(9, 'Customer RTXGC', 'Raghav, Amritansh', 'Owner', '6789, rue des Bouchers', 'Marseille'),
(10, 'Customer EEALV', 'Bassols, Pilar Colome', 'Accounting Manager', '8901 Tsawassen Blvd.', 'Tsawassen'),
(11, 'Customer UBHAU', 'Jaffe, David', 'Sales Representative', 'Fauntleroy Circus 4567', 'London'),
(12, 'Customer PSNMQ', 'Ray, Mike', 'Sales Agent', 'Cerrito 3456', 'Buenos Aires'),
(13, 'Customer VMLOG', 'Benito, Almudena', 'Marketing Manager', 'Sierras de Granada 7890', 'México D.F.'),
(14, 'Customer WNMAF', 'Jelitto, Jacek', 'Owner', 'Hauptstr. 0123', 'Bern'),
(15, 'Customer JUWXK', 'Richardson, Shawn', 'Sales Associate', 'Av. dos Lusíadas, 6789', 'Sao Paulo'),
(16, 'Customer GYBBY', 'Birkby, Dana', 'Sales Representative', 'Berkeley Gardens 0123 Brewery', 'London'),
(17, 'Customer FEVNN', 'Jones, TiAnna', 'Order Administrator', 'Walserweg 4567', 'Aachen'),
(18, 'Customer BSVAR', 'Rizaldy, Arif', 'Owner', '3456, rue des Cinquante Otages', 'Nantes'),
(19, 'Customer RFNQC', 'Boseman, Randall', 'Sales Agent', '5678 King George', 'London'),
(20, 'Customer THHDP', 'Kane, John', 'Sales Manager', 'Kirchgasse 9012', 'Graz'),
(21, 'Customer KIdPX', 'Russo, Giuseppe', 'Marketing Assistant', 'Rua Orós, 3456', 'Sao Paulo'),
(22, 'Customer DTDMN', 'Bueno, Janaina Burdan, Neville', 'Accounting Manager', 'C/ Moralzarzal, 5678', 'Madrid'),
(23, 'Customer WVFAF', 'Khanna, Karan', 'Assistant Sales Agent', '4567, chaussée de Tournai', 'Lille'),
(24, 'Customer CYZTN', 'San Juan, Patricia', 'Owner', 'Åkergatan 5678', 'Bräcke'),
(25, 'Customer AZJED', 'Carlson, Jason', 'Marketing Manager', 'Berliner Platz 9012', 'München'),
(26, 'Customer USDBG', 'Koch, Paul', 'Marketing Manager', '9012, rue Royale', 'Nantes'),
(27, 'Customer WMFEA', 'Schmöllerl, Martin', 'Sales Representative', 'Via Monte Bianco 4567', 'Torino'),
(28, 'Customer XYUFB', 'Cavaglieri, Giorgio', 'Sales Manager', 'Jardim das rosas n. 8901', 'Lisboa'),
(29, 'Customer MDLWA', 'Kolesnikova, Katerina', 'Marketing Manager', 'Rambla de Cataluña, 8901', 'Barcelona'),
(30, 'Customer KSLQF', 'Shabalin, Rostislav', 'Sales Manager', 'C/ Romero, 1234', 'Sevilla'),
(31, 'Customer YJCBX', 'Cheng, Yao-Qiang', 'Sales Associate', 'Av. Brasil, 5678', 'Campinas'),
(32, 'Customer YSIQX', 'Krishnan, Venky', 'Marketing Manager', '6789 Baker Blvd.', 'Eugene'),
(33, 'Customer FVXPQ', 'Sigurdarson, Hallur ', 'Owner', '5ª Ave. Los Palos Grandes 3456', 'Caracas'),
(34, 'Customer IBVRG', 'Cohen, Shy', 'Accounting Manager', 'Rua do Paço, 7890', 'Rio de Janeiro'),
(35, 'Customer UMTLM', 'Langohr, Kris', 'Sales Representative', 'Carrera 1234 con Ave. Carlos Soublette #8-35', 'San Cristóbal'),
(36, 'Customer LVJSO', 'Smith, Denise', 'Sales Representative', 'City Center Plaza 2345 Main St.', 'Elgin'),
(37, 'Customer FRXZL', 'Crăciun, Ovidiu V.', 'Sales Associate', '9012 Johnstown Road', 'Cork'),
(38, 'Customer LJUCA', 'Lee, Frank', 'Marketing Manager', 'Garden House Crowther Way 3456', 'Cowes'),
(39, 'Customer GLLAG', 'Song, Lolan', 'Sales Associate', 'Maubelstr. 8901', 'Brandenburg'),
(40, 'Customer EFFTC', 'De Oliveira, Jose', 'Sales Representative', '2345, avenue de l\'Europe', 'Versailles'),
(41, 'Customer XIIWM', 'Litton, Tim', 'Sales Manager', '3456 rue Alsace-Lorraine', 'Toulouse'),
(42, 'Customer IAIJK', 'Steiner, Dominik', 'Marketing Assistant', '2345 Oak St.', 'Vancouver'),
(43, 'Customer UISOJ', 'Deshpande, Anu', 'Marketing Manager', '8901 Orchestra Terrace', 'Walla Walla'),
(44, 'Customer OXFRU', 'Louverdis, George', 'Sales Representative', 'Magazinweg 8901', 'Frankfurt a.M.'),
(45, 'Customer QXPPT', 'Sunkammurali,  Krishna', 'Owner', '1234 Polk St. Suite 5', 'San Francisco'),
(46, 'Customer XPNIK', 'Dressler, Marlies', 'Accounting Manager', 'Carrera 7890 con Ave. Bolívar #65-98 Llano Largo', 'Barquisimeto'),
(47, 'Customer PSQUZ', 'Lupu, Cornel', 'Owner', 'Ave. 5 de Mayo Porlamar 5678', 'I. de Margarita'),
(48, 'Customer DVFMB', 'Szymczak, Radosław', 'Sales Manager', '9012 Chiaroscuro Rd.', 'Portland'),
(49, 'Customer CQRAA', 'Duerr, Bernard', 'Marketing Manager', 'Via Ludovico il Moro 6789', 'Bergamo'),
(50, 'Customer JYPSC', 'Mace, Donald', 'Sales Agent', 'Rue Joseph-Bens 0123', 'Bruxelles'),
(51, 'Customer PVDZC', 'Taylor, Maurice', 'Marketing Assistant', '8901 rue St. Laurent', 'Montréal'),
(52, 'Customer PZNLA', 'Dupont-Roc, Patrice', 'Marketing Assistant', 'Heerstr. 4567', 'Leipzig'),
(53, 'Customer GCJSG', 'Mallit, Ken', 'Sales Associate', 'South House 1234 Queensbridge', 'London'),
(54, 'Customer TDKEG', 'Tiano, Mike', 'Sales Agent', 'Ing. Gustavo Moncada 0123 Piso 20-A', 'Buenos Aires'),
(55, 'Customer KZQZT', 'Egelund-Muller, Anja', 'Sales Representative', '7890 Bering St.', 'Anchorage'),
(56, 'Customer QNIVZ', 'Marinova, Nadejda', 'Owner', 'Mehrheimerstr. 9012', 'Köln'),
(57, 'Customer WVAXS', 'Tollevsen, Bjørn', 'Owner', '5678, boulevard Charonne', 'Paris'),
(58, 'Customer AHXHT', 'Fakhouri, Fadi', 'Sales Representative', 'Calle Dr. Jorge Cash 8901', 'México D.F.'),
(59, 'Customer LOLJO', 'Meston, Tosh', 'Sales Manager', 'Geislweg 2345', 'Salzburg'),
(60, 'Customer QZURI', 'Uppal, Sunil', 'Sales Representative', 'Estrada da saúde n. 6789', 'Lisboa'),
(61, 'Customer WULWD', 'Florczyk, Krzysztof', 'Accounting Manager', 'Rua da Panificadora, 1234', 'Rio de Janeiro'),
(62, 'Customer WFIZJ', 'Misiec, Anna', 'Marketing Assistant', 'Alameda dos Canàrios, 1234', 'Sao Paulo'),
(63, 'Customer IRRVL', 'Veronesi, Giorgio', 'Accounting Manager', 'Taucherstraße 1234', 'Cunewalde'),
(64, 'Customer LWGMD', 'Gaffney, Lawrie', 'Sales Representative', 'Av. del Libertador 3456', 'Buenos Aires'),
(65, 'Customer NYUHS', 'Moore, Michael', 'Assistant Sales Representative', '6789 Milton Dr.', 'Albuquerque'),
(66, 'Customer LHANT', 'Voss, Florian', 'Sales Associate', 'Strada Provinciale 7890', 'Reggio Emilia'),
(67, 'Customer QVEPD', 'Garden, Euan', 'Assistant Sales Agent', 'Av. Copacabana, 6789', 'Rio de Janeiro'),
(68, 'Customer CCKOT', 'Myrcha, Jacek', 'Sales Manager', 'Grenzacherweg 0123', 'Genève'),
(69, 'Customer SIUIH', 'Watters, Jason M.', 'Accounting Manager', 'Gran Vía, 4567', 'Madrid'),
(70, 'Customer TMXGN', 'Ginters, Kaspars', 'Owner', 'Erling Skakkes gate 2345', 'Stavern'),
(71, 'Customer LCOUJ', 'Navarro, Tomás', 'Sales Representative', '9012 Suffolk Ln.', 'Boise'),
(72, 'Customer AHPOP', 'Welcker, Brian', 'Sales Manager', '4567 Wadhurst Rd.', 'London'),
(73, 'Customer JMIKW', 'Gonzalez, Nuria', 'Owner', 'Vinbæltet 3456', 'Kobenhavn'),
(74, 'Customer YSHXL', 'O’Brien, Dave', 'Marketing Manager', '9012, rue Lauriston', 'Paris'),
(75, 'Customer XOJYP', 'Wojciechowska, Agnieszka', 'Sales Manager', 'P.O. Box 1234', 'Lander'),
(76, 'Customer SFOGW', 'Gulbis, Katrin', 'Accounting Manager', 'Boulevard Tirou, 2345', 'Charleroi'),
(77, 'Customer LCYBZ', 'Osorio, Cristian', 'Marketing Manager', '2345 Jefferson Way Suite 2', 'Portland'),
(78, 'Customer NLTYP', 'Young, Robin', 'Marketing Assistant', '0123 Grizzly Peak Rd.', 'Butte'),
(79, 'Customer FAPSM', 'Wickham, Jim', 'Marketing Manager', 'Luisenstr. 0123', 'Münster'),
(80, 'Customer VONTK', 'Geschwandtner, Jens', 'Owner', 'Avda. Azteca 4567', 'México D.F.'),
(81, 'Customer YQQWW', 'Nagel, Jean-Philippe', 'Sales Representative', 'Av. Inês de Castro, 1234', 'Sao Paulo'),
(82, 'Customer EYHKM', 'Veninga, Tjeerd', 'Sales Associate', '1234 DaVinci Blvd.', 'Kirkland'),
(83, 'Customer ZRNDE', 'Fonteneau, Karl', 'Sales Manager', 'Smagsloget 3456', 'Århus'),
(84, 'Customer NRCSK', 'Tuntisangaroon, Sittichai', 'Sales Agent', '6789, rue du Commerce', 'Lyon'),
(85, 'Customer ENQZT', 'McLin, Nkenge', 'Accounting Manager', '5678 rue de l\'Abbaye', 'Reims'),
(86, 'Customer SNXOJ', 'Syamala, Manoj', 'Sales Representative', 'Adenauerallee 7890', 'Stuttgart'),
(87, 'Customer ZHYOS', 'Ludwig, Michael', 'Accounting Manager', 'Torikatu 9012', 'Oulu'),
(88, 'Customer SRQVM', 'Li, Yan', 'Sales Manager', 'Rua do Mercado, 4567', 'Resende'),
(89, 'Customer YBQTI', 'Smith Jr., Ronaldo', 'Owner', '8901 - 14th Ave. S. Suite 3B', 'Seattle'),
(90, 'Customer XBBVR', 'Larsson, Katarina', 'Owner/Marketing Assistant', 'Keskuskatu 2345', 'Helsinki'),
(91, 'Customer CCFIZ', 'Conn, Steve', 'Owner', 'ul. Filtrowa 6789', 'Warszawa');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
