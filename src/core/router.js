export default class Router {

    constructor(routes){
    	this.routes = routes;
    	
    	this.init();
    }



    init(){
    	this.routes.some(route=>{

            let regEx = new RegExp(`^${route.path}$`); // i'll explain this conversion to regular expression below
            let path = window.location.pathname;

            if(path.match(regEx)){
                //Esto que onda, estoy volviendo a instanciar el objeto...
                document.getElementById('root').innerHTML = new route.component().load();

            }else{
            	//404
            	console.warn('Esta ruta no existe..')
            }
        })
    	
    }

    
}