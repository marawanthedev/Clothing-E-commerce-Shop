import "./cart-drop-down-items.styles.scss";

export const CartItem = ({
  imageUrl,
  name,
  quantity,
  DecreaseItemQuantity,
  IncreaseItemQuantity,
  price,
  id,
}) => {
  return (
    <div className="cart-item" key={id}>
      <div className="cart-item__content">
        <div className="cart-item__content__header">{name}</div>
        <div className="cart-item__content__price">
          <div className="cart-item__content__price__quantity-btn">
            <button
              className="cart-item__content__btn cart-item__content__btn__minus"
              onClick={() => DecreaseItemQuantity(id)}
            >
              <i className="fas fa-minus"></i>
            </button>
            <span className="cart-item__content__quantity">{quantity}</span>
            <button
              className="cart-item__content__btn cart-item__content__btn__plus"
              onClick={() => IncreaseItemQuantity(id)}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
          ${price}
        </div>
      </div>
      <img className="cart-item__img" alt="cart item" src={imageUrl}></img>
    </div>
  );
};
