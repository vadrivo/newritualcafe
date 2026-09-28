import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, MapPin, Phone } from 'lucide-react';

const orderUrl =
  'https://www.google.com/searchviewer/42?cvd=CLw_EicKJeICIjIgEhkiF9LX29IPEQoNL2cvMTFqZGxxOWRxchgAOgMI8A0%3D&g2lbs=AEzIGDtJG8Xn8spaAKbXXuAYbZRsUIGw4qhPn5j0PXHEJqg0Zbji_AO7Vm8rIJv5XVyvqanzc86F9NEinYwBDuMfaXTPp5KXh-&hl=en-IN&gl=in';

const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=24%20The%20Crescent%2C%20Midland%20WA%206056%2C%20Australia';

type MenuItem = {
  name: string;
  price?: string;
  description?: string;
};

const coffeeTea: MenuItem[] = [
  { name: 'Espresso', price: '4' },
  { name: 'Flat White / Cappuccino / Latte', price: '5' },
  { name: 'Short Mac / Long Mac', price: '4.5 / 5.5' },
  { name: 'Hot Chocolate / Mochaccino', price: '6' },
  { name: 'Affogato', price: '5.5' },
  { name: 'Chai Latte', price: '5.5' },
  { name: 'Pure Matcha Latte', price: '6' },
  { name: 'Long Black', price: '5' },
];

const teaPots: MenuItem[] = [
  { name: 'English Breakfast Tea', price: '5' },
  { name: 'Green Tea', price: '5' },
  { name: 'Earl Grey Tea', price: '5' },
  { name: 'Peppermint Tea', price: '5' },
  { name: 'Lemongrass and Ginger Tea', price: '5' },
  { name: 'Chamomile Tea', price: '5' },
  { name: 'Simara Blend Nectar Chai', price: '5' },
];

const icedDrinks: MenuItem[] = [
  { name: 'Iced Latte', price: '6.5' },
  { name: 'Iced Long Black', price: '6' },
  {
    name: 'Iced Coffee / Mocha / Chai / Chocolate / Pure Matcha',
    price: '7.5',
    description: 'Includes ice cream and top quality whipped cream',
  },
  {
    name: 'Vietnamese Iced Coffee',
    price: '8',
    description:
      'Single origin pin filter coffee / dark roasted coffee shaken with ice and condensed milk',
  },
];

const freshJuices: MenuItem[] = [
  {
    name: 'Trio Juice',
    description: 'Orange / apple / watermelon',
  },
  {
    name: 'Morning Vitamin',
    description: 'Orange / carrot / ginger',
  },
  {
    name: 'Green Garden',
    description: 'Green apple / kale / celery',
  },
  {
    name: 'Fresh OJ',
  },
  {
    name: 'Fresh Apple Juice',
  },
  {
    name: 'Passionfruit Honey OJ',
  },
  {
    name: 'One Pot Wonder',
    description: 'Mix it however you want',
  },
];

const smoothies: MenuItem[] = [
  {
    name: 'Breakfast Smoothie',
    description: 'Mixed berries / banana / ice cream / honey / ice',
  },
  {
    name: 'Banana Smoothie',
    description: 'Fresh banana / ice cream / honey / ice',
  },
  {
    name: 'Avocado Smoothie',
    description: 'Ripe avocado / condensed milk',
  },
  {
    name: 'Strawberry Banana Smoothie',
    description: 'Strawberry / banana / ice cream / honey / ice',
  },
];

const milkshakes: MenuItem[] = [
  {
    name: 'Cookies and Cream',
    price: '8.5',
    description:
      'Cookies and cream ice cream / extra creamy milk / whipped cream / Oreo chunks',
  },
  {
    name: 'Strawb / Mint / Vanilla / Choc / Caramel Shake',
    price: '8',
    description:
      'Flavoured syrup / vanilla ice cream / extra creamy milk / whipped cream / sprinkles',
  },
];

const foodBrunch: MenuItem[] = [
  {
    name: 'Classic Smashed Burger',
    price: '24',
    description:
      'Smashed beef patty / bacon / special M sauce / mustard / American cheese / caramelised onion / pickle / lettuce / tomato / brioche bun / chips',
  },
  {
    name: 'Trio Hangover Sliders',
    price: '23',
    description:
      '1 beef / 1 sriracha prawn / 1 crispy buttermilk chicken / sriracha mayo',
  },
  {
    name: 'Tom Yum Sugo Linguine',
    price: '26',
    description:
      'Choice of prawns or battered Barramundi / Parmesan cheese / cherry tomatoes / linguine / garlic / chilli / parsley / Tom Yum Sugo sauce',
  },
  {
    name: 'Creamy Lamb Shoulder Pasta',
    price: '27',
    description:
      '24H braised lamb shoulder / Parmesan cheese / linguine / spinach / parsley / mushrooms',
  },
  {
    name: 'New Ritual House Steak',
    price: '26',
    description:
      'Sirloin steak / grilled broccolini / chips / salad / gravy',
  },
  {
    name: "Ritual's Open Steak Sandwich",
    price: '24.5',
    description:
      'Sirloin steak / caramelised onion / mustard / green salad / toasted sourdough',
  },
  {
    name: 'Fried Chicken Waffles',
    price: '23',
    description:
      'Buttermilk fried chicken / Belgian waffle / chilli infused maple butter / sunny side up egg',
  },
  {
    name: 'Biscoff French Toast',
    price: '23',
    description:
      'House made French toast / butterscotch sauce / caramelised banana / seasonal fruits / biscoff crumble / berry mascarpone / vanilla ice cream',
  },
];

const brunchSides: MenuItem[] = [
  {
    name: 'Acai Bowl',
    price: '18',
    description: 'Acai / house made granola / seasonal fruits',
  },
  {
    name: 'Summer Fruit Granola',
    price: '17',
    description: 'House made granola / seasonal fruits / Greek yoghurt / choice of milk',
  },
];

const toastDelight: MenuItem[] = [
  {
    name: 'Toasted Sourdough (GF)',
    price: '7.5',
  },
  {
    name: 'Fruit Toast',
  },
  {
    name: 'Bagel Your Style',
    price: '8',
    description: 'Served with cream cheese or butter & jam',
  },
  {
    name: 'Eggs Anyway (GF)',
    price: '14.5',
    description:
      'Scrambled / poached / fried eggs served with toasted sourdough and house made relish on the side',
  },
];

const addOns: MenuItem[] = [
  {
    name: 'Spring Rolls (3P)',
    price: '5',
  },
  {
    name: 'Hashbrown (1)',
    price: '3',
  },
  {
    name: 'Ham',
    price: '5',
  },
  {
    name: 'Avo',
    price: '5',
  },
  {
    name: 'Egg',
    price: '4',
  },
  {
    name: 'Smoked Salmon',
    price: '7',
  },
  {
    name: 'Bacon',
    price: '6',
  },
  {
    name: 'Chorizo',
    price: '6',
  },
  {
    name: 'Cheese Sausage',
    price: '6',
  },
  {
    name: 'Mushroom',
    price: '4',
  },
  {
    name: 'Tomato',
    price: '4',
  },
  {
    name: 'Chips',
    price: '5 or 10',
  },
];

const kidsOptions: MenuItem[] = [
  {
    name: 'Cheese Burger and Chippies',
    price: '9',
  },
  {
    name: 'Chicken Nuggets and Chippies',
    price: '9',
  },
  {
    name: 'Kid\'s Eggs Anyway',
    price: '9',
  },
  {
    name: 'Waffles and Ice Cream',
    price: '10',
    description: 'Vanilla / cookies & cream ice cream',
  },
];

function goHome() {
  window.history.pushState({}, '', '/');
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

function MenuSection({
  number,
  title,
  items,
  note,
}: {
  number?: string;
  title: string;
  items: MenuItem[];
  note?: string;
}) {
  return (
    <section className="full-menu-section">
      <div className="full-menu-section__heading">
        <div>
          {number && <span className="full-menu-number">{number}</span>}
          <h2>{title}</h2>
        </div>

        {note && <span className="full-menu-section__note">{note}</span>}
      </div>

      <div className="full-menu-items">
        {items.map((item) => (
          <article className="full-menu-item" key={`${title}-${item.name}`}>
            <div className="full-menu-item__top">
              <h3>{item.name}</h3>
              {item.price && (
                <span className="full-menu-item__price">{item.price}</span>
              )}
            </div>

            {item.description && (
              <p>{item.description}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default function MenuPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    document.title = 'Menu · New Ritual Cafe';

    return () => {
      document.title = 'New Ritual Cafe';
    };
  }, []);

  return (
    <div className="full-menu-page">
      {/* NAVIGATION */}
      <header className="menu-page__nav">
        <button
          className="menu-page__back"
          onClick={goHome}
        >
          <ArrowLeft size={15} />
          Back to New Ritual
        </button>

        <button
          className="menu-page__logo"
          onClick={goHome}
        >
          NEW RITUAL <span>CAFE</span>
        </button>

        <a
          className="menu-page__order"
          href={orderUrl}
          target="_blank"
          rel="noreferrer"
        >
          Order Online
          <ArrowUpRight size={15} />
        </a>
      </header>

      {/* MENU INTRO */}
      <main>
        <section className="full-menu-hero">
          <span className="full-menu-hero__eyebrow">
            NEW RITUAL · MIDLAND · WESTERN AUSTRALIA
          </span>

          <h1>
            The
            <br />
            <em>Menu.</em>
          </h1>

          <p>
            Food worth slowing down for.
            <br />
            Drinks worth staying a little longer for.
          </p>

          <div className="full-menu-hero__meta">
            <span>24 THE CRESCENT</span>
            <span>MIDLAND WA 6056</span>
            <span>FOOD · DRINKS · COFFEE</span>
          </div>
        </section>

        {/* QUICK MENU NAV */}
        <nav className="full-menu-tabs">
          <button onClick={() => scrollToSection('food-menu')}>
            Food Menu
          </button>

          <button onClick={() => scrollToSection('drinks-menu')}>
            Drinks Menu
          </button>

        </nav>

        {/* ================= FOOD ================= */}
        <section
          id="food-menu"
          className="full-menu-block full-menu-block--cream"
        >
          <div className="full-menu-block__intro full-menu-block__intro--photo full-menu-block__intro--food">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1800&q=90"
              alt=""
            />

            <div className="full-menu-block__intro-overlay" />

            <div className="full-menu-block__intro-content">
              <span>01 · THE KITCHEN</span>

              <h2>
                Food
                <br />
                <em>Menu.</em>
              </h2>

              <p>
                Please notify staff of any allergies or dietary
                requirements before you place an order.
              </p>
            </div>
          </div>

          <div className="full-menu-content">
            <MenuSection
              number="01"
              title="All Day Brunch"
              items={foodBrunch}
            />

            <MenuSection
              number="02"
              title="Bowls & Granola"
              items={brunchSides}
            />

            <MenuSection
              number="03"
              title="Toast Delight"
              items={toastDelight}
            />

            <MenuSection
              number="04"
              title="Add On"
              items={addOns}
            />

            <MenuSection
              number="05"
              title="Kid's Options"
              items={kidsOptions}
            />
          </div>
        </section>

        {/* ================= DRINKS ================= */}
        <section
          id="drinks-menu"
          className="full-menu-block full-menu-block--dark"
        >
          <div className="full-menu-block__intro full-menu-block__intro--photo full-menu-block__intro--drinks">
            <img
              src={`${import.meta.env.BASE_URL}assets/Drinks.jpg`}
              alt=""
            />

            <div className="full-menu-block__intro-overlay" />

            <div className="full-menu-block__intro-content">
              <span>02 · THE BAR</span>

              <h2>
                Drinks
                <br />
                <em>Menu.</em>
              </h2>

              <p>
                Coffee, tea, fresh juices, smoothies and
                milkshakes made for slow mornings and long lunches.
              </p>
            </div>
          </div>

          <div className="full-menu-content">
            <MenuSection
              number="01"
              title="Coffee / Tea"
              note="Mug +0.60"
              items={coffeeTea}
            />

            <MenuSection
              number="02"
              title="Tea Pots"
              note="5"
              items={teaPots}
            />

            <div className="full-menu-extra">
              <div>
                <span>EXTRA SHOT / DECAF</span>
                <strong>0.60</strong>
              </div>

              <div>
                <span>ALTERNATIVE MILK</span>
                <strong>0.80</strong>
                <small>Almond / Soy / Oat / Lactose Free</small>
              </div>
            </div>

            <MenuSection
              number="03"
              title="Iced Drinks"
              items={icedDrinks}
            />

            <MenuSection
              number="04"
              title="Freshly Squeezed Juice"
              note="9.5"
              items={freshJuices}
            />

            <MenuSection
              number="05"
              title="Smoothies"
              note="10"
              items={smoothies}
            />

            <MenuSection
              number="06"
              title="Milkshakes"
              items={milkshakes}
            />
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section className="full-menu-experience">
          <span>03 · AT THE TABLE</span>

          <h2>
            Come hungry.
            <br />
            <em>Stay awhile.</em>
          </h2>

          <p>
            Good coffee, generous plates and something for
            everyone. New Ritual Cafe is made for easy mornings,
            long lunches and everything in between.
          </p>

          <div className="full-menu-actions">
            <a
              className="button button--dark"
              href={orderUrl}
              target="_blank"
              rel="noreferrer"
            >
              Order Online
              <ArrowUpRight size={16} />
            </a>

            <a
              className="button button--outline"
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit New Ritual
              <MapPin size={16} />
            </a>

            <a
              className="button button--outline"
              href="tel:+61475835811"
            >
              Call Cafe
              <Phone size={16} />
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="menu-page__footer">
        <div className="menu-page__footer-top">
          <div>
            <div className="menu-page__footer-brand">
              NEW RITUAL <span>CAFE</span>
            </div>

            <p>
              A place to slow down, eat well,
              <br />
              and stay a little longer.
            </p>
          </div>

          <div className="menu-page__footer-address">
            <strong>24 THE CRESCENT</strong>
            <br />
            MIDLAND WA 6056
            <br />
            AUSTRALIA
            <br />
            <br />
            +61 475 835 811
          </div>
        </div>

        <div className="menu-page__footer-bottom">
          <span>© 2026 NEW RITUAL CAFE</span>

          <button onClick={() => scrollToSection('food-menu')}>
            Food Menu ↗
          </button>

          <button onClick={() => scrollToSection('drinks-menu')}>
            Drinks Menu ↗
          </button>

          <button onClick={goHome}>
            New Ritual Cafe ↗
          </button>
        </div>
      </footer>
    </div>
  );
}