import { OWNER, PROJECTS, SITE, SOCIALS } from "@/data/site";

const PERSON_ID = `${SITE.url}/#person`;
const SITE_ID = `${SITE.url}/#website`;

export function buildStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: OWNER.fullName,
        jobTitle: OWNER.job,
        url: SITE.url,
        image: `${SITE.url}${OWNER.picture}`,
        description: SITE.description,
        sameAs: SOCIALS.map((s) => s.url),
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "California State University, East Bay",
        },
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "Web accessibility",
          "Technical SEO",
          "Web performance",
        ],
      },
      {
        "@type": "WebSite",
        "@id": SITE_ID,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        inLanguage: "en-US",
        publisher: { "@id": PERSON_ID },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE.url}/#profile`,
        url: SITE.url,
        mainEntity: { "@id": PERSON_ID },
        isPartOf: { "@id": SITE_ID },
      },
      {
        "@type": "ItemList",
        name: "Selected projects",
        itemListElement: PROJECTS.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CreativeWork",
            name: p.title,
            description: p.description,
            creator: { "@id": PERSON_ID },
            ...(p.websiteURL ? { url: p.websiteURL } : {}),
          },
        })),
      },
    ],
  };
}
