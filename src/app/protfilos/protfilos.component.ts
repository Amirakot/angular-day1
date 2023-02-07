import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protfilos',
  templateUrl: './protfilos.component.html',
  styleUrls: ['./protfilos.component.css']
})
export class ProtfilosComponent implements OnInit {
arr:Array<string>;
// odd:number;
  constructor() {
    this.arr = ['web design', 'web devloper', 'web', 'web', 'web', 'web'];
  // this.odd =  0;
  //
  }

  ngOnInit(): void {
  }

}
