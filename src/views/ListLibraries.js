import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from '../actions';

class ListLibraries extends React.Component {
    
    componentDidMount() {
        this.props.loadLibraries();
    }

    render = () => {
        return (
           <div> 
               
               <table border="1">
                   <tbody>               { this.props.libraries.map(library => 
                (<tr key={library.id}><td>{library.name}</td>
                <input type="button" value="Show Books" onClick={() => this.props.showBooks(library.id)}/>
                </tr>)) } 
                </tbody>

                </table>

               <br/>
               <div>
                { this.props.books.map(book => (<li key={book.id}>{book.title}</li>)) }
               </div> 
           </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        libraries: state.libraries,
        books: state.books
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListLibraries)

