import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import Input from './Input';
import {isInputBlank} from '../../utils/validateData';
import Select from './Select';
import Textarea from './Textarea';
import ImageUpload from './ImageUpload';



class FormTemplate extends React.Component{
    renderFields = (formData) => {        
        return formData.map((data)=>{
            switch (data.type) {
                case 'number':
					return (
						<Field
							key={data.name}
							name={data.name}
							component={Input}
							fieldAttrs={data}
						/>
                    );
                    case 'file':
                        return (
                            <Field
                                key={data.name}
                                type="text"
                                multiple={true}
                                name={data.name}
                                component={ImageUpload}
                                fieldAttrs={{data, defaultImages: this.props.initialValues.images}}
                            />
                        );
                case 'textarea':
                    return (
                        <Field key={data.name}
                            name={data.name}
                            component={Textarea}
                            fieldAttrs={data}
                        />
                    );
                case 'select':                    
                    return (
                        <Field key={data.name}
                            name={data.name}
                            component={Select}
                            fieldAttrs={data}
                        />
                    )         
                default:
                    return (
                        <Field key={data.name} 
                                name={data.name}
                                component={Input}
                                fieldAttrs={data} 
                                />
                );
            }
            })};

            renderButtons = (formBtn) => {
                return formBtn.map((data)=>{
                    switch (data.type) {
                        case 'cancel':
                            return (
                                <div key={data.label} className="control">
                                    <Link to="/" className="button is-link is-light">{data.label}</Link>
                                </div>
                            )
                        default:
                            return (
                                <div key={data.label} className="control">
                                    <button className="button is-link">{data.label}</button>
                                </div>
                            )
                    }
                })
            }

    render(){
        return (
                <form className="column is-half px-0" onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                    {this.renderFields(this.props.formData)}
                    <div className="field is-grouped">
                        {this.renderButtons(this.props.formBtn)}
                    </div>
                </form>
        )
    }
        
}

function validate (values, ownProps) {
    let error={};
    error = isInputBlank(ownProps.formData, error, values);
    return error;
}

export default (reduxForm({
    validate
})(FormTemplate))

