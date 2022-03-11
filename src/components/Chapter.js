import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SectionsList from './SectionsList';
import {handleChapterClick} from '../actions/getSections.js'



const Chapter = (props) => {
    const dispatch = useDispatch()
    const {chapters} = useSelector(state => state.chapterState)
    const {chapter_sections} = useSelector(state => state.sectionState)
    const {sections} = useSelector(state => state.chapterState)
    const sectionState = useSelector(state => state.sectionState)
    // const params = useParams()
    // const {id} = params
    // console.log(props.chapter)
    const id_endpoint = `${props.chapter.id}`
    const ord_name_link = `${props.chapter.ordinal_name}`
    const filteredSections = sections.filter(section => section.chapter_id === props.chapter.id)

    // console.log(filteredSections)

    return (
        <div>
            <h4 onClick={(e) => {e.preventDefault(); dispatch(handleChapterClick(e, props.chapter))}}>{props.chapter.ordinal_name} {props.chapter.type_one === "front_matter" ? null : `- ${props.chapter.title}`}</h4>
            <ul><a target="_blank" href={`https://scholar.flatworldknowledge.com/books/35880/${props.chapter.element_id}`}>{props.chapter.ordinal_name}</a> - {props.chapter.type_one === "front_matter" ? props.chapter.ordinal_name : props.chapter.title}</ul>
            <SectionsList sections={filteredSections} />

            {/* <Link to="sections-list" onClick={(e) => {console.log(e); dispatch(handleChapterClick(e, props.chapter))}}>Show details</Link> */}

        </div>
    )
}           
export default Chapter
