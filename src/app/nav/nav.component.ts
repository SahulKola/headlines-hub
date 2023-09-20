import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  searchForm = new FormGroup({
    text: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[A-Za-z0-9 ]*$/),
    ]),
  });
  onSubmit() {
    console.log(this.searchForm.value.text);
    this.searchForm.controls.text.reset('');
  }
}
