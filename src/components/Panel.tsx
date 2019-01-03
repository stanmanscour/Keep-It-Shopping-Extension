import * as React from 'react';
import { connect } from 'react-redux';
import IconShirtWhite from '../images/icons/shirt-white'
import * as ActionCreator from '../actions/actions'
class Panel extends React.PureComponent<any, any> {

    handleToggleContainer = () => {
        this.props.toggleContainer();
    }

    render(){
        return (
            <div className="KPTAPP-panel">
                <button 
                    onClick={this.handleToggleContainer} 
                    className="KPTAPP-panel__item"> 
                    <IconShirtWhite />
                    {this.props.toggleStatus? '': ''} 
                </button>
            </div>
        )
    }
}

/* <button className="KPTAPP-panel__item"> article </button> */

const mapStateToProps = state => ({
    toggleStatus: state.container.open
})

const mapDispatchToProps = dispatch => ({
    toggleContainer: () => dispatch(ActionCreator.toggleContainer())
})


export default connect(mapStateToProps, mapDispatchToProps)(Panel);