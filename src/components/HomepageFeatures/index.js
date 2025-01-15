import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Columns from '../Columns';
import Column from '../Column';

const FeatureList = [
  {
    title: 'Vive tu Aventura Mágica en Minecraft',
    Svg: require('@site/static/img/Juasin.svg').default,
    description: (
      <>
        Disfruta de un servidor estilo MMORPG, donde la magia y la aventura se entrelazan. ¡Descubre pasadizos secretos, completa misiones y domina hechizos poderosos!
      </>
    ),
  },
  {
    title: 'Descubre este Servidor de Minecraft 1.16.5',
    Svg: require('@site/static/img/Juasin.svg').default,
    description: (
      <>
        Explora un servidor de Minecraft Premium de cuentas oficiales, versión 1.16.5. Sumérgete en una experiencia única llena de magia, secretos y desafíos.
      </>
    ),
  },
];

const DatosServerList = [
  {
    tag: 'MAPAS ORIGINALES',
    title: 'Explora un vasto mundo lleno de secretos',
    videoUrl: 'https://tekeye.uk/html/images/Joren_Falls_Izu_Jap.mp4',
    text: (
      <>
        Sumérgete en un entorno mágico donde cada rincón puede esconder sorpresas y misterios. 
        Aventúrate por pasadizos ocultos, descubre habitaciones secretas 
        llenas de historia y maravíllate con paisajes impresionantes y llenos de vida.
      </>
    ),
    flipped: false,
  },
  {
    tag: 'MAGIA AVANZADA',
    title: 'Domina extraordinarios hechizos',
    videoUrl: 'https://tekeye.uk/html/images/Joren_Falls_Izu_Jap.mp4',
    text: (
      <>
        Aprende y mejora tus habilidades mágicas hasta su máximo potencial para aumentar tu poder y maestría. 
        Experimenta con distintos conjuros, perfecciona tu técnica y 
        combina diferentes encantamientos que te ayudarán en tus aventuras.
      </>
    ),
    flipped: true,
  },
  {
    tag: 'DESAFÍOS ÉPICOS',
    title: 'Completa misiones únicas',
    videoUrl: 'https://tekeye.uk/html/images/Joren_Falls_Izu_Jap.mp4',
    text: (
      <>
        Enfréntate a emocionantes misiones que pondrán a prueba tu ingenio y habilidad. 
        Ayuda a intrigantes personajes con sus problemas, resuelve complejos acertijos y 
        demuestra tu ingenio en pruebas desafiantes que te llenarán de experiencia y pericia.
      </>
    ),
    flipped: false,
  },
  {
    tag: 'ARTEFACTOS MÁGICOS',
    title: 'Equipamiento y transporte hechizado',
    videoUrl: 'https://tekeye.uk/html/images/Joren_Falls_Izu_Jap.mp4',
    text: (
      <>
        Equípate con los más increíbles artilugios mágicos y medios de transporte encantados. 
        Desde tu confiable varita hasta trasladores y escobas voladoras que te llevarán a lugares 
        que nunca habrías imaginado. ¡Todo lo necesario para que tu aventura sea inolvidable!
      </>
    ),
    flipped: true,
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
      <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function DatosServer({tag, title, videoUrl, text, flipped}) {
  const videoElement = (
    <video 
      aria-hidden="true" 
      playsinline="" 
      autoplay="true" 
      muted="true" 
      loop="true" 
      className='borde-curvas Video'
    >
      <source src={videoUrl} type="video/mp4" />
    </video>
  );

  return (
    <>
      {flipped ? (
        <Columns className='flipped'>
          <Column className='text--center featureSvg'>{videoElement}</Column>
          <Column className='text--justify padding-vert--md'>
            <Heading as='h4' className='whats-new-feature__eyebrow'>{tag}</Heading>
            <Heading as='h3'>{title}</Heading>
            {text}
          </Column>
        </Columns>
      ) : (
        <Columns>
          <Column className='text--center featureSvg'>{videoElement}</Column>
          <Column className='text--justify padding-vert--md'>
            <Heading as='h4' className='whats-new-feature__eyebrow'>{tag}</Heading>
            <Heading as='h3'>{title}</Heading>
            {text}
          </Column>
        </Columns>
      )}
      <p></p>
    </>
  );
}

export default function HomepageFeatures() {
  return (
    <div>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.features}>
        <div className="container">
          {DatosServerList.map((props, idx) => (
            <DatosServer key={idx} {...props} />
          ))}
        </div>
      </section>
      <section className={styles.features}>
        <div className="container">
        </div>
      </section>
    </div>
  );
}
