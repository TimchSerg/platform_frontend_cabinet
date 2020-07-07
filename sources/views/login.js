import {JetView} from "webix-jet";
import {Session} from "../models/session";
import StartPage from "./authorization";

export default class LoginView extends JetView{
    config(){
        const login_form = {
            view:"form", id:"login_form",
            width:400, borderless:false, margin:10,
            rows:[
                { type:"header", template: this.app.config.name },
                { view:"text", name:"login", label:"User Name", labelPosition:"top" },
                { view:"text", type:"password", name:"pass", label:"Password", labelPosition:"top" },
                { view:"button", value:"Авторизоваться", click:() => this.do_login(), hotkey:"enter" },
                { view:"button", value:"Регистрация", click:() => this.reg_login() },
            ],
            rules:{
                login:webix.rules.isNotEmpty,
                pass:webix.rules.isNotEmpty
            }
        };

        return {
            id:'registration',
            cols:[{}, { rows:[{}, login_form, {}]}, {}]
        };
    }

    init(view){
        view.$view.querySelector("input").focus();
    }
    reg_login(){
        this.show('/authorization')
    }
    do_login(){
        const form = $$("login_form");
        console.log(form)
        if (form.validate()){
            const data = form.getValues();
            Session.login(data.login, data.pass).then(
                res=>{
                    console.log(res)
                    this.show('/authorization');
                },
                rej=>{
                    webix.html.removeCss(form.$view, "invalid_login");
                    form.elements.pass.focus();
                    webix.delay(function(){
                        webix.html.addCss(form.$view, "invalid_login");
                    });
                }
            )
        }
    }
}