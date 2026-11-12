# News Summary

A small TypeScript tool that copies a daily world-news summary into the output folder.

- `main.ts` — reads `summary.txt` and writes it out as `entry.txt` in the output directory.
- `summary.txt` — the news summary itself (world news, Wednesday 11 November 2026).

Built as a make.fun task program: it reads from `MAKEFUN_INPUT_DIR` and writes to `MAKEFUN_OUTPUT_DIR`.
