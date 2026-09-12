import { InnoCyberAuthenticationEntityBase } from '../InnoCyberAuthenticationEntityBase';
import type { InnoCyberAuthenticationSDK } from '../InnoCyberAuthenticationSDK';
import type { Control } from '../types';
import type { Authentication, AuthenticationCreateData } from '../InnoCyberAuthenticationTypes';
declare class AuthenticationEntity extends InnoCyberAuthenticationEntityBase<Authentication> {
    constructor(client: InnoCyberAuthenticationSDK, entopts: any);
    make(this: AuthenticationEntity): AuthenticationEntity;
    create(this: any, reqdata?: AuthenticationCreateData, ctrl?: Control): Promise<AuthenticationEntity>;
}
export { AuthenticationEntity };
