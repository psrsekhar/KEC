-- MySQL version
SELECT @@version;
SELECT VERSION();

-- Database operations
-- Create a database
CREATE DATABASE IF NOT EXISTS kec DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
    -- To allow all utf8mb4_general_0900_ai_ci

-- Show all databases
SHOW DATABASES;

-- Select a database
USE kec;

-- Delete a database
DROP DATABASE IF EXISTS kec;

-- Table operations
-- Create tables
CREATE TABLE IF NOT EXISTS kec.department (
    id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS kec.student (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone_number VARCHAR(15) NOT NULL UNIQUE,
    address TEXT NOT NULL,
    department_id TINYINT UNSIGNED NOT NULL,
    created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (department_id) REFERENCES kec.department(id) ON DELETE CASCADE, 
    FOREIGN KEY (department_id) REFERENCES kec.department(id) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Show all tables
SHOW TABLES;

-- Describe tables
DESC kec.department;
DESC kec.student;

-- Add a column
ALTER TABLE kec.student 
    ADD COLUMN dob DATE AFTER name;

-- Modify a column
ALTER TABLE kec.student 
    MODIFY COLUMN phone_number VARCHAR(10) NOT NULL UNIQUE;

-- Rename a column
ALTER TABLE kec.student 
    CHANGE phone_number mobile_number VARCHAR(10) NOT NULL UNIQUE;

-- Drop a column
ALTER TABLE kec.student 
    DROP COLUMN dob;

-- Drop tables
DROP TABLE IF EXISTS kec.student;
DROP TABLE IF EXISTS kec.department;

-- Single insert operations
INSERT INTO kec.department VALUES (1, 'Computer Science', CURRENT_TIMESTAMP);
INSERT INTO kec.department(name) VALUES ('Electronics and Communication');

-- Multiple insert operation
INSERT INTO kec.department(name) 
    VALUES ('Mechanical Engineering'), 
           ('Civil Engineering'), 
           ('Electrical Engineering');

-- Test table
CREATE TABLE IF NOT EXISTS kec.test (
    name VARCHAR(100) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Select insert operation
INSERT INTO kec.test (name) 
    SELECT name FROM kec.department;

-- Select insert operation using CTE
with department_name AS (select id, name from kec.department)
INSERT INTO kec.test (name) select name from department_name;

-- Insert ignore operation
INSERT IGNORE INTO kec.department 
    VALUES (1, 'Transport', CURRENT_TIMESTAMP);

-- Insert on duplicate key
INSERT INTO kec.department 
    VALUES (1, 'Transport', CURRENT_TIMESTAMP) 
    ON DUPLICATE KEY UPDATE name='Transport';

-- Replace a row
REPLACE INTO kec.department 
    VALUES (1, 'Aerospace Engineering', CURRENT_TIMESTAMP);

-- Bulk insert from a file
LOAD DATA INFILE 'C:/path_to_your_file/departments.csv'
    INTO TABLE kec.department;

-- Get all rows from a table
SELECT * FROM kec.department;

-- Get specific columns from a table
SELECT name, created_on FROM kec.department;

SELECT 2;
SELECT 2 + 3;

-- Conditional selection: WHERE clause
select id, name, department_id from kec.student WHERE department_id =2; 

-- Get specific columns with alias from a table
select id AS student_id, name, department_id from kec.student;

-- employee table
CREATE TABLE IF NOT EXISTS kec.employee (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    address TEXT NOT NULL,
    department_id TINYINT UNSIGNED NOT NULL,
    salary DECIMAL(10, 2) NOT NULL DEFAULT 1000.00,
    created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CHECK(salary > 0),
    FOREIGN KEY (department_id) REFERENCES kec.department(id) ON DELETE CASCADE, 
    FOREIGN KEY (department_id) REFERENCES kec.department(id) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Get specific columns with expressions from a table
select id, name, salary, salary*0.5 AS bonus from kec.employee;

-- filtering rows based on a condition
select id, name, salary from kec.employee WHERE salary >= 50000;

-- filtering rows based on a range
select id, name, salary from kec.employee WHERE salary BETWEEN 10000 AND 30000;

select id, name, salary from kec.employee WHERE salary <= 30000 AND salary >= 10000;

-- filtering rows based on custom/matching values
select id, name, salary from kec.employee WHERE department_id IN (1, 3, 5);

-- filtering rows based on patterns
select id, name from kec.employee WHERE name LIKE 'A%';

-- sorting rows on multiple columns
select id, name, salary from kec.employee ORDER BY salary desc, name;

-- limiting the result set
select id, name, salary from kec.employee ORDER BY salary desc LIMIT 5 OFFSET 3;
select id, name, salary from kec.employee ORDER BY salary desc LIMIT 5, 3;

-- Aggregate functions
select SUM(salary) AS total_salary from kec.employee;

select MAX(salary) AS highest_salary from kec.employee;

select MIN(salary) AS lowest_salary from kec.employee;

select department_id, SUM(salary) AS total_dept_salary from kec.employee GROUP BY department_id;

select department_id, AVG(salary) AS avg_dept_salary from kec.employee GROUP BY department_id HAVING avg_dept_salary > 25000;

-- LEFT JOIN
select a.id, a.name, a.salary, b.department_name from
(select id, name, salary, department_id from kec.employee)a
LEFT JOIN
(select id, name AS department_name from kec.department)b
ON a.department_id = b.id;

-- department name, employee count, student count
select d.id, d.department_name, d.employee_count, c.student_count from
(select a.id, a.department_name, b.employee_count from
(select id, name AS department_name from kec.department)a
LEFT JOIN
(select department_id, COUNT(department_id) AS employee_count from kec.employee GROUP BY department_id)b ON a.id = b.department_id)d
LEFT JOIN
(select department_id, COUNT(department_id) AS student_count from kec.student GROUP BY department_id)c ON d.id = c.department_id

CREATE TABLE IF NOT EXISTS kec.users (
    email VARCHAR(100) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role ENUM ('employee', 'student') NOT NULL
);ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


insert into kec.users VALUES ('alice1@example.com', MD5('Demo@123'), 'student');

select role from kec.users WHERE email = 'alice1@example.com' AND password = MD5('Demo@143');


-- string functions
select concat(id, name, email) from kec.employee;

select concat_ws(",", id, name, email) from kec.employee;

select name, length(name), char_length(name), character_length(name) from kec.employee;

select substring("Samantha", 4);

select replace("KEC Training", "Training", "Webinar");

select trim(" abcdef  ");
select ltrim(" abcdef  ");
select rtrim(" abcdef  ");

select reverse(lcase("Ala"));
select reverse(lower("Ala"));
select reverse(ucase("Ala"));
select reverse(upper("Ala"));


select left("Samantha", 5);
select right("Samantha", 5);

-- Date & Time functions
select now(); -- current time stamp
select curdate(); -- current date
select curtime(); -- current time
select day(curdate()); -- current day
select month(curdate()); -- current month
select year(curdate()); -- current year

select weekday(curdate()); -- week number in a month
select dayname(curdate()); -- name of a week
select curdate(), date_add(curdate(), INTERVAL 90 DAY); -- adding days
select datdiff(curdate(), date_add(curdate(), INTERVAL 90 DAY)); -- difference between 2 dates

-- date formating functions
%Y - 2025
%y - 25
%M - September
%m - 09 (range: 01 - 12)
%b - Sep
%d - 18 (range: 01 - 31)
%e - 18 (range: 1 - 31)
%H - 12 (range: 00 - 23) -> 24-hour
%h - 12 (range: 00 - 12) -> 12-hour
%i - 11 (range: 00 - 59) -> minutes
%s - 11 (range: 0 - 59) -> seconds
%p - P.M (range: A.M / P.M)
%W - (Monday, Tuesday,....)
%a - (Mon, Tue,..)

September 18 2025

select date_format(curdate(), %M %d %Y);
select date_format(now(), %M %d %Y %p);

-- creating a user in mysql
create user 'admin'@'localhost' IDENTIFIED BY 'Demo@!4#';

-- granting access to user
GRANT SELECT, INSERT, UPDATE, DELETE ON KEC.* TO 'admin'@'localhost';

-- grant full access on server
GRANT * ON *.* TO 'admin'@'localhost';

-- access privilege of a user
SHOW GRANTS FOR 'admin'@'localhost';

-- to revoke permissions from a user
REVOKE ALL PRIVILEGES ON kec.* TO 'admin'@'localhost';

-- index operations
ALTER  TABLE kec.users ADD INDEX idx_users_email (email);

CREATE INDEX idx_users_email ON kec.users(email);