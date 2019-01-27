import React from 'react'
import ArticleList from './ArticleList'
import articles from './NewMas'

function App() {
    return (
        <div>
        <div>
        <h1 className="title">Обратная связь</h1>
    </div>
    <ArticleList articles={articles}/>
</div>
)
}

export default App
