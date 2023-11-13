import axios from "axios";
import Cookies from 'universal-cookie';
export const validateCurrentUser = async () => {

    const cookies = new Cookies(null, { path: '/' });
    let validatorBl = false;
    const id = cookies.get('wr_token');
    await axios
        .get(`${import.meta.env.VITE_SERVER_API}/validate?id=${id}`)
        .then((response) => {
            if (response.data.exists) {
                console.log("Session OK");
                validatorBl = true;
            } else {
                validatorBl = false;
            }
        })
        .catch((error) => {
            validatorBl = false;
            console.log(error)
        });


    return validatorBl;
};