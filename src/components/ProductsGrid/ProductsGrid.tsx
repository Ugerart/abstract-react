import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import './products-grid.scss';
import ProductCard from './ProductCard/ProductCard';
import ProductFormatter from '../../utils/productFormatter';

interface ProductsGridProps {
  jsonUrl: string,
}

const ProductsGrid: FC<ProductsGridProps> = ({ jsonUrl }) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [response, setResponse] = useState([]);
 
  const getDataFromUrl = async (jsonUrl:string) => {
    try {
      const response = await axios.get(jsonUrl);
      const rawData = response.data;
      setResponse(ProductFormatter.convertResponseToProduct(rawData));
    } catch (error) {
      setError(`Errore durante il recupero dei dati: ${error} nel JsonUrl: ${jsonUrl}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataFromUrl(jsonUrl);
  }, [jsonUrl]);

  return (
    <div className="products-grid">
      { isLoading && (
        <div className="response-block">
          <h1 className="h4">LOADING...</h1>
        </div>
      )}
      { error && (
        <div className="response-block">
          <h1 className="h4">{ error }</h1>
        </div>
      )}
      { (response.length !== 0) && (
        <>
          { response.map((product, idx) => (
            <ProductCard key={idx} dataProduct = {product}/>
          ))}
        </>
      )}
    </div>
  )

}

export default ProductsGrid