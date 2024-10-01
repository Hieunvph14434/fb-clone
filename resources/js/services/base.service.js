import { Http, ResponseError, ResponseWrapper } from "./http";

export class BaseServices {
    static get resourceEndpoint() {
        throw new Error('Resource endpoint is not denfine');
    }

    static request() {
        return new Http();
    }

    static async index(parameters = {}) {
        const params = {...parameters};
        try {
            const response = await this.request().get(
                `${this.resourceEndpoint}`,
                {params}
            );
            return new ResponseWrapper(response);
        } catch (error) {
            throw new ResponseError(error);
        }
    }

    static async get(id) {
        try {
            const response = await this.request().get(
                `${this.resourceEndpoint}/${id}`,
            );
            return new ResponseWrapper(response);
        } catch (error) {
            throw new ResponseError(error);
        }
    }
}