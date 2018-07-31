import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MarkTypeService {
  mTypeUrl = environment.apiBaseUrl + "/marktype";

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  getTypes(): Observable<any> {
    return this.httpClient.get<any>(this.mTypeUrl, {
      headers: this.authService.getHeaders()
    });
  }
}
