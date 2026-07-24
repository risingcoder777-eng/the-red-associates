export interface ExpertiseArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  publishedDate: string;
  readingTime: string;
  url: string;
  featured?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface ContactInfo {
  address: string[];
  phones: string[];
  emails: string[];
  hours: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface CoreValue {
  icon: string;
  title: string;
  description: string;
}
