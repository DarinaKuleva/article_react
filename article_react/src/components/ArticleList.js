import React from 'react'
import Result from './Article'
import '../style/ListStyle.css'


function ResultList({results}) {
    const resultElements = results.map(result =>
        <li key={result.id}><Result result={result}/></li>
    )


    return (
        <ul>
            {resultElements}
        </ul>
    )
}

export default  ResultList
