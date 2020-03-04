-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 04, 2020 at 05:30 AM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `acumen`
--

-- --------------------------------------------------------

--
-- Table structure for table `facultymap`
--

CREATE TABLE `facultymap` (
  `fmpid` int(11) NOT NULL,
  `sub` varchar(25) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `sem` int(11) DEFAULT NULL,
  `section` varchar(1) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `facultymap`
--

INSERT INTO `facultymap` (`fmpid`, `sub`, `batch`, `year`, `sem`, `section`, `uid`) VALUES
(1, 'DSA', 2017, 2, 1, 'A', 1),
(2, 'DLD', 2017, 2, 1, 'A', 2),
(3, 'DMS', 2017, 2, 1, 'A', 1),
(4, 'OOPW', 2017, 2, 1, 'A', 1),
(5, 'PSQT', 2017, 2, 1, 'A', 2),
(6, 'DSLA', 2017, 2, 1, 'A', 2),
(7, 'DELA', 2017, 2, 1, 'A', 2),
(8, 'JAVA', 2017, 2, 1, 'A', 1);

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE `results` (
  `id` int(11) NOT NULL,
  `batch` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `sem` int(11) NOT NULL,
  `data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `results`
--

INSERT INTO `results` (`id`, `batch`, `year`, `sem`, `data`) VALUES
(1, 2017, 2, 1, '{"subjects": ["DSA", "DLD", "DMS", "OOPW", "PSQT", "DSLA", "DELA", "JAVA"], "secdata": [{"section": "A", "total": 69, "subjects": [{"name": "DSA", "grades": {"O": 5, "A+": 23, "A": 17, "B+": 14, "B": 5, "C": 3, "P": 0, "F": 2}, "subcnt": 69, "failcnt": 2, "passcnt": 67, "passper": 97.1}, {"name": "DLD", "grades": {"O": 0, "A+": 2, "A": 12, "B+": 16, "B": 5, "C": 13, "P": 12, "F": 9}, "subcnt": 69, "failcnt": 9, "passcnt": 60, "passper": 86.96}, {"name": "DMS", "grades": {"O": 10, "A+": 16, "A": 19, "B+": 18, "B": 3, "C": 3, "P": 0, "F": 0}, "subcnt": 69, "failcnt": 0, "passcnt": 69, "passper": 100.0}, {"name": "OOPW", "grades": {"O": 1, "A+": 13, "A": 13, "B+": 16, "B": 7, "C": 4, "P": 11, "F": 4}, "subcnt": 69, "failcnt": 4, "passcnt": 65, "passper": 94.2}, {"name": "PSQT", "grades": {"O": 11, "A+": 10, "A": 10, "B+": 13, "B": 10, "C": 5, "P": 4, "F": 6}, "subcnt": 69, "failcnt": 6, "passcnt": 63, "passper": 91.3}, {"name": "DSLA", "grades": {"O": 15, "A+": 24, "A": 22, "B+": 8, "B": 0, "C": 0, "P": 0, "F": 0}, "subcnt": 69, "failcnt": 0, "passcnt": 69, "passper": 100.0}, {"name": "DELA", "grades": {"O": 10, "A+": 30, "A": 17, "B+": 8, "B": 4, "C": 0, "P": 0, "F": 0}, "subcnt": 69, "failcnt": 0, "passcnt": 69, "passper": 100.0}, {"name": "JAVA", "grades": {"O": 14, "A+": 15, "A": 14, "B+": 9, "B": 5, "C": 5, "P": 0, "F": 7}, "subcnt": 69, "failcnt": 7, "passcnt": 62, "passper": 89.86}], "semfail": 16, "passcnt": 53, "passper": 76.81, "overallfail": 19}, {"section": "B", "total": 68, "subjects": [{"name": "DSA", "grades": {"O": 2, "A+": 17, "A": 17, "B+": 7, "B": 8, "C": 2, "P": 10, "F": 5}, "subcnt": 68, "failcnt": 5, "passcnt": 63, "passper": 92.65}, {"name": "DLD", "grades": {"O": 0, "A+": 11, "A": 13, "B+": 14, "B": 8, "C": 7, "P": 5, "F": 10}, "subcnt": 68, "failcnt": 10, "passcnt": 58, "passper": 85.29}, {"name": "DMS", "grades": {"O": 11, "A+": 18, "A": 12, "B+": 5, "B": 6, "C": 5, "P": 7, "F": 4}, "subcnt": 68, "failcnt": 4, "passcnt": 64, "passper": 94.12}, {"name": "OOPW", "grades": {"O": 0, "A+": 13, "A": 21, "B+": 10, "B": 3, "C": 5, "P": 10, "F": 6}, "subcnt": 68, "failcnt": 6, "passcnt": 62, "passper": 91.18}, {"name": "PSQT", "grades": {"O": 13, "A+": 18, "A": 4, "B+": 10, "B": 5, "C": 4, "P": 3, "F": 11}, "subcnt": 68, "failcnt": 11, "passcnt": 57, "passper": 83.82}, {"name": "DSLA", "grades": {"O": 7, "A+": 23, "A": 12, "B+": 18, "B": 1, "C": 2, "P": 0, "F": 5}, "subcnt": 68, "failcnt": 5, "passcnt": 63, "passper": 92.65}, {"name": "DELA", "grades": {"O": 5, "A+": 28, "A": 20, "B+": 14, "B": 1, "C": 0, "P": 0, "F": 0}, "subcnt": 68, "failcnt": 0, "passcnt": 68, "passper": 100.0}, {"name": "JAVA", "grades": {"O": 10, "A+": 14, "A": 13, "B+": 21, "B": 4, "C": 1, "P": 0, "F": 5}, "subcnt": 68, "failcnt": 5, "passcnt": 63, "passper": 92.65}], "semfail": 16, "passcnt": 52, "passper": 76.47, "overallfail": 16}, {"section": "C", "total": 64, "subjects": [{"name": "DSA", "grades": {"O": 6, "A+": 25, "A": 14, "B+": 9, "B": 2, "C": 3, "P": 4, "F": 1}, "subcnt": 64, "failcnt": 1, "passcnt": 63, "passper": 98.44}, {"name": "DLD", "grades": {"O": 2, "A+": 12, "A": 15, "B+": 17, "B": 1, "C": 5, "P": 8, "F": 4}, "subcnt": 64, "failcnt": 4, "passcnt": 60, "passper": 93.75}, {"name": "DMS", "grades": {"O": 16, "A+": 21, "A": 13, "B+": 7, "B": 4, "C": 1, "P": 0, "F": 2}, "subcnt": 64, "failcnt": 2, "passcnt": 62, "passper": 96.88}, {"name": "OOPW", "grades": {"O": 0, "A+": 16, "A": 21, "B+": 13, "B": 2, "C": 4, "P": 5, "F": 3}, "subcnt": 64, "failcnt": 3, "passcnt": 61, "passper": 95.31}, {"name": "PSQT", "grades": {"O": 5, "A+": 18, "A": 19, "B+": 10, "B": 2, "C": 3, "P": 2, "F": 5}, "subcnt": 64, "failcnt": 5, "passcnt": 59, "passper": 92.19}, {"name": "DSLA", "grades": {"O": 15, "A+": 19, "A": 15, "B+": 10, "B": 2, "C": 1, "P": 0, "F": 2}, "subcnt": 64, "failcnt": 2, "passcnt": 62, "passper": 96.88}, {"name": "DELA", "grades": {"O": 27, "A+": 22, "A": 4, "B+": 3, "B": 4, "C": 3, "P": 0, "F": 1}, "subcnt": 64, "failcnt": 1, "passcnt": 63, "passper": 98.44}, {"name": "JAVA", "grades": {"O": 18, "A+": 20, "A": 12, "B+": 9, "B": 1, "C": 0, "P": 0, "F": 4}, "subcnt": 64, "failcnt": 4, "passcnt": 60, "passper": 93.75}], "semfail": 9, "passcnt": 55, "passper": 85.94, "overallfail": 13}], "classdata": {"subjects": [{"name": "DSA", "totalno": 201, "failcnt": 8, "passcnt": 193, "passper": 96.02}, {"name": "DLD", "totalno": 201, "failcnt": 23, "passcnt": 178, "passper": 88.56}, {"name": "DMS", "totalno": 201, "failcnt": 6, "passcnt": 195, "passper": 97.01}, {"name": "OOPW", "totalno": 201, "failcnt": 13, "passcnt": 188, "passper": 93.53}, {"name": "PSQT", "totalno": 201, "failcnt": 22, "passcnt": 179, "passper": 89.05}, {"name": "DSLA", "totalno": 201, "failcnt": 7, "passcnt": 194, "passper": 96.52}, {"name": "DELA", "totalno": 201, "failcnt": 1, "passcnt": 200, "passper": 99.5}, {"name": "JAVA", "totalno": 201, "failcnt": 16, "passcnt": 185, "passper": 92.04}], "total": 201, "semfail": 41, "passcnt": 160, "passper": 79.6, "overallfail": 48}, "error": false}'),
(2, 2017, 2, 2, '{"subjects": ["DC", "MPI", "OS", "CO", "FLAT", "MPIL", "OSLA", "HWLA"], "secdata": [{"section": "A", "total": 69, "subjects": [{"name": "DC", "grades": {"O": 0, "A+": 2, "A": 19, "B+": 16, "B": 5, "C": 10, "P": 15, "F": 2}, "subcnt": 69, "failcnt": 2, "passcnt": 67, "passper": 97.1}, {"name": "MPI", "grades": {"O": 2, "A+": 6, "A": 17, "B+": 16, "B": 11, "C": 8, "P": 7, "F": 2}, "subcnt": 69, "failcnt": 2, "passcnt": 67, "passper": 97.1}, {"name": "OS", "grades": {"O": 0, "A+": 7, "A": 16, "B+": 15, "B": 11, "C": 11, "P": 8, "F": 1}, "subcnt": 69, "failcnt": 1, "passcnt": 68, "passper": 98.55}, {"name": "CO", "grades": {"O": 0, "A+": 3, "A": 15, "B+": 18, "B": 6, "C": 8, "P": 16, "F": 3}, "subcnt": 69, "failcnt": 3, "passcnt": 66, "passper": 95.65}, {"name": "FLAT", "grades": {"O": 2, "A+": 8, "A": 23, "B+": 12, "B": 8, "C": 8, "P": 5, "F": 3}, "subcnt": 69, "failcnt": 3, "passcnt": 66, "passper": 95.65}, {"name": "MPIL", "grades": {"O": 8, "A+": 21, "A": 19, "B+": 13, "B": 4, "C": 2, "P": 0, "F": 2}, "subcnt": 69, "failcnt": 2, "passcnt": 67, "passper": 97.1}, {"name": "OSLA", "grades": {"O": 17, "A+": 36, "A": 12, "B+": 3, "B": 0, "C": 0, "P": 0, "F": 1}, "subcnt": 69, "failcnt": 1, "passcnt": 68, "passper": 98.55}, {"name": "HWLA", "grades": {"O": 0, "A+": 14, "A": 25, "B+": 25, "B": 5, "C": 0, "P": 0, "F": 0}, "subcnt": 69, "failcnt": 0, "passcnt": 69, "passper": 100.0}], "semfail": 9, "passcnt": 60, "passper": 86.96, "overallfail": 16}, {"section": "B", "total": 67, "subjects": [{"name": "DC", "grades": {"O": 0, "A+": 3, "A": 12, "B+": 21, "B": 12, "C": 6, "P": 10, "F": 3}, "subcnt": 67, "failcnt": 3, "passcnt": 64, "passper": 95.52}, {"name": "MPI", "grades": {"O": 0, "A+": 5, "A": 13, "B+": 16, "B": 7, "C": 11, "P": 10, "F": 5}, "subcnt": 67, "failcnt": 5, "passcnt": 62, "passper": 92.54}, {"name": "OS", "grades": {"O": 0, "A+": 5, "A": 20, "B+": 17, "B": 10, "C": 7, "P": 2, "F": 6}, "subcnt": 67, "failcnt": 6, "passcnt": 61, "passper": 91.04}, {"name": "CO", "grades": {"O": 0, "A+": 9, "A": 20, "B+": 23, "B": 4, "C": 8, "P": 0, "F": 3}, "subcnt": 67, "failcnt": 3, "passcnt": 64, "passper": 95.52}, {"name": "FLAT", "grades": {"O": 3, "A+": 6, "A": 18, "B+": 15, "B": 6, "C": 5, "P": 8, "F": 6}, "subcnt": 67, "failcnt": 6, "passcnt": 61, "passper": 91.04}, {"name": "MPIL", "grades": {"O": 0, "A+": 13, "A": 21, "B+": 24, "B": 4, "C": 2, "P": 0, "F": 3}, "subcnt": 67, "failcnt": 3, "passcnt": 64, "passper": 95.52}, {"name": "OSLA", "grades": {"O": 2, "A+": 30, "A": 24, "B+": 6, "B": 4, "C": 1, "P": 0, "F": 0}, "subcnt": 67, "failcnt": 0, "passcnt": 67, "passper": 100.0}, {"name": "HWLA", "grades": {"O": 6, "A+": 16, "A": 32, "B+": 13, "B": 0, "C": 0, "P": 0, "F": 0}, "subcnt": 67, "failcnt": 0, "passcnt": 67, "passper": 100.0}], "semfail": 11, "passcnt": 56, "passper": 83.58, "overallfail": 15}, {"section": "C", "total": 64, "subjects": [{"name": "DC", "grades": {"O": 0, "A+": 3, "A": 28, "B+": 11, "B": 5, "C": 8, "P": 4, "F": 5}, "subcnt": 64, "failcnt": 5, "passcnt": 59, "passper": 92.19}, {"name": "MPI", "grades": {"O": 0, "A+": 7, "A": 21, "B+": 17, "B": 1, "C": 6, "P": 6, "F": 6}, "subcnt": 64, "failcnt": 6, "passcnt": 58, "passper": 90.62}, {"name": "OS", "grades": {"O": 0, "A+": 4, "A": 18, "B+": 19, "B": 4, "C": 6, "P": 8, "F": 5}, "subcnt": 64, "failcnt": 5, "passcnt": 59, "passper": 92.19}, {"name": "CO", "grades": {"O": 0, "A+": 1, "A": 15, "B+": 20, "B": 4, "C": 12, "P": 8, "F": 4}, "subcnt": 64, "failcnt": 4, "passcnt": 60, "passper": 93.75}, {"name": "FLAT", "grades": {"O": 1, "A+": 11, "A": 25, "B+": 8, "B": 2, "C": 8, "P": 0, "F": 9}, "subcnt": 64, "failcnt": 9, "passcnt": 55, "passper": 85.94}, {"name": "MPIL", "grades": {"O": 18, "A+": 20, "A": 13, "B+": 10, "B": 0, "C": 0, "P": 0, "F": 3}, "subcnt": 64, "failcnt": 3, "passcnt": 61, "passper": 95.31}, {"name": "OSLA", "grades": {"O": 5, "A+": 37, "A": 8, "B+": 8, "B": 1, "C": 0, "P": 0, "F": 5}, "subcnt": 64, "failcnt": 5, "passcnt": 59, "passper": 92.19}, {"name": "HWLA", "grades": {"O": 5, "A+": 40, "A": 14, "B+": 4, "B": 0, "C": 0, "P": 0, "F": 1}, "subcnt": 64, "failcnt": 1, "passcnt": 63, "passper": 98.44}], "semfail": 14, "passcnt": 50, "passper": 78.12, "overallfail": 17}], "classdata": {"subjects": [{"name": "DC", "totalno": 200, "failcnt": 10, "passcnt": 190, "passper": 95.0}, {"name": "MPI", "totalno": 200, "failcnt": 13, "passcnt": 187, "passper": 93.5}, {"name": "OS", "totalno": 200, "failcnt": 12, "passcnt": 188, "passper": 94.0}, {"name": "CO", "totalno": 200, "failcnt": 10, "passcnt": 190, "passper": 95.0}, {"name": "FLAT", "totalno": 200, "failcnt": 18, "passcnt": 182, "passper": 91.0}, {"name": "MPIL", "totalno": 200, "failcnt": 8, "passcnt": 192, "passper": 96.0}, {"name": "OSLA", "totalno": 200, "failcnt": 6, "passcnt": 194, "passper": 97.0}, {"name": "HWLA", "totalno": 200, "failcnt": 1, "passcnt": 199, "passper": 99.5}], "total": 200, "semfail": 34, "passcnt": 166, "passper": 83.0, "overallfail": 48}, "error": false}'),
(3, 2017, 3, 1, '{"subjects": ["IES", "RET", "ROB", "BCE", "ISHM", "DBMS", "CG", "CN", "DAA", "CNLA", "SSLA", "QVA"], "secdata": [{"section": "A", "total": 69, "subjects": [{"name": "IES", "grades": {"O": 1, "A+": 12, "A": 9, "B+": 7, "B": 5, "C": 2, "P": 2, "F": 0}, "subcnt": 38, "failcnt": 0, "passcnt": 38, "passper": 100.0}, {"name": "RET", "grades": {"O": 0, "A+": 7, "A": 6, "B+": 3, "B": 1, "C": 2, "P": 0, "F": 0}, "subcnt": 19, "failcnt": 0, "passcnt": 19, "passper": 100.0}, {"name": "ROB", "grades": {"O": 0, "A+": 0, "A": 0, "B+": 2, "B": 0, "C": 3, "P": 3, "F": 1}, "subcnt": 9, "failcnt": 1, "passcnt": 8, "passper": 88.89}, {"name": "BCE", "grades": {"O": 0, "A+": 1, "A": 0, "B+": 1, "B": 0, "C": 0, "P": 0, "F": 0}, "subcnt": 2, "failcnt": 0, "passcnt": 2, "passper": 100.0}, {"name": "ISHM", "grades": {"O": 0, "A+": 0, "A": 1, "B+": 0, "B": 0, "C": 0, "P": 0, "F": 0}, "subcnt": 1, "failcnt": 0, "passcnt": 1, "passper": 100.0}, {"name": "DBMS", "grades": {"O": 11, "A+": 27, "A": 19, "B+": 8, "B": 1, "C": 0, "P": 0, "F": 3}, "subcnt": 69, "failcnt": 3, "passcnt": 66, "passper": 95.65}, {"name": "CG", "grades": {"O": 0, "A+": 5, "A": 20, "B+": 22, "B": 2, "C": 9, "P": 10, "F": 1}, "subcnt": 69, "failcnt": 1, "passcnt": 68, "passper": 98.55}, {"name": "CN", "grades": {"O": 0, "A+": 4, "A": 27, "B+": 19, "B": 8, "C": 6, "P": 5, "F": 0}, "subcnt": 69, "failcnt": 0, "passcnt": 69, "passper": 100.0}, {"name": "DAA", "grades": {"O": 0, "A+": 13, "A": 22, "B+": 17, "B": 7, "C": 6, "P": 2, "F": 2}, "subcnt": 69, "failcnt": 2, "passcnt": 67, "passper": 97.1}, {"name": "CNLA", "grades": {"O": 16, "A+": 21, "A": 19, "B+": 5, "B": 0, "C": 2, "P": 0, "F": 6}, "subcnt": 69, "failcnt": 6, "passcnt": 63, "passper": 91.3}, {"name": "SSLA", "grades": {"O": 0, "A+": 24, "A": 34, "B+": 9, "B": 2, "C": 0, "P": 0, "F": 0}, "subcnt": 69, "failcnt": 0, "passcnt": 69, "passper": 100.0}, {"name": "QVA", "grades": {"O": 0, "A+": 1, "A": 20, "B+": 42, "B": 5, "C": 1, "P": 0, "F": 0}, "subcnt": 69, "failcnt": 0, "passcnt": 69, "passper": 100.0}], "semfail": 10, "passcnt": 59, "passper": 85.51, "overallfail": 20}, {"section": "B", "total": 66, "subjects": [{"name": "IES", "grades": {"O": 0, "A+": 0, "A": 5, "B+": 3, "B": 3, "C": 4, "P": 2, "F": 1}, "subcnt": 18, "failcnt": 1, "passcnt": 17, "passper": 94.44}, {"name": "RET", "grades": {"O": 2, "A+": 13, "A": 6, "B+": 1, "B": 1, "C": 0, "P": 1, "F": 0}, "subcnt": 24, "failcnt": 0, "passcnt": 24, "passper": 100.0}, {"name": "ROB", "grades": {"O": 0, "A+": 1, "A": 1, "B+": 5, "B": 2, "C": 3, "P": 3, "F": 0}, "subcnt": 15, "failcnt": 0, "passcnt": 15, "passper": 100.0}, {"name": "BCE", "grades": {"O": 0, "A+": 2, "A": 2, "B+": 1, "B": 0, "C": 0, "P": 0, "F": 0}, "subcnt": 5, "failcnt": 0, "passcnt": 5, "passper": 100.0}, {"name": "ISHM", "grades": {"O": 0, "A+": 1, "A": 3, "B+": 0, "B": 0, "C": 0, "P": 0, "F": 0}, "subcnt": 4, "failcnt": 0, "passcnt": 4, "passper": 100.0}, {"name": "DBMS", "grades": {"O": 6, "A+": 34, "A": 11, "B+": 12, "B": 1, "C": 0, "P": 0, "F": 2}, "subcnt": 66, "failcnt": 2, "passcnt": 64, "passper": 96.97}, {"name": "CG", "grades": {"O": 0, "A+": 5, "A": 20, "B+": 20, "B": 5, "C": 7, "P": 7, "F": 2}, "subcnt": 66, "failcnt": 2, "passcnt": 64, "passper": 96.97}, {"name": "CN", "grades": {"O": 0, "A+": 11, "A": 29, "B+": 11, "B": 5, "C": 7, "P": 2, "F": 1}, "subcnt": 66, "failcnt": 1, "passcnt": 65, "passper": 98.48}, {"name": "DAA", "grades": {"O": 1, "A+": 9, "A": 19, "B+": 16, "B": 7, "C": 8, "P": 4, "F": 2}, "subcnt": 66, "failcnt": 2, "passcnt": 64, "passper": 96.97}, {"name": "CNLA", "grades": {"O": 12, "A+": 33, "A": 15, "B+": 2, "B": 1, "C": 0, "P": 0, "F": 3}, "subcnt": 66, "failcnt": 3, "passcnt": 63, "passper": 95.45}, {"name": "SSLA", "grades": {"O": 0, "A+": 21, "A": 26, "B+": 15, "B": 3, "C": 1, "P": 0, "F": 0}, "subcnt": 66, "failcnt": 0, "passcnt": 66, "passper": 100.0}, {"name": "QVA", "grades": {"O": 0, "A+": 2, "A": 13, "B+": 49, "B": 1, "C": 1, "P": 0, "F": 0}, "subcnt": 66, "failcnt": 0, "passcnt": 66, "passper": 100.0}], "semfail": 6, "passcnt": 60, "passper": 90.91, "overallfail": 16}, {"section": "C", "total": 64, "subjects": [{"name": "IES", "grades": {"O": 2, "A+": 4, "A": 4, "B+": 4, "B": 1, "C": 1, "P": 0, "F": 1}, "subcnt": 17, "failcnt": 1, "passcnt": 16, "passper": 94.12}, {"name": "RET", "grades": {"O": 3, "A+": 10, "A": 2, "B+": 2, "B": 0, "C": 1, "P": 0, "F": 0}, "subcnt": 18, "failcnt": 0, "passcnt": 18, "passper": 100.0}, {"name": "ROB", "grades": {"O": 0, "A+": 0, "A": 0, "B+": 3, "B": 1, "C": 2, "P": 2, "F": 0}, "subcnt": 8, "failcnt": 0, "passcnt": 8, "passper": 100.0}, {"name": "BCE", "grades": {"O": 3, "A+": 9, "A": 6, "B+": 1, "B": 0, "C": 0, "P": 0, "F": 0}, "subcnt": 19, "failcnt": 0, "passcnt": 19, "passper": 100.0}, {"name": "ISHM", "grades": {"O": 0, "A+": 0, "A": 1, "B+": 1, "B": 0, "C": 0, "P": 0, "F": 0}, "subcnt": 2, "failcnt": 0, "passcnt": 2, "passper": 100.0}, {"name": "DBMS", "grades": {"O": 13, "A+": 21, "A": 16, "B+": 12, "B": 0, "C": 1, "P": 0, "F": 1}, "subcnt": 64, "failcnt": 1, "passcnt": 63, "passper": 98.44}, {"name": "CG", "grades": {"O": 0, "A+": 6, "A": 20, "B+": 18, "B": 5, "C": 6, "P": 5, "F": 4}, "subcnt": 64, "failcnt": 4, "passcnt": 60, "passper": 93.75}, {"name": "CN", "grades": {"O": 0, "A+": 10, "A": 27, "B+": 15, "B": 5, "C": 2, "P": 2, "F": 3}, "subcnt": 64, "failcnt": 3, "passcnt": 61, "passper": 95.31}, {"name": "DAA", "grades": {"O": 0, "A+": 10, "A": 21, "B+": 18, "B": 7, "C": 4, "P": 3, "F": 1}, "subcnt": 64, "failcnt": 1, "passcnt": 63, "passper": 98.44}, {"name": "CNLA", "grades": {"O": 6, "A+": 21, "A": 16, "B+": 11, "B": 2, "C": 1, "P": 0, "F": 7}, "subcnt": 64, "failcnt": 7, "passcnt": 57, "passper": 89.06}, {"name": "SSLA", "grades": {"O": 0, "A+": 17, "A": 36, "B+": 8, "B": 1, "C": 2, "P": 0, "F": 0}, "subcnt": 64, "failcnt": 0, "passcnt": 64, "passper": 100.0}, {"name": "QVA", "grades": {"O": 0, "A+": 0, "A": 8, "B+": 47, "B": 8, "C": 1, "P": 0, "F": 0}, "subcnt": 64, "failcnt": 0, "passcnt": 64, "passper": 100.0}], "semfail": 10, "passcnt": 54, "passper": 84.38, "overallfail": 16}], "classdata": {"subjects": [{"name": "IES", "totalno": 199, "failcnt": 2, "passcnt": 197, "passper": 98.99}, {"name": "RET", "totalno": 199, "failcnt": 0, "passcnt": 199, "passper": 100.0}, {"name": "ROB", "totalno": 199, "failcnt": 1, "passcnt": 198, "passper": 99.5}, {"name": "BCE", "totalno": 199, "failcnt": 0, "passcnt": 199, "passper": 100.0}, {"name": "ISHM", "totalno": 199, "failcnt": 0, "passcnt": 199, "passper": 100.0}, {"name": "DBMS", "totalno": 199, "failcnt": 6, "passcnt": 193, "passper": 96.98}, {"name": "CG", "totalno": 199, "failcnt": 7, "passcnt": 192, "passper": 96.48}, {"name": "CN", "totalno": 199, "failcnt": 4, "passcnt": 195, "passper": 97.99}, {"name": "DAA", "totalno": 199, "failcnt": 5, "passcnt": 194, "passper": 97.49}, {"name": "CNLA", "totalno": 199, "failcnt": 16, "passcnt": 183, "passper": 91.96}, {"name": "SSLA", "totalno": 199, "failcnt": 0, "passcnt": 199, "passper": 100.0}, {"name": "QVA", "totalno": 199, "failcnt": 0, "passcnt": 199, "passper": 100.0}], "total": 199, "semfail": 26, "passcnt": 173, "passper": 86.93, "overallfail": 52}, "error": false}'),
(4, 2016, 3, 2, '{"subjects": ["CD", "SE", "WT", "CA", "ADS", "OSTLA", "SELA", "QVA"], "secdata": [{"section": "A", "total": 59, "subjects": [{"name": "CD", "grades": {"O": 1, "A+": 9, "A": 18, "B+": 15, "B": 5, "C": 7, "P": 3, "F": 1}, "subcnt": 59, "failcnt": 1, "passcnt": 58, "passper": 98.31}, {"name": "SE", "grades": {"O": 0, "A+": 4, "A": 9, "B+": 16, "B": 9, "C": 11, "P": 10, "F": 0}, "subcnt": 59, "failcnt": 0, "passcnt": 59, "passper": 100.0}, {"name": "WT", "grades": {"O": 0, "A+": 4, "A": 15, "B+": 17, "B": 8, "C": 10, "P": 2, "F": 3}, "subcnt": 59, "failcnt": 3, "passcnt": 56, "passper": 94.92}, {"name": "CA", "grades": {"O": 2, "A+": 17, "A": 22, "B+": 10, "B": 4, "C": 3, "P": 1, "F": 0}, "subcnt": 59, "failcnt": 0, "passcnt": 59, "passper": 100.0}, {"name": "ADS", "grades": {"O": 0, "A+": 9, "A": 19, "B+": 20, "B": 6, "C": 4, "P": 0, "F": 1}, "subcnt": 59, "failcnt": 1, "passcnt": 58, "passper": 98.31}, {"name": "OSTLA", "grades": {"O": 4, "A+": 25, "A": 24, "B+": 6, "B": 0, "C": 0, "P": 0, "F": 0}, "subcnt": 59, "failcnt": 0, "passcnt": 59, "passper": 100.0}, {"name": "SELA", "grades": {"O": 12, "A+": 15, "A": 17, "B+": 12, "B": 3, "C": 0, "P": 0, "F": 0}, "subcnt": 59, "failcnt": 0, "passcnt": 59, "passper": 100.0}, {"name": "QVA", "grades": {"O": 0, "A+": 0, "A": 34, "B+": 23, "B": 2, "C": 0, "P": 0, "F": 0}, "subcnt": 59, "failcnt": 0, "passcnt": 59, "passper": 100.0}], "semfail": 3, "passcnt": 56, "passper": 94.92, "overallfail": 10}, {"section": "B", "total": 59, "subjects": [{"name": "CD", "grades": {"O": 1, "A+": 13, "A": 18, "B+": 15, "B": 3, "C": 2, "P": 3, "F": 4}, "subcnt": 59, "failcnt": 4, "passcnt": 55, "passper": 93.22}, {"name": "SE", "grades": {"O": 0, "A+": 3, "A": 13, "B+": 18, "B": 7, "C": 8, "P": 5, "F": 5}, "subcnt": 59, "failcnt": 5, "passcnt": 54, "passper": 91.53}, {"name": "WT", "grades": {"O": 0, "A+": 4, "A": 12, "B+": 18, "B": 8, "C": 5, "P": 7, "F": 5}, "subcnt": 59, "failcnt": 5, "passcnt": 54, "passper": 91.53}, {"name": "CA", "grades": {"O": 1, "A+": 10, "A": 29, "B+": 11, "B": 0, "C": 3, "P": 3, "F": 2}, "subcnt": 59, "failcnt": 2, "passcnt": 57, "passper": 96.61}, {"name": "ADS", "grades": {"O": 0, "A+": 6, "A": 22, "B+": 14, "B": 6, "C": 4, "P": 3, "F": 4}, "subcnt": 59, "failcnt": 4, "passcnt": 55, "passper": 93.22}, {"name": "OSTLA", "grades": {"O": 4, "A+": 28, "A": 22, "B+": 4, "B": 1, "C": 0, "P": 0, "F": 0}, "subcnt": 59, "failcnt": 0, "passcnt": 59, "passper": 100.0}, {"name": "SELA", "grades": {"O": 18, "A+": 25, "A": 10, "B+": 3, "B": 3, "C": 0, "P": 0, "F": 0}, "subcnt": 59, "failcnt": 0, "passcnt": 59, "passper": 100.0}, {"name": "QVA", "grades": {"O": 0, "A+": 0, "A": 28, "B+": 30, "B": 0, "C": 0, "P": 0, "F": 1}, "subcnt": 59, "failcnt": 1, "passcnt": 58, "passper": 98.31}], "semfail": 8, "passcnt": 51, "passper": 86.44, "overallfail": 11}, {"section": "C", "total": 72, "subjects": [{"name": "CD", "grades": {"O": 1, "A+": 13, "A": 23, "B+": 15, "B": 7, "C": 3, "P": 5, "F": 5}, "subcnt": 72, "failcnt": 5, "passcnt": 67, "passper": 93.06}, {"name": "SE", "grades": {"O": 0, "A+": 2, "A": 23, "B+": 18, "B": 12, "C": 6, "P": 6, "F": 5}, "subcnt": 72, "failcnt": 5, "passcnt": 67, "passper": 93.06}, {"name": "WT", "grades": {"O": 0, "A+": 2, "A": 17, "B+": 25, "B": 9, "C": 4, "P": 8, "F": 7}, "subcnt": 72, "failcnt": 7, "passcnt": 65, "passper": 90.28}, {"name": "CA", "grades": {"O": 0, "A+": 16, "A": 30, "B+": 16, "B": 0, "C": 5, "P": 3, "F": 2}, "subcnt": 72, "failcnt": 2, "passcnt": 70, "passper": 97.22}, {"name": "ADS", "grades": {"O": 0, "A+": 7, "A": 21, "B+": 25, "B": 9, "C": 3, "P": 0, "F": 7}, "subcnt": 72, "failcnt": 7, "passcnt": 65, "passper": 90.28}, {"name": "OSTLA", "grades": {"O": 11, "A+": 31, "A": 22, "B+": 8, "B": 0, "C": 0, "P": 0, "F": 0}, "subcnt": 72, "failcnt": 0, "passcnt": 72, "passper": 100.0}, {"name": "SELA", "grades": {"O": 21, "A+": 25, "A": 15, "B+": 7, "B": 2, "C": 2, "P": 0, "F": 0}, "subcnt": 72, "failcnt": 0, "passcnt": 72, "passper": 100.0}, {"name": "QVA", "grades": {"O": 0, "A+": 0, "A": 31, "B+": 37, "B": 2, "C": 2, "P": 0, "F": 0}, "subcnt": 72, "failcnt": 0, "passcnt": 72, "passper": 100.0}], "semfail": 11, "passcnt": 61, "passper": 84.72, "overallfail": 12}], "classdata": {"subjects": [{"name": "CD", "totalno": 205, "failcnt": 10, "passcnt": 195, "passper": 95.12}, {"name": "SE", "totalno": 205, "failcnt": 10, "passcnt": 195, "passper": 95.12}, {"name": "WT", "totalno": 205, "failcnt": 15, "passcnt": 190, "passper": 92.68}, {"name": "CA", "totalno": 205, "failcnt": 4, "passcnt": 201, "passper": 98.05}, {"name": "ADS", "totalno": 205, "failcnt": 12, "passcnt": 193, "passper": 94.15}, {"name": "OSTLA", "totalno": 205, "failcnt": 0, "passcnt": 205, "passper": 100.0}, {"name": "SELA", "totalno": 205, "failcnt": 0, "passcnt": 205, "passper": 100.0}, {"name": "QVA", "totalno": 205, "failcnt": 1, "passcnt": 204, "passper": 99.51}], "total": 205, "semfail": 22, "passcnt": 183, "passper": 89.27, "overallfail": 35}, "error": false}'),
(5, 2018, 2, 1, '{"subjects": ["DSA", "DLD", "DMS", "OOPW", "PSQT", "DSLA", "DELA", "JAVA"], "secdata": [{"section": "A", "total": 72, "subjects": [{"name": "DSA", "grades": {"O": 0, "A+": 23, "A": 21, "B+": 12, "B": 4, "C": 2, "P": 3, "F": 7}, "subcnt": 72, "failcnt": 7, "passcnt": 65, "passper": 90.28}, {"name": "DLD", "grades": {"O": 7, "A+": 20, "A": 15, "B+": 20, "B": 3, "C": 1, "P": 1, "F": 5}, "subcnt": 72, "failcnt": 5, "passcnt": 67, "passper": 93.06}, {"name": "DMS", "grades": {"O": 15, "A+": 16, "A": 22, "B+": 10, "B": 2, "C": 0, "P": 5, "F": 2}, "subcnt": 72, "failcnt": 2, "passcnt": 70, "passper": 97.22}, {"name": "OOPW", "grades": {"O": 0, "A+": 11, "A": 23, "B+": 17, "B": 6, "C": 3, "P": 7, "F": 5}, "subcnt": 72, "failcnt": 5, "passcnt": 67, "passper": 93.06}, {"name": "PSQT", "grades": {"O": 5, "A+": 16, "A": 15, "B+": 11, "B": 10, "C": 8, "P": 2, "F": 5}, "subcnt": 72, "failcnt": 5, "passcnt": 67, "passper": 93.06}, {"name": "DSLA", "grades": {"O": 6, "A+": 18, "A": 15, "B+": 21, "B": 6, "C": 0, "P": 0, "F": 6}, "subcnt": 72, "failcnt": 6, "passcnt": 66, "passper": 91.67}, {"name": "DELA", "grades": {"O": 28, "A+": 24, "A": 11, "B+": 4, "B": 1, "C": 0, "P": 0, "F": 4}, "subcnt": 72, "failcnt": 4, "passcnt": 68, "passper": 94.44}, {"name": "JAVA", "grades": {"O": 20, "A+": 23, "A": 13, "B+": 7, "B": 3, "C": 0, "P": 0, "F": 6}, "subcnt": 72, "failcnt": 6, "passcnt": 66, "passper": 91.67}], "semfail": 13, "passcnt": 59, "passper": 81.94, "overallfail": 17}, {"section": "B", "total": 63, "subjects": [{"name": "DSA", "grades": {"O": 2, "A+": 15, "A": 17, "B+": 14, "B": 3, "C": 4, "P": 4, "F": 4}, "subcnt": 63, "failcnt": 4, "passcnt": 59, "passper": 93.65}, {"name": "DLD", "grades": {"O": 3, "A+": 13, "A": 17, "B+": 14, "B": 2, "C": 6, "P": 3, "F": 5}, "subcnt": 63, "failcnt": 5, "passcnt": 58, "passper": 92.06}, {"name": "DMS", "grades": {"O": 9, "A+": 18, "A": 15, "B+": 9, "B": 4, "C": 2, "P": 4, "F": 2}, "subcnt": 63, "failcnt": 2, "passcnt": 61, "passper": 96.83}, {"name": "OOPW", "grades": {"O": 6, "A+": 17, "A": 16, "B+": 9, "B": 4, "C": 6, "P": 2, "F": 3}, "subcnt": 63, "failcnt": 3, "passcnt": 60, "passper": 95.24}, {"name": "PSQT", "grades": {"O": 12, "A+": 14, "A": 12, "B+": 8, "B": 6, "C": 2, "P": 4, "F": 5}, "subcnt": 63, "failcnt": 5, "passcnt": 58, "passper": 92.06}, {"name": "DSLA", "grades": {"O": 20, "A+": 10, "A": 15, "B+": 11, "B": 4, "C": 3, "P": 0, "F": 0}, "subcnt": 63, "failcnt": 0, "passcnt": 63, "passper": 100.0}, {"name": "DELA", "grades": {"O": 21, "A+": 21, "A": 10, "B+": 5, "B": 1, "C": 3, "P": 0, "F": 2}, "subcnt": 63, "failcnt": 2, "passcnt": 61, "passper": 96.83}, {"name": "JAVA", "grades": {"O": 16, "A+": 15, "A": 12, "B+": 13, "B": 3, "C": 3, "P": 0, "F": 1}, "subcnt": 63, "failcnt": 1, "passcnt": 62, "passper": 98.41}], "semfail": 7, "passcnt": 56, "passper": 88.89, "overallfail": 8}, {"section": "C", "total": 61, "subjects": [{"name": "DSA", "grades": {"O": 9, "A+": 20, "A": 12, "B+": 6, "B": 0, "C": 6, "P": 4, "F": 4}, "subcnt": 61, "failcnt": 4, "passcnt": 57, "passper": 93.44}, {"name": "DLD", "grades": {"O": 5, "A+": 18, "A": 11, "B+": 10, "B": 4, "C": 3, "P": 3, "F": 7}, "subcnt": 61, "failcnt": 7, "passcnt": 54, "passper": 88.52}, {"name": "DMS", "grades": {"O": 17, "A+": 15, "A": 10, "B+": 5, "B": 3, "C": 1, "P": 6, "F": 4}, "subcnt": 61, "failcnt": 4, "passcnt": 57, "passper": 93.44}, {"name": "OOPW", "grades": {"O": 5, "A+": 17, "A": 20, "B+": 1, "B": 6, "C": 4, "P": 2, "F": 6}, "subcnt": 61, "failcnt": 6, "passcnt": 55, "passper": 90.16}, {"name": "PSQT", "grades": {"O": 9, "A+": 19, "A": 10, "B+": 6, "B": 4, "C": 2, "P": 4, "F": 7}, "subcnt": 61, "failcnt": 7, "passcnt": 54, "passper": 88.52}, {"name": "DSLA", "grades": {"O": 19, "A+": 10, "A": 14, "B+": 10, "B": 1, "C": 3, "P": 0, "F": 4}, "subcnt": 61, "failcnt": 4, "passcnt": 57, "passper": 93.44}, {"name": "DELA", "grades": {"O": 17, "A+": 19, "A": 12, "B+": 8, "B": 1, "C": 0, "P": 0, "F": 4}, "subcnt": 61, "failcnt": 4, "passcnt": 57, "passper": 93.44}, {"name": "JAVA", "grades": {"O": 34, "A+": 11, "A": 7, "B+": 4, "B": 1, "C": 0, "P": 0, "F": 4}, "subcnt": 61, "failcnt": 4, "passcnt": 57, "passper": 93.44}], "semfail": 8, "passcnt": 53, "passper": 86.89, "overallfail": 12}], "classdata": {"subjects": [{"name": "DSA", "totalno": 197, "failcnt": 15, "passcnt": 182, "passper": 92.39}, {"name": "DLD", "totalno": 197, "failcnt": 18, "passcnt": 179, "passper": 90.86}, {"name": "DMS", "totalno": 197, "failcnt": 8, "passcnt": 189, "passper": 95.94}, {"name": "OOPW", "totalno": 197, "failcnt": 15, "passcnt": 182, "passper": 92.39}, {"name": "PSQT", "totalno": 197, "failcnt": 17, "passcnt": 180, "passper": 91.37}, {"name": "DSLA", "totalno": 197, "failcnt": 10, "passcnt": 187, "passper": 94.92}, {"name": "DELA", "totalno": 197, "failcnt": 10, "passcnt": 187, "passper": 94.92}, {"name": "JAVA", "totalno": 197, "failcnt": 12, "passcnt": 185, "passper": 93.91}], "total": 197, "semfail": 29, "passcnt": 168, "passper": 85.28, "overallfail": 38}, "error": false}');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `uid` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `access` int(11) NOT NULL DEFAULT '0',
  `token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `username`, `email`, `password`, `access`, `token`) VALUES
(1, 'sivaranjani', 'sivaranjani.cse@anits.edu.in', '1234', 1, 'JB7B4YG0RJH01DFH'),
(2, 'admin', NULL, 'admin', 2, 'Y5W5GSFRGMSW9PU5'),
(3, 'pranitha', '', '1234', 0, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `facultymap`
--
ALTER TABLE `facultymap`
  ADD PRIMARY KEY (`fmpid`),
  ADD UNIQUE KEY `sub` (`sub`,`batch`,`year`,`sem`,`section`),
  ADD KEY `uid` (`uid`);

--
-- Indexes for table `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `batch` (`batch`,`year`,`sem`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `facultymap`
--
ALTER TABLE `facultymap`
  MODIFY `fmpid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `results`
--
ALTER TABLE `results`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `facultymap`
--
ALTER TABLE `facultymap`
  ADD CONSTRAINT `facultymap_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
