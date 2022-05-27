CREATE TABLE plf_user(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(100) NOT NULL,
    pass VARCHAR(100)
)

CREATE TABLE plf_task(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    stats VARCHAR(100),
    priority VARCHAR(100),
    est FLOAT(3,1),
    deadline TIME,
    id_owner INT(6) UNSIGNED,
    FOREIGN KEY(id_owner) REFERENCES plf_user(id)
   );