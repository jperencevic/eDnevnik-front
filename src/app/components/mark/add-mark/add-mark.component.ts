import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { MarkTypeService } from "../../../services/mark-type.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MarksService } from "../../../services/marks.service";
import { PostMark } from "../../../../models/postMark";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-add-mark",
  templateUrl: "./add-mark.component.html",
  styleUrls: ["./add-mark.component.css"]
})
export class AddMarkComponent implements OnInit {
  markTypes: {
    id: number;
    version: number;
    type: string;
    description: string;
  }[] = [];
  newMark: PostMark;

  constructor(
    private markService: MarksService,
    private route: ActivatedRoute,
    private router: Router,
    private mTypeService: MarkTypeService,
    private authService: AuthService
  ) {
    this.newMark = new PostMark();
  }

  ngOnInit() {
    this.getMarkTypes();
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
      this.markTypes.forEach(mt => {
        if (mt.type !== "zakljucna") {
          temp.push(mt);
        }
      });
      this.markTypes = temp;
    });
  }

  addMark(m: number, mg: string, mt: number): void {
    const puId = +this.route.snapshot.paramMap.get("pId");
    const ctgsIdn = +this.route.snapshot.paramMap.get("ctgsId");
    this.newMark.mark = m;
    this.newMark.markGiven = mg;
    this.newMark.pId = puId;
    this.newMark.ctgsId = ctgsIdn;
    this.newMark.mtId = mt;
    this.markService.addMark(this.newMark).subscribe((newMark: PostMark) => {
      alert("Ocena je uspešno dodata!");
      this.router.navigate(["/ROLE_TEACHER"]);
    });
  }

  goBack(): void {
    this.router.navigate([`/${localStorage.getItem("role")}`]);
  }
}
