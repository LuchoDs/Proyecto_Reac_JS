import { AiFillSafetyCertificate } from "react-icons/ai";
import "./Meme.css";

export const Meme = () => {
  return (
    <section className="seccion-principal">
      <div className="textoA">
        <p className="textob">
          Belu, que decirte después que me venís aguantando por casi 6
          meses..¿que paciencia la tuya? ¿lo dejo a tu criterio?.. mmm iré por
          el "Mil gracias..!!". Las cursadas de Front y React fueron un lujo en
          todo sentido.. contenido, enseñanzas, buena onda, kahoots.. así, en
          relación a ello, espero que mi proyecto esté a la altura!! Muchos
          cariños para vos, para Dante, y si no nos volvemos a cruzar, que
          tengan un gran vida!!! (sabé que jamás levanté tu proyecto, aunque si
          me robé algo de tu css..😂😂😂)
        </p>

        <div className="memes">
          <img
            className="meme1"
            src="/images/maestraRomero.jfif"
            alt="meme uno"
          />

          <img
            className="meme2"
            src="/images/proyectoLucho.png"
            alt="meme dos"
          />

          <img
            className="meme3"
            src="/images/HomeroGenio.png"
            alt="meme tres"
          />
        </div>
      </div>
    </section>
  );
};
