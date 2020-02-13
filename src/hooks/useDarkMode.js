import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';
//custom hook that sets the dark-mode class on the body element
const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);

    useEffect(() => {
        if (value === true) {
             return document.body.classList.add('dark-mode')
        } else {
            return document.body.classList.remove('dark-mode')
        }
    }, [value])

    const toggleMode = e => {
        e.preventDefault();
        setValue(!value);
      };

    return [value, toggleMode];
}

export default useDarkMode;
