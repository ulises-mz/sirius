// Branding and site-wide constants for the Sirius project
// Centralize here so future rebranding / multi-site use is simpler.
export const SITE = {
	name: 'Sirius',
	shortName: 'Sirius',
	legalName: 'Sirius Agencia de Soluciones Digitales',
	domain: 'siriusdigital.cr', // TODO: confirmar dominio final (ej: siriusagencia.com)
	url: 'https://www.siriusdigital.cr', // TODO: actualizar cuando se defina el dominio productivo
	locale: 'es_CR',
	tagline: 'Soluciones digitales que aceleran tu crecimiento',
	description:
		'Agencia de soluciones digitales: desarrollo web, automatización, marketing y estrategia tecnológica orientada a resultados.',
	primaryEmail: 'contacto@siriusdigital.cr', // TODO: reemplazar con email oficial
	phone: '+506 0000 0000', // TODO: reemplazar con teléfono oficial
	address: {
		street: 'San José Centro',
		city: 'San José',
		region: 'San José',
		postalCode: '10101',
		countryCode: 'CR'
	},
	social: {
		facebook: 'https://www.facebook.com/sirius', // TODO
		instagram: 'https://www.instagram.com/sirius', // TODO
		linkedin: 'https://www.linkedin.com/company/sirius', // TODO
		twitter: 'https://x.com/sirius' // TODO
	}
};

export const SEO_DEFAULT = {
	title: `${SITE.name} – Agencia de Soluciones Digitales`,
	description: SITE.description,
	keywords: [
		'agencia digital',
		'soluciones digitales',
		'desarrollo web',
		'automatización',
		'marketing digital',
		'diseño UX/UI',
		'transformación digital'
	]
};

export const OPEN_GRAPH_IMAGE = '/images/og/home-page-seo.webp'; // TODO: actualizar asset con branding Sirius

export const BRAND_NOTES = 'Este contenido fue adaptado desde un proyecto anterior (CodeINVEST) y centralizado.';
