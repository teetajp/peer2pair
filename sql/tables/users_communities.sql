CREATE TABLE `peer2pair`.`users_communities` (
  `user_id` INT NOT NULL,
  `community_id` INT NOT NULL,
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `community_id_idx` (`community_id` ASC) VISIBLE,
  CONSTRAINT `users_comm_users_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `peer2pair`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `users_comm_community_id`
    FOREIGN KEY (`community_id`)
    REFERENCES `peer2pair`.`communities` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
