import React from 'react'

import Card from '../Card/card';

const Main = ({
  cards,
  onClickAmountButton,
}) => {
  const basketItems = JSON.parse(localStorage.getItem("hello"));
  console.log("basssssssssssssssss", basketItems);
  console.log("cards", cards);

  // const itemsNullAmount = cards.map((elem) => {
  //   return { ...elem, amount: 0}
  // })

  return (
    <section className="main">
      <div className="main__container">
        <span className="main__title">Все пиццы</span>
        <div className="main__body">
          {basketItems
            ? basketItems.map((item) => {
                return (
                  <Card
                    key={item.id}
                    item={item}
                    onClickAmountButton={onClickAmountButton}
                  />
                );
              })
            : cards.map((item) => {
                return (
                  <Card
                    key={item.id}
                    item={item}
                    onClickAmountButton={onClickAmountButton}
                  />
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default Main
