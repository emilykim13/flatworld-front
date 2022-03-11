import React from "react"
import { BrowserRouter as Router, Routes as Switch, Route, Redirect} from "react-router-dom"
import ChaptersList from "./components/ChaptersList.js"
import Chapter from "./components/Chapter.js"

import { useSelector } from 'react-redux'
const Routes = (props) => {

    return(
        <Router>
            <Switch>
                <Route path='/chapters' exact element = { <ChaptersList {...props} /> } />
                <Route path='/chapter/:id' exact element = { <Chapter {...props} /> }/>
                {/* <Route path='/chapter/:id/:type_one' exact element = { <Chapter {...props} /> }/> */}

            </Switch>
        </Router>
    )
}

export default Routes;