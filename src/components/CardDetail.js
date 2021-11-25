import "./CardDetail.css";

export default function CardDetail ({ranking, judul, sinopsis}) {
    return (
        <div className="containerDetailBuku">
                <p id="detailjudulBuku">{ranking + ". " + '"' + judul + '"'}</p>
            <div className="containerDetailStringBuku">
                <p id="detailKetSinopsis">Synopsis: </p>
                <p id="detailSinopsisBuku">{sinopsis}</p>
            </div>
        </div>
    );
}