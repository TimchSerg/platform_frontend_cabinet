export const Session = {
    status(){
        return new Promise((resolve, rej)=>{
            resolve({log:true})
        });
    },
    login(user, pass){
        return new Promise((resolve, rej)=>{
            resolve({log:user, pas:pass})
        });
    },
    logout(){
        return webix.ajax().post(`${base_url}/threeraza/admin/logout`)
            .then(a =>{
                return a.json();
            } );
    }
}
// function status(){
//     return new Promise((resolve, rej)=>{
//         resolve({log:true})
//     });
// }
//
// function login(user, pass){
//     return webix.ajax().post(`${base_url}/threeraza/admin/login`, {
//         user, pass
//     }).then(a =>{
//         return a.json();
//     } );
// }
//
// function logout(){
//     return webix.ajax().post(`${base_url}/threeraza/admin/logout`)
//         .then(a =>{
//             return a.json();
//         } );
// }