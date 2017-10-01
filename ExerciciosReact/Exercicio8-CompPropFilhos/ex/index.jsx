import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName="Fabiano" >
        <Member name="Deivid" />
        <Member name="Gustavo" />
        <Member name="Ana" />
    </Family>
    , document.getElementById('app')
)