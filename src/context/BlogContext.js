import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const ADD_BLOGPOST = 'ADD_BLOGPOST';
const DELETE_BLOGPOST = 'DELETE_BLOGPOST';
const EDIT_BLOGPOST = 'EDIT_BLOGPOST';
const GET_BLOGPOSTS = 'GET_BLOGPOSTS';

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
        case GET_BLOGPOSTS:
            return action.payload;
        default:
            return state;
    }
};

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({ type: GET_BLOGPOSTS, payload: response.data })
    };
};

const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', { title, content });
        // dispatch({ type: ADD_BLOGPOST, payload: { title, content } });
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
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts }, // all the actions
    [] // default initial state
)