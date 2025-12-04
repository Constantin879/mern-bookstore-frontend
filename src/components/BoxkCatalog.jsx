// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import './BookCatalog.css';

// const BookCatalog = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // 🔹 Încărcarea produselor la montarea componentei
//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     const fetchProducts = async () => {
//         try {
//             const response = await axios.get('http://localhost:3000/api/products'); // ✅ adăugat ":" după http
//             console.log('Răspuns API:', response);
//             console.log('Date răspuns:', response.data);

//             // ✅ corectat "success" (nu "succes")
//             if (response.data.success) {
//                 setProducts(response.data.products);
//             } else {
//                 setError('Eroare: structura răspunsului este invalidă');
//             }
//         } catch (error) {
//             setError('Eroare la încărcarea produselor');
//             console.error('Eroare la obținerea produselor:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (loading) return <div className="loading">Se încarcă produsele...</div>;
//     if (error) return <div className="error">{error}</div>;

//     return (
//         <div className="app">
//             {/* 🔹 Header-ul aplicației */}
//             <header className="header">
//                 <div className="header-content">
//                     <div className="logo">Mern BookStore</div>
//                 </div>
//             </header>

//             {/* 🔹 Grid-ul pentru afișarea produselor */}
//             {products.length === 0 ? (
//                 <div className="no-products">
//                     <h2>Nu sunt produse disponibile</h2>
//                     <p>Magazinul este în curs de actualizare. Reveniți curând!</p>
//                 </div>
//             ) : (
//                 <div className="products-grid">
//                     {products.map((product) => (
//                         <div key={product.id} className="product-card">
//                             {/* 🔹 Imagine produs */}
//                             <div className="product-image-container">
//                                 <img
//                                     src={product.imageUrl}
//                                     alt={product.title}
//                                     className="product-image"
//                                 />

//                                 {/* 🔹 Overlay cu informații suplimentare */}
//                                 <div className="hover-overlay">
//                                     <div className="hover-content">
//                                         <p><strong>ISBN:</strong> {product.isbn || 'N/A'}</p>
//                                         <p><strong>Editura:</strong> {product.specifications?.publisher || 'N/A'}</p>
//                                         <p><strong>Pagini:</strong> {product.specifications?.pages || 'N/A'}</p>
//                                         <p><strong>An Publicare:</strong> {product.specifications?.year || 'N/A'}</p>
//                                         <p><strong>Stoc disponibil:</strong> {product.stock} bucăți</p>

//                                         {product.rating && (
//                                             <p>
//                                                 <strong>Evaluare:</strong>{' '}
//                                                 {'★'.repeat(Math.floor(product.rating))} ({product.reviewCount} recenzii)
//                                             </p>
//                                         )}

//                                         <p className="description">
//                                             <strong>Descriere:</strong> {product.description}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* 🔹 Informațiile principale despre produs */}
//                             <div className="product-info">
//                                 <h3>{product.title}</h3>
//                                 <p className="author">de {product.author}</p>

//                                 <div className="price-section">
//                                     {product.discountPrice ? (
//                                         <>
//                                             <span className="original-price">{product.price} RON</span>
//                                             <span className="current-price">{product.discountPrice} RON</span>
//                                         </>
//                                     ) : (
//                                         <span className="current-price">{product.price} RON</span>
//                                     )}
//                                 </div>

//                                 <button
//                                     className="btn btn-primary"
//                                     // onClick={() => addToCart(product.id)}
//                                     disabled={product.stock === 0}
//                                 >
//                                     {product.stock === 0 ? 'Stoc epuizat' : 'Adaugă în coș'}
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default BookCatalog;









// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // //import './BookCatalog.css';

// // const BookCatalog = () => {
// //     const [products, setProducts] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);


// // // Încărcarea produselor la montarea componentei
// // useEffect(() => {
// //     fetchProducts();
// // }, []);

// // const fetchProducts = async () => {
// //     try {
// //         const response = await
// //     axios.get('http//localhost:3000/api/products');
// //         console.log('Raspuns API:', response);
// //         console.log('Date raspuns:', response.data);
// //         if (response.data.succes) {
// //             setProducts(response.data.products);
// //         }
// //     } catch (error) {
// //         setError('Eroare la incarcarea produselor');
// //         console.error('Eroare la obținerea produselor:', error);
// //     } finally{
// //         setLoading(false);
// //     }
// // };

// // if (loading) return <div className="loading">Se încarcă produsele...
// // </div>
// // if (error) return <div className="error">{error}</div>;

// // return (
// //     <div className="app">
// //         {/* Header-ul aplicației cu logo și navigare */}
// //         <header className="header">
// //             <div className="header-content">
// //                 <div className="logo">
// //                     Mern BookStore
// //                 </div>
// //             </div>
// //         </header> 

// //     {/* Grid-ul pentru afisarea produselor */}
// //     <div className="products-grid">
// //         {products.map(product => (
// //             <div key={product.id} className="product-card">
// //                 {/* Container pentru imagine cu hover overlay*/}
// //                 <div className="product-image-container">
// //                     <img
// //                     src={product.imageUrl}
// //                     alt={product.title}
// //                     className="product-image"
// //                     />

// //                                 {/*Overlay cu informatii suplimentare la hover */}
// //                                 <div className="hover-overlay">
// //                                     <div className="hover-content">
// //                                         <p><strong>ISBN:</strong> {product.isbn || 'N/A'}</p>
// //                                         <p><strong>Editura:</strong>
// //                                         {product.specifications.publisher || 'N/A'}</p>
// //                                         <p><strong>Pagini:</strong>
// //                                         {product.specifications.pages || 'N/A'}</p>
// //                                         <p><strong>An Publicare:</strong>
// //                                         {product.specifications.year || 'N/A'}</p>
// //                                         <p><strong>Stoc disponibil:</strong>
// //                                         {product.stock}bucăți</p>
// //                                             {product.rating && (
// //                                                 <p><strong>Evaluare:</strong>
// //                                                 {'*'.repreat (Math.floor(product.rating))} ({product.reviewCount} recenzii</p>
// //                                             )}
// //                                             <p className="description"><strong>Descriere:</strong>
// //                                             {product.description}</p>
// //                                             </div>
// //                                         </div>
// //                                     </div>

// //                                     {/* Informatiile produsului */}
// //                                     <div className="product-info">
// //                                         <h3>{product.title}</h3>
// //                                         <p className="author">de {product.author}</p>

// //                                         <div className="price-section">
// //                                             {product.discountPrice ? (
// //                                                 <>
// //                                                 <span className="original-price">{product.price}RON</span>
// //                                                 <span className="curent-price">{product.discountPrice} RON</span>
// //                                                 </>
// //                                             ) : (
// //                                                 <span className="current-price">{product.price}RON</span>
// //                                             )}
// //                                             <div>
                                            
// //                                             <button
// //                                                 className="btn btn-primary"
// //                                                 // onClick={() => addToCart(product.id)}
// //                                                 disabled={product.stock === 0}
// //                                                 >
// //                                                     {product.stock === 0 ? 'Stoc epuizat' : 'Adaugă în coș'}
// //                                                 </button>
// //                                             </div>
// //                             }
                
// //                 </div>

// //     </div>
// //     </div>
// // )

// // {product.legth === 0 && (
// //     <div className="no-products">
// //         <h2>Nu sunt produse disponibile</h2>
// //         <p>Magazinul este în curs de actualizare. Reveni'i curând!</p>
// //     </div>
// // )}


// // export default BookCatalog;


