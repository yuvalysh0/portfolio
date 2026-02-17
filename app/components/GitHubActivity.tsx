"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { playfair } from "@/utils/fonts";

interface GitHubStats {
  publicRepos: number;
  followers: number;
  totalStars: number;
  contributions: number;
}

interface GitHubRepo {
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
  updatedAt: string;
}

const GitHubActivity = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const username = "yuvalysh0"; // Your GitHub username

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user stats
        const userResponse = await fetch(
          `https://api.github.com/users/${username}`,
        );
        const userData = await userResponse.json();

        // Fetch repos
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
        );
        const reposData = await reposResponse.json();

        // Calculate total stars
        const totalStars = reposData.reduce(
          (acc: number, repo: any) => acc + repo.stargazers_count,
          0,
        );

        setStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          totalStars,
          contributions: 500, // GitHub doesn't expose this via API, hardcode or use a service
        });

        setRepos(
          reposData.slice(0, 6).map((repo: any) => ({
            name: repo.name,
            description: repo.description || "No description available",
            url: repo.html_url,
            stars: repo.stargazers_count,
            language: repo.language || "Unknown",
            updatedAt: new Date(repo.updated_at).toLocaleDateString(),
          })),
        );

        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  return (
    <section
      className="relative py-16 md:py-24 px-6 md:px-10 overflow-hidden"
      id="github"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [-50, 0, -50],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Section Header */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px", amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className={`text-4xl md:text-6xl font-bold mb-4 ${playfair.className}`}
        >
          GitHub Activity.
        </h2>
        <p className="text-lg md:text-xl font-light mb-2">
          Building and contributing to open source
        </p>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline inline-flex items-center gap-2"
        >
          @{username}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </motion.div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <motion.div
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      ) : (
        <>
          {/* Stats Grid */}
          {stats && (
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px", amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <StatCard
                icon="📦"
                value={stats.publicRepos}
                label="Repositories"
                index={0}
              />
              <StatCard
                icon="⭐"
                value={stats.totalStars}
                label="Total Stars"
                index={1}
              />
              <StatCard
                icon="👥"
                value={stats.followers}
                label="Followers"
                index={2}
              />
              <StatCard
                icon="💚"
                value={stats.contributions}
                label="Contributions"
                index={3}
              />
            </motion.div>
          )}
        </>
      )}
    </section>
  );
};

const StatCard = ({
  icon,
  value,
  label,
  index,
}: {
  icon: string;
  value: number;
  label: string;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
      }}
    >
      <motion.div
        className="p-6 bg-base-200/50 backdrop-blur-sm border border-base-300 rounded-xl text-center h-full"
        whileHover={{ scale: 1.05, borderColor: "oklch(var(--p))" }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="text-4xl mb-2">{icon}</div>
        <div className="text-3xl font-bold text-primary mb-1">{value}+</div>
        <div className="text-sm text-base-content/70">{label}</div>
      </motion.div>
    </motion.div>
  );
};

const RepoCard = ({ repo, index }: { repo: GitHubRepo; index: number }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.1 });

  const languageColors: { [key: string]: string } = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    Java: "#b07219",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Vue: "#41b883",
    React: "#61dafb",
    Angular: "#dd0031",
  };

  return (
    <motion.a
      ref={ref}
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group block"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="p-6 bg-base-200/50 backdrop-blur-sm border border-base-300 rounded-xl h-full hover:border-primary transition-colors duration-300">
        <div className="flex items-start justify-between mb-3">
          <h4 className="text-lg font-bold group-hover:text-primary transition-colors">
            {repo.name}
          </h4>
          <div className="flex items-center gap-1 text-sm text-base-content/60">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {repo.stars}
          </div>
        </div>
        <p className="text-sm text-base-content/70 mb-4 line-clamp-2">
          {repo.description}
        </p>
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: languageColors[repo.language] || "#858585",
              }}
            />
            <span className="text-base-content/60">{repo.language}</span>
          </div>
          <span className="text-base-content/50">Updated {repo.updatedAt}</span>
        </div>
      </div>
    </motion.a>
  );
};

export default GitHubActivity;
