import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Admin } from "../../models/Admin";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  private baseUrl: string = environment.apiBaseUrl + "/admins/";

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  getAdmin(id: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "by_id/" + id, {
      headers: this.authService.getHeaders()
    });
  }

  changePassword(id: string, oldP: string, newP: string): Observable<any> {
    return this.httpClient.put<any>(
      this.baseUrl + "password/" + id + "?oldP=" + oldP + "&newP=" + newP,
      {},
      {
        headers: this.authService.getHeaders()
      }
    );
  }

  // ====================================

  getAllAdmins(): Observable<any> {
    return this.httpClient.get(this.baseUrl, {
      headers: this.authService.getHeaders()
    });
  }

  deleteAdmin(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "delete/" + id, {
      headers: this.authService.getHeaders()
    });
  }
}

//  createCustomer(customer: Object): Observable<Object> {
//     return this.http.post(`${this.baseUrl}` + `/create`, customer);
//   }

//   updateCustomer(id: number, value: any): Observable<Object> {
//     return this.http.put(`${this.baseUrl}/${id}`, value);
//   }
