import ProductCard from "../components/ProductCard";

function Home() {
  const products = [
    {
      id: 1,
      name: "Gaming Laptop",
      price: 69999,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
    {
      id: 2,
      name: "iPhone",
      price: 79999,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
    {
      id: 3,
      name: "Headphones",
      price: 2999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 4999,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 1999,
      image: "https://www.rtings.com/images/reviews/speaker/best/by-usage/portable/portable-medium.jpg",
    },
    {
      id: 6,
      name: "DSLR Camera",
      price: 45999,
      image: "https://images.unsplash.com/photo-1519183071298-a2962be96c85?w=500",
    },
    {
      id: 7,
      name: "Tablet",
      price: 24999,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    },
    {
      id: 8,
      name: "Wireless Mouse",
      price: 999,
      image: "https://images.unsplash.com/photo-1587825140708-1c7d5a7a7f0b?w=500",
    },
    {
      id: 9,
      name: "Mechanical Keyboard",
      price: 3499,
      image: "https://images.unsplash.com/photo-1587202372775-989c0d7f7f3e?w=500",
    },
    {
      id: 10,
      name: "Smart TV",
      price: 55999,
      image: "https://images.unsplash.com/photo-1593784991095-3e6e8d2f6b6a?w=500",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1>Discover The Future Of Shopping</h1>
        <p>Premium Electronics • Fast Delivery • Best Prices</p>
        <button className="shop-btn">✨ Shop Now</button>
      </section>

      {/* Categories */}
      <section className="categories">
        <div className="category">💻 Laptops</div>
        <div className="category">📱 Mobiles</div>
        <div className="category">⌚ Watches</div>
        <div className="category">🎧 Audio</div>
        <div className="category">📷 Cameras</div>
        <div className="category">📺 TVs</div>
      </section>

      {/* Trending Products */}
      <h2 className="title">🔥 Trending Products</h2>
      <div className="products">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </>
  );
}

export default Home;