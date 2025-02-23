import { Miner } from "./helpers";

async function main() {
  const cookie = import.meta.env.COOKIE;
  const tags = import.meta.env.TAGS.split(',');
  const miner = new Miner(cookie);

  const username = "god";

  let isUpdated = false;
  let iteration = 0;

  console.log(`looking for: ${tags.map(tag => `${username}#${tag}`).join(", ")}`);
  process.stdout.write('\u0007');

  try {
    while (true) {
      const profile = await miner.getProfile();

      if (!isUpdated) {
        const currentTag = profile.displayName.split('#')[1];

        console.log(`${new Date().toLocaleString()}: ${(iteration++).toString().padStart(5, '0')} - ${username}#${currentTag}`);
        if (tags.includes(currentTag)) break;
      }

      await miner.changeDisplayName(`${username}${isUpdated ? '' : 'a'}`);
      isUpdated = !isUpdated;
    }
  } catch (e) {
    console.log(e);
  } finally {
    process.stdout.write('\u0007');
  }

  process.exit(0);
}

main();
