import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Chapter from './Chapter'


const ChaptersList = () => {
    const {chapters} = useSelector(state => state.chapterState)
    
    return (
        <div>
            {chapters.length > 0 && chapters.map(chapter => <Chapter chapter={chapter} key={chapter.id}/>)}
        </div>
    )
}

export default ChaptersList