import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';
//custom hook that sets the dark-mode class on the body element
//Call useLocalStorage and pass in the key you want to use to store whether or not dark mode is enabled. Remember, this hook returns an array with a value and a setter in an array, exactly like the state hook, so make sure to capture those values in a const - const [someValue, setSomeValue] = useLocalStorage('your key here')
const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);
//Import and set up your effect hook
    useEffect(() => {
        //check to see if the value from useLocalStorage is true or false.
        if (value === true) {
            //If it's true, add the class dark-mode to the body element.
             return document.body.classList.add('dark-mode')
        } else {
            //If it's false, remove the class from the body element.
            return document.body.classList.remove('dark-mode')
        }
        //We don't want this effect to run every time anything in the component changes, right? Think about what piece of data this hook depends on, and should be synced with, and add that in its dependency array.
    }, [value])

    const toggleMode = e => {
        e.preventDefault();
        setValue(!value);
      };
//Finally, we need to return something out of here so we can use this in our app. What do you think we'll need? We'll need to know if dark mode is enabled, right? And we'll need a setter function to toggle dark mode. Let's just forward the value and the setter that were returned out of the useLocalStorage call. Return those two values in an array as well.
    return [value, toggleMode];
}

export default useDarkMode;
