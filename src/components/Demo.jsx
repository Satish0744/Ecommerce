import React, { useState, useEffect } from 'react';
// import './Demo.css'; // optional, for styling

function Demo() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        setProducts(data.products || []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Helper: render star rating
  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    let stars = [];
    for (let i = 0; i < full; i++) stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    if (half) stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    for (let i = 0; i < empty; i++) stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    return stars;
  };

  // Map category to icon
  const getCategoryIcon = (category) => {
    const map = {
      'smartphones': 'fa-mobile-alt',
      'laptops': 'fa-laptop',
      'fragrances': 'fa-spray-can',
      'skincare': 'fa-leaf',
      'groceries': 'fa-apple-alt',
      'home-decoration': 'fa-couch',
      'furniture': 'fa-chair',
      'tops': 'fa-tshirt',
      'womens-dresses': 'fa-female',
      'mens-shirts': 'fa-male',
      'womens-shoes': 'fa-shoe-prints',
      'mens-shoes': 'fa-shoe-prints',
      'womens-watches': 'fa-clock',
      'mens-watches': 'fa-clock',
      'sunglasses': 'fa-glasses',
      'automotive': 'fa-car',
      'motorcycle': 'fa-motorcycle',
      'lighting': 'fa-lightbulb'
    };
    return map[category] || 'fa-tag';
  };

  if (loading) {
    return (
      <div className="container">
        <h1><i className="fas fa-store-alt" style={{ color: '#2563eb' }}></i> Product Showcase</h1>
        <div className="loading">
          <i className="fas fa-spinner"></i> Loading products...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <h1><i className="fas fa-store-alt" style={{ color: '#2563eb' }}></i> Product Showcase</h1>
        <div className="error-msg">
          <i className="fas fa-exclamation-circle"></i> Failed to load products.
          <div style={{ marginTop: '0.6rem', fontSize: '0.9rem', color: '#b91c1c' }}>{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>
        <i className="fas fa-store-alt" style={{ color: '#2563eb' }}></i> 
        Product Showcase
      </h1>
      <div className="subtitle">
        <i className="fas fa-code"></i> Live data from DummyJSON · 
        <span>{products.length} products</span>
      </div>

      <div className="product-grid">
        {products.map(p => (
          <div className="product-card" key={p.id}>
            <div className="card-img">
              <img 
                src={p.thumbnail || 'https://via.placeholder.com/200x150?text=No+Image'} 
                alt={p.title || 'Product'} 
                loading="lazy"
                onError={(e) => e.target.src = 'https://via.placeholder.com/200x150?text=No+Image'}
              />
            </div>
            <div className="card-body">
              <span className="product-category">
                <i className={`fas ${getCategoryIcon(p.category)}`}></i> {p.category || 'general'}
              </span>
              <div className="product-title">{p.title || 'Untitled'}</div>
              {p.brand && (
                <div style={{ fontSize: '0.7rem', color: '#64748b', marginBottom: '0.2rem' }}>
                  <i className="fas fa-building"></i> {p.brand}
                </div>
              )}
              <div className="product-description">
                {p.description || 'No description available.'}
              </div>
              <div className="price-row">
                <span className="price">${p.price ?? '—'} <small>USD</small></span>
                {p.discountPercentage > 0 && (
                  <span className="discount-badge">
                    <i className="fas fa-tag"></i> {p.discountPercentage}% off
                  </span>
                )}
              </div>
              <div className="rating-stars">
                {renderStars(p.rating || 0)} 
                <span>{(p.rating || 0).toFixed(1)}</span>
              </div>
              <div className="stock-info">
                <i className="fas fa-boxes"></i> 
                {p.stock > 0 ? (
                  <span className="stock-badge"><i className="fas fa-check-circle"></i> {p.stock} in stock</span>
                ) : (
                  <span className="stock-badge" style={{ background: '#fee2e2', color: '#991b1b' }}>
                    <i className="fas fa-times-circle"></i> out of stock
                  </span>
                )}
              </div>
              <div className="footer-meta">
                <span><i className="far fa-clock"></i> sku: {p.sku ? p.sku.slice(0,6) : '—'}</span>
                <span><i className="fas fa-hashtag"></i> {p.id}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Demo;