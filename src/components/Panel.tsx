import * as React from 'react';
import { connect } from 'react-redux';

class Panel extends React.PureComponent<any, any> {

    handleToggleContainer = () => {
        this.props.toggleContainer();
    }

    render(){
        return (
            <div className="KPTAPP-panel">
                <button 
                    onClick={this.handleToggleContainer} 
                    className="KPTAPP-panel__item"> {this.props.toggleStatus? 'open': 'not-open'} 
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
    toggleContainer: () => dispatch({type: "TOGGLE_CONTAINER"})
})


export default connect(mapStateToProps, mapDispatchToProps)(Panel);