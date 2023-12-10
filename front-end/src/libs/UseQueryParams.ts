import { useLocation } from "react-router-dom";


function UseQueryParams() {
    const location = useLocation();
	const searchParams = new URLSearchParams(location.search)
    let params: any = {};

    for (let param of searchParams) {
        params[param[0]] = param[1];
    }
    return params;
}

export default UseQueryParams;