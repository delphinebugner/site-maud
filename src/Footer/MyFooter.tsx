import { FunctionComponent } from "react";
import { EN, Language } from "../lib/language";

interface FooterProps {
  language: Language;
}

export const MyFooter: FunctionComponent<FooterProps> = ({ language }) => {
  return (
    <div className="py-10 bg-primary flex flex-col items-center justify-center text-white">
      <div className="mb-2">
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
  <div className="text-xs mt-2 text-secondary">
    <span className="font-bold">{label}</span>
    <a className="underline" href={link}>
      {text}
    </a>
  </div>
);
