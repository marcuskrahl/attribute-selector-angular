import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test2', //component not using attribute selector
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  @Input() attrTest: string = 'default value';

  constructor() { }

  ngOnInit() {
  }

}
