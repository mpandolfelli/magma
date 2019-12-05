import Template from './template.js';

export default class Component {
	constructor(view) {
		this.template = new Template();
		this.view = view;
		this.data;
	}

	render(data){
		this.data = data;
		return this.template.render(this.view, this.data);
	}

	load(){
		return this.template.render(this.view, this.data);
	}
}