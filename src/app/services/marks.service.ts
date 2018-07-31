import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { PostMark } from "../../models/postMark";
import { Mark } from "../../models/Mark";

@Injectable({
  providedIn: "root"
})
export class MarksService {
  markUrl = environment.apiBaseUrl + "/marks";
  medjikUrl = environment.apiBaseUrl + "/medjik";

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) {}

  addMark(mark: PostMark): Observable<PostMark> {
    return this.httpClient.post<PostMark>(this.markUrl, mark, {
      headers: this.authService.getHeaders()
    });
  }

  getMark(id: string): Observable<Mark> {
    return this.httpClient.get<Mark>(this.markUrl + "/by_id/" + id, {
      headers: this.authService.getHeaders()
    });
  }

  deleteMark(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.markUrl + "/delete/" + id, {
      headers: this.authService.getHeaders()
    });
  }

  updateMark(upMark: PostMark, id: string): Observable<PostMark> {
    return this.httpClient.put<PostMark>(
      this.markUrl + "/update/" + id,
      upMark,
      {
        headers: this.authService.getHeaders()
      }
    );
  }

  suggestFinal(pId: string, sId: string): Observable<number> {
    return this.httpClient.get<number>(
      this.medjikUrl + "/calculate_final/" + pId + "/subj/" + sId,
      {
        headers: this.authService.getHeaders()
      }
    );
  }
  makeFinal(pId: string, sId: string, final: number): Observable<any> {
    return this.httpClient.post<any>(
      this.medjikUrl + "/make_final/" + pId + "/subj/" + sId + "?sugg=" + final,
      {},
      {
        headers: this.authService.getHeaders()
      }
    );
  }
}
