import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
@Input () skill='';
@Input() num=0;
  constructor() { }

  ngOnInit(): void {
  }

}
