import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() labelToShow : string;
  // @Input() type : string;

  constructor() { }

  ngOnInit() {
  }

}
