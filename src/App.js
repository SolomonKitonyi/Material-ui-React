import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Container maxWidth='sm'>
      <div className="App">
        <header className="App-header">
          <TextField variant="filled" color="green" type="date" label="The date" />
          <br/> <br/>
          <ButtonGroup size="large" variant="contained">
              <Button startIcon={<SaveIcon/>} color="primary">
                Save
              </Button> 
              <Button startIcon={<DeleteIcon/>} color="secondary">
                Discard
              </Button> 
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Container>
  );
}

export default App;
