export class LoginRequest {
    email: string;
    password: string;
}

export class LoginResponse {
    // tslint:disable-next-line: variable-name
    access_token: string;
    // tslint:disable-next-line: variable-name
    token_type: string;
    // tslint:disable-next-line: variable-name
    expires_in: string | Date;
}
