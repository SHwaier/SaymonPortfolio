-- Clean up incorrect data first
DELETE FROM public.skills 
WHERE category IN ('Additional Tools', 'Current Learning');

-- Seed Additional Skills and Learning (Corrected)
INSERT INTO public.skills (category, name, level, years)
VALUES
  -- Additional Tools
  ('Additional Tools', 'REST APIs', 'Intermediate', '2y+'),
  ('Additional Tools', 'JWT Tokens', 'Intermediate', '2y+'),
  ('Additional Tools', 'C', 'Intermediate', '1y+'),
  
  -- Current Learning
  ('Current Learning', 'Docker', 'Beginner', 'N/A'),
  ('Current Learning', 'OpenCV', 'Beginner', 'N/A'),
  ('Current Learning', 'OpenGL', 'Beginner', 'N/A');
