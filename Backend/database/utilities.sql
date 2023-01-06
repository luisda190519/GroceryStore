-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-01-2023 a las 21:13:54
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `grocerystoredb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `TOTAL` float NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `productID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `price` float NOT NULL,
  `image_url` varchar(500) NOT NULL,
  `vendor` int(11) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `created_at`, `price`, `image_url`, `vendor`, `category`) VALUES
(1, 'Hot Dog', 'Hot dog made with butter bean bread, german sausage, and imported italian ketchup', '2018-02-26 21:16:17', 45.8, 'https://cnnespanol.cnn.com/wp-content/uploads/2021/08/CNN-hotdog.jpeg?quality=100&strip=info', 1, 'Fast food'),
(2, 'Pizza', 'La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal que tradicionalmente se cubre con salsa de tomate y mozzarella y se hornea a alta temperatura en un horno de leña', '2018-02-26 21:16:17', 22.15, 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg', 1, 'Fast food'),
(4, 'Brisket', 'La pechuga es un corte de carne de la pechuga o la parte inferior del pecho de res o ternera. La pechuga de res es uno de los nueve cortes primarios de res, aunque la definición del corte difiere internacionalmente. Los músculos del pecho incluyen los pectorales superficiales y profundos', '2018-02-26 21:16:17', 45.25, 'https://www.pedernalesbbq.com/wp-content/uploads/2022/04/Diseno-sin-titulo.png', 1, 'Meat'),
(5, 'Helado', 'En su forma más simple, el helado o crema helada es un alimento congelado que por lo general se hace de productos lácteos tales como leche o crema. El helado es un sistema en el que coexisten diversos subsistemas en total armonía ​. Generalmente se endulza con azúcar, edulcorantes o miel.', '2018-02-26 21:16:17', 1.25, 'https://recetastips.com/wp-content/uploads/2020/05/helado-de-chocolate-6-1.jpg', 1, 'Frozen'),
(6, 'Baguette', 'La baguette o baguete​ es una variedad de pan originaria de Francia que se caracteriza por una forma alargada. Es uno de los formatos de pan más conocidos, producidos y consumidos a nivel internacional. Contiene harina de trigo, agua, levadura y sal.', '2018-02-26 21:16:17', 3.78, 'https://poramoralhorno.com/wp-content/uploads/2020/11/20200727_134403-1600x778.jpg', 1, 'Bread'),
(7, 'Spaghetti', 'El espagueti es un tipo de pasta italiana elaborada con harina de grano duro y agua. Tiene forma de delgada cuerda larga, sección circular y un tamaño aproximado entre 25 y 30 centímetros. Se trata de uno de los ingredientes más representativos de la gastronomía italiana, cuya popularidad trasciende a otros países.', '2018-02-26 21:16:17', 2.47, 'https://www.olivetomato.com/wp-content/uploads/2022/06/Greek-Spaghetti-with-Ground-Beef-Sauce-recipe-%E2%80%93-Makaronia-me-Kima-2.jpeg', 1, 'Pasta'),
(8, 'Mojarra', 'Las mojarras son una familia de peces incluida en el orden Perciformes. Se distribuyen por la mayoría de los mares tropicales, en estuarios ocasionalmente, y son raras las especies de agua dulce.', '2018-02-26 21:16:17', 3.11, 'https://www.comedera.com/wp-content/uploads/2022/03/Mojarra-frita-shutterstock_1398626060.jpg', 1, 'Fish');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('0G8N3VAurLILKWR9fcbrfoRjswxJArc3', 1673108661, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"id\":18,\"username\":\"lol\",\"password\":\"$2b$10$Q1Pc289hpP3ZJfAPZGos7.y2/NhPZjUUt/EENiw7pW12kj8gD2NpC\"}}}'),
('6BgW7-xZlPrCcwW_O40mRxh0ehxnz7JX', 1673108599, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"id\":18,\"username\":\"lol\",\"password\":\"$2b$10$Q1Pc289hpP3ZJfAPZGos7.y2/NhPZjUUt/EENiw7pW12kj8gD2NpC\"}}}'),
('ECnVitpObdkdyB8l2SNwKlhdPgpMx11s', 1673108635, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"id\":18,\"username\":\"lol\",\"password\":\"$2b$10$Q1Pc289hpP3ZJfAPZGos7.y2/NhPZjUUt/EENiw7pW12kj8gD2NpC\"}}}'),
('F0pFfnttpxmCHGoSZCfEpiSGPho_EMgN', 1673108508, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":[{\"id\":18,\"username\":\"lol\",\"password\":\"$2b$10$Q1Pc289hpP3ZJfAPZGos7.y2/NhPZjUUt/EENiw7pW12kj8gD2NpC\"}]}}'),
('FrtAl8GjfOh4EohuMxA9HhVJ1FBlkRVm', 1673106994, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"}}'),
('GmmVDSri2MmYoXjaOvxG4-yax3ttsSwf', 1673107120, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"}}'),
('LrnuzL1hkzyZZ8hMQKl1hK5ulSgH60jF', 1673108633, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"id\":18,\"username\":\"lol\",\"password\":\"$2b$10$Q1Pc289hpP3ZJfAPZGos7.y2/NhPZjUUt/EENiw7pW12kj8gD2NpC\"}}}'),
('M0ycSbX1lVrUeY2MTP7HhAxqF16cUAAw', 1673106609, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"}}'),
('N_bRvnf5ESy07WTdOPHcmRcoMy-L0R10', 1673108634, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"id\":18,\"username\":\"lol\",\"password\":\"$2b$10$Q1Pc289hpP3ZJfAPZGos7.y2/NhPZjUUt/EENiw7pW12kj8gD2NpC\"}}}'),
('NfOyjXDhYa_egUeozBWwsKxhSYecvYly', 1673106523, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"}}'),
('TiqGUtYfDM-2jIBXggYeZNRGgLdRXIJL', 1673106761, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"}}'),
('TxekLtZvK9JEXEySf6hYTkCU5PCVf6P-', 1673107287, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"}}'),
('WGB1AVRjRMoU5Jgyz6FLLSItGW9jX8XE', 1673108574, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":[{\"id\":18,\"username\":\"lol\",\"password\":\"$2b$10$Q1Pc289hpP3ZJfAPZGos7.y2/NhPZjUUt/EENiw7pW12kj8gD2NpC\"}]}}'),
('a-fgVGjkw8DxYKpxzdnIfTLzw9Abt2iL', 1673106944, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"}}'),
('fEFBy1yuxMWU0D__okPmAK6TZpeklSjp', 1673108606, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"id\":18,\"username\":\"lol\",\"password\":\"$2b$10$Q1Pc289hpP3ZJfAPZGos7.y2/NhPZjUUt/EENiw7pW12kj8gD2NpC\"}}}'),
('hNed8hpdBvlJLmDHJReERjKBD2AUW_eM', 1673108184, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":[{\"id\":8,\"username\":\"x\",\"password\":\"$2b$10$iFxtmFLc9ieUL.kQOHz8VObyXoGSnQorMWBU0YXlIF7aPV/vHsEGW\"},{\"id\":17,\"username\":\"x\",\"password\":\"$2b$10$bOZ1UyxExP/rbKwB0IaGp.Gvwv5A3n8hNW0dgZ1k2pxZIjVDqM9ha\"}]}}'),
('i1MBi8B0DM83eFEy55-ax9WlacquX24d', 1673106907, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"}}'),
('ib4JQFeedi6z3YWPw_7vL6LUVQ87PP1_', 1673108513, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":[{\"id\":18,\"username\":\"lol\",\"password\":\"$2b$10$Q1Pc289hpP3ZJfAPZGos7.y2/NhPZjUUt/EENiw7pW12kj8gD2NpC\"}]}}'),
('lmOgaIzeZ-UDWscl_smXyzuZB5nL7rKo', 1673108614, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"id\":18,\"username\":\"lol\",\"password\":\"$2b$10$Q1Pc289hpP3ZJfAPZGos7.y2/NhPZjUUt/EENiw7pW12kj8gD2NpC\"}}}'),
('n44DNPK1Kc_Wj1Wyy4si7_c0QYxofyw4', 1673108227, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"id\":18,\"username\":\"lol\",\"password\":\"$2b$10$Q1Pc289hpP3ZJfAPZGos7.y2/NhPZjUUt/EENiw7pW12kj8gD2NpC\"}}}'),
('n7BK4JdPJ-d0zZQT27LlKwOafXP171Ra', 1673107212, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"}}'),
('nd03X0zVpmOYQZwtcpm05u389gMqOUAa', 1673108077, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":[{\"id\":8,\"username\":\"x\",\"password\":\"$2b$10$iFxtmFLc9ieUL.kQOHz8VObyXoGSnQorMWBU0YXlIF7aPV/vHsEGW\"},{\"id\":17,\"username\":\"x\",\"password\":\"$2b$10$bOZ1UyxExP/rbKwB0IaGp.Gvwv5A3n8hNW0dgZ1k2pxZIjVDqM9ha\"}]}}'),
('qD3R4GofukO8le29qCxagAdG4ollVwxE', 1673107027, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"}}'),
('rduZeS4amYyR4gMN3ZlXH-mIDCVZz4XC', 1673108564, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":[{\"id\":18,\"username\":\"lol\",\"password\":\"$2b$10$Q1Pc289hpP3ZJfAPZGos7.y2/NhPZjUUt/EENiw7pW12kj8gD2NpC\"}]}}'),
('rgiffyItz8HwrC0MTwqVhEwpYGmT_LZ-', 1673106917, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"}}'),
('ryWvks86aSRcqTtHhjrbj_n03CDiyFIC', 1673108637, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"id\":18,\"username\":\"lol\",\"password\":\"$2b$10$Q1Pc289hpP3ZJfAPZGos7.y2/NhPZjUUt/EENiw7pW12kj8gD2NpC\"}}}'),
('teH48zhs_sEbR0I7hjxyqyFXFPGMJ6fi', 1673108178, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":[{\"id\":8,\"username\":\"x\",\"password\":\"$2b$10$iFxtmFLc9ieUL.kQOHz8VObyXoGSnQorMWBU0YXlIF7aPV/vHsEGW\"},{\"id\":17,\"username\":\"x\",\"password\":\"$2b$10$bOZ1UyxExP/rbKwB0IaGp.Gvwv5A3n8hNW0dgZ1k2pxZIjVDqM9ha\"}]}}'),
('vuHb0vtJotkrYw9xmTUuvJmzApvxsq96', 1673108653, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"id\":18,\"username\":\"lol\",\"password\":\"$2b$10$Q1Pc289hpP3ZJfAPZGos7.y2/NhPZjUUt/EENiw7pW12kj8gD2NpC\"}}}'),
('xKktFYqNnBeCvRs5lLVX5i_auyf9Ku2_', 1673107179, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"}}'),
('x_XnKit-fsp75DYEGI108pYcWqWOaMaJ', 1673107081, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"}}'),
('yOYMr3qN_V63MSVDPuj0yqSjBosJAQLe', 1673108204, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":true,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":[{\"id\":8,\"username\":\"x\",\"password\":\"$2b$10$iFxtmFLc9ieUL.kQOHz8VObyXoGSnQorMWBU0YXlIF7aPV/vHsEGW\"},{\"id\":17,\"username\":\"x\",\"password\":\"$2b$10$bOZ1UyxExP/rbKwB0IaGp.Gvwv5A3n8hNW0dgZ1k2pxZIjVDqM9ha\"}]}}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(16) NOT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'luisda', 'zzz123');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user` (`userID`),
  ADD KEY `fk_product` (`productID`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_vendor` (`vendor`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `fk_product` FOREIGN KEY (`productID`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`userID`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_vendor` FOREIGN KEY (`vendor`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
