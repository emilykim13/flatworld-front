import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Chapter = (props) => {
    const cState = useSelector(state => state.chapterState);
    // const params = useParams()

    // const {id} = params

    // console.log(id)
    return (
        
        <div>
            <h1>{props.chapter.ordinal_name}</h1>
        </div>
    )
}

export default Chapter
