import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import workDetails from "../../utils/work-details";
import styles from "../../styles/WorkSingle.module.scss";
import { motion } from "framer-motion";
import AnimatedLetters from "../../components/AnimatedLetters";
import Link from "next/link";
import { useGlobalDispatchContext } from "../../context/globalContext";
import HeadTag from "../../components/HeadTag";
import Image from "next/image";
import MagneticButton from "../../components/MagneticButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SingleWork() {
  const router = useRouter();
  const [work, setWork] = useState(null);
  const dispatch = useGlobalDispatchContext();

  const SampleNextArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className={styles.sliderNext}
        onMouseEnter={() =>
          dispatch({
            type: "CURSOR_STYLES",
            cursorStyles: "footerLink",
          })
        }
        onMouseLeave={() =>
          dispatch({
            type: "CURSOR_STYLES",
            cursorStyles: "default",
          })
        }
      >
        <span>&#x2192;</span>
      </button>
    );
  };
  const SamplePrevArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className={styles.sliderPrev}
        onMouseEnter={() =>
          dispatch({
            type: "CURSOR_STYLES",
            cursorStyles: "footerLink",
          })
        }
        onMouseLeave={() =>
          dispatch({
            type: "CURSOR_STYLES",
            cursorStyles: "default",
          })
        }
      >
        <span>&#x2190;</span>
      </button>
    );
  };

  var settings = {
    infinite: true,
    // fade: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  useEffect(() => {
    let work = router.query.work;
    let workDetail = workDetails.find((singleWork) => singleWork.name === work);
    setWork(workDetail);
  }, [router.query]);

  const bgVariant = {
    initial: {
      scale: 0.5,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
    },
  };

  console.log(work);
  return (
    <div className={styles.workSinglePage}>
      {work && (
        <>
          <HeadTag title={work.name} />
          <section className={styles.heroSection} data-scroll-section>
            <motion.div
              className={styles.heroImageBg}
              variants={bgVariant}
              initial="initial"
              animate="animate"
              layoutId={work.name}
              exit="exit"
              style={{
                background: `url("/images/${work.images[0]}")`,
              }}
            >
              <motion.div className="banner-row" data-scroll>
                <AnimatedLetters text={work.name} tag="h1" />
              </motion.div>
            </motion.div>
          </section>
          <section className={styles.aboutWork} data-scroll-section>
            <div className={styles.smallDetails}>
              {work.client && (
                <div
                  className={styles.detail}
                  data-scroll
                  data-scroll-speed="2"
                >
                  <h6>Client</h6>
                  <span>{work.client}</span>
                </div>
              )}
              <div className={styles.detail} data-scroll data-scroll-speed="2">
                <h6>Tools</h6>
                <span>{work.tools}</span>
              </div>
              <div className={styles.detail} data-scroll data-scroll-speed="2">
                <h6>Site</h6>
                <Link href={work.link}>
                  <a>
                    <span
                      onMouseEnter={() =>
                        dispatch({
                          type: "CURSOR_STYLES",
                          cursorStyles: "footerLink",
                        })
                      }
                      onMouseLeave={() =>
                        dispatch({
                          type: "CURSOR_STYLES",
                          cursorStyles: "default",
                        })
                      }
                    >
                      {work.linkText}
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className={styles.aboutDetails}
              data-scroll
              data-scroll-speed="3"
            >
              <h6>About the project</h6>
              <p>{work.smallDescription}</p>
            </div>
          </section>
          <section className={styles.imageDetilSection} data-scroll-section>
            <div
              className={styles.imageBgWork}
              style={{ background: `${work.bgColor}` }}
              data-scroll
              data-scroll-speed="2"
            >
              <Image
                layout="fill"
                src={`/images/${work.images[1]}`}
                alt={work.name}
                objectFit="contain"
                priority={true}
                loading="eager"
                placeholder="blur"
                blurDataURL={`/images/${work.images[2]}`}
                onLoad={() => console.log("image loaded")}
              />
            </div>
            <p
              data-scroll
              data-scroll-speed="2"
              className={styles.moreAboutWork}
            >
              {work.description}
            </p>
            <div
              className={styles.imageBgWorksContainer}
              style={{ background: `${work.bgColor}` }}
            >
              <Slider {...settings}>
                {work.images.length > 1 &&
                  work.images
                    .filter((image, index) => index > 1)
                    .map((image, index) => (
                      <div key={index}>
                        <div
                          className={styles.imageBgWork}
                          style={{ background: `${work.bgColor}` }}
                          onMouseEnter={() =>
                            dispatch({
                              type: "CURSOR_STYLES",
                              cursorStyles: "slider-drag",
                            })
                          }
                          onMouseLeave={() =>
                            dispatch({
                              type: "CURSOR_STYLES",
                              cursorStyles: "default",
                            })
                          }
                        >
                          <Image
                            layout="fill"
                            src={`/images/${image}`}
                            alt={work.name}
                            objectFit="contain"
                            priority={true}
                            loading="eager"
                            onLoad={() => console.log("image loaded")}
                          />
                        </div>
                      </div>
                    ))}
              </Slider>
            </div>

            <p
              data-scroll
              data-scroll-speed="2"
              className={styles.moreAboutWork2}
            >
              {work.description2}
            </p>

            <p
              data-scroll
              data-scroll-speed="2"
              className={styles.moreAboutWork2}
              dangerouslySetInnerHTML={{ __html: work.description3 }}
            />
            {work.blogLink && (
              <p
                data-scroll
                data-scroll-speed="3"
                className={styles.moreAboutWork3}
              >
                <a
                  href={work.blogLink}
                  className={styles.blogLink}
                  rel="noreferrer"
                  target="_blank"
                >
                  {work.blogText}
                </a>
              </p>
            )}
            <div style={{ marginTop: "10rem" }}>
              <MagneticButton text="More Work" link="/work" />
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default SingleWork;
