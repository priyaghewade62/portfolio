export type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
};

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch('https://api.github.com/users/PRIYAGHEWADE/repos?per_page=6&sort=updated', {
      next: { revalidate: 3600 }
    });
    if (!response.ok) {
      throw new Error('GitHub fetch failed');
    }
    const data = (await response.json()) as GitHubRepo[];
    return data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      html_url: repo.html_url,
      description: repo.description,
      language: repo.language,
      stargazers_count: repo.stargazers_count
    }));
  } catch (error) {
    return [];
  }
}
