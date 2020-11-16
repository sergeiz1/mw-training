import { Component, OnInit } from '@angular/core';
import {DebugConfig, DebugConfigType} from "./debug-config";

@Component({
  selector: 'app-debugger',
  templateUrl: './debugger.component.html'
})
export class DebuggerComponent implements OnInit {

  constructor(public debugConfig: DebugConfig) { }

  ngOnInit(): void {
    if (this.debugConfig.debugConfig === DebugConfigType.CONSOLE) {
      console.log(this.debugConfig);
    }
  }

}
