import createDataContext from './createDataContext';
const ADD_BLOGPOST = 'ADD_BLOGPOST';
const DELETE_BLOGPOST = 'DELETE_BLOGPOST';


const blogReducer = (state, action) => {
    switch (action.type) {
        case ADD_BLOGPOST:
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];
        case DELETE_BLOGPOST:
            return state.filter((blogPost) => blogPost.id !== action.payload)
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({ type: ADD_BLOGPOST, payload: { title, content } });
        callback();
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: DELETE_BLOGPOST, payload: id })
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer, // our reducer
    { addBlogPost, deleteBlogPost }, // all the actions
    [] // default initial state
)