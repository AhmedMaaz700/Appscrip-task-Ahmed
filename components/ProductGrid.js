// import React, { useEffect, useState } from 'react';
// import { Heart } from 'lucide-react';
// import Image from 'next/image';
// import styles from './ProductGrid.module.css';

// export default function ProductGrid({ isOpenFilter }) {
//   const [productsData, setProductsData] = useState([]);
//   const [favoriteIds, setFavoriteIds] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const res = await fetch('https://fakestoreapi.com/products');
//         const data = await res.json();
//         console.log('data', data);
//         setProductsData(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getData();
//   }, []);

//   const toggleFavorite = (id) => {
//     setFavoriteIds((prev) =>
//       prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
//     );
//   };

//   return (
//     <div className={`${styles.productGrid} ${isOpenFilter ? styles.gridThree : styles.gridFour}`}>
//       {productsData?.map((item) => (
//         <div key={item.id} className={styles.productCard}>
//           <Image
//             src={item.image}
//             alt={item.title}
//             width={150}
//             height={150}
//             className={styles.productImage}
//           />
//           <h3 className={styles.productTitle}>{item.title.slice(0, 20)}...</h3>
//           <p className={styles.productDescription}>
//             {item.description.slice(0, 60)}...
//           </p>
//           <div className={styles.bottomSection}>
//             <p className={styles.price}>${item.price}</p>
//             <div
//               className={styles.favoriteIcon}
//               onClick={() => toggleFavorite(item.id)}
//             >
//               <Heart
//                 color={favoriteIds.includes(item.id) ? 'red' : 'gray'}
//                 fill={favoriteIds.includes(item.id) ? 'red' : 'none'}
//                 size={24}
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import styles from './ProductGrid.module.css';

export default function ProductGrid({ isOpenFilter }) {
  const [productsData, setProductsData] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProductsData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setColumns(2);
      } else if (width < 1024) {
        setColumns(isOpenFilter ? 2 : 3);
      } else {
        setColumns(isOpenFilter ? 3 : 4);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, [isOpenFilter]);

  const toggleFavorite = (id) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  return (
    <div className={styles.grid} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {productsData?.map((item) => (
        <div key={item.id} className={styles.card}>
          <Image src={item.image} alt={item.title} width={150} height={150} className={styles.image} />
          <h3 className={styles.title}>{item.title.slice(0, 20)}...</h3>
          <p className={styles.description}>{item.description.slice(0, 60)}...</p>
          <div className={styles.bottomRow}>
            <p className={styles.price}>${item.price}</p>
            <div className={styles.favorite} onClick={() => toggleFavorite(item.id)}>
              <Heart color={favoriteIds.includes(item.id) ? 'red' : 'gray'} fill={favoriteIds.includes(item.id) ? 'red' : 'none'} size={24} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
