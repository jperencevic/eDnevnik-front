import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PupilsService } from "../../services/pupils.service";
import { Router } from "@angular/router";
import { User } from "../../../models/User";
import { ParentService } from "../../services/parent.service";
import { AuthService } from "../../services/auth.service";
import { AdminService } from "../../services/admin.service";
import { TeacherService } from "../../services/teacher.service";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"]
})
export class ChangePasswordComponent implements OnInit {
  // oldP: string;
  // newP: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private pupilService: PupilsService,
    private parentService: ParentService,
    private adminService: AdminService,
    private teacherService: TeacherService
  ) {}

  ngOnInit() {}

  onSubmit(oldP, newP): void {
    if (localStorage.getItem("role") == "ROLE_PUPIL") {
      this.pupilPass(localStorage.getItem("id"), oldP, newP).subscribe(_ => {
        alert("Šifra je uspešno promenjena");
        this.router.navigate(["/login"]);
      });
    }
    if (localStorage.getItem("role") == "ROLE_PARENT") {
      this.parentPass(localStorage.getItem("id"), oldP, newP).subscribe(_ => {
        alert("Šifra je uspešno promenjena");
        this.router.navigate(["/login"]);
      });
    }
    if (localStorage.getItem("role") == "ROLE_ADMIN") {
      this.adminPass(localStorage.getItem("id"), oldP, newP).subscribe(_ => {
        alert("Šifra je uspešno promenjena");
        this.router.navigate(["/login"]);
      });
    }
    if (localStorage.getItem("role") == "ROLE_TEACHER") {
      this.teacherPass(localStorage.getItem("id"), oldP, newP).subscribe(_ => {
        alert("Šifra je uspešno promenjena");
        this.router.navigate(["/login"]);
      });
    }
  }

  goBack(): void {
    this.router.navigate([`/${localStorage.getItem("role")}`]);
  }

  pupilPass(id: string, oldP: string, newP: string): Observable<any> {
    return this.pupilService.changePassword(id, oldP, newP);
  }

  parentPass(id: string, oldP: string, newP: string): Observable<any> {
    return this.parentService.changePassword(id, oldP, newP);
  }

  adminPass(id: string, oldP: string, newP: string): Observable<any> {
    return this.adminService.changePassword(id, oldP, newP);
  }

  teacherPass(id: string, oldP: string, newP: string): Observable<any> {
    return this.teacherService.changePassword(id, oldP, newP);
  }
}
