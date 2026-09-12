import { Context } from './Context';
declare class InnoCyberAuthenticationError extends Error {
    isInnoCyberAuthenticationError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { InnoCyberAuthenticationError };
