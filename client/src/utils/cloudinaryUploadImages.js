import axios from "axios";

export default async (images = []) => {
	const CLOUDINARY_URL = process.env.REACT_APP_CLOUDINARY_URL;
	const CLOUDINARY_UPLOAD_PRESET =
		process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

	if (images.length > 0) {
		const imagesURL = images.map(async image => {
			if (typeof image === "object") {
				const formData = new FormData();
				formData.append("file", image);
				formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
				const {
					data: { secure_url },
				} = await axios.post(CLOUDINARY_URL, formData);
				return secure_url;
			}
			return image;
		});
		console.log(imagesURL);
		return await Promise.all(imagesURL);
	}
	return images;
};
