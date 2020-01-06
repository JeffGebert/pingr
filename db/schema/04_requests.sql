-- Drop and recreate requests table (Example)

DROP TABLE IF EXISTS requests CASCADE;
CREATE TABLE requests (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  business_id INTEGER REFERENCES businesses(id) DEFAULT NULL,
  business_category_id INTEGER REFERENCES business_categories(id) NOT NULL,
  service_category_id INTEGER REFERENCES service_categories(id) NOT NULL,
  status_id INTEGER REFERENCES statuses(id) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  is_prepaid BOOLEAN NOT NULL DEFAULT FALSE,
  start_time DATETIME NOT NULL,
  end_time DATETIME NOT NULL
);
