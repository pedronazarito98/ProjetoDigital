import { axiosApi } from './api';

const sendRequest = {
    getAddress: async (param) => {
        const result = await axiosApi.post('getAddress', param)
            .then(response => {
                if (response.status === 200) {
                    // Possíveis campos retornados pelo método
                    const address = response.data.address
                    const cities = response.data.cities;
                    const states = response.data.states;
                    
                    return { address, cities, states }
                }
            })
            .catch(err => {
                console.log(err);
                console.log(`Erro ao realizar requisição getAddress: ${err}`)
            });
        return result;
    }
}

export default sendRequest;
