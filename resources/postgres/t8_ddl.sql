-- Run the PostgreSQL script with following command
-- psql -h <host> -U <user> -d t8 --set PROFILE=<dev/staging/prod> -f resources/postgres/t8_ddl.sql

-- blogs Table Definition ----------------------------------------------

CREATE TABLE IF NOT EXISTS blogs (
    id uuid NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now(),
    title text DEFAULT ''::text,
    description TEXT NOT NULL,
    "readingTime" smallint,
    tags character varying[],
    "blogId" uuid DEFAULT uuid_generate_v4() UNIQUE PRIMARY KEY,
    heading character varying,
    "publisherName" text,
    "blogImage" character varying
);
COMMENT ON TABLE blogs IS 'cms-blogs';

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX blogs_blog_id_key ON blogs("blogId" uuid_ops);
CREATE UNIQUE INDEX blogs_pkey ON blogs("blogId" uuid_ops);

-- users Table Definition ----------------------------------------------

CREATE TABLE IF NOT EXISTS users (
    id text PRIMARY KEY,
    "createdAt" timestamp with time zone DEFAULT now(),
    "fullName" character varying,
    phone text
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX users_pkey ON users(id text_ops);
