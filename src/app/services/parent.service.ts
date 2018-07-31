import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { User } from "../../models/User";

@Injectable({
  providedIn: "root"
})
export class ParentService {
  parentUrl: string = environment.apiBaseUrl + "/parents/";
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  getParent(id: string): Observable<any> {
    return this.httpClient.get<any>(this.parentUrl + "by_id/" + id, {
      headers: this.authService.getHeaders()
    });
  }

  changePassword(id: string, oldP: string, newP: string): Observable<any> {
    return this.httpClient.put<any>(
      this.parentUrl + "password/" + id + "?oldP=" + oldP + "&newP=" + newP,
      {},
      {
        headers: this.authService.getHeaders()
      }
    );
  }

  getChildren(id: string): Observable<any> {
    return this.httpClient.get<any>(this.parentUrl + "children/" + id, {
      headers: this.authService.getHeaders()
    });
  }
}
