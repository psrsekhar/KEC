-- mysql version
select @@version;
select version();

-- database operations
    -- create a database
    create database if not exists kec default character set utf8mb4 collate utf8mb4_general_ci;
    -- to allow all utf8mb4_general_0900_ai_ci

    -- showing all databases
    show databases;

    -- selecting a database
    use kec;

    -- delete a database
    drop database if exists kec;

-- table operations
    -- create a table
    create table if not exists kec.department (
        id tinyint unsigned not null auto_increment primary key,
        name varchar(100) not null unique,
        created_on timestamp not null default current_timestamp
    ) engine=InnoDB default charset=utf8mb4 collate=utf8mb4_general_ci;

    create table if not exists kec.student (
        id int unsigned not null auto_increment primary key,
        name varchar(100) not null,
        email varchar(100) not null unique,
        phone_number varchar(15) not null unique,
        address text not null,
        department_id tinyint unsigned not null,
        created_on timestamp not null default current_timestamp,
        FOREIGN KEY (department_id) REFERENCES kec.department(id) ON DELETE CASCADE, 
        FOREIGN KEY (department_id) REFERENCES kec.department(id) ON UPDATE CASCADE
    ) engine=InnoDB default charset=utf8mb4 collate=utf8mb4_general_ci;

    -- showing all tables
    show tables;

    -- describe a table
    desc kec.department;
    desc kec.student;

    -- add a column
    alter table kec.student add column dob date after name;

    -- modifying a column
    alter table kec.student modify column phone_number varchar(10) not null unique;

    -- rename a column
    alter table kec.student change phone_number mobile_number varchar(10) not null unique;

    -- drop a column
    alter table kec.student drop column dob;

    -- drop a table
    drop table if exists kec.student;
    drop table if exists kec.department;

    -- single insert operation
    insert into kec.department values (1, 'Computer Science', current_timestamp);

    insert into kec.department(name) values ('Electronics and Communication');

    -- multiple insert operation
    insert into kec.department(name) values ('Mechanical Engineering'), ('Civil Engineering'), ('Electrical Engineering');

    -- test table
    create table if not exists kec.test (
        name varchar(100) not null unique
    ) engine=InnoDB default charset=utf8mb4 collate=utf8mb4_general_ci;
    
    -- select insert operation
    insert into kec.test (name) select name from kec.department;

    -- insert ignore operation
    insert ignore into kec.department values (1, 'Transport', current_timestamp);

    -- insert on duplicate key
    insert into kec.department values (1, 'Transport', current_timestamp) on duplicate key update name='Transport';

    -- replace a row
    replace into kec.department values (1, 'Aerospace Engineering', current_timestamp);

    -- bulk insert from a file
    LOAD DATA INFILE 'C:/path_to_your_file/departments.csv'
    INTO TABLE kec.department;

    -- get all rows from a table
    select * from kec.department;

    -- get specific columns from a table
    select name, created_on from kec.department;

    select 2;

    select 2+3;

    -- conditional selection