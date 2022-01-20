import axios from "axios"
import { useState } from "react"
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default function Component(props) {
    const [products, setProducts] = useState(props.products);

    return (
      <div className="container" >
        { 
          products.map(product => {
            return (
              
              <div className="card card-default p-2 mb-1">
                <h3>{product.title}</h3>
                <p>{product.description}</p> 
                <button className="btn btn-primary">R$ {product.price}</button>               
              </div>
            ); 
          })
        }
      </div>
    )
}


export async function getStaticProps() {
    const response = await axios.get("http://localhost:5000/products")
    return {
      props: {
        products: response.data
      },
      revalidate: 120 
    }
  }
