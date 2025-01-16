import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { useEffect, useRef, useState } from 'react';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://cdn.jsdelivr.net/gh/leonardosnt/mc-player-counter/dist/mc-player-counter.min.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  
  const divRef = useRef(null)
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const content = divRef.current?.textContent || 'mc.alohomora.es';

    if (content) {
      const domain = content.split('IP:').pop().trim();
      navigator.clipboard.writeText(domain)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
          setCopied(false);
        });
    }
  };

  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <img src='img/AlohomoraSVG.svg' width={"750"} />
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className='jugadores'>Jugadores Online: <b><span data-playercounter-ip="mc.alohomora.es" data-playercounter-format="{online}/{max}">0</span></b></p>
        <p className='jugadores'>Estado: <b><span data-playercounter-ip="mc.alohomora.es" data-playercounter-status>Offline</span></b></p>
        <div className={styles.buttons}>
          <div
            className="button button--secondary button--lg"
            onClick={handleCopy}>
              {copied ? <span>Copiado</span> : <span ref={divRef}>IP: mc.alohomora.es</span>}
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}