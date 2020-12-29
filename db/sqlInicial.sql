-- CREATE DATABASE
CREATE DATABASE gestion_cuenta;
USE gestion_cuenta;

-- CREATE USER WITH ALL PRIVILEGES
CREATE USER 'lespinoza'@'localhost'IDENTIFIED BY 'leonel082';
GRANT ALL PRIVILEGES ON mydb.* TO 'lespinoza'@'localhost';
FLUSH PRIVILEGES;

