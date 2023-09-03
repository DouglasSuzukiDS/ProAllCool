CREATE TABLE users (
  idUser INT PRIMARY KEY AUTO_INCREMENT,
  nameUser VARCHAR(50) NOT NULL,
  loginUser VARCHAR(50) NOT NULL,
  passwordUser VARCHAR(255) NOT NULL
);

CREATE TABLE excursions (
  idExc INT PRIMARY KEY AUTO_INCREMENT,
  thumbnail VARCHAR(50) DEFAULT "DefaultImage",
  titleExc VARCHAR(255) NOT NULL,
  prevValueExc VARCHAR(20) NOT NULL,
  currentValueExc VARCHAR(20) NOT NULL,
  descriptionExc MEDIUMTEXT NOT NULL,
  dateExc VARCHAR(20) NOT NULL,
  returnExc VARCHAR(20) NOT NULL,
  activeExc BOOLEAN DEFAULT false,
  openModal VARCHAR(100) NOT NULL
);

CREATE TABLE possibleClientInfos (
  idPosClientInfos INT PRIMARY KEY AUTO_INCREMENT,
  namePosClientInfos VARCHAR(50) NOT NULL,
  emailPosClientInfos VARCHAR(50) NOT NULL,
  telPosClientInfos VARCHAR(50) NOT NULL,
  instaPosClientInfos VARCHAR(50)
);

CREATE TABLE possibleClient (
  idPosClient INT PRIMARY KEY AUTO_INCREMENT,
  idExc INT,
  idPosClientInfos INT,
  contactedPosClientInfos BOOLEAN DEFAULT false
);

ALTER TABLE possibleClient ADD FOREIGN KEY (idExc) REFERENCES excursions (idExc);

ALTER TABLE possibleClient ADD FOREIGN KEY (idPosClientInfos) REFERENCES possibleClientInfos (idPosClientInfos);

INSERT INTO possibleClientInfos (namePosClientInfos, emailPosClientInfos, telPosClientInfos, instaPosClientInfos) VALUES ('James', 'james@email.com', '1111111', 'james');
SELECT * FROM possibleClientInfos;

INSERT INTO possibleClient (idExc, idPosClientInfos) VALUES (03, 01);
SELECT * FROM possibleClient;

SELECT * FROM possibleClient
	INNER JOIN possibleClientInfos ON possibleClient.idPosClientInfos
    INNER JOIN Excursions ON possibleClient.idExc;

