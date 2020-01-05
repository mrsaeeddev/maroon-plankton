import React from 'react';
import Scroll from './Scroll';
import config from '../../config';

export default function Header() {
  return (
    <section id="header">
      <header className="major">
        <h1>
          Saeed Ahmad
        </h1>
        <p>
          I write about programming, startups and entrepreneurship. I also build amazing pieces of software
          using Python and JavaScript. 
        </p>
      </header>
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon alt ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="container">
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="#one" className="button primary">
                Know me !
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
    </section>
  );
}
