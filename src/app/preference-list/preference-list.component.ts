import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-preference-list',
  templateUrl: './preference-list.component.html',
  styleUrls: ['./preference-list.component.css']
})
export class PreferenceListComponent implements OnInit {
  public ent = environment;
  public displayedColumns: String[] = ['Name','Dinner','Chair'];
  constructor() { }

  ngOnInit() {
  }
  
}