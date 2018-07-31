import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TeacherService {
  teacherUrl: string = environment.apiBaseUrl + "/teachers/";
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  getTeacher(id: string): Observable<any> {
    return this.httpClient.get<any>(this.teacherUrl + "by_id/" + id, {
      headers: this.authService.getHeaders()
    });
  }
  changePassword(id: string, oldP: string, newP: string): Observable<any> {
    return this.httpClient.put<any>(
      this.teacherUrl + "password/" + id + "?oldP=" + oldP + "&newP=" + newP,
      {},
      {
        headers: this.authService.getHeaders()
      }
    );
  }

  getCtgs(id: string): Observable<any> {
    return this.httpClient.get<any>(this.teacherUrl + "getCTGS/" + id, {
      headers: this.authService.getHeaders()
    });
  }

  getStudentsMarks(tId: string, ctgsId: string): Observable<any> {
    return this.httpClient.get<any>(
      this.teacherUrl + "studMarks/" + tId + "/" + ctgsId,
      {
        headers: this.authService.getHeaders()
      }
    );
  }
}
