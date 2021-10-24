export function CarouselNav({ maxIdx, activeIdx, handleChange }) {
  const CarouselBall = ({ idx }) => (
    <div className={`carousel-ball ${activeIdx === idx ? 'active' : ''}`} onClick={() => handleChange(idx)}></div>
  );
  return (
    <nav className="carousel-nav flex">
      {[...Array(maxIdx)].map((page, idx) => (
        <CarouselBall idx={idx} />
      ))}
    </nav>
  );
}
