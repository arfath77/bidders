import React from 'react';
import ReactDom from 'react-dom';

class Modal extends React.Component {
    render(){
        return(
            ReactDom.createPortal(
                <div onClick = {this.props.onExit} className="modal is-active">
                    <div className="modal-background"></div>
                    <div onClick= {(e)=>e.stopPropagation()} className="modal-card">
                        <header className="modal-card-head">
						    <p className="modal-card-title">{this.props.title}</p>
                            <button onClick = {this.props.onExit} className="delete" aria-label="close"></button>
					    </header>
                        <section className="modal-card-body">{this.props.children}</section>
                        <footer className="modal-card-foot">
                            {this.props.actions}
                        </footer>
                    </div>
                </div>,
                document.querySelector('#modal')
            )
            
        )
    }
}

export default Modal;