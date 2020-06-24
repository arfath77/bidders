import React from 'react';

class ShowElement extends React.Component {
    renderContent = () => {
        return(
            <div>
                {this.props.elementData}
            </div>
        )
    }
    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default ShowElement;