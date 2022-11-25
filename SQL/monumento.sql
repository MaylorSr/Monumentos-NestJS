-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-11-2022 a las 09:17:11
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `monumento`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `monumento`
--

CREATE TABLE `monumento` (
  `id` int(11) NOT NULL,
  `code` varchar(20) NOT NULL,
  `pais` varchar(200) NOT NULL,
  `ciudad` varchar(500) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `descripcion` text NOT NULL,
  `urlImg` text NOT NULL,
  `lat` int(11) NOT NULL,
  `log` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `monumento`
--

INSERT INTO `monumento` (`id`, `code`, `pais`, `ciudad`, `nombre`, `descripcion`, `urlImg`, `lat`, `log`) VALUES
(1, 'ES', 'España', 'Madrid', 'Palacio Real de Madrid', 'El Palacio Real de Madrid, popularmente conocido también como Palacio de Oriente.', 'https://lh5.googleusercontent.com/p/AF1QipPp7gG6UeQm7kyfY5d_KCZbDZnKjsFGMTpUH8YQ=w243-h174-n-k-no-nu', 20, 40),
(2, 'FR', 'Francia', 'Paris', 'Torre Eiffel', 'La Torre Eiffel​, inicialmente llamada Tour de 300 mètres es una estructura de hierro pudelado diseñada inicialmente por los ingenieros civiles Maurice Koechlin y Émile Nouguier.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17QTRQY_qm9G50HLLHTdyj_10UZu2no6LPr4ewFrl_w&s', 50, 40),
(3, 'AL', 'Alemania', '', 'La casa Alemana', 'La casa Real de España', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.revistavanityfair.es%2Frealeza%2Farticulos%2Fcasa-de-felipe-letizia-por-dentro-zarzuela-habitaciones-como-es-decoracion%2F43907&psig=AOvVaw2NTbHn0E5hc1n25UVHEtxs&ust=1669427729289000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKjO8oedyPsCFQAAAAAdAAAAABAD', 15, 40);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `monumento`
--
ALTER TABLE `monumento`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
