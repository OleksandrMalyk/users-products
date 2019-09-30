import Faker from 'faker';

export default class UsersProductsApi {

    static fetchUsers() {
        let users = [];

        for (let i = 0; i < 15; i++) {
            const user = {
                key: i.toString(),
                firstName: Faker.name.firstName(),
                lastName: Faker.name.lastName(),
                imageSrc: Faker.internet.avatar(),
            };
            users.push(user);
        }

        return users;
    }

    static fetchMoreUsers(params) {
        let users = [];
        const moreUsersCount = 5;
        const resultCount = params.currentUsersCount + moreUsersCount;

        for (let i = params.currentUsersCount; i < resultCount; i++) {
            const user = {
                key: i.toString(),
                firstName: Faker.name.firstName(),
                lastName: Faker.name.lastName(),
                imageSrc: Faker.internet.avatar(),
            };
            users.push(user);
        }

        return users;
    }

    static fetchProducts() {
        let products = [];

        for (let i = 0; i < 15; i++) {
            const product = {
                key: i.toString(),
                name: Faker.commerce.productName(),
                price: Faker.commerce.price(),
                imageSrc: `https://loremflickr.com/400/400?a=${Date.now().toString() + i}`,
            };
            products.push(product);
        }

        return products;
    }

    static fetchMoreProducts(params) {
        let products = [];
        const moreProductsCount = 5;
        const resultCount = params.currentProductsCount + moreProductsCount;

        for (let i = params.currentProductsCount; i < resultCount; i++) {
            const product = {
                key: i.toString(),
                name: Faker.commerce.productName(),
                price: Faker.commerce.price(),
                imageSrc: `https://loremflickr.com/400/400?a=${Date.now().toString() + i}}`,
            };
            products.push(product);
        }

        return products;
    }
}