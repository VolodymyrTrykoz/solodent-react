import React from 'react';
import img from './about.jpg';

const HomeAbout = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12">
              <img src={img} alt="our team" />
            </div>
            <div className="col-lg-6 col-sm-12">
              <h2 className="title">
                <span className="after">Про нас</span>
              </h2>
              <p>
                Стоматологія "Solodent" - це місце, де працюють найдосвідченіші лікарі.
                Вони вивчають і використовують найновітніші технології в сучасній стоматології.
                Щиро люблять свою роботу та турбуються про кожного пацієнта.
              </p>
              <p className="text-sm">
                Для нас дуже важливо, щоб ви вийшли від нас з хорошим і повністю задовольняючим
                вас результатом та залишились приємно здивовані відношенням якості та ціни.
                Довіряючи нам ви можете бути впевненими, що ваше здоров'я в надійних руках.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
