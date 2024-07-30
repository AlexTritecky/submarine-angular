export interface TeamMember {
  image: string;
  name: string;
  position: string;
  cover_image: string;
  id: number;

  description_1?: string;
  description_2?: string;
  description_3?: string;
  description_4?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    image: 'assets/images/teams/ceo.svg',
    name: 'Юлія',
    position: 'CEO Submarine',
    cover_image: 'assets/images/teams/ceo-cover.svg',
  },
  {
    id: 2,
    image: 'assets/images/teams/art-director.svg',
    name: 'Марта',
    position: 'арт-директор, стратег',
    cover_image: 'assets/images/teams/art-director-cover.svg',
  },
  {
    id: 3,
    image: 'assets/images/teams/coo.svg',
    name: 'Юлія',
    position: 'СОО, стратег',
    cover_image: 'assets/images/teams/coo-cover.svg',
  },
  {
    id: 4,
    image: 'assets/images/teams/graph-designer.svg',
    name: 'Марта-Марія',
    position: 'графічний дизайнер',
    cover_image: 'assets/images/teams/graph-designer-cover.svg',
  },
  {
    id: 5,
    image: 'assets/images/teams/ui-ux-desighner.svg',
    name: 'Юлія',
    position: 'дизайнер (графічний, UI/UX)',
    cover_image: 'assets/images/teams/ui-ux-desighner-cover.svg',
  },

  {
    id: 6,
    image: 'assets/images/teams/graph-desighner-2.svg',
    name: 'Марка',
    position: 'графічний дизайнер',
    cover_image: 'assets/images/teams/graph-desighner-2-cover.svg',
  },

  {
    id: 7,
    image: 'assets/images/teams/content-manager.svg',
    name: 'Валерія',
    position: 'проджект-менеджер, стратег',
    cover_image: 'assets/images/teams/content-manager-cover.svg',
  },

  {
    id: 8,
    image: 'assets/images/teams/content-manager-2.svg',
    name: 'Антон',
    position: 'проджект-менеджер, стратег',
    cover_image: 'assets/images/teams/content-manager-2-cover.svg',
  },

  {
    id: 9,
    image: 'assets/images/teams/copywriter.svg',
    name: 'Анна',
    position: 'копірайтер',
    cover_image: 'assets/images/teams/copywriter-cover.svg',
  },

  {
    id: 10,
    image: 'assets/images/teams/stories-designer.svg',
    name: 'Христина',
    position: 'stories-дизайнер ',
    cover_image: 'assets/images/teams/stories-designer-cover.svg',
  },

  {
    id: 11,
    image: 'assets/images/teams/people-ops.svg',
    name: 'Катерина',
    position: 'people Ops',
    cover_image: 'assets/images/teams/people-ops-cover.svg',
  },

  {
    id: 12,
    image: 'assets/images/teams/project-manager-darya.svg',
    name: 'Дар’я',
    position: 'проджект-менеджер',
    cover_image: 'assets/images/teams/project-manager-darya-cover.svg',
  },

];
