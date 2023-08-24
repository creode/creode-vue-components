class ComponentBundle {

	#name = null;
	#mainComponent = null;
  #subComponents = {};

	constructor(name) {
		this.#name = name;
	}

	addMainComponent(mainComponent) {
		this.#mainComponent = mainComponent;
	}

	addSubComponent(name, subComponent) {
		this.#subComponents[name] = subComponent;
	}

	getComponents() {
		var components = {};

		if(this.#mainComponent) {
			components[this.#name] = this.#mainComponent;
		}

		for(const subComponentName in this.#subComponents) {
			components[this.#name + subComponentName] = this.#subComponents[subComponentName];
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
