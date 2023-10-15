import React from 'react';
import { LooseObject } from '../types';

const defaultValue: LooseObject = {};
const UserContext = React.createContext(defaultValue);

export default UserContext;
