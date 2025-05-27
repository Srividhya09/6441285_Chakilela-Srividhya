-- Task 1: User Upcoming Events
SELECT u.full_name, e.title AS event_title, e.city, e.start_date
FROM Users u
JOIN Registrations r ON u.user_id = r.user_id
JOIN Events e ON r.event_id = e.event_id
WHERE e.status = 'upcoming' AND u.city = e.city
ORDER BY e.start_date;

-- Task 2: Top Rated Events
SELECT e.title, AVG(f.rating) AS average_rating
FROM Events e
JOIN Registrations r ON e.event_id = r.event_id
JOIN Feedback f ON r.registration_id = f.registration_id
GROUP BY e.event_id
HAVING COUNT(f.feedback_id) >= 10
ORDER BY average_rating DESC;

-- Task 3: Inactive Users
SELECT *
FROM Users u
WHERE u.user_id NOT IN (
    SELECT user_id FROM Registrations
    WHERE registration_date >= CURDATE() - INTERVAL 90 DAY
);

-- Task 4: Peak Session Hours
SELECT e.title, COUNT(s.session_id) AS session_count
FROM Events e
JOIN Sessions s ON e.event_id = s.event_id
WHERE TIME(s.start_time) BETWEEN '10:00:00' AND '12:00:00'
GROUP BY e.event_id;

-- Task 5: Most Active Cities
SELECT u.city, COUNT(DISTINCT r.user_id) AS total_users
FROM Users u
JOIN Registrations r ON u.user_id = r.user_id
GROUP BY u.city
ORDER BY total_users DESC
LIMIT 5;

-- Task 6: Event Resource Summary
SELECT e.title, COUNT(r.resource_id) AS total_resources
FROM Events e
LEFT JOIN Sessions s ON e.event_id = s.event_id
LEFT JOIN Resources r ON s.session_id = r.session_id
GROUP BY e.event_id;

-- Task 7: Low Feedback Alerts
SELECT u.full_name, e.title AS event_title, f.rating, f.comments
FROM Feedback f
JOIN Registrations r ON f.registration_id = r.registration_id
JOIN Users u ON r.user_id = u.user_id
JOIN Events e ON r.event_id = e.event_id
WHERE f.rating < 3;

-- Task 8: Sessions per Upcoming Event
SELECT e.title, COUNT(s.session_id) AS session_count
FROM Events e
LEFT JOIN Sessions s ON e.event_id = s.event_id
WHERE e.status = 'upcoming'
GROUP BY e.event_id;

-- Task 9: Organizer Event Summary
-- Assuming an 'organizer_id' column exists in Events table
SELECT organizer_id, status, COUNT(*) AS total_events
FROM Events
GROUP BY organizer_id, status;

-- Task 10: Feedback Gap
SELECT e.title
FROM Events e
JOIN Registrations r ON e.event_id = r.event_id
LEFT JOIN Feedback f ON r.registration_id = f.registration_id
GROUP BY e.event_id
HAVING COUNT(f.feedback_id) = 0;

-- Task 11: Daily New User Count
SELECT registration_date, COUNT(*) AS new_users
FROM Users
WHERE registration_date >= CURDATE() - INTERVAL 7 DAY
GROUP BY registration_date;

-- Task 12: Event with Maximum Sessions
SELECT e.title, COUNT(s.session_id) AS session_count
FROM Events e
JOIN Sessions s ON e.event_id = s.event_id
GROUP BY e.event_id
ORDER BY session_count DESC
LIMIT 1;

-- Task 13: Average Rating per City
SELECT e.city, AVG(f.rating) AS avg_rating
FROM Events e
JOIN Registrations r ON e.event_id = r.event_id
JOIN Feedback f ON r.registration_id = f.registration_id
GROUP BY e.city;

-- Task 14: Most Registered Events
SELECT e.title, COUNT(r.registration_id) AS reg_count
FROM Events e
JOIN Registrations r ON e.event_id = r.event_id
GROUP BY e.event_id
ORDER BY reg_count DESC
LIMIT 3;

-- Task 15: Event Session Time Conflict
SELECT s1.session_id AS session1, s2.session_id AS session2, s1.event_id
FROM Sessions s1
JOIN Sessions s2 ON s1.event_id = s2.event_id AND s1.session_id < s2.session_id
WHERE s1.start_time < s2.end_time AND s1.end_time > s2.start_time;

-- Task 16: Unregistered Active Users
SELECT *
FROM Users
WHERE registration_date >= CURDATE() - INTERVAL 30 DAY
AND user_id NOT IN (
    SELECT DISTINCT user_id FROM Registrations
);

-- Task 17: Multi-Session Speakers
SELECT speaker, COUNT(*) AS session_count
FROM Sessions
WHERE speaker IS NOT NULL
GROUP BY speaker
HAVING session_count > 1;

-- Task 18: Resource Availability Check
SELECT e.title
FROM Events e
LEFT JOIN Sessions s ON e.event_id = s.event_id
LEFT JOIN Resources r ON s.session_id = r.session_id
GROUP BY e.event_id
HAVING COUNT(r.resource_id) = 0;

-- Task 19: Completed Events with Feedback Summary
SELECT e.title, COUNT(r.registration_id) AS total_registrations, AVG(f.rating) AS avg_rating
FROM Events e
LEFT JOIN Registrations r ON e.event_id = r.event_id
LEFT JOIN Feedback f ON r.registration_id = f.registration_id
WHERE e.status = 'completed'
GROUP BY e.event_id;

-- Task 20: User Engagement Index
SELECT u.full_name,
       COUNT(DISTINCT r.event_id) AS events_attended,
       COUNT(f.feedback_id) AS feedbacks_given
FROM Users u
LEFT JOIN Registrations r ON u.user_id = r.user_id
LEFT JOIN Feedback f ON r.registration_id = f.registration_id
GROUP BY u.user_id;

-- Task 21: Top Feedback Providers
SELECT u.full_name, COUNT(f.feedback_id) AS feedback_count
FROM Users u
JOIN Registrations r ON u.user_id = r.user_id
JOIN Feedback f ON r.registration_id = f.registration_id
GROUP BY u.user_id
ORDER BY feedback_count DESC
LIMIT 5;

-- Task 22: Duplicate Registrations Check
SELECT user_id, event_id, COUNT(*) AS registration_count
FROM Registrations
GROUP BY user_id, event_id
HAVING registration_count > 1;

-- Task 23: Registration Trends
SELECT DATE_FORMAT(registration_date, '%Y-%m') AS reg_month, COUNT(*) AS total_registrations
FROM Registrations
WHERE registration_date >= CURDATE() - INTERVAL 12 MONTH
GROUP BY reg_month
ORDER BY reg_month;

-- Task 24: Average Session Duration per Event
SELECT e.title, AVG(TIMESTAMPDIFF(MINUTE, s.start_time, s.end_time)) AS avg_duration_minutes
FROM Events e
JOIN Sessions s ON e.event_id = s.event_id
GROUP BY e.event_id;

-- Task 25: Events Without Sessions
SELECT e.title
FROM Events e
LEFT JOIN Sessions s ON e.event_id = s.event_id
WHERE s.session_id IS NULL;