CREATE TABLE excursions (
  idExc INT PRIMARY KEY AUTO_INCREMENT,
  thumbnail VARCHAR(50) DEFAULT "DefaultImage",
  titleExc VARCHAR(255) NOT NULL,
  prevValueExc VARCHAR(20) NOT NULL,
  currentValueExc VARCHAR(20) NOT NULL,
  descriptionExc MEDIUMTEXT NOT NULL,
  dateExc VARCHAR(20) NOT NULL,
  returnExc VARCHAR(20) NOT NULL,
  activeExc BOOLEAN DEFAULT true,
  openModal VARCHAR(100) NOT NULL
);

CREATE TABLE users (
  idUser INT PRIMARY KEY AUTO_INCREMENT,
  nameUser VARCHAR(50) NOT NULL,
  loginUser VARCHAR(50) NOT NULL,
  passwordUser VARCHAR(255) NOT NULL
);

CREATE TABLE possibleClient (
  idPosClient INT PRIMARY KEY AUTO_INCREMENT,
  idExc INT,
  nameExc VARCHAR(50) NOT NULL,
  namePosClient VARCHAR(50) NOT NULL,
  emailPosClient VARCHAR(50) NOT NULL,
  telPosClient VARCHAR(50) NOT NULL,
  instaPosClient VARCHAR(50),
  contactedPosClient BOOLEAN DEFAULT false
);

ALTER TABLE possibleClient ADD FOREIGN KEY (idExc) REFERENCES excursions (idExc);
