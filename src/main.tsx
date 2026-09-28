import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  Menu,
  Phone,
  X,
} from 'lucide-react';
import MenuPage from './menu';
import './styles.css';

const orderUrl =
  'https://www.google.com/searchviewer/42?cvd=CLw_EicKJeICIjIgEhkiF9LX29IPEQoNL2cvMTFqZGxxOWRxchgAOgMI8A0%3D&g2lbs=AEzIGDtJG8Xn8spaAKbXXuAYbZRsUIGw4qhPn5j0PXHEJqg0Zbji_AO7Vm8rIJv5XVyvqanzc86F9NEinYwBDuMfaXTPp5KXh-&hl=en-IN&gl=in';

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=24%20The%20Crescent%2C%20Midland%20WA%206056%2C%20Australia';

const foodMenuUrl = 'https://maps.app.goo.gl/5TmkcTBMJNu7odHu6';
const drinkMenuUrl = 'https://maps.app.goo.gl/fZzxU5A7XXn8asPg9';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1800&q=88',
    alt: 'Warm modern cafe interior',
    caption: 'The room',
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=88',
    alt: 'Specialty coffee on a cafe table',
    caption: 'Coffee, slowly',
  },
  {
    src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=88',
    alt: 'Freshly prepared colourful food',
    caption: 'From the kitchen',
  },
  {
    src: `${import.meta.env.BASE_URL}assets/1.jpg`,
    alt: 'Pasta dish served at a restaurant',
    caption: 'Dinner plates',
  },
  {
    src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1400&q=88',
    alt: 'Dessert with delicate presentation',
    caption: 'Something sweet',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=88',
    alt: 'People enjoying a restaurant interior',
    caption: 'Stay a little longer',
  },
  {
    src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1400&q=88',
    alt: 'menus image',
    caption: 'menu',
  },
  {
    src: `${import.meta.env.BASE_URL}assets/3.png`,
    alt: '3',
    caption: 'interior',
  },
  {
    src: `${import.meta.env.BASE_URL}assets/ssa.jpg`,
    alt: '3',
    caption: 'Seasonal Spring AVO',
  },


];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function openMenuPage() {
  window.history.pushState({}, '', '/menu');
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function AppRouter() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  if (path === '/menu' || path === '/menu/') {
    return <MenuPage />;
  }

  return <App />;
}

function App() {
  const { scrollY } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [headerSolid, setHeaderSolid] = useState(false);

  const heroScale = useTransform(scrollY, [0, 700], [1.06, 1.16]);

  useEffect(() => {
    const fn = () => setHeaderSolid(window.scrollY > 80);

    window.addEventListener('scroll', fn, { passive: true });

    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      menuOpen || activeImage !== null ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen, activeImage]);

  const closeMenu = () => setMenuOpen(false);

  const go = (id: string) => {
    closeMenu();

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header className={`nav ${headerSolid ? 'nav--solid' : ''}`}>
        <button
          className="wordmark"
          onClick={() => go('home')}
          aria-label="New Ritual Cafe home"
        >
          NEW RITUAL <span>CAFE</span>
        </button>

        <nav className="desktop-nav" aria-label="Main navigation">
          <button onClick={() => go('home')}>Home</button>
          <button onClick={() => go('story')}>Our Story</button>
          <button onClick={() => go('menu')}>Menu</button>
          <button onClick={() => go('gallery')}>Gallery</button>
          <button onClick={() => go('visit')}>Visit</button>
        </nav>

        <a
          className="nav-order"
          href={orderUrl}
          target="_blank"
          rel="noreferrer"
        >
          Order Online <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={23} />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mobile-menu__top">
              <span className="wordmark">
                NEW RITUAL <span>CAFE</span>
              </span>

              <button onClick={closeMenu} aria-label="Close menu">
                <X size={25} />
              </button>
            </div>

            <motion.div
              className="mobile-links"
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.12 }}
            >
              {['Home', 'Story', 'Menu', 'Gallery', 'Visit'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    if (item === 'Menu') {
                      openMenuPage();
                      closeMenu();
                    } else {
                      go(item === 'Home' ? 'home' : item.toLowerCase());
                    }
                  }}
                >
                  {item}
                  <ArrowUpRight size={18} />
                </button>
              ))}

              <a
                href={orderUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                Order Online <ArrowUpRight size={18} />
              </a>

              <a
                href="tel:+61475835811"
                onClick={closeMenu}
              >
                Call +61 475 835 811 <Phone size={17} />
              </a>
            </motion.div>

            <div className="mobile-menu__foot">
              <span>24 THE CRESCENT</span>
              <span>MIDLAND · WA</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section id="home" className="hero">
          <motion.img
            style={{ scale: heroScale }}
            src={images[0].src}
            alt="Warm, atmospheric cafe interior"
            fetchPriority="high"
          />

          <div className="hero__veil" />

          <div className="hero__content">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="eyebrow light"
            >
              MIDLAND · WESTERN AUSTRALIA
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.9 }}
            >
              <span>NEW RITUAL</span>
              <em>CAFE</em>
            </motion.h1>

            <motion.p
              className="hero__intro"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.8 }}
            >
              A place to slow down, eat well,
              <br />
              and stay a little longer.
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
            >
              <button
                className="button button--cream"
                onClick={openMenuPage}
              >
                Explore the Menu <ArrowUpRight size={16} />
              </button>

              <button
                className="text-link light"
                onClick={() => go('visit')}
              >
                Visit Us <span>↘</span>
              </button>
            </motion.div>
          </div>

          <div className="hero__address">
            <MapPin size={15} />
            24 The Crescent · Midland WA
          </div>

          <div className="hero__scroll">
            SCROLL <span></span>
          </div>
        </section>

        <section className="intro section-pad" id="story">
          <div className="intro__label">
            <span>01</span>
            <span>THE NEW RITUAL</span>
          </div>

          <div className="intro__grid">
            <motion.h2
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Good food.
              <br />
              <i>Good coffee.</i>
              <br />
              Good company.
            </motion.h2>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="intro__copy"
            >
              <p>
                New Ritual Cafe is made for the everyday moments that deserve
                a little more time. Come for coffee, settle in for something
                to eat, and let the day unfold at its own pace.
              </p>

              <p>
                From morning catch-ups to late plates and easy evenings, it is
                a relaxed corner of Midland built around food, conversation and
                staying awhile.
              </p>

              <button
                className="text-link"
                onClick={() => go('experience')}
              >
                Discover the experience <span>↘</span>
              </button>
            </motion.div>
          </div>

          <motion.div
            className="intro__image"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
            transition={{
              duration: 1.15,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            viewport={{ once: true }}
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/goodfood.jpg`}
              alt="Coffee served in a warm cafe setting"
              loading="lazy"
            />
          </motion.div>
        </section>

        <section
          id="experience"
          className="experience section-dark section-pad"
        >
          <div className="section-head">
            <div>
              <span className="eyebrow">02 · THE EXPERIENCE</span>
              <h2>
                Made for <i>lingering.</i>
              </h2>
            </div>

            <p>
              A café rhythm that moves easily from morning coffee to evening
              conversation.
            </p>
          </div>

          <div className="experience-grid">
            {[
              [
                '01',
                'COFFEE',
                'Thoughtfully prepared coffee and café favourites.',
                `${import.meta.env.BASE_URL}assets/coffee.jpg`,
              ],
              [
                '02',
                'FOOD',
                'Comforting dishes with modern flavour and presentation.',
                `${import.meta.env.BASE_URL}assets/food.jpg`,
              ],
              [
                '03',
                'EVENINGS',
                'A relaxed atmosphere for dinner, conversation and late visits.',
                'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85',
              ],
              [
                '04',
                'COMPANY',
                'A welcoming space for casual meetings, catch-ups and celebrations.',
                'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=85',
              ],
            ].map(([n, t, d, img], i) => (
              <motion.article
                key={t}
                className="experience-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.75 }}
                viewport={{ once: true }}
              >
                <div className="experience-card__image">
                  <img src={img} alt="" loading="lazy" />
                </div>

                <div className="experience-card__meta">
                  <span>{n}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="menu" className="menu-section section-pad">
          <div className="menu-top">
            <span className="eyebrow">03 · THE MENU</span>

            <h2>
              A table worth
              <br />
              <i>staying for.</i>
            </h2>

            <p>
              Explore the current food and drinks menus from New Ritual Cafe.
              Menu availability and pricing may change.
            </p>
          </div>

          <div className="menu-layout">
            <div className="menu-image">
              <img
                src={images[3].src}
                alt="Pasta dish served on a dining table"
                loading="lazy"
              />
              <span>FROM THE KITCHEN</span>
            </div>

            <div className="menu-list">
              <MenuGroup
                title="FOOD MENU"
                items={[
                  'Breakfast & Brunch',
                  'Lunch & Main Plates',
                  'Desserts & Sweets',
                ]}
              />

              <MenuGroup
                title="DRINKS MENU"
                items={[
                  'Coffee',
                  'Cold Drinks',
                  'Specialty Drinks',
                ]}
              />

              <button
                className="button button--dark"
                onClick={openMenuPage}
              >
                See Full Menu <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </section>

        <section className="dish-feature">
          <div className="dish-feature__image">
            <img
              src={images[6].src}
              alt="Pasta dish at New Ritual Cafe"
              loading="lazy"
            />
          </div>

          <div className="dish-feature__content">
            <span className="eyebrow">FROM THE TABLE</span>

            <h2>
              A little
              <br />
              <i>different.</i>
            </h2>

            <p>
              The supplied visitor feedback highlights a prawn linguine with
              a subtle tom yum influence, alongside lamb pasta described as a
              standout dish.
            </p>

            <span className="quote-mark">“</span>

            <p className="small-note">
              A visitor review, presented as an individual guest experience
              rather than a general claim.
            </p>
          </div>
        </section>

        <section className="story section-pad">
          <div className="story__visual">
            <img
              src={images[5].src}
              alt="Guests enjoying an atmospheric dining space"
              loading="lazy"
            />
            <span className="vertical-note">
              FOOD · COFFEE · HOSPITALITY
            </span>
          </div>

          <div className="story__copy">
            <span className="eyebrow">04 · OUR STORY</span>

            <h2>
              More than
              <br />
              a <i>café.</i>
            </h2>

            <p>
              There is a simple idea behind New Ritual: make space for good
              food, good coffee and the people you want to share it with.
            </p>

            <p>
              Nothing overcomplicated. Just a warm room, thoughtful plates,
              easy conversation and a reason to come back when you have
              another hour to spare.
            </p>

            <div className="story-rule"></div>

            <span className="micro">
              MIDLAND · WESTERN AUSTRALIA
            </span>
          </div>
        </section>

        <section
          id="gallery"
          className="gallery section-pad section-dark"
        >
          <div className="section-head">
            <div>
              <span className="eyebrow">05 · GALLERY</span>
              <h2>
                A glimpse
                <br />
                <i>inside.</i>
              </h2>
            </div>

            <p>
              Food, details, people and the atmosphere around the table.
            </p>
          </div>

          <div className="gallery-grid">
            {images.map((im, i) => (
              <button
                key={im.src}
                className={`gallery-item gallery-item--${i + 1}`}
                onClick={() => setActiveImage(i)}
                aria-label={`Open ${im.caption}`}
              >
                <img
                  src={im.src}
                  alt={im.alt}
                  loading="lazy"
                />
                <span>{im.caption}</span>
              </button>
            ))}
          </div>
        </section>

        <section id="visit" className="visit section-pad">
          <div className="visit__heading">
            <span className="eyebrow">06 · COME FIND US</span>

            <h2>
              Make a little
              <br />
              <i>time for it.</i>
            </h2>
          </div>

          <div className="visit__details">
            <div className="detail">
              <MapPin size={18} />

              <div>
                <span>ADDRESS</span>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  24 The Crescent
                  <br />
                  Midland WA 6056
                  <br />
                  Australia
                </a>
              </div>
            </div>

            <div className="detail">
              <Phone size={18} />

              <div>
                <span>PHONE</span>

                <a href="tel:+61475835811">
                  +61 475 835 811
                </a>
              </div>
            </div>

            <div className="detail">
              <Clock3 size={18} />

              <div>
                <span>Cafe Open</span>
                <p>WeekDay's   6:15am-2:00pm </p><span>(Kitchen closes at 13:30pm)</span>
                <p>WeekEnd's & Public Holiday's   7am-2:00pm </p><span>(Kitchen closes at 13:00pm)</span>
              </div>
            </div>
          </div>

          <div className="visit__actions">
            <a
              className="button button--dark"
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get Directions <ArrowUpRight size={16} />
            </a>

            <a
              className="button button--outline"
              href="tel:+61475835811"
            >
              Call Us <Phone size={16} />
            </a>

            <a
              className="button button--outline"
              href={orderUrl}
              target="_blank"
              rel="noreferrer"
            >
              Order Online <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="map-card">
            <div className="map-art">
              <div className="map-grid"></div>

              <div className="map-marker">
                <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                >
                  <span></span>
                  <strong>NEW RITUAL Cafe</strong>
                  <small>24 THE CRESCENT</small>
                </a>
              </div>

              <div className="map-label map-label--one">
                MIDLAND
              </div>

              <div className="map-label map-label--two">
                WESTERN AUSTRALIA
              </div>
            </div>

            <div className="map-caption">
              <span>4263+6V MIDLAND</span>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <img
            src={images[4].src}
            alt="Dessert in a softly lit cafe setting"
            loading="lazy"
          />

          <div className="final-cta__veil"></div>

          <div className="final-cta__content">
            <span className="eyebrow light">
              THE NEW RITUAL
            </span>

            <h2>
              Make it your
              <br />
              <i>new ritual.</i>
            </h2>

            <p>
              Good food, good coffee, and a reason to stay a little longer.
            </p>

            <div>
              <a
                className="button button--cream"
                href={orderUrl}
                target="_blank"
                rel="noreferrer"
              >
                Order Online <ArrowUpRight size={16} />
              </a>

              <a
                className="text-link light"
                href="https://www.instagram.com/newritualcafe/"
                target="_blank"
                rel="noreferrer"
                
              >
                
                  Instagram 
                
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__top">
          <div>
            <div className="footer-logo">
              NEW RITUAL <span>CAFE</span>
            </div>

            <p>
              A place to slow down, eat well,
              <br />
              and stay a little longer.
            </p>
          </div>

          <div className="footer__address">
            <span>VISIT</span>

            <p>
              24 The Crescent
              <br />
              Midland WA 6056
              <br />
              Australia
            </p>

            <a href="tel:+61475835811">
              +61 475 835 811
            </a>
          </div>

          <div className="footer__links">
            <span>EXPLORE</span>

            <button onClick={() => go('home')}>Home</button>
            <button onClick={() => go('story')}>Story</button>

            <button onClick={() => go('menu')}>
              Menu
            </button>

            <button onClick={() => go('gallery')}>
              Gallery
            </button>

            <button onClick={() => go('visit')}>
              Visit
            </button>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 NEW RITUAL CAFE</span>
          <span>MIDLAND · WESTERN AUSTRALIA</span>

          <a
            href="https://vadrivo.github.io/"
            target="_blank"
            rel="noreferrer"
            className="footer-credit"
          >
            Website by <strong>Vadrivo</strong>
            <ArrowUpRight size={12} />
          </a>
        </div>
      </footer>

      <AnimatePresence>
        {activeImage !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <button
              className="lightbox__close"
              onClick={() => setActiveImage(null)}
              aria-label="Close gallery"
            >
              <X size={25} />
            </button>

            <button
              className="lightbox__prev"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage(
                  (activeImage - 1 + images.length) %
                    images.length
                );
              }}
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>

            <motion.img
              key={activeImage}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              src={images[activeImage].src}
              alt={images[activeImage].alt}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="lightbox__next"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage(
                  (activeImage + 1) % images.length
                );
              }}
              aria-label="Next image"
            >
              <ChevronRight />
            </button>

            <div className="lightbox__caption">
              {images[activeImage].caption}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MenuGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="menu-group">
      <h3>{title}</h3>

      <div>
        {items.map((x) => (
          <div className="menu-row" key={x}>
            <span>{x}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);