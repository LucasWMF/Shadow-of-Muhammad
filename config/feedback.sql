-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24/09/2024 às 05:05
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `shadow`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `feedback`
--

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `rating` int(11) NOT NULL CHECK (`rating` >= 1 and `rating` <= 5),
  `comments` varchar(500) NOT NULL,
  `published_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `feedback`
--

INSERT INTO `feedback` (`id`, `name`, `email`, `rating`, `comments`, `published_date`) VALUES
(1, 'João', 'joao@example.com', 4, 'Ótimo site! Adorei as funcionalidades e o design.', '2024-09-24 01:20:11'),
(2, 'Maria', 'maria@example.com', 5, 'Excelente trabalho! Tudo funciona perfeitamente.', '2024-09-24 01:20:11'),
(3, 'Carlos', 'carlos@example.com', 3, 'Bom, mas pode melhorar em alguns aspectos.', '2024-09-24 01:20:11'),
(4, 'Ana', 'ana@example.com', 2, 'Não gostei muito. Espero que as próximas versões sejam melhores.', '2024-09-24 01:20:11'),
(5, 'Pedro', 'pedro@example.com', 5, 'Perfeito! Recomendo para todos.', '2024-09-24 01:20:11'),
(6, 'sada', 'dsa@gmail.com', 5, 'adsa', '2024-09-24 02:01:37'),
(7, 'Julio', 'juliobobo@gmail.com', 3, 'Scrr', '2024-09-24 02:08:20'),
(8, 'aaaaa', 'aaaa@gmial.com', 3, 'aaaaaaa', '2024-09-24 02:24:00'),
(9, 'aaaaa', 'aaaa@gmial.com', 3, 'aaaaaaa', '2024-09-24 02:24:00'),
(10, 'aaaaa', 'aaaa@gmial.com', 3, 'aaaaaaa', '2024-09-24 02:24:00'),
(11, 'lucas', 'lucas.melofogac@gmail.com', 3, 'teste', '2024-09-24 07:34:01'),
(12, 'lucas', 'lucas.melofogac@gmail.com', 3, 'teste', '2024-09-24 07:34:13'),
(13, 'lucas', 'lucas.melofogac@gmail.com', 3, 'teste', '2024-09-24 07:34:13'),
(14, 'lucas', 'lucas.melofogac@gmail.com', 3, 'teste', '2024-09-24 07:34:13');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
