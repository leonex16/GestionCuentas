CREATE TABLE people (
	id_people INT(3) NOT NULL AUTO_INCREMENT,
	first_name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL,
	birth_date TIMESTAMP NOT NULL,
	PRIMARY KEY (id_people)
);

CREATE TABLE receive (
	receive_id INT(3) NOT NULL AUTO_INCREMENT,
	start_date TIMESTAMP NOT NULL,
	finish_date TIMESTAMP NOT NULL,
	amout_month INT(10) NOT NULL,
	people_name varchar(50) NOT NULL,
	PRIMARY KEY (receive_id)
);

CREATE TABLE fixed_expense (
	fixe_expe_id INT(3) NOT NULL AUTO_INCREMENT,
	description varchar(500) NOT NULL,
	amont INT(10) NOT NULL,
	payment_date TIMESTAMP NOT NULL,
	paid BINARY NOT NULL DEFAULT 0,
	PRIMARY KEY (fixe_expe_id)
);

CREATE TABLE loan (
	loan_id INT(3) NOT NULL AUTO_INCREMENT,
	start_date TIMESTAMP NOT NULL,
	finish_date TIMESTAMP NOT NULL,
	people_name varchar(50) NOT NULL,
	total_fee INT(2) NOT NULL,
	total_amout INT(10) NOT NULL,
	paid BINARY NOT NULL DEFAULT 0,
	PRIMARY KEY (loan_id)
);

COMMIT;