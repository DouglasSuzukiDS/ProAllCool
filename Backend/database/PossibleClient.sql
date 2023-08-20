CREATE TABLE possibleClient(
	idPosClient INT PRIMARY KEY AUTO_INCREMENT,
    namePosClient VARCHAR(50) NOT NULL,
    emailPosClient VARCHAR(50) NOT NULL,
    telPosClient VARCHAR(50) NOT NULL,
    instaPosClient VARCHAR(50) NOT NULL,
    contactedPosClient BOOLEAN DEFAULT false
);

SELECT * FROM possibleClient;
SELECT * FROM possibleClient WHERE idPosClient = 1;

INSERT INTO possibleClient (namePosClient, emailPosClient, telPosClient, instaPosClient) VALUES ('Tonhao', 'tonaho@email.com', '11111111111', 'tonhao');

DELETE FROM possibleClient;
ALTER TABLE possibleClient AUTO_INCREMENT = 1;
DELETE FROM possibleClient WHERE idPosClient = 1;