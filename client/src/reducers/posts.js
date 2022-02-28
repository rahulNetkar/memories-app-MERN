
const initialState = []

export default (posts = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;
            break;
    }
}