import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family>
        <Member name="Deivid" lastName="Willyan" />
    </Family>
    , document.getElementById('app')
)