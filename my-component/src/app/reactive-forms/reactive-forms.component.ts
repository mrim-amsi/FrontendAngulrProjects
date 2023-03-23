import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
status = ['stabel', 'finish'];
profileForm!: FormGroup;
// forbiddenNames = ['test'];

ngOnInit(): void {
  // const control = new FormControl('', Validators.required);
  this.profileForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        //without using "this" within validator funtion
        // this.forbiddenNameValidator,
        this.forbiddenNameValidator,
        // in case of using "this" within validator function
        // this.forbiddenNameValidator.bind(this),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      status: new FormControl('stabel'),
    hobbies: new FormArray([]),
  });

  // this.signUpForm.valueChanges.subscribe((value) => {
  //   console.log(value);
  // });

  this.profileForm.statusChanges.subscribe((status) => {
    console.log(status);
  });
}

get name() {
  return this.profileForm.get('name')!;
}

onSubmit() {
  console.log(this.profileForm);
}

get hobbies() {
  return this.profileForm.get('hobbies') as FormArray;
}

onAddHobby() {
  const control = new FormControl('', Validators.required);
  this.hobbies.push(control);
}

// {[text: string]: boolean }
// { nameIsForbidden : true}
forbiddenNameValidator(
  control: FormControl
): { [text: string]: boolean } | null {
  // if (this.forbiddenNames.indexOf(control.value) !== -1) {
  //   return { nameIsForbidden: true };
  // }
  if (control.value == 'test') {
    return { nameIsForbidden: true };
  }
  return null;
}
}