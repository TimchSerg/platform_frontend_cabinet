import {JetView} from "webix-jet";
import {Session} from "../models/session";
import {data} from "models/records";

export default class DataView extends JetView{
	config(){
		return { view:"datatable", autoConfig:true, css:"webix_shadow_medium" };
	}
	init(view){
		Session.status().then(
			res=>console.log(res),
			rej=>this.app.show('/login')
		);
		view.parse(data);
	}
}