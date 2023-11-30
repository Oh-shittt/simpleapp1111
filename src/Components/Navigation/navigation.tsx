import { CounterPage } from '../Pages/counterPage';
import { TextPage } from '../Pages/textPage';
import { Google } from '../Pages/google';
import { ReduxCounterPage } from '../Pages/ReduxCounterPage';
import { AxiosRequest } from '../Pages/axiosPage';

function Links() {
    const links = [
        { to: '/Google', label: 'Google', name: 'Google' },
        { to: '/Counter', label: 'Counter', name: 'Counter' },
        { to: '/Redux', label: 'Redux counter', name: 'Redux counter' },
        { to: '/Text', label: 'Text input', name: 'Text' },
        { to: '/Axios', label: 'Axios request', name: 'Axios' },
    ];
    return links;
};

export { Links };

function Path() {
    const routes = [
        { path: '/Counter', element: <CounterPage /> },
        { path: '/Redux', element: <ReduxCounterPage /> },
        { path: '/Text', element: <TextPage /> },
        { path: '/Google', element: <Google /> },
        { path: '/Axios', element: <AxiosRequest /> },
    ];
    return routes;
}

export { Path };