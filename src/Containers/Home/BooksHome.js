//npm import
import { connect } from 'react-redux';

//local import
import HomeBooks from '../../Components/Home/HomeBooks';
import { fetchBooks } from '../../Actions/index';

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: () => {
      dispatch(fetchBooks());
    }
  }
}

const BooksHome = connect(mapStateToProps, mapDispatchToProps)(HomeBooks);

export default BooksHome;