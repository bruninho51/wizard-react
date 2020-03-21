import React from 'react';
import PropTypes from 'prop-types';
import './wizard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class WizardItemHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
    }

    toggleHover = () => {
        this.setState({
            hover: !this.state.hover
        });
    }

    render() {
        let classHeader = this.state.hover ? 'hover' : '';
        classHeader = this.props.current ? 'active' : classHeader;
        return (
            <a 
                className={ classHeader }
                onMouseOver={ this.toggleHover }
                onMouseLeave={ this.toggleHover }
                onClick={ this.props.handleClick }
            >
                <div class="icon">
                    { this.props.icon }
                </div>
                { this.props.title }
            </a>
        );
    }
}

WizardItemHeader.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.instanceOf(FontAwesomeIcon),
    current: PropTypes.bool.isRequired
};

export default WizardItemHeader;