import { Link, useLoaderData, useOutletContext } from "react-router-dom";

const Reviews = () => {

    const reviews = useLoaderData();
    const book = useOutletContext();

  return (
      <div className="container mt-5">
          <h1>Reviews </h1>
          <div className="mb-3">
              <Link to={`/dashboard/books/${book._id}/reviews/new`}>Post a new review</Link>
          </div>
          {
              reviews.length === 0 ? <p>No reviews yet</p> :
                    <div className="row">
                        {reviews.map(review => (
                            <div className="col-md-6" key={review._id}>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <p className="card-text">{review.content}</p>
                                        <p className="card-text text-muted">{review.userId.username}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            }
        </div>
  )
}

export default Reviews;