TABLE excursions {
   id INT [pk, increment]
   thumbnail VARCHAR(50) [default: 'DefaultImage']
   titleExc VARCHAR(255) [not null]
   prevValueExc VARCHAR(20) [not null]
   currentValueExc VARCHAR(20) [not null]
   descriptionExc MEDIUMTEXT [not null]
   dateExc VARCHAR(20) [not null]
   returnExc VARCHAR(20) [not null]
   activeExc BOOLEAN [not null]
   openModal VARCHAR(100) [not null]
}

TABLE users {
    idUser INT [pk, increment]
    nameUser VARCHAR(50) [not null]
    loginUser VARCHAR(50) [not null]
    passwordUser VARCHAR(255) [not null]
}

TABLE possibleClient {
	idPosClient INT [pk, increment]
  nameExc VARCHAR(50) [not null, ref: > excursions.id]
    namePosClient VARCHAR(50) [not null]
    emailPosClient VARCHAR(50) [not null]
    telPosClient VARCHAR(50) [not null]
    instaPosClient VARCHAR(50) [not null]
    contactedPosClient BOOLEAN [default: false]
}