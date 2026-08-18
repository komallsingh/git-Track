export async function getUserActivity(username: string) {
    const url = `https://api.github.com/users/${username}/events`;

    const response = await fetch(url, {
        headers: {
            "Accept": "application/vnd.github+json",
            "User-Agent": "gitrack-cli"
        }
    });

    if (response.status === 403) {
        throw new Error(
            "GitHub API rate limit exceeded. Please try again later."
        );
    }

    if (response.status === 404) {
        throw new Error(
            `GitHub user '${username}' was not found.`
        );
    }

    if (!response.ok) {
        throw new Error(
            `GitHub API returned ${response.status}`
        );
    }

    return await response.json();
}