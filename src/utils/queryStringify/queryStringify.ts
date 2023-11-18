export function queryStringify(data: Record<string, string> | string) {
    if (typeof data !== 'object') {
            throw new Error('Data must be object');
    }
    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
    }, '?');
}
