import { Component, OnInit } from "@angular/core";
import { SessionService } from "../../../services/session.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  username = "";
  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    const { user } = this.sessionService.getUser();
    this.username = user;
  }
}
