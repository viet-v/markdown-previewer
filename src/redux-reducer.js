import { UPDATE_MARKDOWN } from "./redux-actions";

const initialState = {
    markdown: 'something'
}

const markdownReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MARKDOWN:
            return {
                ...state,
                markdown: action.payload
            }
        default: 
            return state;
    }
}

export default markdownReducer;