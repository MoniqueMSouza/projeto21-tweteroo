export class User {
    private _username: string;
    private _avatar: string;

    constructor(username: string, avatar: string) {
        this._username = username;
        this._avatar = avatar;
    };

    public get username(): string {
        return this._username;
    };

    set username(username: string) {
        this._username = username;
    };

    get avatar(): string {
        return this._avatar;
    };

    set avatar(avatar: string) {
        this._avatar = avatar;
    };
}