import SectionIntroduction from "./SectionIntroduction.tsx";
import Banner from "./Banner.tsx";
import ArticleList from "./articles/ArticleList.tsx";

function Main() {
    return(
        <main>
            <SectionIntroduction sectionTitle={"Must-Read Articles"} sectionDescription={"My Best Articles That I Recommend To Everyone"} />
            <Banner />
            <SectionIntroduction sectionTitle={"Recent Articles"} sectionDescription={"The recent articles"} />

            <ArticleList />
        </main>
    )
}

export default Main;