import { Component, OnInit } from '@angular/core';
import {Iword} from "../model-dictionary/iword";
import {DictionaryService} from "../dictionary.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ditionary-detail',
  templateUrl: './ditionary-detail.component.html',
  styleUrls: ['./ditionary-detail.component.css']
})
export class DitionaryDetailComponent implements OnInit {
  word: Iword | null={id:1} ;

  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService) {

    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get("id");
      if (id != null) {
        this.word = this.dictionaryService.findById(parseInt(id));
      }
    }, error => {
    }, () => {
    })
  }

  ngOnInit(): void {
  }

}
