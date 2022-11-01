CREATE DATABASE  IF NOT EXISTS `turma_23`;
USE `turma_23`;

DROP TABLE IF EXISTS `alunos`;

CREATE TABLE `alunos` (
  `id_turma` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(20) NOT NULL,
  `sobrenome` varchar(20) NOT NULL,
  `idade` int(11) NOT NULL,
  PRIMARY KEY (`id_turma`),
  UNIQUE KEY `id_turma` (`id_turma`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
