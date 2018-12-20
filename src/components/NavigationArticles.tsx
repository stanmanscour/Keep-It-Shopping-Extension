import * as React from 'react'
import { connect } from 'react-redux'

class NavigationArticles extends React.Component<any> {

    constructor(props){
        super(props);
        this.filterArticles = this.filterArticles.bind(this);
    }

    filterArticles = (filter) => {
        this.props.dispatch({type: 'FILTER_ARTICLE', text: filter});
    }

    render(){
        return(
            <div className="KPTAPP-navigation-articles">
                <button className={this.props.filter === 'all' ? 'active' : ''} onClick={() => this.filterArticles('all')}>Viewed</button>
                <button className={this.props.filter === 'liked' ? 'active' : ''} onClick={() => this.filterArticles('liked')}>Liked</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    filter: state.filterText
})

export default connect(mapStateToProps)(NavigationArticles)