import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import './Product.css'; // Import the CSS file
import Card from 'react-bootstrap/Card';

function Product() {
  const cardStyle = {
    padding: '20px',
    margin: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#fff',
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '1.5em',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
  };

  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample product data
  // Existing data
  const products = [
    { id: 1, name: 'Product A', price: '$19.99', manufacturingDate: '2022-08-15' },
    { id: 2, name: 'Product B', price: '$29.99', manufacturingDate: '2022-09-20' },
    // Additional data
    { id: 3, name: 'Product C', price: '$14.50', manufacturingDate: '2022-07-05' },
    { id: 4, name: 'Product D', price: '$49.99', manufacturingDate: '2022-10-10' },
    { id: 5, name: 'Product E', price: '$9.99', manufacturingDate: '2022-06-30' },
    // Add more products if needed
  ];

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card style={cardStyle}>
      <Card.Header style={titleStyle}>Products</Card.Header>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ marginBottom: '15px', padding: '8px' }}
        />
        <Table responsive className="product-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Manufacturing Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.manufacturingDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ textAlign: 'center' }}>
                  {searchQuery && 'Result not in the list'}
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </Card>
  );
}

export default Product;
