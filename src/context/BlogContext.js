import createDataContext from './createDataContext';
const ADD_BLOGPOST = 'ADD_BLOGPOST';
const DELETE_BLOGPOST = 'DELETE_BLOGPOST';
const EDIT_BLOGPOST = 'EDIT_BLOGPOST';

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
            return state.filter(blogPost => blogPost.id !== action.payload.id)
        case EDIT_BLOGPOST:
            return state.map(blogPost => {
                return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost;
            });
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({ type: ADD_BLOGPOST, payload: { title, content } });
        if (callback) {
            callback();
        }
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: DELETE_BLOGPOST, payload: id })
    };
};

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({
            type: EDIT_BLOGPOST,
            payload: { id, title, content }
        })
        if (callback) {
            callback();
        }
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer, // our reducer
    { addBlogPost, deleteBlogPost, editBlogPost }, // all the actions
    [{ id: 1, title: 'TEST POST', content: 'TEST CONTENT' }] // default initial state
)