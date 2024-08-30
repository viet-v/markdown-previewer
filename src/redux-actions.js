export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';

export const updateMarkdown = (text) => {
    return {
        type: UPDATE_MARKDOWN,
        payload: text
    }
}