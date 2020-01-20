module.exports = {
	server_url: 'http://api.chartbeat.com/live/toppages/',
	sitename: 'El Universo',
	api_ver: 'v3',
	API_KEY: '489ca5d5c6e07f057ec7d9a6a69be9d8', //GENERAR COMO VARIABLE DE ENTORNO
	csrf: false,
	limit_page: 10,
	limit_news_masleidas: 5,
	host_name: 'eluniverso.com',
	protocol: 'https://',
	menu: [
		{
			codigo: 0,
			name: 'Noticias'
		},
		{
			codigo: 1,
			name: 'Guayaquil'
		},
		{
			codigo: 2,
			name: 'Deportes'
		},
		{
			codigo: 3,
			name: 'Entretenimiento'
		},
		{
			codigo: 4,
			name: 'La revista'
		}
	]
};
