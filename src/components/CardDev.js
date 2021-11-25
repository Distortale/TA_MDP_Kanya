import { SiGithub } from "react-icons/si";
import { HiOutlineHeart } from "react-icons/hi";
import "./CardDev.css";

export default function CardDev ({gambar, nama, nim, github, hobi}) {
    return (
        <div className="containerDev">
            <img src={gambar} alt="" className="profilepic" />
            <div className="containerDataDev">
                <div className="containerNama">
                    <HiOutlineHeart color={"rgb(216, 207, 184)"} size={"85px"}  />
                    <p id="nama">{nama}</p>
                    <HiOutlineHeart color={"rgb(216, 207, 184)"} size={"85px"} />
                </div>
                <p id="nim">{"NIM: " + nim}</p>
                <p id="hobi">{"Hobi: " + hobi}</p>
                <div className="containerGithub">
                    <div className="logoGithub">
                        <SiGithub color={"white"} size={"30px"}  />
                    </div>
                    <div className="kontakGithub">
                        <div>
                            <p id="github">{github}</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}