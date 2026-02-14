-- Seed Projects
INSERT INTO public.projects (title, description, image, technologies, live_url, github_url, size)
VALUES
  (
    'Work Scheduler',
    'Automated logic to convert work schedules into Google Calendar events, reducing check time. Increased accessibility and scalability using abstract logic with N8N.',
    '/mockup.jpg',
    ARRAY['Python', 'N8N', 'Google Calendar API', 'Cloudflare Tunnel'],
    '',
    'https://github.com/SHwaier/Work-To-Calendar',
    'large'
  ),
  (
    'Fancy Pants Game Engine',
    'A fully functional 2D game engine created from scratch. Features a physics engine, user interface, and progress tracker.',
    '/mockup.jpg',
    ARRAY['Java', 'Java Swing', 'Gradle', 'AWT'],
    '',
    '',
    NULL
  ),
  (
    'Random Pixel Generator',
    'A Windows Forms application that uses custom user input to generate backgrounds by manipulating data into pixels',
    '/mockup.jpg',
    ARRAY['C#', 'Material Skin', 'XML Serialization'],
    '',
    'https://github.com/SHwaier/RandomPixelImage',
    NULL
  ),
  (
    'CSharp-DocGenerator',
    'Takes in C# code, parses comments and relevant method documentation to generate a markdown/HTML file of the documentation',
    '/mockup.jpg',
    ARRAY['C#', 'Windows Forms'],
    '',
    'https://github.com/SHwaier/CSharp-DocGenerator',
    NULL
  );

-- Seed Experience
INSERT INTO public.experience (title, company, location, start_date, end_date, description, technologies)
VALUES
  (
    'Sales Representative',
    'TELUS Communications',
    'Windsor, ON',
    'Oct 2023',
    'Present',
    'Developed a growing book-of-business by fostering loyalty and turning in-store down time into over-the-phone sales. Exceeded sales targets by 126.9% for Fiber expansion.',
    ARRAY['Sales', 'CRM', 'Customer Service']
  ),
  (
    'Frontend Developer (Hackathon)',
    'Blaze Guard - NASA Space Apps',
    'Windsor, ON',
    'Oct 2023',
    'Oct 2023',
    'Won 1st place regionally. Designed a full-stack web app to track fires. Created a responsive 2D graph for data visualization and the overall web application layout.',
    ARRAY['Next.js', 'React', 'TypeScript', 'SCSS', 'Figma', 'NASA API']
  ),
  (
    'WordPress Developer',
    'Integrative Canadian Group Organization',
    'Windsor, ON',
    'Jun 2022',
    'Aug 2023',
    'Developed 2 responsive websites resulting in a 56% boost in traffic. Optimized websites for devices, achieving an 85% performance improvement.',
    ARRAY['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript']
  );

-- Seed Skills
-- Frontend Development
INSERT INTO public.skills (category, name, level, years)
VALUES
  ('Frontend Development', 'React', 'Expert', '3y+'),
  ('Frontend Development', 'Next.js', 'Expert', '3y+'),
  ('Frontend Development', 'TypeScript', 'Advanced', '2y+'),
  ('Frontend Development', 'JavaScript', 'Expert', '4y+'),
  ('Frontend Development', 'Tailwind CSS', 'Expert', '3y+'),
  ('Frontend Development', 'HTML/CSS', 'Expert', '5y+');

-- Backend Development
INSERT INTO public.skills (category, name, level, years)
VALUES
  ('Backend Development', 'Node.js', 'Advanced', '3y+'),
  ('Backend Development', 'C#', 'Advanced', '4y+'),
  ('Backend Development', 'Java', 'Advanced', '3y+'),
  ('Backend Development', 'PHP', 'Intermediate', '2y+'),
  ('Backend Development', 'SQL', 'Intermediate', '2y+'),
  ('Backend Development', 'MongoDB', 'Intermediate', '1y+');

-- Tools & DevOps
INSERT INTO public.skills (category, name, level, years)
VALUES
  ('Tools & DevOps', 'Git/GitHub', 'Expert', '4y+'),
  ('Tools & DevOps', 'Linux', 'Advanced', '3y+'),
  ('Tools & DevOps', 'Figma', 'Intermediate', '2y+'),
  ('Tools & DevOps', 'Cloudflare', 'Intermediate', '1y+'),
  ('Tools & DevOps', 'Gradle', 'Intermediate', '2y+'),
  ('Tools & DevOps', 'JUnit Testing', 'Intermediate', '2y+');
