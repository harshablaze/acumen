import Axios from "axios"
import host from "./Host"

class User {
    constructor(json) {
        this.uid = json.uid
        this.uname = json.username
        this.email = json.email
        this.access = json.access
        this.token = json.token
    }
    async validate(uid,token) {
        var data = new FormData();
        data.append("uid",uid);
        data.append("token",token);
        var status = await Axios.post(host+"api/checklogin/",data).then((resp) =>{
            console.log(resp.data);
            
            return !resp.data.error
        })
        return status;
    }
    async login(uname,pass) {
        var data = new FormData();
        data.append("username",uname);
        data.append("password",pass);
        var login = await Axios.post(host+"api/login/",data).then((resp) =>{
            if(resp.data.error===false) {
                localStorage.setItem('creds',JSON.stringify(resp.data))
                return {error:false,user:new User(resp.data),msg:"Successfull login"}
            } else {
                return {error:true,user:null,msg:"Invalid Credentials"}
            }
        })
        return login
    }
    async logout() {
        localStorage.removeItem('creds')
        return null
    }
    async restorelogin() {
        var data = JSON.parse(localStorage.getItem('creds'))
        if(data) {
            console.log(data.uid,data.token);
            
            if(await this.validate(data.uid,data.token)) {
                return new User(data)
            }
        }
        return null
    }
}

export default User
// var user = new User(localStorage.getItem("creds")).