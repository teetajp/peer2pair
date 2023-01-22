CREATE TABLE users_groups (
    user_id INT NOT NULL,
    group_id INT NOT NULL,
    streak INT DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (group_id) REFERENCES `peer2pair`.`groups` (id)
)