export class User {
    email : string;
    password : string;

    public setEmail(p_UserName : string) {
        this.email = p_UserName;
    }

    public getEmail() : string {
        return this.email;
    }

    public setPassword(p_Password : string) {
        this.password = p_Password;
    }

    public getPassword() : string {
        return this.password;
    }
}

