interface GitHubEvent {
    type: string;

    repo: {
        name: string;
    };

    payload: {
        action?: string;
        ref_type?: string;
        commits?: unknown[];
    };
}

export function formatEvent(event: GitHubEvent): string {
    const repo = event.repo.name;

    switch (event.type) {
        case "PushEvent":
            return `Pushed commits to ${repo}`;

        case "WatchEvent":
            return `Starred ${repo}`;

        case "IssuesEvent":
            return `${event.payload.action ?? "Updated"} an issue in ${repo}`;

        case "PullRequestEvent":
            return `${event.payload.action ?? "Updated"} a pull request in ${repo}`;

        case "ForkEvent":
            return `Forked ${repo}`;

        case "CreateEvent":
            return `Created ${event.payload.ref_type ?? "resource"} in ${repo}`;

        default:
            return `Performed ${event.type} on ${repo}`;
    }
}