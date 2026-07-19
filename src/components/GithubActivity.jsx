import { useInView } from "../hooks";
import { Icon } from "./ui";
import { GITHUB } from "../data";

function RepoCard({ repo, index }) {
  const [ref, inView] = useInView();
  return (
    <a
      ref={ref}
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block bg-white/[0.02] border border-white/[0.08] hover:border-blue-500/40 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgba(59,130,246,0.15)] rounded-2xl p-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-white font-semibold">
          <Icon name="folder_code" className="!text-lg text-blue-400" />
          {repo.name}
        </div>
        <Icon
          name="north_east"
          className="!text-base text-slate-500 group-hover:text-blue-400 transition-colors"
        />
      </div>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">
        {repo.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {repo.tags.map((t) => (
          <span
            key={t}
            className="text-[11px] font-mono text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-md px-2 py-0.5"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function GithubActivity() {
  const [ref, inView] = useInView();
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 mb-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
            Open Source
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold font-['Poppins',sans-serif] text-white">
            GitHub activity
          </h2>
        </div>
        <a
          href={`https://github.com/${GITHUB.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-300 border border-blue-500/30 hover:border-blue-400 rounded-lg px-4 py-2.5 shrink-0 transition-colors"
        >
          <Icon name="code" className="!text-base" />@{GITHUB.username}
        </a>
      </div>

      <div
        ref={ref}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${GITHUB.username}&show_icons=true&hide_border=true&theme=dark&bg_color=00000000&title_color=60a5fa&icon_color=60a5fa&text_color=cbd5e1`}
          alt="GitHub stats"
          loading="lazy"
          className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.02]"
        />
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB.username}&layout=compact&hide_border=true&theme=dark&bg_color=00000000&title_color=60a5fa&text_color=cbd5e1`}
          alt="Most used languages"
          loading="lazy"
          className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.02]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {GITHUB.pinnedRepos.map((repo, i) => (
          <RepoCard key={repo.name} repo={repo} index={i} />
        ))}
      </div>
    </section>
  );
}
