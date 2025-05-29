//This will define the layout for the body which we can then dynamically populate

import ClubInfo from "./body-sections/club-info";
import FixtureContainer from "./body-sections/fixtures";
import HeadlineSection from "./body-sections/headlines";

function Content() {
  return (
    <main>
      <section className="headlines">
        <HeadlineSection />
      </section>
      <section className="fixtures">
        <FixtureContainer />
      </section>
      <section className="club--info">
        <ClubInfo />
      </section>
      <section className="players"></section>
    </main>
  );
}

export default Content;
