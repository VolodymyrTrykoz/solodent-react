import React, { useState } from 'react';

const SuccessNotification = () => {
  const [isOpen, setIsOpen] = useState(true);
  setTimeout(
    () => setIsOpen(false), 4000);
  return (
    <>
      { isOpen && (
        <div className="success-notification">
          <p className="title">Ваш запит на прийом до лікаря створено!</p>
          <p>Наші співробітники в найближчий час вам зателефонують.</p>
        </div>
      ) }
    </>
  )
}

export default SuccessNotification;
