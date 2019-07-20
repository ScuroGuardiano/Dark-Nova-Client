export default interface NovaApiResponse {
    statusCode?: number;
    error?: string;
    [key: string]: any;
}
