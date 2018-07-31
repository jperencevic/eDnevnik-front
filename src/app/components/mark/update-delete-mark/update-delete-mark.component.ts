import { Component, OnInit } from "@angular/core";
import { MarksService } from "../../../services/marks.service";
import { Router, ActivatedRoute } from "@angular/router";
import { MarkTypeService } from "../../../services/mark-type.service";
import { Mark } from "../../../../models/Mark";
import { Location } from "@angular/common";

@Component({
  selector: "app-update-delete-mark",
  templateUrl: "./update-delete-mark.component.html",
  styleUrls: ["./update-delete-mark.component.css"]
})
export class UpdateDeleteMarkComponent implements OnInit {
  m: Mark;

  markTypes: {
    id: number;
    version: number;
    type: string;
    description: string;
  }[];

  constructor(
    private markService: MarksService,
    private router: Router,
    private route: ActivatedRoute,
    private mTypeService: MarkTypeService,
    private location: Location
  ) {
    this.m = new Mark();
  }

  ngOnInit() {
    this.getMarkTypes();
    this.getMark();
  }

  goBack(): void {
    // this.router.navigate([`/${localStorage.getItem("role")}`]);
    this.location.back();
  }

  getMark(): void {
    const mId = this.route.snapshot.paramMap.get("mId");
    this.markService.getMark(mId).subscribe(_ => (this.m = _));
    console.log(this.m);
  }

  deleteMark() {
    const mId = this.route.snapshot.paramMap.get("mId");
    this.markService.deleteMark(mId).subscribe(x => {
      alert("Ocena je obrisana!");
      this.router.navigate(["/ROLE_TEACHER"]);
    });
  }

  getMarkTypes(): void {
    this.mTypeService.getTypes().subscribe(t => {
      this.markTypes = t;
      const temp: {
        id: number;
        version: number;
        type: string;
        description: string;
      }[] = [];
    });
  }

  update(): void {
    const mId = this.route.snapshot.paramMap.get("mId");
    const upMar = {
      mark: this.m.mark,
      markGiven: this.m.markGiven,
      pId: this.m.pupil.id,
      ctgsId: this.m.ctgs.id,
      mtId: this.m.type.id
    };
    this.markService.updateMark(upMar, mId).subscribe(_ => {
      alert("Ocena je promenjena");
      this.router.navigate(["/ROLE_TEACHER"]);
    });
  }
}
