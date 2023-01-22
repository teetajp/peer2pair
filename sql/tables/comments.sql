CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT,
    author_id INT NOT NULL,
    post_id INT NOT NULL,
    content TEXT NOT NULL,
    _created TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id),
    FOREIGN KEY (author_id) REFERENCES users (id),
    FOREIGN KEY (post_id) REFERENCES posts (id)
)