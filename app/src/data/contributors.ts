export interface Contributor {
  id: string;
  name: string;
  role: string;
  department?: string;
  image?: string;
  bio?: string;
  github?: string;
  linkedin?: string;
  socials?: { name: string; url: string }[];
}

export interface DepartmentGroup {
  departmentName: string;
  contributors: Contributor[];
}

const contributorsData: DepartmentGroup[] = [
  {
    departmentName: "Project Leads",
    contributors: [
      {
        id: "john-paul-curada",
        name: "John Paul Curada",
        role: "Web Operations Lead",
        department: "Project Leads",
        image: "https://avatars.githubusercontent.com/u/84607933?v=4",
        github: "https://github.com/JpCurada",
        linkedin: "https://www.linkedin.com/in/jpcurada",
        socials: [
          { name: "Facebook", url: "https://www.facebook.com/jp.curada.3" },
          { name: "Instagram", url: "https://www.instagram.com/jpcurada_" },
        ],
      },
      {
        id: "gerald-berongoy",
        name: "Gerald Berongoy",
        role: "Frontend Lead",
        department: "Project Leads",
        image: "https://avatars.githubusercontent.com/u/149705711?v=4",
        github: "https://github.com/geraldsberongoy",
        linkedin: "https://www.linkedin.com/in/geraldberongoy",
        socials: [
          { name: "Facebook", url: "https://www.facebook.com/gerald.berongoy0904" },
          { name: "Instagram", url: "https://www.instagram.com/g333rald" },
        ],
      },
      {
        id: "geinel-dungao",
        name: "Geinel Dungao",
        role: "Technical Project Manager",
        department: "Project Leads",
        image: "https://avatars.githubusercontent.com/u/181841371?v=4",
        github: "https://github.com/wolfsenberg",
        linkedin: "https://www.linkedin.com/in/geineldungao",
        socials: [
          { name: "Facebook", url: "https://www.facebook.com/gein3ru" },
        ],
      },
    ],
  },
  {
    departmentName: "UI/UX Developers",
    contributors: [
      {
        id: "jasmin-ivy-fedilo",
        name: "Jasmin Ivy Fedilo",
        role: "UI/UX Developer",
        department: "UI/UX Developers",
        image: "https://avatars.githubusercontent.com/u/100293312?v=4",
        socials: [
          { name: "Facebook", url: "https://www.facebook.com/CantStopHuggingTrees" },
          { name: "LinkedIn", url: "https://www.linkedin.com/me" },
        ],
      },
      {
        id: "alfred-joshua-palpal-latoc",
        name: "Alfred Joshua Palpal-Latoc",
        role: "UI/UX Developer",
        department: "UI/UX Developers",
        linkedin: "https://www.linkedin.com/in/ajipal",
        socials: [
          { name: "Facebook", url: "https://www.facebook.com/share/1AutgwLTnH" },
        ],
      },
      {
        id: "charles-lucas",
        name: "Charles Lucas",
        role: "UI/UX Developer",
        department: "UI/UX Developers",
        image: "https://avatars.githubusercontent.com/u/143716638?v=4",
        github: "https://github.com/charlesczar",
        linkedin: "https://www.linkedin.com/in/charles-lucas-0449b428a",
        socials: [
          { name: "Facebook", url: "https://www.facebook.com/charleshehe9" },
          { name: "Instagram", url: "https://www.instagram.com/czarthings" },
        ],
      },
    ],
  },
  {
    departmentName: "Frontend Developers",
    contributors: [
      {
        id: "redd-lawrence-reyes",
        name: "Redd Lawrence Reyes",
        role: "Frontend Developer",
        department: "Frontend Developers",
      },
      {
        id: "john-michael-dumlao",
        name: "John Michael Dumlao",
        role: "Frontend Developer",
        department: "Frontend Developers",
      },
      {
        id: "earl-clyde-banez",
        name: "Earl Clyde Bañez",
        role: "Frontend Developer",
        department: "Frontend Developers",
        image: "https://avatars.githubusercontent.com/u/155219849?v=4",
        github: "https://github.com/EarlClydeeee",
        linkedin: "https://l.facebook.com/l.php",
        socials: [
          { name: "Facebook", url: "https://www.facebook.com/EarlClydeqt" },
          { name: "Instagram", url: "https://www.instagram.com/earl_cly" },
        ],
      },
      {
        id: "john-alejandro-de-vera",
        name: "John Alejandro De Vera",
        role: "Frontend Developer",
        department: "Frontend Developers",
      },
      {
        id: "randall-graida",
        name: "Randall Graida",
        role: "Frontend Developer",
        department: "Frontend Developers",
        image: "https://avatars.githubusercontent.com/u/179570333?v=4",
        github: "https://github.com/RandallGraida",
        socials: [
          { name: "Facebook", url: "https://www.facebook.com/carlosrandall.graida" },
          { name: "LinkedIn", url: "https://www.linkedin.com/feed" },
        ],
      },
    ],
  },
];

export default contributorsData;
