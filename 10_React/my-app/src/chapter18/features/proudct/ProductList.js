import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from './productSlice';

function ProductList(props) {

  const products = useSelector((state) => state.product.value)
  console.log(products);

  const [addListAmount, setaddListAmount] = useState([]);

  const dispatch = useDispatch();


  return (
    <>
      <div>
        <input 
          type='text'
          onChange={(e) => {setaddListAmount(e.target.value)}}
          value={addListAmount}
        />
        <button
          type='button'
          onClick={() => dispatch(addList(addListAmount))}
        >
          상품입력
        </button>
        <br />
        <span>상품목록: </span>
        <ul>
          {products.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    </>
  );
}

export default ProductList;