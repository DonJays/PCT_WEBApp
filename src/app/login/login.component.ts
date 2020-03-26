import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/modals/app-state.model';
import { Observable } from 'rxjs';
import { AuthenticationAction } from 'src/store/actions/authentication.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: Observable<Error>;

  constructor(private formBuilder: FormBuilder, private router: Router, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.createForm();

    this.error = this.store.select(store => store.authentication.error);
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      eid: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  getError(el) {
    switch (el) {
      case 'user':
        if (this.loginForm.get('eid').hasError('required')) {
          return 'eid required';
        }
        break;
      case 'pass':
        if (this.loginForm.get('password').hasError('required')) {
          return 'Password required';
        }
        break;
      default:
        return '';
    }
  }

  onSubmit(data) {
    this.store.dispatch(new AuthenticationAction(data.eid));
  }
}
