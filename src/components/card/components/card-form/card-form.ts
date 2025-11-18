import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
 
@Component({
  selector: 'app-card-form',
  imports:[ReactiveFormsModule],
  templateUrl: './card-form.html',
  styleUrl: './card-form.css',
})

export class CardForm { 
  private _fb: FormBuilder = inject(FormBuilder);
  imcForm!: UntypedFormGroup;

  ngOnInit(): void {
    this.initForm()
  }

  private initForm(){
    this.imcForm = this._fb.group({
      weight: [""],
      height: [""]
    }) 
  }
}
