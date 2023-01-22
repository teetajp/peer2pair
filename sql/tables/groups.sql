CREATE TABLE `peer2pair`.`groups` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `community_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `community_id_idx` (`community_id` ASC) VISIBLE,
  CONSTRAINT `community_id`
    FOREIGN KEY (`community_id`)
    REFERENCES `peer2pair`.`communities` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
