drop database project2_db;

CREATE DATABASE project2_db;

USE project2_db;

CREATE TABLE users
(
    u_id int(10) unsigned NOT NULL AUTO_INCREMENT,
    email varchar(255),
    user_id varchar(255) DEFAULT NULL,
    user_password VARCHAR(255) DEFAULT NULL,
    primary key(u_id),
    UNIQUE KEY `UserId`(`UserId`)
);

CREATE TABLE articles 
(
    a_id int(10) unsigned not null auto_increment,
    title VARCHAR(255),
    url VARCHAR(255),
	FOREIGN KEY (a_id) REFERENCES users(u_id)
);


