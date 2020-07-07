import {JetView} from "webix-jet";



export default class TopView extends JetView{
    config(){

        var ui = {
            type:"clean", paddingX:5, css:"app_layout", cols:[
                { type:"wide", paddingY:10, paddingX:5, rows:[
                        { $subview:true }
                    ]}
            ]
        };

        return ui;
    }
    init(){
        //this.use(plugins.Menu, "top:menu");
    }
}