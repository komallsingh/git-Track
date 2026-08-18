import "dotenv/config";

export async function getUserActivity(username: string) {
    const url = `https://api.github.com/users/${username}/events`;

    const token = process.env.GITHUB_TOKEN;

    const response = await fetch(url, {
        headers: {
            "Accept": "application/vnd.github+json",
            "User-Agent": "gitrack-cli",
            "Authorization": `Bearer ${token}`
        }
    });

    if (response.status === 403) {
        throw new Error("GitHub API rate limit exceeded.");
    }

    if (response.status === 404) {
        throw new Error(`GitHub user '${username}' was not found.`);
    }

    if (!response.ok) {
        const errorBody = await response.text();

        throw new Error(
            `GitHub API returned ${response.status}: ${errorBody}`
        );
    }

    return await response.json();
}