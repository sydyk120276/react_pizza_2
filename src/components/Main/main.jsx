import React from 'react'

import Card from '../Card/card';

const Main = ({
  items,
  setCount,
  onClickAmountButton,
}) => {

const basketItems = JSON.parse(localStorage.getItem("hello"));
console.log("basssssssssssssssss", basketItems);

const itemsNullAmount = items.map((elem) => {
  return { ...elem, amount: 0}
})


  return (
    <section className="main">
      <div className="main__container">
        <span className="main__title">Все пиццы</span>
        <div className="main__body">
          {!!basketItems
            ? basketItems.map((item) => {
                return (
                  <Card
                    key={item.id}
                    item={item}
                    setAmount={setCount}
                    onClickAmountButton={onClickAmountButton}
                  />
                );
              })
            : itemsNullAmount.map((item) => {
                return (
                  <Card
                    key={item.id}
                    item={item}
                    setAmount={setCount}
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
