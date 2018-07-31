import { Component, OnInit } from "@angular/core";
import { ParentService } from "../services/parent.service";
import { Observable } from "rxjs";
import { PupilsService } from "../services/pupils.service";
import { SubjectMarks } from "../../models/Subject_Mark_pupil";

@Component({
  selector: "app-parent-view",
  templateUrl: "./parent-view.component.html",
  styleUrls: ["./parent-view.component.css"]
})
export class ParentViewComponent implements OnInit {
  children$: Observable<any>;
  selectedChild: any;
  sm$: Observable<SubjectMarks[]>;

  constructor(private parentService: ParentService, private pupilService: PupilsService) {}

  ngOnInit() {
    this.getChildren(localStorage.getItem("id"));
  }

  getChildren(id: string): void {
    this.children$ = this.parentService.getChildren(id);
  }

  selectChild(x: any): void {
    this.selectedChild = x;
    this.sm$ = this.pupilService.getSubjectMarks(x.id);
  }
}
