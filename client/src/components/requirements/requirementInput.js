export const requirementData = [
	{
		label: "Enter Title",
		name: "title",
		placeholder: "Need 100 body tempretature testing machines",
		iconClass: "fa-info",
		type: "input",
	},
	{
		label: "Enter details of your requirement",
		name: "description",
		placeholder: "We need 100 body tempretaure testing machines",
		type: "textarea",
	},
	{
		label: "Required quantity",
		name: "quantity",
		placeholder: "1000",
		iconClass: "fa-balance-scale",
		type: "number",
	},
	{
		name: "category",
		label: "Category",
		placeholder: "1500",
		type: "select",
		iconClass: "fa-tag",
		selectOptions: [
			"Cars",
			"Furniture",
			"Electronics & Appliances",
			"Mobiles",
			"Bikes",
			"Textile",
		],
	},
	{
		name: "images",
		label: "Upload some images",
		type: "file",
		iconClass: "fa-file-image",
	},
];

export const requirementBtn = [
	{ label: "Submit", type: "submit" },
	{ label: "Cancel", type: "cancel" },
];
