interface SocialLink {
    name: string;
    url: string;
  }
  
  export default function Reach() {
    const socialLinks: SocialLink[] = [
      {
        name: "github",
        url: "https://github.com/yatishb23",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/yatish-badgujar-888b35253/",
      },
      {
        name: "say hello",
        url: "mailto:yatishbad232@gmail.com",
      }
    ];
  
    return (
      <div className="flex flex-wrap gap-2">
        {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 bg-neutral-700 dark:bg-neutral-800 text-neutral-100 
               rounded-full text-sm sm:text-md sm:px-4 sm:py-2 hover:bg-neutral-800 
               dark:hover:bg-neutral-700 transition-colors duration-200"
        >
          {link.name}
        </a>
        ))}
      </div>
    );
  }