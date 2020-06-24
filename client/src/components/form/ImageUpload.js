import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

class ImageUpload extends Component {
    state = { pictures: [] };
    render(){
        return(
            <div className="field">
				<div className="label">{this.props.formAttrs.label}</div>
            </div>
        )
    }   
}