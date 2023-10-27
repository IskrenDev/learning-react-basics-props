import ShortLine from "./ShortLine.tsx";

type Props = {
    sectionTitle: string,
    sectionDescription: string

}

function SectionIntroduction(props : Props) {
    return (
        <section className="section-introduction">
            <h2>{props.sectionTitle}</h2>
            <p>{props.sectionDescription}</p>
            <ShortLine />
        </section>
    )
}

export default SectionIntroduction;