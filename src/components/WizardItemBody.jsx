import React from 'react';
import PropTypes from 'prop-types';
import './wizard.css';

class WizardItemBody extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let component = null;
        if (this.props.current) {
            component = this.props.component;
        }
        return component;
    }
}

WizardItemBody.propTypes = {
    component: PropTypes.instanceOf(React.Component).isRequired
}

export default WizardItemBody;