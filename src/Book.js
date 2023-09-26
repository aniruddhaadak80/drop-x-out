import React from 'react'
import './Book.css'
 

const Book = () => {
  return (
    <div className='bookdiv'>

    <h1 className='bookhd'>
    Book
    </h1>

 
    <img className='bookpic'   src='https://image.lexica.art/full_jpg/cf8d3270-7998-43d3-b9ef-7a255e346aca'/>
 
  
    <p >I love books</p>

    <p>price : $1000</p>
 
    <button className='bookbtn'>Add to cart</button>

    </div>
  )
}

export default Book