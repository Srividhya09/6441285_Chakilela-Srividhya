CREATE TABLE Resources (
resource_id INT PRIMARY KEY AUTO_INCREMENT,
session_id INT NOT NULL,
title VARCHAR(150) NOT NULL,
resource_type ENUM('pdf', 'video', 'link', 'slides') NOT NULL,
url VARCHAR(255),
FOREIGN KEY (session_id) REFERENCES Sessions(session_id)
);