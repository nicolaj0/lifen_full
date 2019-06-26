import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {Shift} from "../../shift/shift";

@Component({
  selector: 'app-shift-edit',
  templateUrl: './shit-edit.component.html',
  styleUrls: ['./shit-edit.component.sass']
})
export class ShiftEditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Shift) { }

  ngOnInit() {
  }

}
