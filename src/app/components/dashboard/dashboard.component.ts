import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  id: string;
  constructor(private activatedRoute: ActivatedRoute, private route: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.id = data.id;
      
    });
  }
  logout() {
    this.route.navigate(["/login/" + this.id]);
  }
}
