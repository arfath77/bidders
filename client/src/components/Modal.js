import React from 'react';
import ReactDom from 'react-dom';

class Modal extends React.Component {
    renderActions = () => {
        return (
            <footer class="modal-card-foot">
                <button onClick = {this.props.onConfirm} class="button is-success">{this.props.buttonText}</button>
                <button onClick = {this.props.onExit} class="button">Cancel</button>
            </footer>
        )
    }
    render(){
        return(
            ReactDom.createPortal(
                <div onClick = {this.props.onExit} className="modal">
                    <div className="modal-background"></div>
                    <div onClick= {(e)=>e.stopPropagation()} className="modal-card">
                        <header className="modal-card-head">
						    <p className="modal-card-title">{this.props.title}</p>
					    </header>
                        <section class="modal-card-body">{this.props.children}</section>
                        {this.renderActions()}
                    </div>
                </div>,
                document.querySelector('#modal')
            )
            
        )
    }
}

export default Modal;