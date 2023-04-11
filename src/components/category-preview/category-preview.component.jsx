import { Link } from 'react-router-dom'

import './category-preview.styles.scss'
import ProductCard from '../product-card/product-card.component'
const CategoryPreview = ({ title, products }) => {

  return (
    <div className='category-preview-container'>
      <div className='shop-title-container'>
        <h2>
          <Link className='title' to={title}>
            {title.toUpperCase()}
          </Link>
        </h2>
        <h4 className='see-more'>
          <Link className='see-more' to={title}>
            See More
          </Link>
        </h4>
      </div>
      <div className='preview'>
        {
          products.filter((_, idx) => idx < 4).map((product) => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </div>
  )
}

export default CategoryPreview