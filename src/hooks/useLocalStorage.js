import { useEffect, useState } from 'react';

const useLocalStorage = (storageKey, initialValue) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(storageKey);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });
    
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);
    
    return [value, setValue];
};

export default useLocalStorage;