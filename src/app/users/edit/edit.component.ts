import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { IUser } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'ng-ws-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  uForm: FormGroup;
  user: IUser;
  constructor(
    private route: ActivatedRoute,
    private service: UserService,
    private builder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.uForm = this.builder.group({
      id: [0],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      account: ['', [Validators.required]],
      password: ['', [Validators.required]],
      enabled: ['', [Validators.required]],
      rights: ['', [Validators.required]],
    });
    this.service
      .getUser(parseInt(this.route.snapshot.paramMap.get('userId'), 10))
      .pipe(
        tap(console.log),
        filter((data) => data !== undefined && data !== null)
      )
      .subscribe((data) => {
        this.user = data;
        this.uForm.setValue(data);
        // this.uForm = this.builder.group({
        //   id: [this.user.id],
        //   firstname: [this.user.firstname, [Validators.required]],
        //   lastname: [this.user.lastname, [Validators.required]],
        //   account: [this.user.account, [Validators.required]],
        //   password: [this.user.password, [Validators.required]],
        //   enabled: [this.user.enabled, [Validators.required]],
        // });
      });
    // this.userForm.addControl('sox', new FormControl('Ringelsocken'));
  }
  save() {
    const editUser = {
      ...this.user,
      ...this.uForm.value,
    };
    this.service.updateOrSaveUser(editUser).subscribe(() => {
      this.router.navigate(['../..'], { relativeTo: this.route });
    });
    console.log(this.uForm.value, this.user, editUser);
  }
}