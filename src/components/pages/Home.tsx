import { NextPage } from "next";
import { Layout } from "../Layout";
import { EN, Language } from "../../lib/language";
import { HomeCover } from "../Home/HomeCover.component";
import { HomeSection } from "../Home/HomeSection.component";
import { HomeSectionTitle } from "../Home/HomeSectionTitle.component";
import { HomeButton } from "../Home/HomeButton.component";
import { ABOUT, ARTICLES, EVENTS } from "../../lib/routes";
import { Spacer } from "../Spacer";

export interface Props {
  content: { attributes: HomeAttributes };
  language: Language;
}
interface HomeAttributes {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}
export const Home: NextPage<Props> = ({ content, language }) => {
  const { attributes } = content;
  return (
    <Layout language={language}>
      <div className="flex flex-col h-full w-full">
        <HomeCover {...attributes} />
        <div className="flex flex-col items-center py-10">
          <img
            src="/images/044c.jpg"
            className="h-60 w-60 lg:h-96 lg:w-96 object-cover object-center lg:ml-10 overflow-hidden rounded-lg"
          />
          <div className="flex flex-col items-center flex-1">
            <Spacer h={2} />
            <span>{attributes.description}</span>
            <Spacer h={2} />
            <HomeButton
              text={language === EN ? "Read more" : "En savoir plus..."}
              language={language}
              path={ABOUT}
              color="primary"
            />
          </div>
        </div>
        <HomeSection className="bg-primary">
          <div className="lg:ml-10 flex flex-col items-center">
            <HomeSectionTitle
              className="text-white"
              text={language === EN ? "Next concerts" : "Prochains concerts"}
            />
            <Spacer h={4} />
            <HomeButton
              text={language === EN ? "See all" : "Tout voir"}
              language={language}
              path={EVENTS}
              color="white"
            />
          </div>
        </HomeSection>
        <HomeSection className="justify-end">
          <div className="lg:ml-10 flex flex-col items-center">
            <HomeSectionTitle text={"Articles"} className="text-primary" />
            <HomeButton
              text={language === EN ? "Read all" : "Tout voir"}
              language={language}
              path={ARTICLES}
              color="primary"
            />
          </div>
        </HomeSection>
      </div>
    </Layout>
  );
};
