import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
// arr:Array<any>;
arr:any[];
constructor() {
this.arr = [
  {
    skill: 'html',
    num: 80,
  },
  { skill: 'bootstrap', num: 50 },
  { skill: 'php', num: 60 },
  { skill: 'photosho', num: 90 },
];
}

  ngOnInit(): void {
  }

}
