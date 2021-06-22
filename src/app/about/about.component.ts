import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { emailAsyncValidator, emailValidator } from './email.validator';

@Component({
  selector: 'ng-sw-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  form = new FormGroup({});
  model: any = { name: '', gender: '', birthday: '' };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'name',
        placeholder: 'Name',
        description: 'Your Name',
        required: true,
      },
    },
    {
      key: 'birthday',
      type: 'input',
      templateOptions: {
        label: 'birthday',
        placeholder: 'Birthday',
        description: 'Your Birthday',
        type: 'date',
        required: true,
      },
    },
    {
      key: 'gender',
      type: 'select',
      templateOptions: {
        label: 'gender',
        placeholder: 'Gender',
        description: 'Your Gender',
        required: true,
        options: [
          { label: 'He/Him', value: 'male' },
          { label: 'She/Her', value: 'female' },
          { label: 'They/Them', value: 'they' },
        ],
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'email',
        placeholder: 'Email',
        description: 'Your email',
        required: true,
        type: 'mail',
      },
      asyncValidators: {
        validation: [emailAsyncValidator()],
      },
      validators: {
        validation: [],
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
