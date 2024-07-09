import { Component } from '@angular/core';
import { HeaderComponent } from '../../partials/header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TeamMember, teamMembers } from '../../models/team.model';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [HeaderComponent, MatIconModule, MatDialogModule, NgStyle],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  teams: TeamMember[] = teamMembers;
}
