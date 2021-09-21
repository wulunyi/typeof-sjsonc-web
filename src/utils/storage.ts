export const storage = {
    set<T>(key: string, value: T) {
        return localStorage.setItem(key, JSON.stringify(value));
    },
    get<T>(key: string): T | null {
        const v = localStorage.getItem(key);

        try {
            return v ? JSON.parse(v) : null;
        } catch (error) {
            return null;
        }
    }
} 