import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test[attrTest]', //component using attribute selector
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() attrTest: string = 'default value';

  constructor() { }

  ngOnInit() {
  }

}
