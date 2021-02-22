//npm import
import { connect } from "react-redux";

//local import
import BookPage from "../../Components/Books/BookPage";
import { fetchBookDetails } from "../../Actions/index";

const mapStateToProps = (state) => {
  return {
    book: state.bookDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBookDetails: (id) => {
      dispatch(fetchBookDetails(id));
    },
  };
};

const PageBook = connect(mapStateToProps, mapDispatchToProps)(BookPage);

export default PageBook;
