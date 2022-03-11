const initialState = {
    chapters: [],
    sections: []
}

const chaptersReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_CHAPTERS":
            return {
                ...state,
                chapters: action.chapters
            }
        case "SET_SECTIONS":
            return {
                ...state,
                sections: action.sections
            }
            default: 
            return state
    }
}

export default chaptersReducer
