import Loader from './loader';
import { Endpoints, LoaderOptions } from '../../types';

export default class AppLoader extends Loader {
    constructor() {

        super('https://newsapi.org/v2/', { apiKey: '2a5774082e91491ab597789a4892699e' });
    }

    public getResp<T>(params: { endpoint: Endpoints; options?: LoaderOptions }, callback: (data: T) => void): void {
        super.getResp<T>(params, callback);
    }
}

