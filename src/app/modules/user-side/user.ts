export class User {
    email : string;
    password : string;
    username : string
    role : string;

    public setRole(role : string) {
        this.role = role;
    }

    public getRole() : string {
        return this.role;
    }

    public setEmail(email : string) {
        this.email = email;
    }

    public getEmail() : string {
        return this.email;
    }
    public setUsername(username : string) {
        this.username = username;
    }

    public getUsername() : string {
        return this.username;
    }
    public setPassword(password : string) {
        this.password = password;
    }

    public getPassword() : string {
        return this.password;
    }
}

