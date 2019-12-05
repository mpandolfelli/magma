export default class BaseApp {
	constructor() {
		this.components = [];
		this.modules = [];
	}


	useComponents(components){
		let that = this;
		components.forEach(function (component, index) {
			that.components.push(component);
		});
		
	}

	useModules(modules){
		let that = this;
		modules.forEach(function (module, index) {
			new module();
			that.modules.push(module);
		});
		
	}
	
}