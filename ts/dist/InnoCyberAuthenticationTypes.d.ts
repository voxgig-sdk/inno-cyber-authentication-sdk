export interface Authentication {
    email: string;
    message?: string;
    name: string;
    newPassword: string;
    password: string;
    referralCode: string;
    referrer?: Record<string, any>;
    success?: boolean;
    token?: string;
    user?: Record<string, any>;
    valid?: boolean;
}
export interface AuthenticationCreateData {
    email: string;
    message?: string;
    name: string;
    newPassword: string;
    password: string;
    referralCode: string;
    referrer?: Record<string, any>;
    success?: boolean;
    token?: string;
    user?: Record<string, any>;
    valid?: boolean;
}
