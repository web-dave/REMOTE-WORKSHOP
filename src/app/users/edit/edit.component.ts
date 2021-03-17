import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'ng-ws-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  user: IUser;
  constructor(private route: ActivatedRoute, private service: UserService) {}

  ngOnInit(): void {
    this.service
      .getUser(this.route.snapshot.paramMap.get('userId'))
      .subscribe((data) => (this.user = data));
  }
}
