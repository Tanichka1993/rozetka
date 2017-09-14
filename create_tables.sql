CREATE TABLE IF NOT EXISTS category (
  id           INT          NOT NULL AUTO_INCREMENT,
  title        VARCHAR(255) NOT NULL,
  description  TEXT,
  image_source VARCHAR(255),
  PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS sub_category (
  id           INT          NOT NULL AUTO_INCREMENT,
  category_id  INT          NOT NULL,
  title        VARCHAR(255) NOT NULL,
  description  TEXT,
  image_source VARCHAR(255),
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES category (id)
);


CREATE TABLE IF NOT EXISTS first_names (
  id         INT          NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS last_names (
  id        INT          NOT NULL AUTO_INCREMENT,
  last_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS user (
  id            INT          NOT NULL AUTO_INCREMENT,
  login         VARCHAR(20)  NOT NULL,
  password_hash VARCHAR(255) NOT NULL,

  first_name_id INT,
  last_name_id  INT,


  PRIMARY KEY (id),
  FOREIGN KEY (first_name_id) REFERENCES first_names (id),
  FOREIGN KEY (last_name_id) REFERENCES last_names (id)
);