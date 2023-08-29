const corsOptions = {
	origin: [
		"http://localhost:3000",
		"127.0.0.1:3000/",
	],
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

export default corsOptions;