const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;
let cors = require('cors');

app.use(cors());

let products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];
function sortedProducts(ele1, ele2) {
  return ele2.rating - ele1.rating;
}
app.get('/products/sort/popularity', (req, res) => {
  let productcopy = products.slice();
  productcopy.sort(sortedProducts);
  res.json(productcopy);
});
function sortedhighTolow(ele1, ele2) {
  return ele2.price - ele1.price;
}
app.get('/products/sort/price-high-to-low', (req, res) => {
  let productcopy = products.slice();
  productcopy.sort(sortedhighTolow);
  res.json(productcopy);
});
function sortedlowtoHigh(ele1, ele2) {
  return ele1.price - ele2.price;
}
app.get('/products/sort/price-low-to-high', (req, res) => {
  let productcopy = products.slice();
  productcopy.sort(sortedlowtoHigh);
  res.json(productcopy);
});
function filterRam(ele, ramrange) {
  return ele.ram === ramrange;
}
app.get('/products/filter/ram', (req, res) => {
  let ramrange = parseFloat(req.query.ramrange);
  let result = products.filter((ele) => filterRam(ele, ramrange));
  res.json(result);
});
function filterRom(ele, romrange) {
  return ele.rom === romrange;
}
app.get('/products/filter/rom', (req, res) => {
  let romrange = parseFloat(req.query.romrange);
  let result = products.filter((ele) => filterRom(ele, romrange));
  res.json(result);
});
function filterBrand(ele, brandname) {
  return ele.brand.toLowerCase() === brandname.toLowerCase();
}
app.get('/products/filter/brand', (req, res) => {
  let brandname = req.query.brandname;
  let result = products.filter((ele) => filterBrand(ele, brandname));
  res.json(result);
});

function filterOs(ele, osname) {
  return ele.os.toLowerCase() === osname.toLowerCase();
}
app.get('/products/filter/os', (req, res) => {
  let osname = req.query.osname;
  let result = products.filter((ele) => filterOs(ele, osname));
  res.json(result);
});
function filterPrice(ele, price) {
  return ele.price <= price;
}
app.get('/products/filter/price', (req, res) => {
  let price = parseFloat(req.query.price);
  let result = products.filter((ele) => filterPrice(ele, price));
  res.json(result);
});
app.get('/products', (req, res) => {
  res.json(products);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
