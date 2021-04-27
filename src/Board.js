import React, { Component } from "react";

class Board extends Component {
    render() {
      return (
        <div className="container board">
          <table class="table table-bordered">
            <tbody>
              <tr>
                <td id="cell-top-left" onClick={() => alert("clicked")}>
                  X
                </td>
                <td id="cell-top-middle">X</td>
                <td id="cell-top-right">X</td>
              </tr>
              <tr>
                <td id="cell-middle-left">X</td>
                <td id="cell-middle-middle">X</td>
                <td id="cell-middle-right">X</td>
              </tr>
              <tr>
                <td id="cell-bottom-left">X</td>
                <td id="cell-bottom-middle">X</td>
                <td id="cell-bottom-right">X</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  };

  export default Board;