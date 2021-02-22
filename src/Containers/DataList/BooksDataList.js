//npm import
import { connect } from 'react-redux';

//local import
import DataListBooks from '../../Components/DataList/DataListBooks.jsx';

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const BooksdataList = connect(mapStateToProps, null)(DataListBooks);

export default BooksdataList;