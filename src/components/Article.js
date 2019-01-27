import React, {PureComponent} from 'react'

class Article extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }

        this.handleClick = handleClick.bind(this)
    }
    render() {
        const {article} = this.props
        const body = <section>{article.text}</section>
        const body_com = this.state.isOpen && <section><div>{article.autor}</div><div>{article.comment}</div></section>
        return (
            <div>
            <div>
            <h2 className="test">{article.title}</h2>
            </div>
            <div>
            {body}
            </div>
            <h2>
            Комментарий
            <button onClick={this.handleClick}>
            {this.state.isOpen ? 'close' : 'open'}
            </button>
            </h2>
            <div>
            {body_com}
            </div>
            </div>
    )
    }
}


function handleClick () {
    this.setState ({
        isOpen: !this.state.isOpen
    })
}


export default Article
