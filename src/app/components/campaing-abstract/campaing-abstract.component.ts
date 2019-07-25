import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-campaing-abstract",
  templateUrl: "./campaing-abstract.component.html",
  styleUrls: ["./campaing-abstract.component.scss"]
})
export class CampaingAbstractComponent implements OnInit {
  group: any;
  myData = [
    ["Consumo alto", 8136000],
    ["Consumo bajo", 8538000],
    ["Detenidas", 2244000],
    ["Remanentes", 19500000]
  ];

  displayedColumns: string[] = ["type", "number"];
  dataSource = [
    { type: "Activas", number: 34 },
    { type: "Detenidas", number: 53 },
    { type: "Con Anuncios Rechazados", number: 453 },
    { type: "Con Remanente", number: 6941 },
    { type: "Por optimizar", number: 41 }
  ];

  table2Column:  string[] =  ["name", "label", "googleId"]
  table2 = [
    {name: 'Cuenta 1', label: 'etiqueta', googleId: '74734'},
    {name: 'Cuenta 2', label: 'etiqueta', googleId: '345'},
    {name: 'Cuenta 3', label: 'etiqueta', googleId: '777'},
    {name: 'Cuenta 4', label: 'etiqueta', googleId: '3345'},

  ];
  constructor() {}

  ngOnInit() {}
}
