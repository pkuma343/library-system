import axios from 'axios';
import store from './../store/store';

const loadLibraries = () => {
    return (dispatch) => {
        axios.get('http://localhost:8080/libraries').then(libraries => {
            dispatch({type: 'LIBRARIES', payload: libraries.data})
        })
    }
}

export default loadLibraries;