/* Create Database as career application */

CREATE TABLE job_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    company VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    salary DECIMAL(10, 2),
    job_type ENUM('Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship') NOT NULL,
    posted_date DATE NOT NULL,
    application_deadline DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

/* Sample Data for job_posts table */
INSERT INTO job_posts (title, description, company, location, salary, job_type, posted_date, application_deadline) VALUES
('Software Engineer', 'Develop and maintain software applications.', 'Tech Innovators', 'New York, NY', 90000.00, 'Full-time', '2024-06-24', '2024-07-24'),
('Data Analyst', 'Analyze and interpret complex data sets.', 'Data Solutions Inc.', 'San Francisco, CA', 80000.00, 'Full-time', '2024-06-24', '2024-07-24'),
('Project Manager', 'Oversee IT projects from inception to completion.', 'Future Tech', 'Austin, TX', 95000.00, 'Full-time', '2024-06-24', '2024-07-24'),
('UX Designer', 'Design user-friendly interfaces for web and mobile apps.', 'Creative Minds', 'Seattle, WA', 85000.00, 'Full-time', '2024-06-24', '2024-07-24'),
('IT Support Specialist', 'Provide technical support to clients and staff.', 'Supportive Tech', 'Chicago, IL', 60000.00, 'Full-time', '2024-06-24', '2024-07-24');