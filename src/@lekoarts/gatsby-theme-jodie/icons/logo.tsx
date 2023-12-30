import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

const Logo = () => (
  <StaticImage
    src="../../../images/logo-full.png"
    alt="Logotipo expósito"
    placeholder="none"
  />
);

export default Logo;
