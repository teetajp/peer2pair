CREATE TABLE posts (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(75) NOT NULL,
    content TEXT NOT NULL,
    author_id INT NOT NULL,
    group_id INT NOT NULL,
    _created TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id),
    FOREIGN KEY (author_id) REFERENCES users (id),
    FOREIGN KEY (group_id) REFERENCES `peer2pair`.`groups` (id)
)