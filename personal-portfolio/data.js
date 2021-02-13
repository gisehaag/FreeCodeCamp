const projects = {
	'free-code-camp': {
		'title': 'FreeCodeCamp challenges',
		'image': '',
		'date': 'feb-21',
		'technology': ['html5', 'css3', 'github'],
		'inspirationTitle': 'FreeCodeCamp.org',
		'inspirationURL': 'http://freecodecamp.org',
		'description': 'I found this amazing source of knowledge and I felt inspired to do every single challenge 🤓. I started with Responsive Web Design Certification, in fact, create a personal portfolio was one of the projects, and encourage me to build my own.',
		'url': 'http://freecodecamp.gisehaag.com',
	},

	'tictactoe': {
		'title': 'Tic Tac Toe',
		'image': 'https://github.com/gisehaag/training-projects/blob/main/screenshots/tictactoe.png?raw=true',
		'date': 'ene-21',
		'technology': ['html5', 'css3', 'javascript', 'github'],
		'inspirationTitle': '???',
		'inspirationURL': '',
		'description': '',
		'url': 'http://test.gisehaag.com/minijuegos/',
	},

	'mediaplayer': {
		'title': '',
		'image': '',
		'date': 'ene-21',
		'technology': ['html5', 'css3', 'javascript', 'github'],
		'inspirationTitle': '???',
		'inspirationTitleURL': '',
		'description': '',
		'url': 'http://test.gisehaag.com/mediaplayer/',
	},

	'gisehaag': {
		'title': '',
		'image': '',
		'date': 'nov-20 - ene-21',
		'technology': ['php', 'wordpress', 'github'],
		'inspirationTitle': '',
		'inspirationTitleURL': '',
		'description': '',
		'url': 'http://gisehaag.com/',
	},

	'catalogo': {
		'title': '',
		'image': '',
		'date': 'oct-20',
		'technology': ['php', 'wordpress'],
		'inspirationTitle': '',
		'inspirationTitleURL': '',
		'description': '',
		'url': 'http://catalogo.gisehaag.com/',
	},

	'play2fund': {
		'title': '',
		'image': '',
		'date': 'oct-20',
		'technology': ['php', 'wordpress'],
		'inspirationTitle': '',
		'inspirationTitleURL': '',
		'description': '',
		'url': 'http://play2fund.gisehaag.com/',
	},

	'checkboxes': {
		'title': '',
		'image': '',
		'date': 'jul-20',
		'technology': ['javascript'],
		'inspirationTitle': 'https://javascript30.com/',
		'inspirationTitleURL': '',
		'description': '',
		'url': 'http://projects.gisehaag.com/training-projects/hold-shift-and-check-checkboxes/',
	},

	'drum-kit': {
		'title': '',
		'image': '',
		'date': 'jul-20',
		'technology': ['javascript'],
		'inspirationTitle': 'https://javascript30.com/',
		'inspirationTitleURL': '',
		'description': '',
		'url': 'http://projects.gisehaag.com/training-projects/drum-kit/',
	},

	'to-do-list': {
		'title': '',
		'image': '',
		'date': 'may-20',
		'technology': ['html5', 'css3', 'javascript'],
		'inspirationTitle': 'https://jsbeginners.com/javascript-projects-for-beginners/',
		'inspirationTitleURL': '',
		'description': 'Esta app es una CRUD application, una simple lista de tareas pendientes. Una vez creada, la tarea se puede actualizar, editar, o borrar.',
		'url': 'http://projects.gisehaag.com/training-projects/to-do-list/index.html',
	},

	'budget-app': {
		'title': '',
		'image': '',
		'date': 'jun-20',
		'technology': ['html5', 'css3', 'javascript'],
		'inspirationTitle': 'https://jsbeginners.com/javascript-projects-for-beginners/',
		'inspirationTitleURL': '',
		'description': '',
		'url': 'http://projects.gisehaag.com/training-projects/budget-app/',
	},

	'tip-calculator': {
		'title': '',
		'image': '',
		'date': 'may-20',
		'technology': ['html5', 'css3', 'javascript'],
		'inspirationTitle': 'https://jsbeginners.com/javascript-projects-for-beginners/',
		'inspirationTitleURL': '',
		'description': 'En este proyecto programé una app para calcular la propina a dar en un restaurant. Se ingresa el monto de la cuenta, la cantidad de personas que la compaten y se selecciona cómo fue el servicio entre tres opciones disponibles. La app calcula el monto de la propina.',
		'url': 'http://projects.gisehaag.com/training-projects/tip-calculator/',
	},

	'cart-project': {
		'title': '',
		'image': '',
		'date': 'may-20',
		'technology': ['html5', 'css3', 'javascript'],
		'inspirationTitle': 'https://jsbeginners.com/javascript-projects-for-beginners/',
		'inspirationTitleURL': '',
		'description': '',
		'url': 'http://projects.gisehaag.com/training-projects/cart-project/',
	},

	'clone-site': {
		'title': '',
		'image': '',
		'date': 'abr-20',
		'technology': ['html5', 'css3'],
		'inspirationTitle': 'https://colorlib.com/preview/#original',
		'inspirationTitleURL': '',
		'description': 'En este ejercicio, busque un sitio que me gustó (era un template que podía ser adquirido), y realice una replica para practicar maquetado HTML y CSS.',
		'url': 'http://projects.gisehaag.com/training-projects/original-lifestyle-blog/',
	},

	'atm': {
		'title': '',
		'image': '',
		'date': 'abr-20',
		'technology': ['html5', 'css3', 'javascript'],
		'inspirationTitle': '_curso de programación básica_ de Platzi',
		'inspirationTitleURL': '',
		'description': 'Uno de los primeros proyectos que hice en el _curso de programación básica_ de Platzi. Incorporé los billetes argentinos de la colección de animales que me gusta mucho.',
		'url': 'http://projects.gisehaag.com/training-projects/ATM/',
	},
};


const technologies = {
	'css3': {
		'color': '#1572b6',
		'svg': '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path style="fill: currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>',
	},
	'javascript': {
		'color': '#f7df1e',
		'svg': '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path style="fill: currentColor" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>',
	},
	'html5': {
		'color': '#e34f26',
		'svg': '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path style="fill: currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>',
	},
	'php': {
		'color': '#777bb4',
		'svg': '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path style="fill: currentColor" d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"/></svg>',
	},
	'wordpress': {
		'color': '#21759b',
		'svg': '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path style="fill: currentColor" d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/></svg>',
	},
	'github': {
		'color': '#181717',
		'svg': '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path style="fill: currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
	},
}

export { projects, technologies };