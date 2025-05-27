CREATE TABLE Feedback (
feedback_id INT PRIMARY KEY AUTO_INCREMENT,
registration_id INT NOT NULL,
rating INT CHECK (rating BETWEEN 1 AND 5),
comments TEXT,
feedback_date DATE NOT NULL,
FOREIGN KEY (registration_id) REFERENCES Registrations(registration_id)
);