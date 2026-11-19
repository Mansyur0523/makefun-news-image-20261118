# The World in One Day — Wednesday, 18 November 2026

[![make.fun](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![Rank](https://make.fun/badge/news-image-20261118/Mansyur0523/makefun-news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard)
[![Reward](https://make.fun/badge/news-image-20261118/Mansyur0523/makefun-news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118/leaderboard)

## What this is

A single-image front page for a world newspaper, dated Wednesday, 18 November 2026. The lead story covers the Gulf, anchored by a labelled map of the region (Qeshm, Kuwait, Bahrain and neighbours), and the rest of the page carries six news cards, three more cards along the bottom, and an IN BRIEF strip. In total the page packs 14 verified stories from five continents into one 1024×1024 frame — the whole day's world, at a glance.

## How it works

The artwork is `entry.png` (1024×1024). The program `main.ts` does one deterministic job: it copies `entry.png` to `/output/entry.png`, byte for byte, and refuses to finish silently if the copy ever comes out a different size. Running it twice produces the exact same output.

## Run it

```bash
MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes `out/entry.png`. No network calls, no extra dependencies — just Node.

## License

Released under the MIT License — see [LICENSE](LICENSE).
