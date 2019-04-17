import React, { Component } from 'react';

import './Modal.scss';

import CollapsibleButton from '../CollapsibleButton/CollapsibleButton';

class Modal extends Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }

  render() {

    const props = this.props;

    return (
      <div>
          <div className="modal-wrapper"
              style={{
                  transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                  opacity: props.show ? '1' : '0'
              }}>
              <div className="modal-content">
                <span className="close-modal-btn" onClick={props.close}>×</span>

                <div className="game_data">
                  <div className="game_data_list">
                  { props.data && props.data.length != 0  ? props.data.races.map((item, idx) => {
                    return <div key={idx}>
                      <p>Nr: {item.number}, Namn: {item.name}, Start: {item.startTime}</p>
                      {item.starts.map((item, idx) => {
                        return <div key={idx}> Start nr: {item.number} , Hästnamn: {item.horse.name} ,Förare: {item.driver.firstName + ' ' + item.driver.lastName}
                          <CollapsibleButton
                            firstName={item.horse.trainer.firstName}
                            lastName={item.horse.trainer.lastName}
                            horseFatherName={item.horse.pedigree.father.name} />
                        </div>
                      })}
                    </div>
                  }) : <div className="progress">
                        <div className="indeterminate"></div>
                      </div>
                  }
                  </div>
                </div>
              </div>
          </div>
      </div>
    );

  }

}

export default Modal;
