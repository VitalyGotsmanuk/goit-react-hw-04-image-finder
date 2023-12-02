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