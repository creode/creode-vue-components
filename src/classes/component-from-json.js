class ComponentFromJson {

	name = null;
	rootVariableName = null;
	props = {
		json: {
			type: String,
			default: '{}'
		}
	}

	data() {
		var returnable = [];

		returnable['data'] = JSON.parse(this.json);

		return returnable;
	}

}

export default ComponentFromJson;
