import { AuthenticationEntity } from './entity/AuthenticationEntity';
export type * from './InnoCyberAuthenticationTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { InnoCyberAuthenticationEntityBase } from './InnoCyberAuthenticationEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class InnoCyberAuthenticationSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Authentication(entopts?: Record<string, any>): AuthenticationEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): InnoCyberAuthenticationSDK;
    tester(testopts?: any, sdkopts?: any): InnoCyberAuthenticationSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof InnoCyberAuthenticationSDK;
export { stdutil, config, BaseFeature, InnoCyberAuthenticationEntityBase, InnoCyberAuthenticationSDK, SDK, };
