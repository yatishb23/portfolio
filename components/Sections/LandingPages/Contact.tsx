import Link from "next/link";

export default function Collab() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-[15px] text-zinc-200 font-medium">
          Let&apos;s Connect
        </h2>
        <p className="text-[12px] text-zinc-500 leading-relaxed max-w-md">
          Always interested in new opportunities, collaborations, and
          conversations about technology and design.
        </p>
      </div>

      <a
        href="mailto:yatishbad232@gmail.com"
        className="w-fit connect-btn mt-2"
      >
        <span className="btn-prefix">@/</span> Collaborate with me
      </a>

      <div className="flex flex-wrap gap-2 mt-4">
        {[
          {
            name: "GitHub",
            handle: "yatishb23",
            url: "https://github.com/yatishb23",
            prefix: "gh/",
          },
          {
            name: "LinkedIn",
            handle: "yatish-badgujar",
            url: "https://linkedin.com/in/yatish-badgujar",
            prefix: "in/",
          },
          {
            name: "LeetCode",
            handle: "yatish_23",
            url: "https://leetcode.com/yatish_23",
            prefix: "lc/",
          },
        ].map((social) => (
          <Link
            key={social.name}
            href={social.url}
            target="_blank"
            className="connect-btn"
          >
            <span className="btn-prefix">{social.prefix}</span>
            {social.handle}
          </Link>
        ))}
      </div>
    </div>
  );
}
