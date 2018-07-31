import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { MarksService } from "../../../services/marks.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-final",
  templateUrl: "./final.component.html",
  styleUrls: ["./final.component.css"]
})
export class FinalComponent implements OnInit {
  fin: any;
  suggestion: number;
  constructor(
    private markService: MarksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.calculate().subscribe(_ => (this.suggestion = _));
  }

  calculate(): Observable<number> {
    const pId = this.route.snapshot.paramMap.get("pId");
    const sId = this.route.snapshot.paramMap.get("sId");
    return this.markService.suggestFinal(pId, sId);
  }

  finalito() {
    const pId = this.route.snapshot.paramMap.get("pId");
    const sId = this.route.snapshot.paramMap.get("sId");
    return this.markService.makeFinal(pId, sId, this.fin).subscribe(_ => {
      alert("Ocena je zakljucena!");
      this.router.navigate(["/ROLE_TEACHER"]);
    });
  }
}
