import { NavLink } from 'react-router-dom';
import MoonImg from '../assets/img/destination/image-moon.png';
import { PageTitle } from '../cmps/PageTitle';
import data from '../data.json';

export function DestPage(props) {
  const destinations = data.destinations;
  const { name = 'moon' } = props.match.params;
  const nameRgx = new RegExp(name, 'i');
  const destination = destinations.find(dest => nameRgx.test(dest.name));
  return (
    <section className="page dest-page">
      <PageTitle num="01" text="Pick Your Destination" />
      <div className="img-and-info flex space-between">
        <img src={MoonImg} alt="moon" />
        <div className="flex column">
          <nav className="destinations-nav flex">
            {destinations.map(dest => (
              <NavLink to={`/destination/${dest.name.toLowerCase()}`}>{dest.name}</NavLink>
            ))}
          </nav>
          <article>
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
          </article>
          <section className="add-info flex">
            <div>
              <div className="sub-heading-2">Avg. Distance</div>
              <span className="sub-heading-1">{destination.distance}</span>
            </div>
            <div>
              <div className="sub-heading-2">Est. travel time</div>
              <span className="sub-heading-1">{destination.travel}</span>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
