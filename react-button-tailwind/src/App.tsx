import { Button } from "./components/Button";

function App() {
  return (
    <div>
      <Button rounded> Botón primario</Button>
      <Button variant="outline" rounded>
        Botón outline
      </Button>
      <Button variant="destructive" rounded>
        Botón destructivo
      </Button>
    </div>
  );
}

export default App;