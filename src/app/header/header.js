import Component from '@Core/Component';
import view from './header.html';
import styles from './header.scss';


export default class Header extends Component {
	constructor() {
		super(view);
		let data = {
			name: "Mag Ma",
			profile: { age: 29 }
		}
		
		this.render(data);
		
		
	}

	hola(){
		alert('asd');
	}

	
}

