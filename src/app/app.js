import BaseApp from '@Core/baseapp';
import '../styles/index.scss';
import Header from './header/header';
import Router from '@Core/router';

export default class App extends BaseApp {
	constructor() {
		super();
		console.log('App is running');
	}	
}
let Routes = [
	{path: '/cat', component: Header},
	{path: '', component: Header}
];

const router = new Router(Routes);

const app = new App();

var Components = [
	Header
];

var Modules = [
];



app.useComponents(Components);
app.useModules(Modules);

