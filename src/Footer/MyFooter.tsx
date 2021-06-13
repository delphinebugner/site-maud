import { FunctionComponent } from "react";
import { EN, Language } from "../lib/language";

interface FooterProps {
  language: Language;
}

export const MyFooter: FunctionComponent<FooterProps> = ({ language }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center  myFooter">
        <div className="myTextWhite">
          <span className="font-bold">{"Contact : "}</span>
          <span style={{ direction: "rtl", unicodeBidi: "bidi-override" }}>
            moc.liamg [ta] gnireah.duam
          </span>
        </div>
        <FooterCredit
          text="Béatrice Cruveiller"
          link="https://beatricecruveiller.com/"
          label={language === EN ? "Photo credit: " : "Crédits photos : "}
        />
        <FooterCredit
          text="Delphine Bugner"
          link="https://github.com/phindell"
          label={
            language === EN
              ? "Website Design & Realisation: "
              : "Design et réalisation du site : "
          }
        />
      </div>
      <style jsx>{`
        .myFooter {
          padding: 40px 0;
          background-color: #818cf8;
        }
        .myTextWhite {
          color: white;
          marginbottom: 16px;
        }
      `}</style>
    </>
  );
};

interface CreditProps {
  text: string;
  link: string;
  label: string;
}

const FooterCredit: FunctionComponent<CreditProps> = ({
  text,
  link,
  label,
}) => (
  <div className="text-sm mt-1 text-secondary">
    <span className="font-bold">{label}</span>
    <a className="underline" href={link}>
      {text}
    </a>
  </div>
);
