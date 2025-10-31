import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Name of Website",
  description: "A lot of keywords for SEO",
  keywords: "about, company, mission, ai, saas",
  twitter: {
    card: "summary_large_image",
  },
};

export default function About() {
  return <div>About page</div>;
}
