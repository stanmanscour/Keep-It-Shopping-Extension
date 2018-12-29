import * as React from 'react';
import { connect } from 'react-redux';
import ArticlesContainer from './ArticlesContainer'
import Header from './header/Header'
import Panel from './Panel';

class Container extends React.PureComponent<any, any> {
    render(){
        return(
            <div className={`KPTAPP-container ${this.props.containerOpen ? 'active' : ''}`}>
                <Panel />
                <Header />
                <ArticlesContainer/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    containerOpen: state.container.open
})

const mapDispatchToProps = dispatch => ({

})



export default connect(mapStateToProps, mapDispatchToProps)(Container);