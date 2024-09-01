import instance from "./instance";

const bookServices = {
    getBooks: async () => {
        return await instance.get("/admin/books");
    },
    getBook: async (id) => {
        return await instance.get(`/admin/books/${id}`);
    },
}

export default bookServices;