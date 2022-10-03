// base body interface
// is inheritable
interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  heroInfo: string;
  role: string;
  heroImage: Image;
  name: string;
  profilePic: Image;
  heroButton1Text: string;
  button1Link: string;
  heroButton2Text: string;
  button2Link: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}

export interface Project extends SanityBody {
    title: string;
    _type: "project";
    slug: string;
    image: Image;
    summary: string;
    technologies: Technology[];
    linkToBuild: string;
    linkToRepo: string;
  }

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
