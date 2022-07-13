import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { UserModel } from '../../shared/models/user.model';
import { forkJoin } from 'rxjs';
import { ParticipantModel } from '../../shared/models/participant.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  loading: boolean;
  userName: string;
  userData: UserModel;
  participants: ParticipantModel[];
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loading = true;
    this.userName = this.authService.getUserName();
    forkJoin([this.authService.me(), this.authService.getAllParticipants()]).subscribe(([user, participants]) => {
      this.userData = user;
      this.participants = participants;
      this.loading = false;
      console.log(participants);
    });
  }
}
