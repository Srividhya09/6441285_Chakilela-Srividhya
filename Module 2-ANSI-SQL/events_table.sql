CREATE TABLE Events (
event_id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(150) NOT NULL,
description TEXT,
city VARCHAR(100) NOT NULL,
start_date DATE NOT NULL,
end_date DATE NOT NULL,
status ENUM('upcoming', 'ongoing', 'completed') NOT NULL
);