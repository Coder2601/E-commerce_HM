import React, { useState } from 'react'
import {products} from '../data/ProductData'
import {useDispatch} from 'react-redux'

const ProductCard = () => {
  const cardStyle ={
    border:'2px solid black', 
    display:'inline-block',
    marginLeft:10,
    padding:10
  }

  const dispatch = useDispatch();
  const[cartItms,setCartItms] = useState([]);
  const[img, setImg] = useState('');
  const[name,setName] = useState('');
  const[price,setPrice] = useState(0);

  const handleAddItem= (e)=>{
    let target = e.target.id;
    let parent = document.getElementById(target).parentElement.children;
    console.log(parent[0].src);
    let cartObj = {
      img:parent[0].src,
      name:parent[3].innerText,
      price:parent[2].innerText
    }
    console.log(cartObj)
    cartItms.push(cartObj)
    setCartItms(cartItms=>[...cartItms])

    dispatch({
      type:'Add',
      payload:cartItms
    })
    console.log(cartItms);
  }

  return (
    <div>
      {products.map((item,index)=>{
        const{img, name, price} = item;
        return(
            <div style={cardStyle} key={index}>
            <img src={img} width='150px' height='150px' /> <br />
            <h3>{price}</h3>
            <h2>{name}</h2>
            <button id={index} onClick={handleAddItem}>Add to Cart</button>
            </div>
        )
      })}
    </div>
  )
}

export default ProductCard