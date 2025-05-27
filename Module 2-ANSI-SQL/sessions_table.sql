CREATE TABLE Sessions (
session_id INT PRIMARY KEY AUTO_INCREMENT,
event_id INT NOT NULL,
title VARCHAR(150) NOT NULL,
speaker VARCHAR(100),
start_time DATETIME NOT NULL,
end_time DATETIME NOT NULL,
FOREIGN KEY (event_id) REFERENCES Events(event_id)
);