# The World in One Day — Wednesday, 18 November 2026

[![make.fun](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/Mansyur0523/makefun-news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard)
[![reward](https://make.fun/badge/news-image-20261118/Mansyur0523/makefun-news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118/leaderboard)

Entry for the make.fun competition `news-image-20261118`: one image that
sums up the world's news of Wednesday 18 November 2026.

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. The image is a classic broadsheet front page —
masthead with the date, a labelled map of the Gulf lead story (US strikes
on IRGC missile sites at Qeshm; Iranian drone retaliation toward Kuwait
and Bahrain), six illustrated story cards (Xi–Putin in Shenzhen, the Kerch
Bridge strike, Peltola's Alaska Senate win, the EU's €45bn Ukraine loan
proposal, Nvidia's record $115.8bn quarter, the Congo Ebola outbreak),
three lower cards (Voyager 1 at one light-day, Cyclone Xavier, the US
losing measles-free status), an IN BRIEF strip, and a source footer —
14 verified stories from five continents. No network is used; the output
is fully deterministic (identical sha256 on every run).

Run it:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
