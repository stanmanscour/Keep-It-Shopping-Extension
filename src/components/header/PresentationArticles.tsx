import * as React from 'react';
import { connect } from 'react-redux';
import IconRowWhite from '../../images/icons/row-white'
import IconBlockWhite from '../../images/icons/block-white'

class PresentationArticles extends React.PureComponent<any, any> {
    
    handleRow = () => {
        this.props.toggleArticlePresentation('block')
    }

    handleBlock = () => {
        this.props.toggleArticlePresentation('row')
    }

    render(){

        const buttonGridRow = <button onClick={this.handleRow}><IconBlockWhite /></button>;
        const buttonGridBlock = <button  onClick={this.handleBlock}><IconRowWhite /></button>;
        let choosenButton = <div>null</div>;

        if (this.props.presentation === 'row'){
            choosenButton = buttonGridRow;
        } else if (this.props.presentation === 'block'){
            choosenButton = buttonGridBlock;
        }

        return (
            <div className="KPTAPP-presentationArticles">
                { choosenButton }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    presentation: state.articles.presentation
})

const mapDispatchToProps = dispatch => ({
    toggleArticlePresentation: presentation => dispatch({type: 'CHANGE_ARTICLE_PRESENTATION', presentation})
})

export default connect(mapStateToProps, mapDispatchToProps)(PresentationArticles);