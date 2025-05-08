export declare function hashPassword(password: string): Promise<string>;
export declare const comparePasswords: (plainTextPassword: string, hashedPassword: string) => Promise<{
    success: boolean;
    error?: string;
}>;
