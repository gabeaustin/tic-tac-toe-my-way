import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1>TicTacToe</h1>
      <h4>My Way</h4>

      <div className="container board">
        <table class="table table-bordered table-hover">
            <tr>
                <td>X</td>
                <td>X</td>
                <td>X</td>
            </tr>
            <tr>
                <td>X</td>
                <td>X</td>
                <td>X</td>
            </tr>
            <tr>
                <td>X</td>
                <td>X</td>
                <td>X</td>
            </tr>

        </table>
      </div>
    </div>
  );
}

export default App;
