CREATE TABLE possibleClient (
  idPosClient INT PRIMARY KEY AUTO_INCREMENT,
  idExc INT,
  nameExc VARCHAR(50) NOT NULL,
  namePosClient VARCHAR(50) NOT NULL,
  emailPosClient VARCHAR(50) NOT NULL,
  telPosClient VARCHAR(50) NOT NULL,
  instaPosClient VARCHAR(50) NOT NULL,
  contactedPosClient BOOLEAN DEFAULT false
);

ALTER TABLE possibleClient ADD FOREIGN KEY (idExc) REFERENCES excursions (idExc);

SELECT * FROM possibleClient;
SELECT * FROM possibleClient WHERE idPosClient = 2;

INSERT INTO possibleClient (idExc, nameExc, namePosClient, emailPosClient, telPosClient, instaPosClient) VALUES (2, 'Bahamas Club', 'Tonhao', 'tonaho@email.com', '11111111111', 'tonhao');

DELETE FROM possibleClient;
ALTER TABLE possibleClient AUTO_INCREMENT = 1;
DELETE FROM possibleClient WHERE idPosClient = 1;