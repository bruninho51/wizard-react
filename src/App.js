import React from 'react';
import Wizard from './components/Wizard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify, faQuestionCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function Questionario() {
  return (
    <div>Questionário</div>
  );
}

function Pergunta() {
  return (
    <div>Pergunta</div>
  );
}

function Fim() {
  return (
    <div>Fim</div>
  );
}

class App extends React.Component {
    constructor(props) {
      super(props);
      this.steps = [
        {
          title: 'Questionário',
          icon: <FontAwesomeIcon icon={faAlignJustify} />,
          component: <Questionario />
        },
        {
          title: 'Pergunta',
          icon: <FontAwesomeIcon icon={faQuestionCircle} />,
          component: <Pergunta />
        },
        {
          title: 'Fim',
          icon: <FontAwesomeIcon icon={faCheckCircle} />,
          component: <Fim />
        }
      ];
    }

    render() {
      return (
        <div className="App">
         <div style={{ width: '500px', height: '500px' }}>
          <Wizard steps={this.steps} />
          </div>
        </div>
      );
    }
}

export default App;
