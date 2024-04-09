import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Footer() {
  return (
    <div>
      <footer className="flex flex-wrap lg:flex-row px-[0.5rem] lg:px-[1rem] gap-[0.5rem] lg:gap-[1rem]">
        <div className="flex flex-col justify-center items-center gap-[0.5rem] lg:gap-[1rem] h-[10rem] sm:h-[15rem] lg:h-[18rem] sm:flex-1 w-full rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-r from-gris-case to-zinc-800">
          <div className="flex justify-center items-center gap-[1rem]">
            <p className=" font-mPlusRegular text-white text-[0.8rem]">
              Télécharger notre brochure
            </p>
            <a href="" download={true}>
              <FontAwesomeIcon
                icon={faDownload}
                size="2x"
                className="text-white transition-all duration-200 ease-in-out"
              />
            </a>
          </div>
          <p className="text-center font-mPlusRegular text-white text-[0.8rem]">
            Suivez-nous sur les réseaux sociaux
          </p>
          <div className="flex gap-[1rem] w-auto">
            <Link
              target="_Blank"
              href="https://www.instagram.com/ideksys_?igsh=Z3p6NG4zMDhhMHJ3"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="text-white hover:text-bleu-surete transition-all duration-200 ease-in-out"
              />
            </Link>
            <Link
              target="_Blank"
              href="https://www.linkedin.com/company/ideksys/"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="text-white hover:text-rouge-incendie transition-all duration-200 ease-in-out"
              />
            </Link>
            <Link target="_Blank" href="">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className="text-white hover:text-vert-securite transition-all duration-200 ease-in-out"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-[0.5rem] lg:gap-[1rem] h-[10rem] sm:h-[15rem] lg:h-[18rem] sm:flex-1 w-full rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-r from-gris-case to-zinc-800">
          <div className="h-[3rem] sm:h-[4.5rem] lg:h-[6rem] w-auto">
            <Image
              className="w-auto h-[3rem] object-cover mx-auto sm:h-[4.5rem] lg:w-auto lg:h-[6rem]"
              src="/Logo/ideksys_white.png"
              width={400}
              height={400}
              alt="Logo Ideksys"
            />
          </div>
          <p className=" font-mPlusRegular text-white text-center text-[0.8rem]">
            8 rue du Bois Sauvage <br /> 91000 Evry-Courcouronnes <br /> Tél :
            01.09.09.09.09 <br /> Mail : ideksys@contact.fr
          </p>
        </div>
        <div className="flex flex-row sm:flex-col justify-center items-center gap-[1rem] lg:gap-[1rem] h-[10rem] sm:h-[15rem] lg:h-[18rem] sm:flex-1 w-full rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-r from-gris-case to-zinc-800">
          <div className="text-center">
            <p className="text-white font-mPlusBlack text-[0.8rem]">
              PLAN DU SITE
            </p>
            <Link className="" href="/surete">
              <p className=" font-mPlusRegular text-white text-[0.8rem] hover:text-bleu-surete">
                Sûreté
              </p>
            </Link>
            <Link className="" href="/securité-incendie">
              <p className=" font-mPlusRegular text-white text-[0.8rem] hover:text-rouge-incendie">
                Sécurité Incendie
              </p>
            </Link>
            <Link className="" href="/eclairage-de-securite">
              <p className=" font-mPlusRegular text-white text-[0.8rem] hover:text-vert-securite">
                Eclairage de sécurité
              </p>
            </Link>
          </div>
          <div className="text-center">
            <p className="text-white font-mPlusBlack text-[0.8rem]">ANNEXES</p>
            <Link className="hover:text-rouge-incendie" href="/contactez-nous">
              <p className=" font-mPlusRegular text-[0.8rem] text-white">
                Contactez-nous
              </p>
            </Link>
            <Link
              className="hover:text-rouge-incendie"
              href="/mentions-legales"
            >
              <p className=" font-mPlusRegular text-[0.8rem] text-white">
                Mentions légales
              </p>
            </Link>
            <Link
              className="hover:text-rouge-incendie"
              href="/politique-de-confidentialite"
            >
              <p className=" font-mPlusRegular text-[0.8rem] text-white">
                Politique de confidentialité
              </p>
            </Link>
          </div>
        </div>
      </footer>
      <p className="text-[0.6rem] sm:text-[0.8rem] p-[0.5rem] font-rubikLight text-white text-center font-mPlusLight">
        Copyright © 2024 - Ideksys - All Rights Reserved - Website by :{" "}
        <Link
          target="_blank"
          href="https://inthegleam.com/"
          className="text-white hover:text-vert-securite"
        >
          inTheGleam
        </Link>
      </p>
    </div>
  );
}
