import React from 'react'
import ResultList from '../ArticleList'
import results from '../NewMas'
import 'style.css'


function App() {
    return (
        <div>
        <div>
        <h1 className="title">Обратная связь</h1>
    </div>
    <ResultList results={results}/>
</div>
)
}

export default App
