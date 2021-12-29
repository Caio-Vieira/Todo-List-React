import './App.css';
import Input from './components/Input'
import List from './components/List'
import { NoteProvider } from './context/Todo'

function App() {
  return (
    <div className='container'>
      <h1>Lista de Tarefas</h1>
      <NoteProvider>
        <Input></Input>
        <List></List>
      </NoteProvider>
    </div>

  );
}

export default App;
