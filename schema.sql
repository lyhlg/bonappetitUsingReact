CREATE TABLE users (
  id INT(255) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  userId VARCHAR(128) NOT NULL,
  userName VARCHAR(128) NOT NULL,
  gmailAccount VARCHAR(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE place_info (
  id INT(255) unsigned auto_increment PRIMARY KEY NOT NULL,
  userId VARCHAR(64) NOT NULL,
  title VARCHAR(256) NOT NULL,
  menu VARCHAR(256) NOT NULL,
  price INT(32) NOT NULL,
  comment VARCHAR(2048) NOT NULL,
  heartCount INT(32)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;