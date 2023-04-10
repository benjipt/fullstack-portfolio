
export enum Section {
  projects = 'projects',
  about = 'about',
};

export type Project = {
  img: string;
  name: string;
  description: string;
  site?: string;
  github?: string;
  githubAPI?: string;
}
