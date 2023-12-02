const corsOptions = {
	origin: [
		"http://localhost:5173",
		"127.0.0.1:5173/",
	],
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",

	// 	credentials must be set to true on the front-end fetch request
	"Access-Control-Allow-Credentials": true,
};
export default corsOptions;