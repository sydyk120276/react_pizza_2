import React, { useState } from 'react'

import arrowSort from '../../image/arrowSort.png'

const Menu = () => {
const [activeItem, setActive] = useState(0)
const [sortActive, setSortActive] = useState(0);
 const [value, setValue] = useState("");

const menu = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  const arOptions = ["популярности", "по цене", "по алфавиту"];

  const onClick = (index) => {
    setActive(index);
  }
  const onHandlerSort = (event, index) => {
    setSortActive(index);
     setValue(event.target.value);
  };

  return (
    <section className="menu">
      <div className="menu__container">
        <div className="menu__array">
          {menu.map((el, index) => {
            return (
              <button
                className={
                  activeItem === index ? "active" : "menu__array-button"
                }
                type="button"
                key={el}
                onClick={() => onClick(index)}
              >
                {el}
              </button>
            );
          })}
        </div>
        <div className="menu__sort">
            <img src={arrowSort} alt="arrowSort" />
          <span>Сортировка по:</span>
          <select className="menu__sort-select">
            {arOptions.map((text, index) => {
              return (
                <option
                  className={
                    sortActive === index ? "sort_active" : "menu__sort-option"
                  }
                  key={text}
                  value={value}
                  onChange={() => onHandlerSort(index)}
                >
                  {text}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </section>
  );
}

export default Menu
