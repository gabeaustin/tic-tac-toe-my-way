import React, { Component } from "react";

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = [];
    }

  render() {
    let wasClicked = () => {
      console.log(`${this} Cell was clicked`);
    };

    return (
      <div className="container centered hidden" id="game-board">
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td>
                <button id="cell-top-left" className="btn-block"></button>
              </td>
              <td>
                <button id="cell-top-middle"></button>
              </td>
              <td>
                <button id="cell-top-right"></button>
              </td>
            </tr>
            <tr>
              <td>
                <button id="cell-middle-left"></button>
              </td>
              <td>
                <button id="cell-middle-middle"></button>
              </td>
              <td>
                <button id="cell-middle-right"></button>
              </td>
            </tr>
            <tr>
              <td>
                <button id="cell-bottom-left"></button>
              </td>
              <td>
                <button id="cell-bottom-middle"></button>
              </td>
              <td>
                <button id="cell-bottom-right"></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;
