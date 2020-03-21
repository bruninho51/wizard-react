import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WizardItemHeader from './WizardItemHeader';
import WizardItemBody from './WizardItemBody';
import 'bootstrap/dist/css/bootstrap.min.css';
import './wizard.css';

function NextButton(props) {

    let disable = props.current === props.pages - 1;
    return (
        <button 
            onClick={ () => props.changePage(+1) } 
            className="btn btn-primary" 
            disabled={disable} >
            Next
        </button>
    );
}

function PrevButton(props) {
    let disable = props.current === 0;
    return (
        <button 
            onClick={ () => props.changePage(-1) } 
            className="btn btn-primary" 
            disabled={disable} >
            Prev
        </button>
    );
}

function FinishButton(props) {
    let disable = props.current != props.pages - 1;
    return (
        <button 
            onClick={ () => props.changePage(+1) } 
            className="btn btn-primary" 
            disabled={disable} >
            Finish
        </button>
    );
}

class Wizard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        }
    }

    changePage = (i) => {
        let pages = this.props.steps.length;
        let currentPage = this.state.current;
        if (i < 0 && currentPage > 0 || i > 0 && currentPage < pages - 1) {
            this.setState({
                current: currentPage + i
            });
        }
    }

    setCurrent = (i) => {
        this.setState({
            current: i
        });
    }

    render() {
        return (
            <section className="wizard">
                <header className="wizard-header">
                    {this.props.steps.map((step, i) => (
                        <WizardItemHeader 
                            key={i}
                            title={step.title} 
                            icon={step.icon}
                            current={i === this.state.current}
                            handleClick={ () => this.setCurrent(i) } />
                    ))}
                </header>
                <div className="wizard-body">
                    {this.props.steps.map((step, i) => (
                        <WizardItemBody 
                            key={i}
                            current={i === this.state.current}
                            component={step.component} />
                    ))}
                </div>
                <footer className="wizard-footer d-flex flex-row-reverse">
                    <FinishButton 
                        current={ this.state.current }
                        pages={ this.props.steps.length }
                        changePage={ this.changePage } />
                    <NextButton 
                        current={ this.state.current } 
                        pages={ this.props.steps.length } 
                        changePage={ this.changePage } />
                    <PrevButton 
                        current={ this.state.current }
                        pages={ this.props.steps.length }
                        changePage={ this.changePage } />
                </footer>
            </section>
        );
    }
}

WizardItemHeader.propTypes = {
    steps: PropTypes.array.isRequired
};

export default Wizard;