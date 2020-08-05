export class JwtPayload {
    exp: number | string;
    iat: number | string;
    nbf: number | string;
    role: string;
    // tslint:disable-next-line: variable-name
    unique_name: string;
}