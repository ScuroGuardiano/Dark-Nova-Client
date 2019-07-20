export default class NovaApiError extends Error {
    constructor(url: string, errorMessage: string, statusCode: number | string) {
        super(`Request to NovaAPI failed ${url} | ${errorMessage} | ${statusCode}`);
        this.name = "NovaApiError";
        this.error = errorMessage;
        this.statusCode = +statusCode;
        this.url = url;
        (Error as any).captureStackTrace(this, NovaApiError.constructor);
    }
    public error: string;
    public statusCode: number;
    public url: string;
}
