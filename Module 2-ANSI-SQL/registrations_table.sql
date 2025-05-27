CREATE TABLE Registrations (
registration_id INT PRIMARY KEY AUTO_INCREMENT,
user_id INT NOT NULL,
event_id INT NOT NULL,
registration_date DATE NOT NULL,
FOREIGN KEY (user_id) REFERENCES Users(user_id),
FOREIGN KEY (event_id) REFERENCES Events(event_id)
);