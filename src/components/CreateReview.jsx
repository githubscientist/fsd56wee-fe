import { useDispatch, useSelector } from "react-redux";
import { selectContent, setContent } from "../features/reviews/reviewSlice";
import { useNavigate, useOutletContext } from "react-router-dom";
import reviewServices from "../services/reviewServices";

const CreateReview = () => {

    const content = useSelector(selectContent);
    const book = useOutletContext();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCreateReview = (e) => {
        e.preventDefault();

        // send the review to the server
        reviewServices.createReview({ content }, book._id)
            .then((response) => {
                alert(response.data.message);

                // clear the content
                dispatch(setContent(""));

                setTimeout(() => {
                    // redirect to the reviews page
                    navigate(-1);
                }, 500);
            })
            .catch((error) => {
                alert(error.data.message);
            });
    }

  return (
      <div>
        <h1>Write your Review</h1>
        <form onSubmit={handleCreateReview}>
          <div className="mb-3">
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                      value={content}
                        onChange={(e) => dispatch(setContent(e.target.value))}
                  ></textarea>
          </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="button" className="btn btn-secondary mx-3" onClick={() => window.history.back()}>Cancel</button>
        </form>
    </div>
  )
}

export default CreateReview;