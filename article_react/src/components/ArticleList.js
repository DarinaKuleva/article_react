import React from 'react'
import Result from './Article'
import '../style/ListStyle.css'


function ResultList({results}) {
    const resultElements = results.map(result =>
        <li key={result.id} className="list-style__li"><Result result={result}/></li>
    )


    return (
        <ul>
            {resultElements}
        </ul>
    )
}

export default  ResultList
