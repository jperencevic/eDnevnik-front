import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { PupilsService } from "../../services/pupils.service";
import { Pupil } from "../../../models/Pupil";
import { Observable } from "rxjs";
import { User } from "../../../models/User";
import { map } from "rxjs/operators";
import { AdminService } from "../../services/admin.service";
import { ParentService } from "../../services/parent.service";
import { TeacherService } from "../../services/teacher.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  user: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private pupilService: PupilsService,
    private adminService: AdminService,
    private parentService: ParentService,
    private teacherService: TeacherService
  ) {}

  ngOnInit() {
    if (localStorage.getItem("role") == "ROLE_PUPIL") {
      this.getPupil(localStorage.getItem("id")).subscribe(_ => (this.user = _));
    }
    if (localStorage.getItem("role") == "ROLE_ADMIN") {
      this.getAdmin(localStorage.getItem("id")).subscribe(_ => (this.user = _));
    }
    if (localStorage.getItem("role") == "ROLE_PARENT") {
      this.getParent(localStorage.getItem("id")).subscribe(
        _ => (this.user = _)
      );
    }
    if (localStorage.getItem("role") == "ROLE_TEACHER") {
      this.getTeacher(localStorage.getItem("id")).subscribe(
        _ => (this.user = _)
      );
    }
  }

  goBack(): void {
    this.router.navigate([`/${localStorage.getItem("role")}`]);
  }

  getPupil(id: string): Observable<Pupil> {
    return this.pupilService.getPupil(id);
  }

  getAdmin(id: string): Observable<any> {
    return this.adminService.getAdmin(id);
  }

  getParent(id: string): Observable<any> {
    return this.parentService.getParent(id);
  }

  getTeacher(id: string): Observable<any> {
    return this.teacherService.getTeacher(id);
  }
}
