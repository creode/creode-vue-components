class ComponentBundle {

	#name = null;
	#mainComponent = null;
	#fromJsonComponent = null;
  #subComponents = {};

	constructor(name) {
		this.#name = name;
	}

	addMainComponent(mainComponent) {
		this.#mainComponent = mainComponent;
	}

	addFromJsonComponent(fromJsonComponent) {
		this.#fromJsonComponent = fromJsonComponent;
	}

	addSubComponent(name, subComponent) {
		this.#subComponents[name] = subComponent;
	}

	getComponents() {
		var components = {};

		if(this.#mainComponent) {
			components[this.#name] = this.#mainComponent;
			components[this.#name].name = this.#name;
		}

		if(this.#fromJsonComponent) {
			components[this.#name + 'fromjson'] = this.#fromJsonComponent;
			components[this.#name + 'fromjson'].name = this.#name + 'fromjson';
		}

		for(const subComponentName in this.#subComponents) {
			components[this.#name + subComponentName] = this.#subComponents[subComponentName];
			components[this.#name + subComponentName].name = this.#name + subComponentName;
		}

		return components;
	}

	attachToApp(app) {
		var components = this.getComponents();

		for(const componentName in components) {
			app.component(componentName, components[componentName]);
		}
	}

}

export default ComponentBundle;
