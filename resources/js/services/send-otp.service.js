import { signInWithEmailAndPassword } from "firebase/auth";
import { API_ENDPOINT } from "../constants/api_endpoint";
import { BaseServices } from "./base.service";
import { ResponseError, ResponseWrapper } from "./http";

export class SendOtpService extends BaseServices {
    static get resourceEndpoint() {
        return API_ENDPOINT.sendOtp;
    }

    static async sendOtp(parameters) {
        const response = await this.request().post(
            `${this.resourceEndpoint}`,
            {...parameters}
        )
        return response;
    }

    static async verifyOtp(parameters) {
        const response = await this.request().post(
            `${API_ENDPOINT.baseUrl}/${API_ENDPOINT.verifyOtp}`,
            {...parameters}
        )
        return response;
    }

    static async loginUser(auth, email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    static async getUser(id) {
        const response = await this.request().get(
            `${API_ENDPOINT.baseUrl}/${API_ENDPOINT.auth.me}/${id}`,
        )
        return response;
    }


    static async login(parameters) {
        try {
            await this.request().get(
                `${API_ENDPOINT.csrfCookie}`
            );
            const response = await this.request().post(
                `${API_ENDPOINT.baseUrl}/${API_ENDPOINT.auth.login}`,
                {...parameters}
            )
            return new ResponseWrapper(response);
        } catch (error) {
            throw new ResponseError(error);
        }
    }
}