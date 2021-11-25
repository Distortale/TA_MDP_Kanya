import { Fragment } from "react";
import CardDev from "../components/CardDev";
import "./Dev.css";

export default function Dev() {
    const keteranganDev = [
        {
            id: 1,
            gambar: "https://static.wikia.nocookie.net/disney/images/a/a8/Profile_-_Stitch.jpeg",
            nama: "Kanya Azalia Andriyani",
            nim: 21120119130063,
            github: "Distortale",
            hobi: "Membaca, Memasak, dan Main Game",
        }
    ];

    return (
        <>
            <h1 id="dev">This App is Made By:</h1>
            {/* <div className="containerDev"> */}
            {keteranganDev.map((item, index) => (
                <Fragment key={item.id}>
                    <CardDev
                        gambar={item.gambar}
                        nama={item.nama}
                        nim={item.nim}
                        hobi={item.hobi}
                        github={item.github}
                    /> 
                    {keteranganDev.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                </Fragment>
            ))}
            {/* </div> */}
        </>
    );
}