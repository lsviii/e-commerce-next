const CartItem = ({ item, dispatch, cart }) => {
    const { _id, inStock, checked, images, title, description, price } = item
    return (
       
     <div className="card text-white bg-success mb-3 w-50 d-column-flex p-2 bd-highlight  ">
     <div className="card-header">
     <h4 className="card-title">{item.title}</h4>
     <img style={{width: 150, height: 150}}  src={images[0].url} alt={images[0].url} />
     </div>

     <div className="card-body">
        <h6 className="d-flex align-items-center flex-wrap"> Valor: R$ {item.price}</h6>
        <h6 >Disponível: {item.inStock}</h6>
     <div class="d-flex flex-row-reverse bd-highlight">
     <div class="p-2 bd-highlight"><svg type="button" xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
     <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
     </svg></div>
     <div class="p-2 bd-highlight"><svg type="button" xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
     <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
     <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
     </svg></div>
     <div class="p-2 bd-highlight"><svg type="button" xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
     <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
     <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
     </svg></div>
     </div>
     
     </div>
     </div>
    
    )
  }
  
  export default CartItem