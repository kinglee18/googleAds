import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-health-check",
  templateUrl: "./health-check.component.html",
  styleUrls: ["./health-check.component.scss"]
})
export class HealthCheckComponent implements OnInit {
  mccList = ["MCC 1", "MCC 2", "MCC 3"];
  filter;
  group;
  filterTypes = {
    status: [
      { name: "Todas", value: "1" },
      { name: "Seguimiento", value: "1" },
      { name: "Pendiente", value: "1" },
      { name: "En proceso", value: "1" }
    ],

    status2: [
      { name: "Todas", value: "1" },
      { name: "Seguimiento", value: "1" },
      { name: "Pendiente", value: "1" },
      { name: "En proceso", value: "1" }
    ]
  };

  displayedColumns = {
    lowConsumption: ["accountName", "id", "notes", "priority"],
    highConsumption: ["accountName", "id", "remaining", "date"],
    remaining: ["accountName", "id", "remainingAmount", "date"],
    stopped: ["accountName", "id", "reason", "date"],
    completed: ["accountName", "id", "reason", "date"]
  };

  items = {
    lowConsumption: [
      { accountName: "Cuenta 1", id: 53656, priority: 2 },
      { accountName: "Cuenta 2", id: 53656, priority: 5 },
      { accountName: "Cuenta 3", id: 53656, priority: 1 },
      { accountName: "Cuenta 4", id: 53656, priority: 9 }
    ],
    highConsumption: [],
    remaining: [
      {
        accountName: "Cuenta 1",
        id: 53656,
        remainingAmount: 565,
        date: "13-09-2019 / 13-10-2019"
      },
      {
        accountName: "Cuenta 2",
        id: 53656,
        remainingAmount: 1348,
        date: "13-09-2019 / 13-10-2019"
      },
      {
        accountName: "Cuenta 3",
        id: 53656,
        remainingAmount: 5453,
        date: "13-09-2019 / 13-10-2019"
      },
      {
        accountName: "Cuenta 4",
        id: 53656,
        remainingAmount: 9455,
        date: "13-09-2019 / 13-10-2019"
      }
    ],
    stopped: [
      {
        accountName: "Cuenta 1",
        id: 53656,
        reason: 'Moroso',
        date: "13-09-2019 / 13-10-2019"
      },
      {
        accountName: "Cuenta 2",
        id: 53656,
        reason: 'Detenida',
        date: "13-09-2019 / 13-10-2019"
      },
      {
        accountName: "Cuenta 3",
        id: 53656,
        reason: 'Cancelada',
        date: "13-09-2019 / 13-10-2019"
      },
      {
        accountName: "Cuenta 4",
        id: 53656,
        reason: 'Sitio suspendido',
        date: "13-09-2019 / 13-10-2019"
      }
    ],
    completed: []
  };

  constructor() {}

  ngOnInit() {}
}
