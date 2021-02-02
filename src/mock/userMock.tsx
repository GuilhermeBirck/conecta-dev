import mock from '../utils/mock';

// mock.onPost('/api/home/login').reply(200, {
//     'id': 1,
//     'username': 'GuilhermeBirck',
//     'email': 'guilherme.birck@unoesc.edu.br'
// });

mock.onPost('/api/home/login').reply((config) => {
    console.log(config)
    const { email, password } = JSON.parse(config.data);
    
    if (email !== 'guilherme.birck@unoesc.edu.br' || password !== 'admin') {
        return [400, { message: 'Seu e-mail ou senha estão incorretos.'}]
    }

    const user = {
        id: 1,
        name: 'Guilherme Birck',
        username: 'GuilhermeBirck',
        email: 'guilherme.birck@unoesc.edu.br'
    }
    return [200, { user }]
});