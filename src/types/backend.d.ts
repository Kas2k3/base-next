export interface IRequest {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    body?: Record<string, any>;
    queryParams?: Record<string, any>;
    useCredentials?: boolean;
    headers?: Record<string, string>;
    nextOption?: RequestInit;
}

export interface IBackendRes<T> {
    error?: string | string[];
    message: string;
    statusCode: number | string;
    data?: T;
}

export interface IModelPaginate<T> {
    meta: {
        current: number;
        pageSize: number;
        pages: number;
        total: number;
    };
    result: T[];
}
