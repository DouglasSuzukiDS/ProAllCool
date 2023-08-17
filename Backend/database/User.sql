CREATE DATABASE excursions;

USE excursions;

CREATE TABLE users(
    idUser INT PRIMARY KEY AUTO_INCREMENT,
    nameUser VARCHAR(50) NOT NULL,
    loginUser VARCHAR(50) NOT NULL,
    passwordUser VARCHAR(255) NOT NULL
);

SELECT * FROM users;
SELECT * FROM users WHERE loginUser = 'admin' &  passwordUser = 'adminsecac123';
SELECT * FROM users WHERE idUser = 1;
DELETE FROM users;
DELETE FROM users WHERE idUser = 1;