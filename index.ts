class TokenGenerator {
    private readonly types: { [key: string]: string } = {
        numeric: '0123456789',
        alphanumeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        alphabetic: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    };

    generateToken(length: number, type: string): string {
        const characters = this.types[type] || this.types.alphanumeric;

        let token = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            token += characters[randomIndex];
        }

        return token;
    }
}

export const tokenGenerator = new TokenGenerator();
