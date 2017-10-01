import React from 'react'
import ReactDOM from 'react-dom'
import Component from './component'
import Primeiro, { Segundo } from './component'


ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
    , document.getElementById('app')
)