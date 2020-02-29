/** --------- EB 1 ---------- **/

CREATE DATABASE bd_teste;
USE bd_teste;

CREATE TABLE post (

    id INTEGER NOT NULL PRIMARY KEY,
    author VARCHAR(40) NOT NULL,
    title VARCHAR(50),
    text_post VARCHAR(200),
    created_at TIMESTAMP(6),
    update_at TIMESTAMP(6)
);

CREATE TABLE comments (
    id INTEGER NOT NULL PRIMARY KEY,
    post_id INTEGER,
    message VARCHAR(200),
    author VARCHAR(50),
    created_at TIMESTAMP,
    update_at TIMESTAMP,
    INDEX fk_coments_posts_idx (post_id ASC),
    CONSTRAINT fk_coments_post
    FOREIGN KEY (post_id)
    REFERENCES bd_teste.post (id)
  
);


/** --------- EB 2 ---------- **/

INSERT INTO post (author, title, text_post) VALUES ('Vania', 'Olha o que aconteceu', 'Hoje fui na padaria e encontrei um cachorrinho muito fofinho');

INSERT INTO comments (message, author) VALUES ('Ana', 'Eu tbm vi!!!');

/** --------- EB 3 ---------- **/

SELECT text_post FROM post ORDER BY title ASC;