import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { TeacherService } from "../services/teacher.service";

@Component({
  selector: "app-teacher-view",
  templateUrl: "./teacher-view.component.html",
  styleUrls: ["./teacher-view.component.css"]
})
export class TeacherViewComponent implements OnInit {
  ctgs$: Observable<any>;
  selectedCtgs: any;
  data$: Observable<any>;

  public set SelectedCtgs(x: any) {
    this.selectedCtgs = x;
  }

  constructor(private teacherService: TeacherService) {}

  ngOnInit() {
    this.getCtgs(localStorage.getItem("id"));
  }

  getCtgs(id: string): void {
    this.ctgs$ = this.teacherService.getCtgs(id);
  }

  details(x: any): void {
    this.selectedCtgs = x;
    this.getData(localStorage.getItem("id"), x.id);
  }

  getData(tId: string, ctgsId: string): void {
    this.data$ = this.teacherService.getStudentsMarks(tId, ctgsId);
  }
}
