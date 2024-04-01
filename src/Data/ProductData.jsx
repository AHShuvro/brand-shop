const products = [
    {
        "image": "https://i.ibb.co/whQNFgr/Laptop-Pro-15.jpg",
        "name": "Laptop Pro 15",
        "brandName": "Dell",
        "type": "Laptop",
        "price": 1299.99,
        "shortDescription": "Powerful laptop for work and entertainment.",
        "rating": 4.7,
        "id": 1
    },
    {
        "image": "https://i.ibb.co/xMrzm0D/sebastian-bednarek-x2-Z0u-Nj-Quo-unsplash.jpg",
        "name": "Desktop Elite X",
        "brandName": "Dell",
        "type": "Desktop",
        "price": 899.99,
        "shortDescription": "High-performance desktop for professional tasks.",
        "rating": 4.5,
        "id": 2
    },
    {
        "image": "https://i.ibb.co/WBRrdt9/alex-ghizila-v-Uj-Jztd-X4-H0-unsplash.jpg",
        "name": "Latitude E7450",
        "brandName": "Dell",
        "type": "Laptop",
        "price": 699.99,
        "shortDescription": "Lightweight and reliable laptop for business use.",
        "rating": 4.3,
        "id": 3
    },
    {
        "image": "https://i.ibb.co/YcyPjHH/df-hpz1g2-hero.jpg",
        "name": "Workstation Z1",
        "brandName": "Dell",
        "type": "Workstation",
        "price": 1799.99,
        "shortDescription": "High-end workstation for creative professionals.",
        "rating": 4.1,
        "id": 4
    },
    {
        "image": "https://i.ibb.co/zRHh9Dm/anh-nhat-Pd-ALQmf-Eqv-E-unsplash.jpg",
        "name": "Galaxy S21",
        "brandName": "Samsung",
        "type": "Phone",
        "price": 799.99,
        "shortDescription": "Next-gen Samsung smartphone with stunning features.",
        "rating": 4.6,
        "id": 5
    },
    {
        "image": "https://i.ibb.co/NCfDLTb/mana-akbarzadegan-nz-Wv7exg-VI-unsplash.jpg",
        "name": "Galaxy Tab A7",
        "brandName": "Samsung",
        "type": "Tablet",
        "price": 349.99,
        "shortDescription": "Affordable and versatile Samsung tablet for all ages.",
        "rating": 4.4,
        "id": 6
    },
    {
        "image": "https://i.ibb.co/7KSJyWX/wallpaperflare-com-wallpaper.jpg",
        "name": "QLED 4K Smart TV",
        "brandName": "Samsung",
        "type": "TV",
        "price": 999.99,
        "shortDescription": "Immerse yourself in 4K entertainment with Samsung's QLED TV.",
        "rating": 4.5,
        "id": 7
    },
    {
        "image": "https://i.ibb.co/yYt4s1R/alejandro-escamilla-t-AKXap853r-Y-unsplash.jpg",
        "name": "Galaxy Book Pro",
        "brandName": "Samsung",
        "type": "Laptop",
        "price": 1199.99,
        "shortDescription": "Samsung's slim and powerful laptop for on-the-go professionals.",
        "rating": 4.2,
        "id": 8
    },
    {
        "image": "https://i.ibb.co/7byzPd1/daniel-romero-c-Cxg-KIA5-RA-unsplash.jpg",
        "name": "YogaBook Pro",
        "brandName": "Lenovo",
        "type": "Tablet",
        "price": 799.99,
        "shortDescription": "Innovative 2-in-1 tablet and laptop from Lenovo.",
        "rating": 4.6,
        "id": 9
    },
    {
        "image": "https://i.ibb.co/xMrzm0D/sebastian-bednarek-x2-Z0u-Nj-Quo-unsplash.jpg",
        "name": "ThinkCentre M80",
        "brandName": "Lenovo",
        "type": "Desktop",
        "price": 849.99,
        "shortDescription": "Lenovo's compact desktop for business and home use.",
        "rating": 4.5,
        "id": 10
    },
    {
        "image": "https://i.ibb.co/tP34p5C/mike-meyers-r-GBtpa-BQ3-LA-unsplash.jpg",
        "name": "Xperia 1 III",
        "brandName": "Sony",
        "type": "Phone",
        "price": 999.99,
        "shortDescription": "Sony's flagship phone for exceptional photography and entertainment.",
        "rating": 4.7,
        "id": 11
    },
    {
        "image": "https://i.ibb.co/x52SJFT/marques-kaspbrak-5w-Thjq-G6-HBU-unsplash.jpg",
        "name": "BRAVIA 4K Smart TV",
        "brandName": "Sony",
        "type": "TV",
        "price": 1499.99,
        "shortDescription": "Experience stunning 4K visuals with Sony's BRAVIA Smart TV.",
        "rating": 4.8,
        "id": 12
    },
    {
        "image": "https://i.ibb.co/wh7VmYF/brent-ninaber-6qesn-UQce-JA-unsplash.jpg",
        "name": "Alpha Mirrorless Camera",
        "brandName": "Sony",
        "type": "Camera",
        "price": 1299.99,
        "shortDescription": "Capture professional-quality images with Sony's Alpha Mirrorless Camera.",
        "rating": 4.5,
        "id": 13
    },
    {
        "image": "https://i.ibb.co/nL2C93Q/quaritsch-photography-s-Ktdq-Sa-o-FA-unsplash.jpg",
        "name": "iMac Pro",
        "brandName": "Apple",
        "type": "Desktop",
        "price": 2199.99,
        "shortDescription": "Apple's powerful all-in-one desktop for creative professionals.",
        "rating": 4.8,
        "id": 14
    },
    {
        "image": "https://i.ibb.co/yYt4s1R/alejandro-escamilla-t-AKXap853r-Y-unsplash.jpg",
        "name": "MacBook Air",
        "brandName": "Apple",
        "type": "Laptop",
        "price": 1199.99,
        "shortDescription": "Lightweight and sleek, the MacBook Air is perfect for portability.",
        "rating": 4.6,
        "id": 15
    },
    {
        "image": "https://i.ibb.co/7byzPd1/daniel-romero-c-Cxg-KIA5-RA-unsplash.jpg",
        "name": "iPad Mini 6",
        "brandName": "Apple",
        "type": "Tablet",
        "price": 499.99,
        "shortDescription": "Compact and versatile, the iPad Mini 6 is perfect for on-the-go.",
        "rating": 4.4,
        "id": 16
    },
    {
        "image": "https://i.ibb.co/YBz0P4x/brooke-cagle-Ftx92-UKO3-Xg-unsplash.jpg",
        "name": "EliteBook x360",
        "brandName": "HP",
        "type": "Laptop",
        "price": 1299.99,
        "shortDescription": "HP EliteBook x360: A premium 2-in-1 laptop for professionals.",
        "rating": 4.7,
        "id": 17
    },
    {
        "image": "https://i.ibb.co/g6z8pH7/mildly-useful-J433-OFf-Il-PQ-unsplash.jpg",
        "name": "Xperia 1 III",
        "brandName": "Lenovo",
        "type": "Phone",
        "price": 899.99,
        "shortDescription": "Sony's flagship Xperia phone for an exceptional mobile experience.",
        "rating": 4.6,
        "id": 18
    },
    {
        "image": "https://i.ibb.co/hg90J4m/dell-Gi3i-UJ1-Fwx-I-unsplash.jpg",
        "name": "HP Omen Gaming Laptop",
        "brandName": "HP",
        "type": "Laptop",
        "price": 1499.99,
        "shortDescription": "Experience high-performance gaming with the HP Omen laptop.",
        "rating": 4.9,
        "id": 19
    },
    {
        "image": "https://i.ibb.co/JkbSZzJ/infino-photography-LAacfd1-Hn8g-unsplash.jpg",
        "name": "Samsung Galaxy Watch 4",
        "brandName": "HP",
        "type": "Wearable",
        "price": 299.99,
        "shortDescription": "Stay connected and track your fitness with the Galaxy Watch 4.",
        "rating": 4.4,
        "id": 20
    },
    {
        "image": "https://i.ibb.co/g6z8pH7/mildly-useful-J433-OFf-Il-PQ-unsplash.jpg",
        "name": "Sony Xperia Compact",
        "brandName": "Sony",
        "type": "Phone",
        "price": 699.99,
        "shortDescription": "A compact and powerful smartphone from Sony.",
        "rating": 4.5,
        "id": 21
    },
    {
        "image": "https://i.ibb.co/0yqLW8g/linus-mimietz-gvpt-Kmonylk-unsplash.jpg",
        "name": "Lenovo IdeaCentre",
        "brandName": "Lenovo",
        "type": "Desktop",
        "price": 799.99,
        "shortDescription": "Lenovo's IdeaCentre for home and office computing.",
        "rating": 4.2,
        "id": 22
    },
    {
        "image": "https://i.ibb.co/JCt7Yk2/infino-photography-URl-Xm2-Kx6u-I-unsplash.jpg",
        "name": "Apple Watch Series 7",
        "brandName": "Apple",
        "type": "Wearable",
        "price": 399.99,
        "shortDescription": "The Apple Watch Series 7: Your everyday fitness and style companion.",
        "rating": 4.7,
        "id": 23
    },
    {
        "image": "https://i.ibb.co/wRSyHfR/mahrous-houses-5-Ao-Oejj-RUr-A-unsplash.jpg",
        "name": "HP LaserJet Pro",
        "brandName": "HP",
        "type": "Printer",
        "price": 199.99,
        "shortDescription": "Efficient and reliable printing with the HP LaserJet Pro.",
        "rating": 4.3,
        "id": 24
    }
]


export {products};