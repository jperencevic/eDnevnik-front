import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { SubjectMarks } from "../../models/Subject_Mark_pupil";
import { AuthService } from "./auth.service";
import { tap, catchError } from "rxjs/operators";
import { Pupil } from "../../models/Pupil";
import { User } from "../../models/User";

@Injectable({
  providedIn: "root"
})
export class PupilsService {
  pupilUrl: string = environment.apiBaseUrl + "/pupils/";
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  getSubjectMarks(id: string): Observable<SubjectMarks[]> {
    return this.httpClient.get<SubjectMarks[]>(
      this.pupilUrl + "getMarksSubjects/" + id,
      {
        headers: this.authService.getHeaders()
      }
    );
  }

  getPupil(id: string): Observable<any> {
    return this.httpClient.get<any>(this.pupilUrl + "by_id/" + id, {
      headers: this.authService.getHeaders()
    });
  }

  changePassword(id: string, oldP: string, newP: string): Observable<any> {
    return this.httpClient.put<any>(
      this.pupilUrl + "password/" + id + "?oldP=" + oldP + "&newP=" + newP,
      {},
      {
        headers: this.authService.getHeaders()
      }
    );
  }
}
