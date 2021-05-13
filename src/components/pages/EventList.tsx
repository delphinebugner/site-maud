import Link from "next/link";
import { NextPage } from "next";
import { Layout } from "../Layout";
import { getUrlPrefix, Language } from "../../lib/language";
import { MyEvent } from "../../lib/Event/interface";
import { EVENTS } from "../../lib/routes";

export interface Props {
  events: MyEvent[];
  language: Language;
}
export const EventListPage: NextPage<Props> = ({ events, language }) => {
  return (
    <Layout language={language}>
      <div className="flex flex-col items-center justify-center h-full">
        <div>
          {events.map(({ name, place, date, id }, i) => (
            <Link key={i} href={`${getUrlPrefix(language)}${EVENTS}/${id}`}>
              <a className="flex flex-col cursor-pointer hover:opacity-80 transition-all duration-500">
                <p className="text-xl">{name}</p>
                <p>{place}</p>
                <p className="italic">{date}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};
