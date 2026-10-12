import { Helmet } from 'react-helmet-async';

function Seo({ title, description, image, url }) {
  const fullTitle = title ? `${title} | Laradev` : 'Laradev | Portafolio';
  const defaultDesc = 'Desarrollador Full Stack enfocado en crear aplicaciones web y móviles escalables.';
  const defaultImage = 'https://laradev-plum.vercel.app/assets/logo-EZq75h_I.png'; // Reemplaza con tu URL real

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />

      {/* Open Graph para redes sociales (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || 'https://laradev-plum.vercel.app/'} />
      <meta property="og:site_name" content="Laradev" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
}
export default Seo;