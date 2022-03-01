import * as api from '../api/index'

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts()

        dispatch({
            type: 'FETCH_ALL',
            payload: data
        })

    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPosts(post);

        dispatch({
            type: 'CREATE',
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const likePost = (post) => async (dispatch) => {
    try {



    } catch (error) {
        console.log(error.message)
    }
}

export const deletePost = (post) => async (dispatch) => {
    try {



    } catch (error) {
        console.log(error.message)
    }
}