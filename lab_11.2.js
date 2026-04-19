class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class Cart {
  constructor() {
    this.items = [];
  }

  addProduct(product) {
    this.items.push( product);
  }

  getTotal() {
    var sum = 0;
    for(var i=0; i<this.items.length; i++){
        console.log('=='+this.items[i].price);
        console.log('==='+this.items[i].quantity);
        console.log('===='+this.items[i]);
        sum+= this.items[i].price * this.items[i].quantity;
    }
    return sum;
  }

  getDiscountedTotal() {
    const total = this.getTotal();
    return total > 100000 ? total * 0.9 : total;
  }
}

const cart = new Cart();
cart.addProduct(new Product('Утас', 2500000, 1)) ;
cart.addProduct(new Product('Computer', 750000, 3));
cart.addProduct(new Product('Ipad', 399900, 5));

console.log(cart);
console.log(cart.items);

console.log('Нийт үнэ:', cart.getTotal(), '₮');
console.log('Хөнгөлөлттэй үнэ:', cart.getDiscountedTotal(), '₮');