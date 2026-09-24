"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InnoCyberAuthenticationError = void 0;
class InnoCyberAuthenticationError extends Error {
    isInnoCyberAuthenticationError = true;
    sdk = 'InnoCyberAuthentication';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.InnoCyberAuthenticationError = InnoCyberAuthenticationError;
//# sourceMappingURL=InnoCyberAuthenticationError.js.map