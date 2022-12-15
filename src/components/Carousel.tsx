import "./Carousel.scss";

type CarouselType = {
  children?: JSX.Element[];
};

type CarouselSlideType = {
  index: number;
  previousIndex: number;
  nextIndex: number;
  children?: JSX.Element;
};

const CarouselSlide = ({ index, previousIndex, nextIndex, children }: CarouselSlideType) => (
  <li id={`/career#carousel__slide${index}`} tabIndex={0} className="carousel__slide">
    {children}
    <div className="carousel__snapper">
      <a href={`#/career#carousel__slide${previousIndex}`} className="carousel__prev">
        Go to slide {previousIndex}
      </a>
      <a href={`#/career#carousel__slide${nextIndex}`} className="carousel__next">
        Go to slide {nextIndex}
      </a>
    </div>
  </li>
);

const Carousel = ({ children }: CarouselType) => {
  const max = children?.length || 0;
  return (
    <section className="carousel" aria-label="Carousel">
      <ol className="carousel__viewport">
        {children?.map((child, index) => (
          <CarouselSlide key={index} index={index + 1} previousIndex={((index + 1 + max - 2) % max) + 1} nextIndex={((index + 1) % max) + 1}>
            {child}
          </CarouselSlide>
        ))}
      </ol>
      <aside className="carousel__navigation">
        <ol className="carousel__navigation-list">
          {children?.map((_, index) => (
            <li key={index} className="carousel__navigation-item">
              <a href={`#/career#carousel__slide${index + 1}`} className="carousel__navigation-button">
                Go to slide {index + 1}
              </a>
            </li>
          ))}
        </ol>
      </aside>
    </section>
  );
};

export default Carousel;
export { CarouselSlide };
