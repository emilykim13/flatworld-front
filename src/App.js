import './App.css';
import React, { useEffect, useState } from "react"
import Routes from './Routes.js';
import { handleFetch } from "./actions/getChapters"
import { useDispatch, useSelector } from 'react-redux';

const urlChapters = "http://localhost:3000/chapters"
const App = () => {
  const dispatch = useDispatch()
  const chaptersState = useSelector(state => state.chapterState)

  useEffect(() => {
    handleFetch(dispatch);
  },[])

  // const handleFetch = async() => {
  //   let res = await fetch(urlChapters, {
  //       headers : {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       }
  //     }
  //   )
  //   let data = await res.json()
  //   setState(data)
  // }


    return (
      <div>
        <Routes />
      </div>
    )
  }

export default App;

  // const [state, setState] = useState({chapters:[], sections:[]})


// const urlSections = "http://localhost:3000/sections"


  // **** unused fetch for sections, combining sections fetch to chapters fetch
  // const handleSectionsFetch = async() => {
  //   let res = await fetch(urlSections, {
  //       headers : {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       }
  //     }
  //   )
  //   let data = res.json()
  //   console.log(data)
  // }
    // console.log(state)