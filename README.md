# Scripting

## Session Log

### 2026-09-17

Scripting basics learned today:

- **`.slice(start, end)`** — non-mutating extraction on strings/arrays; `end` is exclusive, negative indices count from the end (e.g. `process.argv.slice(2)` to strip CLI args down to just the user-supplied ones)
- **`fs.writeFile(file, data, callback)`** — async file write; callback receives `err`, which must be checked explicitly (it isn't checked automatically)
- **`fs.existsSync(path)`** — sync check for whether a file exists
- **`fs.readdirSync(dir, { recursive: true })`** — recursive directory listing (Node 20.1+), useful for finding a file by name under a directory
- **`path.resolve(...)`** — turns a relative path into an absolute one
- **`import.meta.url` / `import.meta.dirname`** — ES module equivalents of CommonJS's `__filename`/`__dirname` (Node 20.11+ supports `import.meta.dirname` directly)
- **`node --env-file=.env`** (Node 20.6+) — loads a `.env` file into `process.env` without needing the `dotenv` package
- **`find . -name "<file>"`** — shell command to locate a file's path from the current directory

Also implemented a **CI pipeline for lint checks** using ESLint + GitHub Actions (`.github/workflows/lint.yml`), running `npm run lint` on every push/PR to `main`.
