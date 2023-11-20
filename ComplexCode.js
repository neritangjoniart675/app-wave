/*
   Filename: ComplexCode.js
   Description: This code demonstrates a complex JavaScript program that integrates various advanced concepts. It implements a virtual marketplace where users can buy and sell products, manage their inventory, and interact with other users.
*/

// User class representing a marketplace user
class User {
   constructor(name, email) {
      this.name = name;
      this.email = email;
      this.wallet = 0;
      this.inventory = [];
   }

   addFunds(amount) {
      this.wallet += amount;
   }

   buyProduct(product, seller, quantity) {
      const totalPrice = product.price * quantity;
      if (this.wallet >= totalPrice) {
         this.wallet -= totalPrice;
         seller.sellProduct(product, quantity);
         this.inventory.push({ product, quantity });
         console.log(`${this.name} bought ${quantity}x ${product.name} from ${seller.name} for $${totalPrice}.`);
      } else {
         console.log(`${this.name}'s wallet balance is insufficient to buy ${quantity}x ${product.name} from ${seller.name}.`);
      }
   }

   sellProduct(product, quantity) {
      const inventoryItem = this.inventory.find(item => item.product === product);
      if (inventoryItem && inventoryItem.quantity >= quantity) {
         inventoryItem.quantity -= quantity;
         if (inventoryItem.quantity === 0) {
            this.inventory = this.inventory.filter(item => item !== inventoryItem);
         }
         const totalPrice = product.price * quantity;
         this.wallet += totalPrice;
         console.log(`${this.name} sold ${quantity}x ${product.name} for $${totalPrice}.`);
      } else {
         console.log(`${this.name} does not have sufficient quantity of ${product.name} to sell.`);
      }
   }
}

// Product class representing marketplace products
class Product {
   constructor(name, price) {
      this.name = name;
      this.price = price;
   }
}

// Create some test users
const user1 = new User("John Doe", "john@example.com");
const user2 = new User("Jane Smith", "jane@example.com");

// Create some test products
const product1 = new Product("Laptop", 1000);
const product2 = new Product("Smartphone", 800);
const product3 = new Product("Headphones", 100);

// Test user interactions
user1.addFunds(2000);
user2.addFunds(1000);
user1.buyProduct(product1, user2, 2);
user2.buyProduct(product2, user1, 1);
user1.sellProduct(product1, 1);
user1.sellProduct(product3, 1);

// Output user information
console.log("User 1:");
console.log(user1);
console.log("User 2:");
console.log(user2);