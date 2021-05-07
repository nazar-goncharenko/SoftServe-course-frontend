export class Reset_entity{
    newPassword: string;
    confirmPassword: string;
    token: string;

    public getToken(): string {
        return this.token;
    }

    public setToken(token: string) {
        this.token = token;
    }
    public setNewPassword(newPassword: string) {
        this.newPassword = newPassword;
    }

    public getNewPassword() {
        return this.newPassword;
    }

    public setConfirmPassword(confirmPassword: string) {
        this.confirmPassword = confirmPassword;
    }

    public getConfirmPassword() {
        return this.confirmPassword;
    }
}
