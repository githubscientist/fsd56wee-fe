import instance from "./instance";

const reviewServices = {
    getReviews: async (id) => {
        return await instance.get(`/admin/reviews/book/${id}`);
    },
    createReview: async (review, id) => {
        return await instance.post(`/admin/reviews/book/${id}`, review);
    },
}

export default reviewServices;