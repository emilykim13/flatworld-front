const urlChapters = "http://localhost:3000/chapters"


export const handleSetChapters = (chapters) => {
    return { type: 'SET_CHAPTERS', chapters }
}

export const handleSetSections = (sections) => {
    return { type: 'SET_SECTIONS', sections }
}

export const handleSetChapterSections = (chapter_sections) => {
    return { type: 'SET_CHAPTER_SECTIONS', chapter_sections }
}

export const handleFetch = dispatch => {
    fetch(urlChapters, {
        method: "GET",
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
    })
    .then(res => res.json())
    .then(cData => {
        dispatch(handleSetChapters(cData.chapters)); 
        dispatch(handleSetSections(cData.sections)); 
        dispatch(handleSetChapterSections(cData.chapter_sections))}
    )
  }
