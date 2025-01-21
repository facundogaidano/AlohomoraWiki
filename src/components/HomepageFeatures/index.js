import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Columns from '../Columns';
import Column from '../Column';
import ReactPlayer from 'react-player/lazy'

const FeatureList = [
  {
    title: 'Vive tu Aventura Mágica en Minecraft',
    Svg: require('@site/static/img/map.svg').default,
    description: (
      <>
        Disfruta de un servidor estilo MMORPG, donde la magia y la aventura se entrelazan. ¡Descubre pasadizos secretos, completa misiones y domina hechizos poderosos!
      </>
    ),
  },
  {
    title: 'Descubre este Servidor de Minecraft 1.16.5',
    Svg: require('@site/static/img/1-16-5.svg').default,
    description: (
      <>
        Explora este mundo mágico desde tu cuenta oficial de Minecraft Premium. Vive tu propia experiencia única llena de magia, secretos y desafíos.
      </>
    ),
  },
];

const DatosServerList = [
  {
    tag: 'MAPAS ORIGINALES',
    title: 'Explora un mundo lleno de secretos',
    videoUrl: 'https://tekeye.uk/html/images/Joren_Falls_Izu_Jap.mp4',
    text: (
      <>
        Sumérgete en un entorno mágico donde cada rincón puede esconder sorpresas y misterios. 
        Aventúrate por pasadizos ocultos, descubre habitaciones secretas 
        llenas de historia y maravíllate con paisajes y construcciones impresionantes.
      </>
    ),
    flipped: false,
  },
  {
    tag: 'MAGIA ASOMBROSA',
    title: 'Domina hechizos extraordinarios',
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
        demuestra tu talento en pruebas desafiantes que te llenarán de experiencia y pericia.
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
        Equípate con los más increíbles artilugios y medios de transporte mágicos. 
        Desde tu varita mágica hasta trasladores y escobas voladoras que te llevarán a los lugares 
        que siempre habías deseado. ¡Todo lo necesario para tu mágica aventura!
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
        <Heading as="h3" className='titulo'>{title}</Heading>
        <p className='cuerpo'>{description}</p>
      </div>
    </div>
  );
}

function DatosServer({tag, title, videoUrl, text, flipped}) {
  const videoElement = (
    <div className='video-container'>
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={`${videoUrl}`}
          muted={true}
          controls={false}
          playing
          loop={true}
          width='100%'
          height='100%'
        />
      </div>
    </div>
  );

  return (
    <>
      {flipped ? (
        <Columns className='flipped row row--no-gutters'>
          <Column className='text--center'>{videoElement}</Column>
          <Column className='text--left' style={{alignSelf: 'center'}}>
            <Heading as='h4' className='whats-new-feature__eyebrow'>{tag}</Heading>
            <Heading as='h3' className='textoo titulo'>{title}</Heading>
            <div className='textoo cuerpo'>{text}</div>
          </Column>
        </Columns>
      ) : (
        <Columns className='row row--no-gutters'>
          <Column className='text--center'>{videoElement}</Column>
          <Column className='text--left' style={{alignSelf: 'center'}}>
          <Heading as='h4' className='whats-new-feature__eyebrow'>{tag}</Heading>
          <Heading as='h3' className='textoo titulo'>{title}</Heading>
            <div className='textoo cuerpo'>{text}</div>
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
