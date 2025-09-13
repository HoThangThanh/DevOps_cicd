const express = require('express');
const path = require('path');
const app = express();

// cấu hình view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes chính
app.get('/', (req, res) => res.render('index'));
app.get('/product/:id', (req, res) => res.render('product'));
app.get('/cart', (req, res) => res.render('cart'));
app.get('/checkout', (req, res) => res.render('checkout'));
app.get('/admin', (req, res) => res.render('admin'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server chạy tại http://localhost:${PORT}`));
