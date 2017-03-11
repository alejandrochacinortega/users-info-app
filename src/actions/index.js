import { FETCHUSERS } from './types';
import axios from 'axios';

export function fetchUsers() {
    console.log(' calling ACTION ', );
    return {
        type: FETCHUSERS
    }
    
}