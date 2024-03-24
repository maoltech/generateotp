"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenGenerator = void 0;
class TokenGenerator {
    constructor() {
        this.types = {
            numeric: '0123456789',
            alphanumeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            alphabetic: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        };
    }
    generateToken(length, type) {
        const characters = this.types[type] || this.types.alphanumeric;
        let token = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            token += characters[randomIndex];
        }
        return token;
    }
}
exports.tokenGenerator = new TokenGenerator();
