import { useInView } from "../hooks";
import { Icon } from "./ui";
import { BLOG_POSTS } from "../data";

function PostCard({ post, index }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`bg-white/[0.03] border border-white/10 hover:border-blue-500/30 rounded-2xl p-7 flex flex-col transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-[11px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-2.5 py-1">
          {post.tag}
        </span>
        <span className="text-[11px] font-semibold text-slate-500">{post.status}</span>
      </div>
      <h3 className="text-white font-bold font-['Poppins',sans-serif] mb-3 leading-snug">
        {post.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6">{post.excerpt}</p>
      <div className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-slate-600">
        <Icon name="draft" className="!text-base" />
        Draft in progress
      </div>
    </div>
  );
}

export default function Blog() {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 mb-28">
      <div className="max-w-2xl mb-14">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
          Writing
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold font-['Poppins',sans-serif] text-white mb-4">
          Notes from the codebase
        </h2>
        <p className="text-slate-400 leading-relaxed">
          Longer write-ups on the real problems behind these projects — first posts landing soon.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post, i) => (
          <PostCard key={post.title} post={post} index={i} />
        ))}
      </div>
    </section>
  );
}
