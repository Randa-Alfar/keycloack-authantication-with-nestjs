import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { IUser } from 'src/user/interface';
import { firstValueFrom, lastValueFrom, map, tap } from 'rxjs';
import axios from 'axios';

@Injectable()
export class LoginService {
  constructor(private readonly http: HttpService) {}

  async login(user: IUser) {
    // Headers:{
    //     //    'Content-Type':'application/x-www-form-urlencoded'
    //        'Content-Type':'application/json'
    //    },
    //    Body:JSON.stringify({
    //        username:'runy',
    //        password:'12345',
    //        client_id:'keycloack-with-nest',
    //        client_secret:'YUhERtJYUWNNK8Uu5yVLw2naY0yvine3',
    //        grant_type:'password'
    //    })
    // const res =await lastValueFrom( this.http.get('http://localhost:8080/realms/master/.well-known/openid-configuration',).pipe(
    //     tap((resp) => console.log(resp)),
    //     map((resp) => resp.data),
    //     tap((data) =>  console.log(data))
    //     )
    // );

    const { data } = await axios.post(
      'http://localhost:8080/realms/master/protocol/openid-connect/token',
      {
        username: `${user.name}`,
        password: user.password,
        client_id: 'keycloack-with-nest',
        client_secret: 'YUhERtJYUWNNK8Uu5yVLw2naY0yvine3',
        grant_type: 'password',
      },
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      },
    );

    return { token: data.access_token };
  }
}
