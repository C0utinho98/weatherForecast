import axios from "axios";

const api = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5", params: {
        APPID: "93e2994928c3f621a3a41814bcd1098a",
        lang: "pt_br",
        units: "metric"
    }
});

export { api };
