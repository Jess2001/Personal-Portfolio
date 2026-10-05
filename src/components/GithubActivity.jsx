import { Icon } from "./ui";
import { useTheme } from "../hooks";
import { GITHUB } from "../data";

function RepoRow({ repo }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border-t border-border pt-5"
    >
      <div className="flex items-center justify-between gap-3 mb-2">
        <span className="font-semibold text-ink text-[15px] group-hover:text-accent transition-colors">
          {repo.name}
        </span>
        <Icon
          name="external"
          size={14}
          className="text-ink-soft group-hover:text-accent transition-colors shrink-0"
        />
      </div>
      <p className="text-ink-soft text-[14px] leading-relaxed mb-3">
        {repo.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {repo.tags.map((t) => (
          <span
            key={t}
            className="font-mono text-[12px] text-ink-soft border border-border rounded-md px-2 py-0.5"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function GithubActivity() {
  const [theme] = useTheme();
  const isDark = theme === "dark";

  const statsParams = isDark
    ? "bg_color=00000000&title_color=f5f5f3&icon_color=60a5fa&text_color=a3a3a0&border_color=00000000"
    : "bg_color=00000000&title_color=171717&icon_color=2563eb&text_color=5f6368&border_color=00000000";

  return (
    <section className="w-full max-w-content mx-auto px-6 md:px-8 py-20 md:py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
        <div className="max-w-xl">
          <h2 className="text-[28px] md:text-[34px] font-semibold text-ink mb-3 tracking-[-0.01em]">
            GitHub activity
          </h2>
          <p className="text-ink-soft text-[15px] leading-relaxed">
            Live stats and a few pinned repositories , the rest is on my
            profile.
          </p>
        </div>
        <a
          href={`https://github.com/${GITHUB.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[14.5px] font-medium text-ink border border-border hover:border-accent rounded-lg px-4 py-2.5 shrink-0 transition-colors whitespace-nowrap"
        >
          <Icon name="github" size={15} />@{GITHUB.username}
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-14">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${GITHUB.username}&show_icons=true&hide_border=true&${statsParams}`}
          alt="GitHub stats"
          loading="lazy"
          className="w-full rounded-lg border border-border"
        />
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB.username}&layout=compact&hide_border=true&${statsParams}`}
          alt="Most used languages"
          loading="lazy"
          className="w-full rounded-lg border border-border"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
        {GITHUB.pinnedRepos.map((repo) => (
          <RepoRow key={repo.name} repo={repo} />
        ))}
      </div>
    </section>
  );
}
