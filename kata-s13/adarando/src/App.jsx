import './App.css'

import Entete from './Entete'

import randonnees from './randonnees.json';

// import CarteRando from './CarteRando'
import ListeRandos from './ListeRandos'

function App() {

  return (
    <>
      <Entete total={randonnees.length} />
      {/* <CarteRando randos={randonnees[0]} /> */}
      <ListeRandos randos={randonnees} />
    </>
  )
}

export default App
 