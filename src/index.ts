import { getUserActivity } from "./github.js";
import { formatEvent } from "./formatter.js";

async function main() {
    const username = process.argv[2];

    if (!username) {
        console.log("Usage: github-activity <username>");
        process.exit(1);
    }

    try {
        console.log(`Recent activity for ${username}:\n`);

        const activity = await getUserActivity(username);

        for (const event of activity) {
            console.log(`- ${formatEvent(event)}`);
        }
    } catch (error) {
        console.error("Error:", (error as Error).message);
        process.exit(1);
    }
}

main();