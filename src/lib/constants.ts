// Branding and site-wide constants for the Sirius project
// Centralize here so future rebranding / multi-site use is simpler.
export const SITE = {
	name: 'Sirius',
	shortName: 'Sirius',
	legalName: 'Sirius Agencia de Soluciones Digitales',
	domain: 'siriusx.net',
	url: 'https://www.siriusx.net',
	locale: 'es_CR',
	tagline: 'Soluciones digitales que aceleran tu crecimiento',
	description:
		'Agencia de soluciones digitales: desarrollo web, automatización, marketing y estrategia tecnológica orientada a resultados.',
	primaryEmail: 'admin@siriusx.net',
	phone: '+506 7221 7873',
	address: {
		street: 'Pozos de Santa Ana',
		city: 'San José',
		region: 'San José',
		postalCode: '10903',
		countryCode: 'CR'
	},
	social: {
		facebook: 'https://www.facebook.com/sirius', // TODO
		instagram: 'https://www.instagram.com/siriusx_cr/',
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
