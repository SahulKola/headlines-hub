import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(
    private http: NewsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  searchForm = new FormGroup({
    text: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[A-Za-z0-9 ]*$/),
    ]),
  });
  onSubmit() {
    this.router.navigate(['/'], {
      queryParams: {
        search: this.searchForm.value.text as string,
      },
      queryParamsHandling: 'merge',
    });
    this.searchForm.controls.text.reset('');
  }
}
