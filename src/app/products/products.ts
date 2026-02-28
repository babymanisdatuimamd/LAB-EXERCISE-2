import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  price: number;
  image: string;
  stock: number;
}

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
})
export class Products {
  products: Product[] = [
    {
      name: 'Wireless Mouse',
      price: 599,
      image: './ergonomic-wireless-mouse-sleek-design-enhanced-functionality_606187-3379.avif', // replace with actual image path
      stock: 10,
    },
    {
      name: 'Bluetooth Headphones',
      price: 1299,
      image: './pngtree-earphones-wireless-earphones-bluetooth-earphones-transparent-png-image_9062661.png', // replace with actual image path./
      stock: 5,
    },
    {
      name: 'Laptop Backpack',
      price: 1099,
      image: './61Va+gdgMoL._AC_SL1500_.jpg', // replace with actual image path./
      stock: 3,
    },
    {
      name: 'USB Flash Drive (64GB)',
      price: 449,
      image: './kingston_dtxs_64gb_64gb_datatraveler_exodia_s_1908650.jpg', // replace with actual image path./
      stock: 7,
    },
    {
      name: 'Desk Lamp',
      price: 799,
      image: './pngimg.com - lamp_PNG108698.png', // replace with actual image path./
      stock: 2,
    },
    {
      name: 'Notebook Set',
      price: 299,
      image: './colorful-notebooks-zep81qopcwx6wmjb.jpg', // replace with actual image path
      stock: 20,
    },
  ];

  // Function to handle "Add to Cart" button click
  addToCart(item: Product) {
    if (item.stock > 0) {
      item.stock--;
    }
  }
}