import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import ResultList from './ArticleList'
import results from './NewMas'


function App() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-3 text-center">Обратная связь</h1>
            </div>
            <ResultList results={results}/>
        </div>
    )
}

export default App
