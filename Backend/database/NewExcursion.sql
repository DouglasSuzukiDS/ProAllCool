CREATE DATABASE excursions;

USE excursions;

CREATE TABLE excursions (
   id INTEGER PRIMARY KEY AUTO_INCREMENT,
   thumbnail VARCHAR(50) DEFAULT 'DefaultImage',
   titleExc VARCHAR(255) NOT NULL,
   prevValueExc VARCHAR(20) NOT NULL,
   currentValueExc VARCHAR(20) NOT NULL,
   descriptionExc MEDIUMTEXT NOT NULL,
   dateExc VARCHAR(20) NOT NULL,
   returnExc VARCHAR(20) NOT NULL,
   activeExc BOOLEAN DEFAULT false,
   openModal VARCHAR(100) DEFAULT 'DefaultModal'
);

SELECT * FROM excursions;
DELETE FROM excursions;
ALTER TABLE excursions AUTO_INCREMENT = 1;
DROP TABLE excursions;

UPDATE excursions SET thumbnail = 'DefaultImage' WHERE id = 6;

INSERT INTO excursions (thumbnail, titleExc, prevValueExc, currentValueExc, descriptionExc, dateExc, returnExc, activeExc, openModal) VALUES
('Bahamas01', 'Bahamas Club', '5.000', '3.800', 'Final de semana no Hotel mais famoso de São Paulo, com restaurante próprio, culinária de elite, shows, bar com bartender’s & bargirls altamente qualidifcados. OBS: Shows particulares NÃO ESTÃO INCLUSOS.', '03/11/23', '05/11/23', true, 'BahamasModal');

INSERT INTO excursions (thumbnail, titleExc, prevValueExc, currentValueExc, descriptionExc, dateExc, returnExc, activeExc, openModal) VALUES
('Ufo01', 'Expedição UFO 👽', '9.000', '7.780', 'Expedição UFO pelas cidades com os maiores casos ufolóficos do Mundo. Tour pela Ilha de Colares (PA) palco da Operação Prato, e Varginha (MG), palco do avistamento da criatura de Varginha.', '01/12/23', '12/12/23', true, 'UfoModal');

INSERT INTO excursions (thumbnail, titleExc, prevValueExc, currentValueExc, descriptionExc, dateExc, returnExc, activeExc, openModal) VALUES
('JapanTour01', 'Japan Tour ', '12.000', '10.750', 'Tour por Osaka, Tokyo e Nagoya. Festa especial no idBar (Nagoya), a casa de show mais frequentada por brasilieiros no Japão.', '05/01/24', '20/01/24', true, 'JapanModal');

INSERT INTO excursions (thumbnail, titleExc, prevValueExc, currentValueExc, descriptionExc, dateExc, returnExc, activeExc, openModal) VALUES
('Tambaba01', 'Praia Tambaba', '5.350', '4.620', 'Praia naturalista localizada na Paraíba, replata de paisagens naturais.', '02/11/23', '12/11/23', true, 'TambabaModal');

INSERT INTO excursions (thumbnail, titleExc, prevValueExc, currentValueExc, descriptionExc, dateExc, returnExc, activeExc, openModal) VALUES
('SaoThome01', 'São Thomé Das Letras', '4.100', '3.000', 'Cidade considerada mística em Minas Gerais famosas por paisagens e construções rochosas, avistamentos místicos e ufológicos.', '03/12/23', '10/12/23', true, 'SaoThomeModal');

INSERT INTO excursions (thumbnail, titleExc, prevValueExc, currentValueExc, descriptionExc, dateExc, returnExc, activeExc, openModal) VALUES
('PattayaTour01', 'Pattaya Tour', '11.070', '10.200', 'Cidade paradisíaca na Tailândia. Famosas por abrigar muitos bares, casas noturnas, prostituíção e culinária voltada quase toda para pescados e futos do mar.', '06/10/23', '14/10/23', true, 'PattayaModal');

INSERT INTO excursions (titleExc, prevValueExc, currentValueExc, descriptionExc, dateExc, returnExc, activeExc, openModal) VALUES
('Default test', '6.666', '6.666', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam turpis quis erat cursus, id vulputate nisi hendrerit.', '08/09/23', '10/19/23', true, '');