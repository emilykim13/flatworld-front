const initialState = {
    chapters: [],
    sections: []
    // chapter_sections: {}
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
        // case "SET_CHAPTER_SECTIONS":
        //     return {
        //     ...state,
        //     chapter_sections: action.chapter_sections
        // }
            default: 
            return state
    }
}

export default chaptersReducer
