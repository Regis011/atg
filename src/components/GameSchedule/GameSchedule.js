import React, { Component } from 'react';
import Moment from 'react-moment';
import axios from 'axios';

import './GameSchedule.scss';
import Modal from '../Modal/Modal'

class GameSchedule extends Component {

 constructor(props){
   super(props)

   this.state = {
     openGame: [],
     isLoadin: false,
     isShowing: false
   }

   this.handleClick = this.handleClick.bind(this);
   this.openModal = this.openModal.bind(this);
   this.closeModal = this.closeModal.bind(this);
 }

 handleClick(e){
    const id = e.target.id;
    this.setState({
      isLoadin: true,
      isShowing: true
    })

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://www.atg.se/services/racinginfo/v1/api/games/${id}`;
    axios.get(proxyurl + url)
      .then((response) => {
        this.setState({
          openGame: response.data,
          isLoadin: false
        })
      })
      .catch((error) => {
        console.log('error', error)
      });
  }

  openModal() {
    this.setState({
      isShowing: true
    });
  }

  closeModal() {
    this.setState({
      isShowing: false
    });
  }

  render() {
    const { data } = this.props;
    console.log(data);
    const state = this.state;
    const name = data[0] ? data[0].name : null;
    const upcoming = data[0] ? data[0].data.upcoming : null;
    const results = data[0] ? data[0].data.results : null;

    return (
      <div className="game_schedule">
        <h2>Spel Information</h2>

        <div className="game_schedule_in">
          <h3>Kommande spel</h3>
          <ul className="collection">
           { upcoming && upcoming.length > 0 ?
             upcoming.map((item, idx) => {
               const dateToFormat = item.startTime;
               const date = <Moment format="YYYY-MM-DD HH:mm" withTitle>
                 {dateToFormat}
               </Moment>;
               return <li className="collection-item" key={idx}>
                 <div className="text_list"> Plats: {item.tracks[0].name}, Börja: {date} </div>
                 <div className="button_list"><a href="#modal1" className="waves-effect waves-light btn" id={item.id} onClick={this.handleClick}>Läs mer</a></div></li>
             })
              : 'Data missing' }
          </ul>
          <h3>Resultat</h3>
          <ul className="collection">
            { results && results.length > 0 ?
              results.map((item, idx) => {
                const dateToFormat = item.startTime;
                const date = <Moment format="YYYY-MM-DD HH:mm" withTitle>
                  {dateToFormat}
                </Moment>;
                return <li className="collection-item" key={idx} >
                  <div className="text_list">Plats: {item.tracks[0].name}, Börja: {date} </div>
                  <div className="button_list"><button className="waves-effect waves-light btn" id={item.id} onClick={this.handleClick}>Läs mer</button></div>
                  </li>
              })
              : 'Data missing'}
          </ul>
        </div>

        <Modal
            className="modal"
            show={this.state.isShowing}
            close={this.closeModal}
            data={state.openGame}
            >
        </Modal>
      </div>
    );

  }

}

export default GameSchedule;
