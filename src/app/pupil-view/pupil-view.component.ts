import { Component, OnInit } from "@angular/core";
import { PupilsService } from "../services/pupils.service";
import { Observable } from "rxjs";
import { SubjectMarks } from "../../models/Subject_Mark_pupil";

@Component({
  selector: "app-pupil-view",
  templateUrl: "./pupil-view.component.html",
  styleUrls: ["./pupil-view.component.css"]
})
export class PupilViewComponent implements OnInit {
  sm$: Observable<SubjectMarks[]>;
  constructor(private pupilService: PupilsService) {}

  ngOnInit() {
    this.getSM(localStorage.getItem("id"));
  }

  getSM(id: string): void {
    this.sm$ = this.pupilService.getSubjectMarks(id);
  }
}
