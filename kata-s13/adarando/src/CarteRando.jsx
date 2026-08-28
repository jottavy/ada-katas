import EtiquetteDifficulte from "./EtiquetteDifficulte";
import './CarteRando.css'

function CarteRando({ rando }) {

    return (
        <article className="carte">
            <h2>{rando.nom}</h2>
            <EtiquetteDifficulte difficulte={rando.difficulte} />
            <p>Durée : {rando.duree_h} heures</p>
            <p>Dénivelé : {rando.denivele_m}</p>
            {rando.balisee && <p>Balisée</p>}
        </article>
    )
}

export default CarteRando;