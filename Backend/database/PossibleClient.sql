CREATE TABLE possibleClient(
	idPosClient INT PRIMARY KEY AUTO_INCREMENT,
    nameExc VARCHAR(50) NOT NULL,
    namePosClient VARCHAR(50) NOT NULL,
    emailPosClient VARCHAR(50) NOT NULL,
    telPosClient VARCHAR(50) NOT NULL,
    instaPosClient VARCHAR(50) NOT NULL,
    contactedPosClient BOOLEAN DEFAULT false
);

SELECT * FROM possibleClient;
SELECT * FROM possibleClient WHERE idPosClient = 2;

INSERT INTO possibleClient (nameExc, namePosClient, emailPosClient, telPosClient, instaPosClient) VALUES ('Bahamas Club', 'Tonhao', 'tonaho@email.com', '11111111111', 'tonhao');

DELETE FROM possibleClient;
ALTER TABLE possibleClient AUTO_INCREMENT = 3;
DELETE FROM possibleClient WHERE idPosClient = 1;