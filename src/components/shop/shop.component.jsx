import {useContext} from 'react'

import { ProductContext } from '../../contexts/products.context'
import ProductCard from '../product-card/product-card.component';

import './shop.styles.scss'


const Shop = () => {
    const {products} = useContext(ProductContext);
  return (
    <div className='products-container'>
        {products.map(({id, name, imageUrl, price}) => {
            return (
                <ProductCard key={id} id={id} name={name} imageUrl={imageUrl} price={price}/>
            )
        })}
    </div>
  )
}

export default Shop