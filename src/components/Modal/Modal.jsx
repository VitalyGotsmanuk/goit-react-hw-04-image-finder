import css from './Modal.module.css';
import React, { Component } from 'react';

import { StyledModal } from './Styled';

export class Modal extends Component {

    componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        document.body.style.overflow = 'auto';
    };

    handleOverayClick = event => {
        if (event.target === event.currentTarget) {
        this.props.closeModal();
        }
    };

    handleKeyDown = event => {
        if (event.code === 'Escape') {
        this.props.closeModal();
        }
    };

    render () {
        return (
            <StyledModal onClick={this.handleOverayClick}>
            <div className={css.modal}>
                    <button
                        onClick={this.props.closeModal}
                        className={css.closeBtn}
                    >✖</button>        
                <img
                    src={this.props.modalData.largeImageURL}
                    alt={this.props.modalData.tags}
                />
                </div>
            </StyledModal>
        )
    }
}


/*
Методи життєвого циклу - це зарезервовані реактом методи(функції),
 які запускаються в певний період життя компоненти самим Реактом.

 componentDidMount() {} - метод життєвого цикл,
    що запускається один раз, після успішного монтування компонети в DOM.

    Використання:
    - Вішаються глобальні слухачі подій (addEventListener)
    - Встановлюються асинхронні таймери та лічильники (setTimeout, setInterval)
    - Зчитуються дані з локального сховища та встановлюємо їх в стейт
    - Надсилаються мережеві запити (HTTP request)

 componentWillUnmount() {} - метод життєвого цикл,
    що запускається один раз, перед повним видаленням компонети з DOM.

    Використання:
    - Прибираються глобальні слухачі подій (removeEventListener)
    - Прибирати асинхронні таймери та лічильники (clearTimeout, clearInterval)
    - Відхиляти мережеві запити (cancel HTTP request)

 componentDidUpdate(prevProps, prevState) {} - метод життєвого цикл,
    що запускається кожен раз, після того, як компонента оновилася(змінилися пропси, або стейт).
   
    Використання:
    - Надсилаються мережеві запити (HTTP request)
    - Оновлюють(синхронізуються) дані зі стейту з локальним сховищем
*/

//==============================================//

// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

//===============================================//