export interface Contributor {
  id: string;
  name: string;
  role: string;
  department?: string;
  image?: string;
  socials?: { name: string; url: string }[];
}

export interface DepartmentGroup {
  departmentName: string;
  contributors: Contributor[];
}

const contributorsData: DepartmentGroup[] = [
  {
    departmentName: "Leadership",
    contributors: [
      {
        id: "john-paul-curada",
        name: "John Paul Mercado Curada",
        role: "Solution Architect & Project Lead | Co-Captain and Technology Director",
        department: "Leadership",
      },
    ],
  },
  {
    departmentName: "UI/UX Developers",
    contributors: [
      {
        id: "florence-cansino",
        name: "Florence Lee Francisco Cansino",
        role: "Creatives Director - Design Lead for SBD LMS",
        department: "UI/UX Developers",
      },
      {
        id: "michael-racelis",
        name: "Michael Richmond Visda Racelis",
        role: "UI/UX Developer",
        department: "UI/UX Developers",
      },
    ],
  },
  {
    departmentName: "Frontend Developers",
    contributors: [
      {
        id: "gerald-berongoy",
        name: "Gerald Berongoy",
        role: "Frontend Lead - SBD LMS Major Contributor",
        department: "Frontend Developers",
      },
      {
        id: "randall-graida",
        name: "Randall Graida",
        role: "Frontend Developer",
        department: "Frontend Developers",
      },
      {
        id: "john-gavin-deposoy",
        name: "John Gavin Deposoy",
        role: "Frontend Developer",
        department: "Frontend Developers",
      },
      {
        id: "marc-castillo",
        name: "Marc Castillo",
        role: "Frontend Developer",
        department: "Frontend Developers",
      },
      {
        id: "redd-lawrence-reyes",
        name: "Redd Lawrence Reyes",
        role: "Frontend Developer",
        department: "Frontend Developers",
      },
      {
        id: "jhondenard-firme",
        name: "JhonDenard Firme",
        role: "Frontend Developer",
        department: "Frontend Developers",
      },
      {
        id: "earl-clyde-banez",
        name: "Earl Clyde Bañez",
        role: "Frontend Developer",
        department: "Frontend Developers",
        image: "/contributors/frontend-earl.png",
      },
      {
        id: "john-michael-dumalo",
        name: "John Michael Dumalo",
        role: "Frontend Developer",
        department: "Frontend Developers",
      },
      {
        id: "buhawie-santos",
        name: "Buhawie Santos",
        role: "Frontend Developer",
        department: "Frontend Developers",
      },
    ],
  },
  {
    departmentName: "Backend Developers",
    contributors: [
      {
        id: "sean-patrick-rada",
        name: "Sean Patrick Rada",
        role: "Backend Developer",
        department: "Backend Developers",
      },
      {
        id: "sean-paul-monton",
        name: "Sean Paul Monton",
        role: "Backend Developer",
        department: "Backend Developers",
      },
      {
        id: "john-ferry-lagman",
        name: "John Ferry Lagman",
        role: "Backend Developer",
        department: "Backend Developers",
      },
      {
        id: "jen-patrick-nataba",
        name: "Jen Patrick Nataba",
        role: "Backend Developer",
        department: "Backend Developers",
      },
      {
        id: "john-lexter-reyes",
        name: "John Lexter Reyes",
        role: "Backend Developer",
        department: "Backend Developers",
      },
      {
        id: "gabriel-andre-magtanong",
        name: "Gabriel Andre Magtanong",
        role: "Backend Developer",
        department: "Backend Developers",
      },
      {
        id: "xylon-arroyo",
        name: "Xylon Arroyo",
        role: "Backend Developer",
        department: "Backend Developers",
      },
      {
        id: "jhered-miguel-republica",
        name: "Jhered Miguel Republica",
        role: "Backend Developer",
        department: "Backend Developers",
      },
    ],
  },
];

export default contributorsData;
