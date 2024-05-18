import React from 'react';
import { Link } from 'react-router-dom';

import Cmasmas from './Cmasmas';
import Css from './Css';
import Go from './Go';
import Html from './Html';
import Java from './Java';
import JavascripLogo from './Javascrip-logo';
import Php from './Php';
import Python from './Python';
import Ruby from './Ruby';
import Rust from './Rust';

const Navigation = () => {
  return (
    <div>
      <Link to="/c++">
        <figure>
          <Cmasmas />
          <figcaption>C++</figcaption>
        </figure>
      </Link>
      <Link to="/css">
        <figure>
          <Css />
          <figcaption>CSS</figcaption>
        </figure>
      </Link>
      <Link to="/go">
        <figure>
          <Go />
          <figcaption>Go</figcaption>
        </figure>
      </Link>
      <Link to="/html">
        <figure>
          <Html />
          <figcaption>HTML</figcaption>
        </figure>
      </Link>
      <Link to="/java">
        <figure>
          <Java />
          <figcaption>Java</figcaption>
        </figure>
      </Link>
      <Link to="/javascrip">
        <figure>
          <JavascripLogo />
          <figcaption>JavaScript</figcaption>
        </figure>
      </Link>
      <Link to="/php">
        <figure>
          <Php />
          <figcaption>PHP</figcaption>
        </figure>
      </Link>
      <Link to="/python">
        <figure>
          <Python />
          <figcaption>Python</figcaption>
        </figure>
      </Link>
      <Link to="/ruby">
        <figure>
          <Ruby />
          <figcaption>Ruby</figcaption>
        </figure>
      </Link>
      <Link to="/rust">
        <figure>
          <Rust />
          <figcaption>Rust</figcaption>
        </figure>
      </Link>
    </div>
  );
};

export default Navigation;
