import { faker } from "@faker-js/faker";

const database = { productsFashion: [],  productsCats: [], };

for (let index = 0; index < 26; index++) {
  database.productsCats.push({
    id: index,
    name: faker.animal.cat(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(100, 200, 0, "$"),
    quantity: faker.random.numeric(1),
    //imageUrl: faker.image.fashion(640, 480, true)
    imageUrl: faker.image.cats(640, 480, true),
    //imageUrl: faker.image.transport(width?: number = 640, height?: number = 480, randomize?: boolean = false): string
    //imageUrl: faker.image.food(width?: number = 640, height?: number = 480, randomize?: boolean = false): string
    //imageUrl: 'https://picsum.photos/400?random=' + index
  });
}

for (let index = 26; index < 51; index++) {
  database.productsFashion.push({
    id: index,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(100, 200, 0, "$"),
    quantity: faker.random.numeric(),
    imageUrl: faker.image.fashion(640, 480, true)
    //imageUrl: faker.image.cats(640, 480, true),
    //imageUrl: faker.image.transport(width?: number = 640, height?: number = 480, randomize?: boolean = false): string
    //imageUrl: faker.image.food(width?: number = 640, height?: number = 480, randomize?: boolean = false): string
    //imageUrl: 'https://picsum.photos/400?random=' + index
  });
}
console.log(JSON.stringify(database));
