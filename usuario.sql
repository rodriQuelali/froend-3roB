-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-10-2022 a las 05:16:20
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `registro`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `Id` int(15) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `paterno` varchar(30) NOT NULL,
  `materno` varchar(30) NOT NULL,
  `ci` varchar(15) NOT NULL,
  `fechaNaci` date NOT NULL,
  `contra` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`Id`, `nombre`, `paterno`, `materno`, `ci`, `fechaNaci`, `contra`) VALUES
(30, 'Genaro', 'Laura', 'Rios', '8376339', '2000-06-14', '$2y$10$ZGkzuegJJiJRkMmi0xaiPOflwlp541W4Alxn8ZvU.ePHKJeciQBOm'),
(31, 'Juan', 'Ramos', 'Marca', '65432', '2016-05-23', '$2y$10$Jc.r85kCmRlPYfoGnK2wFeSGMyqR2zqUT.F8lxYECw3jaFyLtOy7S'),
(32, 'maria', 'ma', 'Perez', '65432', '1998-06-10', '$2y$10$ICiLu.YxxDdD2A5TlneCquOUQIW3IMJfB698KBPrCs8UoEAUVzbcy'),
(33, 'angela', 'Rios', 'Cuba', '1000293', '1989-06-23', '$2y$10$Wc1E25cpep4O1GNJ1qe1ee7.HqukiY4tOh.kl3v7dNbvQhQEvx.06'),
(34, 'Alex', 'mamani', 'Santos', '98764', '2001-06-13', '$2y$10$SjnRdru1K23WGGDbiBCHKeLboyno7cuEnXXkTMCA2n1KMQ9nS5kCO'),
(36, 'Genaro', 'Laura', 'Jahuira', '8376337', '1997-11-18', 'admin'),
(38, 'gdsf', 'sdfg', 'sdf', '12', '2022-10-12', '$2y$10$d6MBoefmVjAHFPDO9cGTHOzYw/2MUIvarYsOG1pLszSnxOaHPmdMC');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `Id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
