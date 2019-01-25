import React from 'react'
import Result from '../Article'
import 'style.css'


function ResultList({results}) {
    const resultElements = results.map(result =>
        <li key={result.id}><Result result={result}/></li>
)


    return (
        <ul className="style">
        {resultElements}
        </ul>
)
}

export default  ResultList