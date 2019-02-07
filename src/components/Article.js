import React, {PureComponent} from 'react'
import comments from '../constants/comments'

import button from '../styles/btn.module.css'
import feedbeak from '../styles/article-list.module.css'

let CheckComments = id => {
    let CommentArr = [];
    comments.forEach(function(comment) {
        if (comment.article_id === id)
            CommentArr.push(
                <li key={comment.id} className={feedbeak.comments}>
                    <section>
                        <h2> {comment.autor}</h2>
                        <p>{comment.comment} </p>
                    </section>
                </li>)
    })

    return <ul>{CommentArr}</ul>
}

class Article extends PureComponent {

    state = {
        isOpen: false
    }

    render() {
        const {article} = this.props
        return (
            <div>
                <section>
                    <div>
                        <h2 className={feedbeak.autor}>{article.title}</h2>
                    </div>
                    <div>
                        <section className={feedbeak.article}>{article.text}</section>
                    </div>
                </section>
                    <button onClick={this.handleClick} className={button.red}>
                        {this.state.isOpen ? 'скрыть комментарии' : 'показать комментарии'}
                    </button>
                <div>
                    {this.state.isOpen &&
                        <section >
                            {CheckComments(article.id)}
                        </section>
                    }
                </div>
            </div>
    )
    }

    handleClick = (setState) => {
        this.setState (
            {isOpen: !this.state.isOpen}
        )
    }
}

export default Article
