import './Entete.css'

function Entete({ total }) {

  return (
    <>
      <header className="entete">
        <h1>AdaRando</h1>
        <p>De la balade au grand trek</p>
        <p className="entete-compteur">{total} randonnées au total</p>
      </header>
    </>
  );
}

export default Entete;