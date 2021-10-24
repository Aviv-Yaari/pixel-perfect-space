import { useState } from 'react';
import { CarouselNav } from '../cmps/CarouselNav';
import { PageTitle } from '../cmps/PageTitle';

export function CrewPage({ crew }) {
  const [currIdx, setCurrIdx] = useState(0);
  const member = crew[currIdx];
  return (
    <>
      <PageTitle num="02" text="Meet your crew" />
      <section className="page crew-page flex space-between">
        <div className="flex column space-between">
          <article>
            <h4>{member.role}</h4>
            <h3>{member.name}</h3>
            <p>{member.bio}</p>
          </article>
          <CarouselNav maxIdx={crew.length} activeIdx={currIdx} handleChange={setCurrIdx} />
        </div>
        <img src={require('../assets/img/crew/' + member.images.png).default} alt={member.name} />
      </section>
    </>
  );
}
