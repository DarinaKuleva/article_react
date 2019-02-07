import React from 'react'
import ArticleList from './ArticleList'
import articles from '../constants/articles'

import header from '../styles/header.module.css'

let App = () => {
    return (
        <div>
            <div>
                <h1 className={header.title}>Обратная связь</h1>
            </div>
            <ArticleList articles={articles}/>
        </div>
    )
}

export default App
