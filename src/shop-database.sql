CREATE DATABASE smart_shop_products;


CREATE TABLE products(
    product_id BIGSERIAL PRIMARY KEY,
     product_thumbnail VARCHAR(1000) NOT NULL,
      product_title VARCHAR(255) NOT NULL,
       product_description TEXT NOT NULL,
        product_cost INTEGER NOT NULL,
         on_offer BOOLEAN NOT NULL
         );


          INSERT INTO products( product_thumbnail, product_title, product_description,  product_cost,  on_offer)
           VALUES('https://unsplash/cat', 'Cat Toy', 'Image of a toy cat', 400, FALSE),
            ('https://unsplash/dog', 'Dog Toy', 'Image of a dog toy', 800, TRUE),
             ('https://unsplash/doll', 'Doll Toy', 'Image of a doll toy', 1000, TRUE);
