import axios from 'axios';
import store from './../store/store';

const showBooks = (libraryId) => {
    return (dispatch) => {
        axios.get(`http://localhost:8080/libraries/${libraryId}/books`).then(books => {
            dispatch({type: 'LISTBOOKS', payload: books.data})
        })
    }
}

export default showBooks;