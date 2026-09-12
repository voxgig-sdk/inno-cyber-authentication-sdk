export interface Authentication {
    email?: string;
    id?: string;
    message?: string;
    name?: string;
    newPassword: string;
    password: string;
    referralCode: string;
    success?: boolean;
    token: string;
}
export interface AuthenticationCreateData {
    email?: string;
    id?: string;
    message?: string;
    name?: string;
    newPassword: string;
    password: string;
    referralCode: string;
    success?: boolean;
    token: string;
}
