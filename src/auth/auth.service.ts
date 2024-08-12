import { Body, Injectable } from "@nestjs/common";
import axios from "axios";

export class AuthenticationError extends  Error{};


@Injectable()
export class AuthanService{

    async authenticate(accessToken: string){
        try{

            const url = 'http://localhost:8080/realms/master/protocol/openid-connect/token/introspect';

            const { data } = await axios.post(url,{
                    token:accessToken,
                    client_id:'keycloack-with-nest',
                    client_secret:'YUhERtJYUWNNK8Uu5yVLw2naY0yvine3'
                },{
                headers:{'Content-Type':'application/x-www-form-urlencoded'}
            });

            console.log(data);

            return {
                id:data.sub,
                username:data.username,
            };

        }catch(e){
            throw new AuthenticationError(e);
        }
    }
}