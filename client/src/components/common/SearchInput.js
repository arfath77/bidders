export const searchInputs = [
	{
		// label: "Search",
		name: "search",
		placeholder: "Need 100 body tempretature testing machines",
		iconClass: "fa-search",
		type: "input",
		optional: true,
	},
	{
		name: "searchCategory",
		label: "Select category",
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
		optional: true,
	},
];

export const searchBtn = [
	{ label: "Search", type: "submit" },
	{ label: "Clear", type: "clear" },
];
