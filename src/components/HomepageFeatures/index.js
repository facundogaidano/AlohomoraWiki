import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Columns from '../Columns';
import Column from '../Column';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/Juasin.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/Juasin.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
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

function DatosDere({video, title, text}) {
  return (
    <Columns>
      <Column className='text--center featureSvg'>
        <video aria-hidden="true" playsinline="" autoplay="true" muted="true" loop="true" width={600} className='borde-curvas VideoDere'>
          <source src="https://tekeye.uk/html/images/Joren_Falls_Izu_Jap.mp4" type="video/mp4" />
        </video>
      </Column>
      <Column className='text--justify padding-vert--md'>
        <Heading as='h3'>{title}</Heading>
        {text}
      </Column>
    </Columns>
  )
}
function DatosIzq({video, title, text}) {
  return (
    <Columns className='flipped'>
      <Column className='text--center featureSvg'>
        <video aria-hidden="true" playsinline="" autoplay="true" muted="true" loop="true" className='borde-curvas VideoIzq'>
          <source src="//starlink.ua/media/mod_starlink/car-blur.webm" type="video/webm" />
        </video>
      </Column>
      <Column className='text--left padding-vert--md'>
        <Heading as='h3'>{title}</Heading>
        {text}
      </Column>
    </Columns>
  )
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
          <DatosDere video={'img/comedor.png'} title={'My text column'} text={'nostrud consectetur ad eiusmod cillum exercitation nostrud dolor nulla ipsum duis aute est id do sit tempor sint pariatur exercitation id nostrud voluptate aliqua veniam qui deserunt officia quis culpa cillum adipisicing sint duis incididunt nisi qui ipsum cillum ad dolore exercitation mollit est excepteur incididunt velit voluptate eiusmod laboris'}/>
          <p></p>
          <DatosIzq video={'img/comedor.png'} title={'My text column'} text={'nostrud consectetur ad eiusmod cillum exercitation nostrud dolor nulla ipsum duis aute est id do sit tempor sint pariatur exercitation id nostrud voluptate aliqua veniam qui deserunt officia quis culpa cillum adipisicing sint duis incididunt nisi qui ipsum cillum ad dolore exercitation mollit est excepteur incididunt velit voluptate eiusmod laboris'}/>
          <p></p>
          <DatosDere video={'img/comedor.png'} title={'My text column'} text={'nostrud consectetur ad eiusmod cillum exercitation nostrud dolor nulla ipsum duis aute est id do sit tempor sint pariatur exercitation id nostrud voluptate aliqua veniam qui deserunt officia quis culpa cillum adipisicing sint duis incididunt nisi qui ipsum cillum ad dolore exercitation mollit est excepteur incididunt velit voluptate eiusmod laboris'}/>
          <p></p>
          <DatosIzq video={'img/comedor.png'} title={'My text column'} text={'nostrud consectetur ad eiusmod cillum exercitation nostrud dolor nulla ipsum duis aute est id do sit tempor sint pariatur exercitation id nostrud voluptate aliqua veniam qui deserunt officia quis culpa cillum adipisicing sint duis incididunt nisi qui ipsum cillum ad dolore exercitation mollit est excepteur incididunt velit voluptate eiusmod laboris'}/>
        </div>
      </section>
    </div>
  );
}
