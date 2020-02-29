import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  @Input() names;
  @Input() id;
  @Input() type;
  @Input() date;
  @Input() venue;
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
