
const ProductBox = ({ img, nameProd, price, timeLap, category }) => {

  return (
    <>
    <div>
      <div>
      <img src={img} alt="Imagen del producto" />
      </div>
      <div>
        <div>{nameProd}</div>
        <div>$ {price}</div>
        <div>{timeLap}</div>
      </div>
      <div>
        <button>{category}</button>
      </div>
    </div>
      
    </>
  )
}

export default ProductBox