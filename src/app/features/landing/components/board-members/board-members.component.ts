import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from './member-card/member-card.component';

@Component({
  selector: 'app-board-members',
  standalone: true,
  imports: [CommonModule, MemberCardComponent],
  templateUrl: './board-members.component.html',
  styleUrls: ['./board-members.component.scss']
})
export class BoardMembersComponent {
  boardMembers = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      bio: 'Experienced leader with over 15 years in investment management.',
      avatarUrl: ''
    },
    {
      name: 'Sarah Johnson',
      position: 'Chief Investment Officer',
      bio: 'Expert in portfolio management and strategic investments.',
      avatarUrl: ''
    },
    {
      name: 'Michael Brown',
      position: 'Board Chairman',
      bio: 'Seasoned executive with deep industry knowledge.',
      avatarUrl: ''
    }
  ];
}
