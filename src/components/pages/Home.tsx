import { NextPage } from "next";
import { Layout } from "../Layout";
import { EN, Language } from "../../lib/language";
import { HomeCover } from "../Home/HomeCover.component";
import { HomeSection } from "../Home/HomeSection.component";
import { HomeSectionTitle } from "../Home/HomeSectionTitle.component";
import { HomeButton } from "../Home/HomeButton.component";
import { ABOUT, ARTICLES, EVENTS } from "../../lib/routes";
import { Spacer } from "../Spacer";
import { EventHomeCard } from "../Home/EventHomeCard.component";
import { MyEvent } from "../../lib/Event/interface";

export interface Props {
  content: { attributes: HomeAttributes };
  events: MyEvent[];
  language: Language;
}
interface HomeAttributes {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}
export const Home: NextPage<Props> = ({ content, language, events }) => {
  const { attributes } = content;
  return (
    <Layout language={language}>
      <div className="flex flex-col h-full w-full">
        <HomeCover {...attributes} />
        <div className="flex flex-col items-center py-10 bg-primary">
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
        <HomeSection className="bg-white">
          <div className="lg:ml-10 flex flex-col items-start">
            <HomeSectionTitle
              className="text-primary"
              text={language === EN ? "Next concerts" : "Prochains concerts"}
            />
            <Spacer h={4} />
            <HomeButton
              text={language === EN ? "See all" : "Tout voir"}
              language={language}
              path={EVENTS}
              color="primary"
              className="hidden lg:block"
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            {events.slice(0, 3).map((concert, i) => (
              <EventHomeCard {...concert} key={i} language={language} />
            ))}
          </div>
          <HomeButton
            text={language === EN ? "See all" : "Tout voir"}
            language={language}
            path={EVENTS}
            color="primary"
            className="lg:hidden block mt-4"
          />
        </HomeSection>
        <HomeSection className="justify-end bg-primary">
          <div className="lg:ml-10 flex flex-col items-start">
            <HomeSectionTitle text={"Articles"} className="text-white" />
            <Spacer h={4} />
            <HomeButton
              text={language === EN ? "Read all" : "Tout voir"}
              language={language}
              path={ARTICLES}
              color="white"
            />
          </div>
        </HomeSection>
      </div>
    </Layout>
  );
};
