import CarteRando from "./CarteRando";
import './ListeRandos.css'

function ListeRandos({ randos }) {

    return (
        <section className="liste">
            {randos.map(rando => (
                <CarteRando key={rando.id} rando={rando} />
            ))}
        </section>
    )
}

export default ListeRandos;