import React from "react";
import ImageUploader from "react-images-upload";

const ImageUpload = props => {
	const onDrop = (pictureFiles, pictureDataURLs) => {
		const URLs = pictureDataURLs.filter(url => url.includes("res.cloudinary"));
		const {
			input: { onChange },
		} = props;
		onChange([...pictureFiles, ...URLs]);
	};

	return (
		<div className="field">
			<div className="label">{props.fieldAttrs.data.label}</div>
			<ImageUploader
				defaultImages={props.fieldAttrs.defaultImages}
				input={props.fieldAttrs.data.input}
				name={props.fieldAttrs.data.name}
				withIcon={true}
				withPreview={true}
				buttonText="Choose images"
				onChange={onDrop}
				buttonClassName="button is-primary"
				imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
				maxFileSize={5242880}
				errorClass="help is-danger"
				labelClass="file-label"
			/>
		</div>
	);
};
export default ImageUpload;
