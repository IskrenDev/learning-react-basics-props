import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import ShortLine from "./ShortLine.tsx";

function SectionIntroduction(props: { sectionTitle: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; sectionDescription: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
    return (
        <section className="section-introduction">
            <h2>{props.sectionTitle}</h2>
            <p>{props.sectionDescription}</p>
            <ShortLine />
        </section>
    )
}

export default SectionIntroduction;