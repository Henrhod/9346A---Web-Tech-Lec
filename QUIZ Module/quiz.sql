-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: May 17, 2018 at 03:07 AM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
CREATE TABLE IF NOT EXISTS `quiz` (
  `quizID` int(255) NOT NULL AUTO_INCREMENT,
  `question` varchar(255) NOT NULL,
  `choice1` varchar(255) NOT NULL,
  `choice2` varchar(255) NOT NULL,
  `answer` varchar(255) NOT NULL,
  PRIMARY KEY (`quizID`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`quizID`, `question`, `choice1`, `choice2`, `answer`) VALUES
(1, '_______ is a JavaScript run time built on Chrome’s V8 JavaScript engine.', 'PHP', 'JSP', 'Node.Js'),
(2, 'Node.js is a/an ___________ event driven JavaScript run time.', 'Asynchronously', 'Synchronous', 'Asynchronous'),
(3, 'Node.js can handle ______ connections at a time.', 'Parallel', 'Simultaneous', 'Concurrent'),
(4, 'PHP is an acronym for \"PHP: Hypertext Processor\".', 'True', 'Neither', 'False'),
(5, 'PHP is a ____ ____ scripting technology language that is often used by developers to add functionality to the web sites.', 'Client Side', 'Server-Client', 'Server Side'),
(6, 'PHP codes are executed on the _____?', 'Client', 'End-User', 'Server'),
(7, '_____ files can contain text, HTML, CSS, JavaScript, and PHP code.', 'Servlet', 'Node.Js', 'PHP'),
(8, '_______ are a Sun Microsystems specification for combining Java with HTML to provide dynamic content for Web pages.', 'Java Server', 'Java Servlets', 'JSP'),
(9, 'Combining _____ with _____ provides dynamic contents of the  website or web pages.', 'HTML and JSP', 'Java and Servlets', 'Java and HTML'),
(10, 'A ________ is a Java class that runs in a Java-enabled server.', 'Server', 'Server-Client', 'Servlet'),
(11, '_____ is a method that exploits risks or vulnerabilities where the attack is sent using command based execution.', 'Broken Access Control', 'Sensitive Data Exposure', 'Injection'),
(12, '_______ is a  vulnerability that occurs whenever  a web application does not properly protect sensitive information from being revealed to illegitimate users.', 'Injection', 'XML External Entities', 'None of the choices'),
(13, 'What is the latest version of OWASP TOP 10?', '2016', '2017', '2018'),
(14, 'Is a risk or vulnerability where a website or an application that has an authentication has a weak authentication mechanism or faulty sessions.', 'Sensitive Data Exposure', 'Broken Access Control', 'Broken Authentication'),
(15, 'What is the Top 8 vulnerability according to OWASP?', 'Cross-Site Scripting (XSS)', 'Security Misconfiguration', 'Insecure Deserialization');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
