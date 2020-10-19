DROP TABLE IF EXISTS treasure_cards
CREATE TABLE treasure_cards( 
    id SERIAL PRIMARY KEY, 
    cardName VARCHAR(255),
);

INSERT INTO treasure_cards(cardname) VALUES ('test card');