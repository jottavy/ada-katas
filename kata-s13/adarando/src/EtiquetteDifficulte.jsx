import './EtiquetteDifficulte.css'

function EtiquetteDifficulte({ difficulte }) {

    return (
        <span className={`pill pill-${difficulte}`}>{difficulte}</span>
    )
}

export default EtiquetteDifficulte;