import { getUserActivity } from "./github.js";

async function main() {
    const username = process.argv[2];

    if (!username) {
        console.log("Usage: github-activity <username>");
        process.exit(1);
    }

    try {
        console.log(`Fetching activity for: ${username}`);

        const activity = await getUserActivity(username);

        console.log(activity);
    } catch (error) {
        console.error("Error:", (error as Error).message);
        process.exit(1);
    }
}

main();