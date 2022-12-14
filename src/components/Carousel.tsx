import "./Carousel.scss";

type CarouselType = {
  children?: React.ReactNode;
};

type CarouselSlideType = {
  index: number;
  previousIndex: number;
  nextIndex: number;
  children?: React.ReactNode;
};

const CarouselSlide = ({ index, previousIndex, nextIndex, children }: CarouselSlideType) => {
  const childrenList = Array.isArray(children) ? children : [children];
  const hashRoute = window.location.hash || "";
  const route = hashRoute.replace("#", "");

  return (
    <li id={`${route}#carousel__slide${index}`} tabIndex={0} className="carousel__slide">
      {childrenList}
      {index !== nextIndex && (
        <div className="carousel__snapper">
          <a href={`${hashRoute}#carousel__slide${previousIndex}`} className="carousel__prev">
            Go to slide {previousIndex}
          </a>
          <a href={`${hashRoute}#carousel__slide${nextIndex}`} className="carousel__next">
            Go to slide {nextIndex}
          </a>
        </div>
      )}
    </li>
  );
};

const Carousel = ({ children }: CarouselType) => {
  const childrenList = Array.isArray(children) ? children : [children];
  const max = childrenList?.length;
  const hashRoute = window.location.hash || "";

  return (
    <section className="carousel" aria-label="Carousel">
      <ol className="carousel__viewport">
        {childrenList.map((child, index) => (
          <CarouselSlide key={index} index={index + 1} previousIndex={((index + 1 + max - 2) % max) + 1} nextIndex={((index + 1) % max) + 1}>
            {child}
          </CarouselSlide>
        ))}
      </ol>
      {childrenList.length > 1 && (
        <aside className="carousel__navigation">
          <ol className="carousel__navigation-list">
            {childrenList.map((_, index) => (
              <li key={index} className="carousel__navigation-item">
                <a href={`${hashRoute}#carousel__slide${index + 1}`} className="carousel__navigation-button">
                  Go to slide {index + 1}
                </a>
              </li>
            ))}
          </ol>
        </aside>
      )}
    </section>
  );
};

export default Carousel;
export { CarouselSlide };
