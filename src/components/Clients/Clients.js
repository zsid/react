import React from 'react';
import styles from './Client.scss';

import a from './images/0logo_nhk.png';
import b from './images/0nhkworld.jpg';
import c from './images/10VIZ_Media_logo.png';
import d from './images/12logo_tec_top.gif';
import e from './images/13D3_Publisher_logo.png';
import f from './images/14discovery.jpeg';
import g from './images/15ChronicleLogo.png';
import h from './images/16Kodansha.jpg';
import i from './images/17gamedesigh.gif';
import j from './images/18_7ch_logo_3.jpg';
import k from './images/1cnngoV2_white_logo.jpg';
import l from './images/voyager.gif';
import m from './images/tuttle.jpg';
import n from './images/mori.gif';
import o from './images/incubot.jpg';
import p from './images/9Taito-logo.png';
import q from './images/8National_Geographic_Channel_Logo.png';
import r from './images/7Bandai_Namco.png';
import s from './images/6BANDAI.png';
import t from './images/5Square_Enix_logo.png';
import u from './images/4Tecmo_logo.png';
import v from './images/3Disney_interactive_studios.png';
import w from './images/2Capcom_logo.png';

const clientsArray = [
  a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w,
];


const Clients = () => (
  <div>
    <h1 className={styles['section__title']}>Trusted by:</h1>
    <div className={styles['client__logos']}>
      {
        clientsArray.map(image => <img key={image} src={image} alt="lala" />)
      }
    </div>
  </div>
);

export default Clients;
