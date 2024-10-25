CREATE DATABASE IF NOT EXISTS contacts_app;

USE contacts_app;

CREATE TABLE IF NOT EXISTS contacts (
    id bigint NOT NULL AUTO_INCREMENT,
    full_name varchar(100) DEFAULT NULL,
    telephone varchar(30) DEFAULT NULL,
    notes text,
    PRIMARY KEY (id)
) engine=InnoDB auto_increment=1 default charset=utf8mb4;
