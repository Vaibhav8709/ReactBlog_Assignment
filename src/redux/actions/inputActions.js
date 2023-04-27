import actionTypes from "../actionTypes";

export default {
    setInputTitle: title => ({
        type: actionTypes.SET_INPUT_TITLE,
        title
    }),
    setInputCategory: category => ({
        type: actionTypes.SET_INPUT_CATEGORY,
        category
    }),

    setInputContent: content => ({
        type: actionTypes.SET_INPUT_CONTENT,
        content
    }),

    setInputLike: like => ({
        type: actionTypes.SET_INPUT_LIKE,
        like
    }),
    setInputId: id => ({
        type: actionTypes.SET_INPUT_ID,
        id,

    }),
    resetInputs: () => ({
        type: actionTypes.RESET_INPUT,

    })
}