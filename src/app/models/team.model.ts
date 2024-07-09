export interface TeamMember {
  image: string;
  name: string;
  position: string;
  cover_image: string;

  description_1?: string;
  description_2?: string;
  description_3?: string;
  description_4?: string;
}

export const teamMembers: TeamMember[] = [
  {
    image: 'assets/images/teams/ceo.svg',
    name: 'Юлія',
    position: 'CEO Submarine',
    cover_image: 'assets/images/teams/ceo-cover.svg',
  },
  {
    image: 'assets/images/teams/art-director.svg',
    name: 'Марта',
    position: 'арт-директор, стратег',
    cover_image: 'assets/images/teams/art-director-cover.svg',
  },
  {
    image: 'assets/images/teams/coo.svg',
    name: 'Юлія',
    position: 'СОО, стратег',
    cover_image: 'assets/images/teams/coo-cover.svg',
  },
  {
    image: 'assets/images/teams/graph-designer.svg',
    name: 'Марта-Марія',
    position: 'графічний дизайнер',
    cover_image: 'assets/images/teams/graph-designer-cover.svg',
  },
  {
    image: 'assets/images/teams/ui-ux-desighner.svg',
    name: 'Юлія',
    position: 'дизайнер (графічний, UI/UX)',
    cover_image: 'assets/images/teams/ui-ux-desighner-cover.svg',
  },

  {
    image: 'assets/images/teams/graph-desighner-2.svg',
    name: 'Марка',
    position: 'графічний дизайнер',
    cover_image: 'assets/images/teams/graph-desighner-2-cover.svg',
  },

  {
    image: 'assets/images/teams/content-manager.svg',
    name: 'Валерія',
    position: 'контент-менеджер',
    cover_image: 'assets/images/teams/content-manager-cover.svg',
  },

  {
    image: 'assets/images/teams/copywriter.svg',
    name: 'Анна',
    position: 'копірайтер',
    cover_image: 'assets/images/teams/copywriter-cover.svg',
  },

  {
    image: 'assets/images/teams/people-ops.svg',
    name: 'Катерина',
    position: 'people Ops',
    cover_image: 'assets/images/teams/people-ops-cover.svg',
  },
];
