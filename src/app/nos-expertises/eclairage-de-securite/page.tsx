import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nos Expertises - Eclairage de Sécurité | Ideksys",
  description: "Nos expertises en éclairage de sécurité chez Ideksys",
};

export default function Eclairage() {
  return (
    <section className=" mt-20 lg:mt-[7rem]">
      <div className="flex flex-col gap-[1rem] lg:gap-[2rem] mx-[0.5rem] lg:mx-[1rem] rounded-2xl lg:rounded-3xl bg-gradient-to-r from-vert-securite to-green-900 ">
        <div className="w-full h-[3rem] lg:h-[4rem] mt-[1rem]">
          <Image
            src="/icons/eclairage.png"
            height="1000"
            width="1000"
            className="h-70 w-auto h-[4rem] object-contain mx-auto lg:w-auto lg:h-[6rem] Icon"
            alt="Icône éclairage de sécurité"
          />
        </div>
        <h1 className="text-white font-mPlusBold uppercase tracking-widest text-[1.5rem] lg:text-[3rem] text-center my-[0.5rem]">
          éclairage de sécurité
        </h1>
      </div>
      <div className="flex flex-col gap-[3rem] lg:gap-[3rem] mt-[3rem] w-full px-[1rem] sm:px-[5rem] lg:px-[15rem]">
        <div className="flex flex-col gap-[1rem]">
          <div className="flex flex-col gap-[1rem]">
            <h2 className="text-white font-mPlusBold text-[1.2rem] lg:text-[1.5rem] uppercase">
              Protégez sans délai
            </h2>
            <p className="text-white font-mPlusLight">
              Assurez la conformité de votre installation en mettant aux normes
              l&apos;éclairage de sécurité avec nos équipes spécialisées.
            </p>
            <h3 className="text-white font-mPlusBold text-[1rem] lg:text-[1.2rem]">
              Nous effectuons :
            </h3>
            <ul className="text-white font-mPlusLight">
              <li>
                - La{" "}
                <span className="font-mPlusBold text-[1rem] lg:text-[1.2rem]">
                  conception
                </span>{" "}
                et la{" "}
                <span className="font-mPlusBold text-[1rem] lg:text-[1.2rem]">
                  réalisation
                </span>{" "}
                de l&apos;éclairage de sécurité requis pour votre établissement
              </li>
              <li>
                - Le{" "}
                <span className="font-mPlusBold text-[1rem] lg:text-[1.2rem]">
                  renouvellement
                </span>{" "}
                de vos blocs de sécurité usagés avec notre service de
                remplacement
              </li>
              <li>
                - L&apos;{" "}
                <span className="font-mPlusBold text-[1rem] lg:text-[1.2rem]">
                  optimisation
                </span>{" "}
                de la durabilité de votre installation par le biais de notre
                service de maintenance
              </li>
            </ul>
          </div>

          <div className="flex flex-col lg:flex-row gap-[1rem]">
            <div className="flex flex-1 flex-col gap-[1rem]">
              <div className="flex px-3 sm:flex-col justify-center items-center w-full gap-[0.5rem] sm:gap-[0.2rem] lg:gap-[1rem] h-[5rem] sm:h-[6rem] lg:h-[8rem] rounded-2xl lg:rounded-3xl overflow-hidden ">
                <div className="h-[4rem] lg:h-[5rem] w-auto">
                  <Image
                    className="w-auto h-[4rem] object-contain mx-auto lg:w-auto lg:h-[5rem]"
                    src="/icons/baes.png"
                    width={500}
                    height={500}
                    alt="Technicien électricien travaillant dans un standard de fusibles et utilisant une tablette"
                  />
                </div>
              </div>
              <p className="text-white font-mPlusLight">
                Avec l&apos;installation de blocs d&apos;alimentation de secours
                et d&apos;éclairage conformes à la normes NF C 18-510, vous
                assurez la sécurité des personnes et des biens de votre
                établissement. <br /> Nous disposons de techniciens expérimentés
                prêts à vous aider à atteindre un niveau de sécurité optimal.
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-[1rem]">
              <div className="flex px-3 sm:flex-col justify-center items-center w-full gap-[0.5rem] sm:gap-[0.2rem] lg:gap-[1rem] h-[5rem] sm:h-[6rem] lg:h-[8rem] rounded-2xl lg:rounded-3xl overflow-hidden ">
                <div className="h-[4rem] lg:h-[5rem] w-auto">
                  <Image
                    className="w-auto h-[4rem] object-contain mx-auto lg:w-auto lg:h-[5rem]"
                    src="/icons/eas.png"
                    width={500}
                    height={500}
                    alt="Technicien électricien travaillant dans un standard de fusibles et utilisant une tablette"
                  />
                </div>
              </div>
              <p className="text-white font-mPlusLight">
                <span className="font-mPlusBold text-[1rem] lg:text-[1.2rem]">
                  Espace d&apos;Attente Sécurisé
                </span>
                <br />
                L&apos;EAS est une mesure importante por garantir la sécurité
                incendie. Il doit être conçu et installé de manière à répondre
                aux normes en vigueur et permettre une évacuation en toute
                sécurité en cas d&apos;incendie.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[1rem]">
          <div className="flex flex-col gap-[1rem]">
            <h2 className="text-white font-mPlusBold text-[1.2rem] lg:text-[1.5rem] uppercase">
              Priorisez-vous la sécurité avant tout ?
            </h2>
            <p className="text-white font-mPlusLight">
              L&apos;éclairage dédié à la sécurité est un élément clé pour
              assurer la protection des établissements recevant du public.
            </p>
            <h3 className="text-white font-mPlusBold text-[1rem] lg:text-[1.2rem]">
              L&apos;éclairage de sécurité permet de :
            </h3>
            <ul className="text-white font-mPlusLight">
              <li>
                - Garantir la facilité et la sécurité de l&apos;évacuation vers
                l&apos;extérieur{" "}
              </li>
              <li>
                - Gérer les situatioins d&apos;urgences sans déclancher la
                panique
              </li>
              <li>- Conduire des opérations de sécurité efficaces</li>
            </ul>
            <h3 className="text-white font-mPlusBold text-[1rem] lg:text-[1.2rem]">
              Sécurité en danger :
            </h3>
            <p className="text-white font-mPlusLight">
              Un constat préoccupant, 1/3 des blocs d&apos;éclairage de sécurité
              en France présente des défaillances.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[1rem]">
          <div className="flex px-3 sm:flex-col justify-center items-center w-full gap-[1rem] sm:gap-[0.2rem] lg:gap-[1rem] h-[5.5rem] sm:h-[6rem] lg:h-[10rem] rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-r from-vert-securite to-green-900  hover:shadow-2xl CardService">
            <div className="h-[3rem] lg:h-[5rem] w-auto">
              <Image
                className="w-auto h-[3rem] object-contain mx-auto lg:w-auto lg:h-[5rem]"
                src="/icons/maintenance.png"
                width={500}
                height={500}
                alt="Technicien électricien travaillant dans un standard de fusibles et utilisant une tablette"
              />
            </div>
            <h2 className=" font-mPlusBold text-white lg:text-[1.5rem]">
              Maintenance
            </h2>
          </div>
          <h2 className="text-white font-mPlusBold text-[1.2rem] lg:text-[1.5rem] uppercase">
            La maintenance, la clé de la sécurité
          </h2>
          <h3 className="text-white font-mPlusBold text-[1rem] lg:text-[1.2rem]">
            Vérification par l&apos;exploitant
          </h3>
          <ul className="text-white font-mPlusLight">
            Tous les mois :
            <li>
              - Vérification de l&apos;allumage de toutes les lampes
              d&apos;éclairage de sécurité
            </li>
            <li>
              - Vérification du bon fonctionnement de la télécommande. Les
              résultats devront être renseignés dans le registre de sécurité.
            </li>
          </ul>
          <ul className="text-white font-mPlusLight">
            Tous les 6 mois :
            <li>
              - Vérification de l&apos;autonomie des batteries. Les résultats
              devront petre renseignés dans le registre de sécurité.
            </li>
          </ul>
          <h3 className="text-white font-mPlusBold text-[1rem] lg:text-[1.2rem]">
            Maintenance et entretien par un technicien qualifié
          </h3>
          <ul className="text-white font-mPlusLight">
            Tous les ans (d&apos;après la norme NFC 71-830) :
            <li>- Maintenance compléte des BAES</li>
            <li>
              - Le technicien doit mettre en place une étiquette de maintenance
              sur chaque bloc et doit remettre au responsable un rapport de
              maintenance. L&apos;intervention sera renseignée dans le registre
              de sécurité.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-[1rem]">
          <div
            className="flex px-3 sm:flex-col justify-center items-center w-full gap-[0.5rem] sm:gap-[0.2rem] lg:gap-[1rem] h-[5.5rem] sm:h-[6rem] lg:h-[10rem] rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-r from-vert-securite to-green-900  hover:shadow-2xl CardService"
            style={{
              backgroundImage: "url('/images/signaletique.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <h2 className="text-white font-mPlusBold text-[1rem] lg:text-[1.5rem] uppercase">
            Les dangers pour l&apos;établissements en cas de BAES défaillants ou
            manquants
          </h2>
          <h3 className="text-white font-mPlusBold text-[1rem] lg:text-[1.2rem]">
            Une conformité légale obligatoire
          </h3>
          <p className="text-white font-mPlusLight">
            Selon l&apos;article R.123-41 du code de la construction et de
            l&apos;habitation : <br /> Les gestionnaires et exploitants sont
            responsables individuellement de garantir l&apos;installation des
            équipements, leurs maintenances et leurs entretiens de manière
            adéquate.
          </p>
          <p className="text-white font-mPlusLight">
            Ils sont tenus déffectuer les vérifications nécessaires par des
            orgaismes ou personnes agréées conformément aux condtions établies
            par arrêté du ministre de l&apos;intérieur.
          </p>
          <h3 className="text-white font-mPlusBold text-[1rem] lg:text-[1.2rem]">
            Protéger la vie en toutes circonstances
          </h3>
          <p className="text-white font-mPlusLight">
            Dans le cadre de la sécurité, l&apos;état défectueux des lampes, de
            la batterie ou la dégradation du bloc peut entraîner un
            dysfonctionnement inopportun du système d&apos;éclairage de
            sécurité.
          </p>
          <p className="text-white font-mPlusLight">
            Les conséquences de cette défaillance sont graves, augmentant les
            risques de panique parmi les occupants et compromettant la facilité
            d&apos;évacuation.
          </p>
          <h3 className="text-white font-mPlusBold text-[1rem] lg:text-[1.2rem]">
            Responsabilité pénale et civile de l&apos;exploitant : Garant de la
            sécurité de son établissement
          </h3>
          <p className="text-white font-mPlusLight">
            En situation d&apos;infraction, des conséquences pénales telles que
            des amendes significatives et des peines d&apos;emprisonnement
            peuvent s&apos;appliquer, venant s&apos;ajouter aux pertes
            d&apos;exploitations et à la fermeture potentielle de
            l&apos;établissement.
          </p>
        </div>
      </div>
    </section>
  );
}
