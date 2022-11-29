import React from 'react'


const Card = ({ item, onClickAmountButton }) => {

  console.log('itemmmmmm', item)

  const onClick = (id) => {
    onClickAmountButton(id);
  };

  return (
    <section className="card">
      <div className="card__img">
        <img src={item.img} alt="img" />
      </div>
      <span className="card__title">{item.title}</span>
      <div className="card__data data-item">
        <div className="data-item__types">
          <button type="button" className="data-item__types-type1">
            {item.types.type_1}
          </button>
          <button type="button" className="data-item__types-type2">
            {item.types.type_2}
          </button>
        </div>
        <div className="data-item__sizes">
          <button type="button" className="data-item__sizes-size1">
            {item.sizes.size_1} см.
          </button>
          <button type="button" className="data-item__sizes-size2">
            {item.sizes.size_2} см.
          </button>
          <button type="button" className="data-item__sizes-size3">
            {item.sizes.size_3} см.
          </button>
        </div>
      </div>
      <div className="card__selection">
        <div className="card__selection-price">от {item.price} ₽</div>
        <button
          className={
            item.amount > 0 ? "selection-button-active" : "card__selection-button"
          }
          type="submit"
          onClick={() => onClick(item.id)}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="#EB5A1E"
            />
          </svg>
          Добавить
          <div className="card__selection-amount">{item.amount}</div>
        </button>
      </div>
    </section>
  );
};

export default Card
