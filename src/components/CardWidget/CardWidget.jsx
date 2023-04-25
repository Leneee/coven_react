import './CardWidget.css'

const CardWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png?w=1060&t=st=1682185627~exp=1682186227~hmac=5b26b5cd3d1b491d0ead606f5ba95e5cb3e3eb732ed71afd6abf72e51c83a8ed"
  return (
    <div className='container-card'>
      <img className='imgCarrito' src={imgCarrito} alt="carrito" />
      <div className='counter'>8</div>
    </div>
  )
}

export default CardWidget
