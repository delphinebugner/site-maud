import { NextPage } from "next";
import { Layout } from "../Layout";
import { EN, Language } from "../../lib/language";
import { HomeCover } from "../Home/HomeCover.component";
import { HomeSectionTitle } from "../Home/HomeSectionTitle.component";
import { HomeButton } from "../Home/HomeButton.component";
import { ABOUT, ARTICLES, EVENTS } from "../../lib/routes";
import { EventHomeCard } from "../Home/EventHomeCard.component";
import { MyEvent } from "../../lib/Event/interface";
import { RoundImage } from "../RoundImage";

const NUMBER_OF_CONCERTS_DISPLAYED = 3;

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
      <div className="flex flex-col h-full w-full overflow-x-hidden">
        <HomeCover {...attributes} />
        <div
          className="flex lg:flex-row flex-col items-center
          p-4 lg:p-10 overflow-x-hidden"
        >
          <div className="flex flex-col justify-center items-center flex-1">
            <p className="font-serif text-6xl">{attributes.subtitle}</p>
            <p className="m-4 lg:mx-24 lg:my-12">{attributes.description}</p>
            <HomeButton
              text={language === EN ? "Read more" : "En savoir plus..."}
              language={language}
              path={ABOUT}
              color="black"
            />
          </div>
          <RoundImage
            src="/images/044.jpg"
            sizeDesktop={600}
            className="mt-4 lg:-mr-40 lg:mt-8"
          />
        </div>
        <div className="flex overflow-x-hidden overflow-y-visible p-4 lg:p-0">
          <RoundImage
            src="/images/133.jpg"
            sizeDesktop={500}
            className="relative -left-24 hidden lg:block"
          />
          <div className="lg:py-10 flex flex-col items-center justify-center flex-1 lg:-ml-20">
            <HomeSectionTitle
              className="text-primary"
              text={language === EN ? "Next concerts" : "Prochains concerts"}
            />
            <div
              className="flex flex-col lg:flex-row items-center justify-center lg:my-8 
              flex-wrap "
            >
              {events
                .slice(0, NUMBER_OF_CONCERTS_DISPLAYED)
                .map((concert, i) => (
                  <EventHomeCard {...concert} key={i} language={language} />
                ))}
            </div>
            <HomeButton
              text={language === EN ? "See all" : "Tout voir"}
              language={language}
              path={EVENTS}
              color="primary"
              className="mt-4"
            />
          </div>
        </div>
        <div className="p-4 lg:p-10 flex items-center flex-col lg:flex-row">
          <div className="flex flex-col justify-between items-center lg:items-start flex-1 my-8 lg:my-0">
            <HomeSectionTitle
              text={language === EN ? "Research work" : "Travaux de recherche"}
              className="text-primary"
            />
            <HomeButton
              text={language === EN ? "Read all" : "Tout voir"}
              language={language}
              path={ARTICLES}
              color="primary"
            />
          </div>
          <RoundImage
            src="/images/255.jpg"
            sizeDesktop={700}
            className="lg:-mr-24"
            position="top"
          />
        </div>
      </div>
    </Layout>
  );
};
