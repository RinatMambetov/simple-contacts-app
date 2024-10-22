DROP DATABASE IF EXISTS `contacts_app`;
CREATE DATABASE IF NOT EXISTS `contacts_app`;

USE `contacts_app`;

DROP TABLE IF EXISTS `contacts`;

CREATE TABLE IF NOT EXISTS `contacts` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `full_name` varchar(100) DEFAULT NULL,
    `telephone` varchar(30) DEFAULT NULL,
    `notes` text, PRIMARY KEY (`id`)
) engine=InnoDB auto_increment=1 default charset=utf8mb4;

INSERT INTO  `contacts_app`.`contacts` 
	(`full_name`, `telephone`,`notes` )
VALUES
    ('Новикова Амелия','+0 (268) 355-26-81111','Таинственная незнакомка'),
    ('Новикова Амелия','+0 (2680) 355-26-84538','Таинственная незнакомка'),
    ('Исаев Артемий','+679 (1238) 976-17-44424','Скрижали в его руках'),
    ('Иванова Мария','+60 (86) 313-11-08089','Словно тень веселая прошла'),
    ('Дубинин Михаил','+1 (7043) 276-60-03605','Мечты видны в его глазах'),
    ('Морозов Всеволод','+75 (9990) 707-73-95190','Загадочный человек'),
    ('Rebecca Scott','+12 (79) 820-98-56335','Eyes kept stories'),
    ('Todd Davis','+3 (206) 809-32-93706','Dangerous guy'),
    ('Rose Bell','+8 (469) 670-21-38464','Like a character from dreams');

SELECT * FROM `contacts_app`.`contacts`;