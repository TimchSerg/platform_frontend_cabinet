import {JetView} from "webix-jet";

export default class StartPage extends JetView{
	config(){
		let header = {
			type:"header", template:'Авторизация', css:"webix_header app_header"
		};

		let form = {
			view: 'form',
			id:'form_auth',
			elements:[
				{ view:"text", label:"login", name:'login' },
				{ view:"text", type:"password", label:"Password", name:'password' },
				{cols:[
						{ view:"button", value:"Login", css:"webix_primary", on: {
								onItemClick: ()=>{
									this.authorization()
								}
							} },
						{ view:"button", value:"Cancel", on: {
								onItemClick:()=>{
									this.cancel();
								}
							} }
					]}
			]
		}

		let ui = {
			type:"clean", paddingX:5, css:"app_layout",
			cols:[
				{}, {rows:[
						{},	{	paddingX:5, paddingY:10,
							rows: [
								{	css:"webix_shadow_medium",
									rows:[
										header,
										form
									]
								}
							]},	{}
					]}, {}
			]
		};

		return ui;
	}
	authorization(){
		let data = $$('form_auth').getValues();
		console.log(data)
	}
	cancel(){
		webix.ajax().get("/server/users").then(function(data){
			console.log(data.text());
		});
	}
	init(){}
}