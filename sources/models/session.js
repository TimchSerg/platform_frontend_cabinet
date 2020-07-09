export const Session = {
    status(){
        const token = "00d8a9869983858c47d04b1581223309bf53d8a2";
        return new webix.ajax().post(`/server/status`, {token}).then(resolve => {
            const res = resolve.json();
            if(res.access){
                return true;
            }
            throw new Error("Disconnect")
        });
    },
    login(user, password){
        const user_data = {
            user: user,
            password: password
        };
        const client_data = {
            grant_type: 'password',
            client_id: 5,
            client_secret: 'SDas65sdSS54',
        };
        const data = Object.assign(user_data, client_data);

        return webix.ajax().post(`/server/authorization`, data).then(a =>{
            const json = a.json();
            const code_data = Object.assign(json, client_data);
                webix.ajax().post(`/server/getToken`, code_data).then(resolve => {
                    const token = resolve.json();
                    console.log(token)
                    return true;
                })
        } );
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