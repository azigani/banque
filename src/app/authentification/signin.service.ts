import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {SignInRequest} from './models/SignInRequest';
import {SignInResponse} from './models/SignInResponse';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  url = environment.api_url + '/auth/connexion';

  constructor(private httpClient: HttpClient) {
  }

  connexion(signInRequest: SignInRequest): Observable<SignInResponse> {
    console.log(signInRequest);
    return this.httpClient.post<SignInResponse>(this.url, signInRequest);
  }

}
