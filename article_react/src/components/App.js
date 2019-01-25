import React from 'react'
import ResultList from './ArticleList'
import results from './NewMas'


function App() {
    return (
        <div>
            <div>
                <h1>Обратная связь</h1>
            </div>
            <ResultList results={results}/>
        </div>
    )
}

export default App
