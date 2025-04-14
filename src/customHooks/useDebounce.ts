import { useEffect, useState } from "react";

// Add a type argument to make the hook flexible for any value type
const useDebounce = <T>(value: T, duration = 100): [T] => {
    const [debValue, setDebValue] = useState<T>(value);

    useEffect(() => {
        const timeout = setTimeout(() => setDebValue(value), duration);

        // Cleanup the timeout on value or duration change
        return () => clearTimeout(timeout);

    }, [value, duration]);

    return [debValue];  // Return debounced value as an array
}

export default useDebounce;
