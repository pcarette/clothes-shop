import {useContext} from 'react'

import { ProductContext } from '../../contexts/products.context'
import ProductCard from '../product-card/product-card.component';


const Shop = () => {
    const {products} = useContext(ProductContext);
  return (
    <div>
        {products.map(({id, name, imageUrl, price}) => {
            return (
                <ProductCard id={id} name={name} imageUrl={imageUrl} price={price}/>
            )
        })}
    </div>
  )
}

export default Shop