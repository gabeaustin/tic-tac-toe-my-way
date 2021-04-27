import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1>TicTacToe</h1>
      <h4>My Way</h4>

      <div className="container board">
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td id="cell-top-left">X</td>
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
    </div>
  );
}

export default App;
