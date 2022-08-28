import * as React from 'react';
import './style.css';
import { useState, useEffect, useRef } from 'react';
import { FiMenu } from 'react-icons/fi';

const App = () => {
  const [menu, setMenu] = useState(false);
  const [submit, setSubmit] = useState(false);

  const nameEl = useRef(null);
  const emailEl = useRef(null);
  const textEl = useRef(null);
  const checkbox = useRef(null);

  useEffect(() => {
    const cb = localStorage.getItem('checked');
    if (cb) {
      checkbox.current.checked = true;
      nameEl.current.value = localStorage.getItem('name');
      emailEl.current.value = localStorage.getItem('email');
    }
  }, []);

  useEffect(() => {
    if (submit) {
      setTimeout(() => {
        setSubmit(false);
        localStorage.setItem('checked', checkbox.current.checked);

        const cb = localStorage.getItem('checked');
        if (!cb) {
          nameEl.current.value = '';
          emailEl.current.value = '';
        }
        textEl.current.value = '';
        if (checkbox.current.checked == true) {
          localStorage.setItem('checked', checkbox.current.checked);
          localStorage.setItem('name', nameEl.current.value);
          localStorage.setItem('email', emailEl.current.value);
        }
      }, 2000);
    }
  }, [submit]);

  const solutions = [
    {
      id: 'prs-rtb-akademiki-prywatne-retail-parki',
      title: 'PRS, RTB, Akademiki prywatne, Retail parki',
      desctitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, neque.',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis accusantium consectetur nihil. Hic quo animi aut a accusamus ex?',
      for: ['PRS', 'RTB', 'Akademiki prywatne', 'Retail parki'],
      keyfeatures: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      ],
    },
    {
      id: 'deweloperzy',
      title: 'Deweloperzy',
      desctitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, neque.',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis accusantium consectetur nihil. Hic quo animi aut a accusamus ex?',
      for: ['Deweloperzy'],
      keyfeatures: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      ],
    },
    {
      id: 'wspolnoty-mieszkalne-spoldzielnie-mieszkaniowe',
      title: 'Wspólnoty mieszkalne, Spółdzielnie mieszkaniowe',
      desctitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, neque.',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perferendis accusantium consectetur nihil. Hic quo animi aut a accusamus ex?',
      for: ['Wspólnoty mieszkalne', 'Spółdzielnie mieszkaniowe'],
      keyfeatures: [
        'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      ],
    },
  ];

  const partners = [
    {
      img: '',
      name: 'Lorem',
    },
    {
      img: '',
      name: 'Lorem',
    },
    {
      img: '',
      name: 'Lorem',
    },
    {
      img: '',
      name: 'Lorem',
    },
  ];

  const suubmit = () => {
    setSubmit(true);
  };

  return (
    <div className="content">
      <nav>
        <div className="nav">
          <div className="logo">FLIKO</div>
          <div
            onClick={() => setMenu(!menu)}
            className={`menu-button ${(menu && 'x') || 'm'}`}
          >
            {(!menu && <FiMenu />) || 'X'}
          </div>
        </div>
        <ul
          className={`navbar ${menu && 'open'}`}
          onClick={() => setMenu(false)}
        >
          <Navlink dir="O Nas" h="about" />
          <Navlink dir="Rozwiązania" h="rozwiazania" />
          <ul></ul>
          <ul className="rozwiazania">
            <Navlink
              dir="PRS, RTB, Akademiki prywatne, Retail parki"
              h="prs-rtb-akademiki-prywatne-retail-parki"
            />
            <Navlink dir="Deweloperzy" h="deweloperzy" />
            <Navlink
              dir="Wspolnoty mieszkalne, Spółdzielnie mieszkaniowe"
              h="wspolnoty-mieszkalne-spoldzielnie-mieszkaniowe"
            />
          </ul>
          <Navlink dir="Partnerzy" h="partnerzy" />
          <Navlink dir="Kontakt" h="kontakt" />
        </ul>
      </nav>
      <main>
        <section className="section lorem">
          {/* <svg viewBox="0 0 120 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF0066"
              d="M59.5,-24.2C66.2,1.2,53.1,28.1,31.3,44.1C9.6,60.2,-20.8,65.3,-37.9,52.8C-55,40.2,-58.8,9.9,-50.3,-18C-41.8,-45.9,-20.9,-71.4,2.8,-72.3C26.4,-73.2,52.8,-49.5,59.5,-24.2Z"
              transform="translate(10 100)"
            />
          </svg> */}
          <div className="container">
            <div className="text">
              <h1 className="atext">Lorem ipsum</h1>
              <strong>dolor sit</strong> amet consectetur adipisicing elit.
              Officiis recusandae, at consequatur deleniti quas quibusdam,
              cupiditate nulla autem nostrum veritatis vel sequi distinctio
              aliquid nihil fuga fugiat laudantium ipsam neque!
            </div>
            <div className="btns">
              <a href="#rozwiazania" className="btn main-btn">
                Rozwiązania
              </a>
              <a href="#about" className="btn second-btn">
                O nas
              </a>
            </div>
          </div>
        </section>
        <section className="section" id="about">
          <hr />
          <h1 id="o-nas">O nas</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            asperiores.
          </p>
          <h4>Ekonomia Współdzielenia</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, nihil!
          </p>
          <h4>Ekologia</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            quidem.
          </p>
          <h4>Coliving</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, libero.
          </p>
        </section>
        <section className="section solutions" id="rozwiazania">
          <div className="section-title">Rozwiązania</div>
          <div className="section-content">
            {solutions.map((so, index) => (
              <Solution
                key={index}
                id={so.id}
                title={so.title}
                desctitle={so.desctitle}
                desc={so.desc}
                keyfeatures={so.keyfeatures}
                for={so.for}
              />
            ))}
          </div>
        </section>
        <section className="section partners" id="partnerzy">
          <h1>Partnerzy</h1>
          <div className="partners-con">
            {partners.map((partner, index) => (
              <Partner key={index} name={partner.name} />
            ))}
          </div>
        </section>
        <h3 className="stext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          non dolore cumque. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Saepe quidem itaque velit.
        </h3>
        <div className="contact" id="kontakt">
          <form onSubmit={() => suubmit()} action="javascript:void(0)">
            <h2>Email form</h2>
            <div className="inputs">
              <input type="text" placeholder="Imię" ref={nameEl} required />
              <input type="email" placeholder="Email" ref={emailEl} required />
            </div>
            <textarea
              name="areatext"
              id="text"
              placeholder="Twoja wiadomość"
              ref={textEl}
              required
            ></textarea>
            <label className="cbox">
              <input type="checkbox" className="check" ref={checkbox} />
              Zachowaj informacje
              <span className="checkmark"></span>
            </label>
            <input type="submit" />
            {submit && (
              <span className="onsubmit">Wiadomość wysłana pomyślnie!</span>
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

export default App;

export const Navlink = (props) => {
  return (
    <li className="nav-link">
      <a href={`#${props.h}`}>{props.dir}</a>
    </li>
  );
};

export const Partner = (props) => {
  return <div className="partner">{props.name}</div>;
};

export const Blok = (props) => {
  return (
    <div className="blok">
      <div className="blok-title">
        <strong>FLIKO/ </strong>
        {props.title}
      </div>
      <div className="blok-desc">
        <div className="blok-content"></div>
      </div>
    </div>
  );
};

export const Solution = (props) => {
  return (
    <div className="solution" id={`${props.id}`}>
      <div className="title">
        <h1>
          <strong>FLIKO/ </strong>
          {props.title}
        </h1>
      </div>
      <div className="desc">
        <div className="desc-content">
          <h3>{props.desctitle}</h3>
          <div className="desc-text">{props.desc}</div>
          <div className="desc-for">
            <h4>Rozwiązanie zaprojektowane dla:</h4>
            <div className="fors">
              {props.for.map((f, index) => (
                <div className="for" key={index}>
                  {f}
                </div>
              ))}
            </div>
          </div>
          <div className="key-features">
            <h4 className="key-title">Kluczowe funkcje i korzyści</h4>
            <div className="feature-cont">
              {props.keyfeatures.map((feature, index) => (
                <div className="feature" key={index}>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
