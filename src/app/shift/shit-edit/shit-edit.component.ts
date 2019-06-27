import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material";
import {Shift} from "../../shift/shift";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-shift-edit',
  templateUrl: './shit-edit.component.html',
  styleUrls: ['./shit-edit.component.sass']
})
export class ShiftEditComponent implements OnInit {
  dateFilter = (d: Date) => {
    let x = true;
    let today = new Date();
    today.setDate(today.getDate()-1);
    if (d<today) return false
    this.data.shifts.map(d => d.start_date).forEach(item => {
      if (item.toString() === d.toISOString()) {
        x = false;
      }
    })
    return x;
  };
  private shiftForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { shifts: Shift[], shiftToAdd : Shift }) {
  }

  ngOnInit() {
    this.shiftForm = new FormGroup({
      start_date: new FormControl(new Date(),[Validators.required])
    })
  }

}
