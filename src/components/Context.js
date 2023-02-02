import {createContext} from 'react';

const authContext = createContext();
const loadingContext = createContext();

export default authContext;
export {loadingContext} ;