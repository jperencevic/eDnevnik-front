import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Ctgs } from "../../models/Ctgs";
import { AuthService } from "./auth.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CtgsService {
  ctgs: Ctgs[];
  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) {}

  getCtgs(tId: string): Observable<any> {
    return this.httpClient
      .get<any>(
        environment.apiBaseUrl + "/teachers/getCTGS/" + this.authService.id,
        { headers: this.authService.getHeaders() }
      )
      .pipe(catchError(this.handleError<any>("getCtgs")));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
