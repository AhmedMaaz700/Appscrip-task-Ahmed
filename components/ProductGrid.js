import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import Image from 'next/image';

export default function ProductGrid({ isOpenFilter }) {
  const [productsData, setProductsData] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log('data', data);
        setProductsData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const toggleFavorite = (id) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <div
      style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: isOpenFilter ? "repeat(3, 1fr)" : "repeat(4, 1fr)",
        gap: "1.25rem",
        padding: "20px",
      }}
    >
      {productsData?.map((item) => (
        <div
          key={item.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={150}
            height={150}
            style={{
              objectFit: 'contain',
              margin: '10px auto',
            }}
          />
          <h3 style={{ fontSize: '16px', margin: '10px 0' }}>{item.title.slice(0, 20)}...</h3>
          <p style={{ fontSize: '12px', color: '#555' }}>
            {item.description.slice(0, 60)}...
          </p>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <p style={{ color: 'green', fontWeight: 'bold' }}>${item.price}</p>
            <div
                style={{ cursor: 'pointer', display: 'inline-block', marginTop: '10px' }}
                onClick={() => toggleFavorite(item.id)}
            >
                <Heart
                color={favoriteIds.includes(item.id) ? 'red' : 'gray'}
                fill={favoriteIds.includes(item.id) ? 'red' : 'none'}
                size={24}
                />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
