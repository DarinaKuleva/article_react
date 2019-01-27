import React, {PureComponent} from 'react'

class Article extends PureComponent {

    state = {
        isOpen: false
    }

    render() {
        const {article} = this.props
        return (
            <div>
                <div>
                    <h2 className="test">{article.title}</h2>
                </div>
                <div>
                    <section>{article.text}</section>
                </div>
                <h2>
                    Комментарий
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                <div>
                    {this.state.isOpen &&
                            <section>
                                <div>{article.autor}</div>
                                <div>{article.comment}</div>
                            </section>}
                </div>
            </div>
    )
    }

    handleClick = () => {
        this.setState (
            {
                isOpen: !this.state.isOpen
            }
        )
    }
}

export default Article

