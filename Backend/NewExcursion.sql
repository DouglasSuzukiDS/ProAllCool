CREATE DATABASE excursions;

USE excursions;

CREATE TABLE excursions (
   id INTEGER PRIMARY KEY AUTO_INCREMENT,
   thumbnail VARCHAR(50),
   titleExc VARCHAR(255) NOT NULL,
   prevValueExc VARCHAR(20) NOT NULL,
   currentCalueExc VARCHAR(20) NOT NULL,
   descriptionExc MEDIUMTEXT NOT NULL,
   dateExc VARCHAR(20) NOT NULL,
   returnExc VARCHAR(20) NOT NULL,
   activeExc BOOLEAN DEFAULT false,
   openModal VARCHAR(100) DEFAULT 'DefaultModal'
);

SELECT * FROM excursions;

INSERT INTO excursions (thumbnail, titleExc, prevValueExc, currentValueExc, descriptionExc, dateExc, returnExc) VALUES
('', 'Bahamas Club', '5.000', '3.800', 'Final de semana no Hotel mais famoso de São Paulo, com restaurante próprio, culinária de elite, shows, bar com bartender’s & bargirls altamente qualidifcados. OBS: Shows particulares NÃO ESTÃO INCLUSOS.', '03/11/23', '05/11/23');