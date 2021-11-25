import { Fragment } from "react";
import CardAbout from "../components/CardAbout";
import "./About.css";

export default function About() {
    const keteranganApp = [
        {
            id: 1,
            fungsiApp: "Bored? Ran out of things to do? Why not pick up a good book? Or maybe, you ran out of books to read... Hmmm, well, don't you worry. We are here to help you found that next exciting book, one who will occupy you for hours on end.",
            tujuanApp: "Aplikasi ini dibuat untuk memenuhi Tugas Akhir Praktikum MDP.",
        }
    ];

    return (
        <>
        <div className="containerApp">
            <h1 id="namaApp">"Good Books Choices"</h1>
        {keteranganApp.map((item, index) => (
            <Fragment key={item.id}>
                <CardAbout
                    fungsi={item.fungsiApp}
                    tujuan={item.tujuanApp}
                /> 
                {keteranganApp.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>
        ))}
        </div>
        </>
    );
}