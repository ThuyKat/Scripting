# Scripting

## Session Log

### 2026-09-17

Scripting basics learned today:

- **`fs.readFile(file, encoding, callback)`** — async file read; callback receives `(err, data)`
- **`fs.writeFile(file, data, callback)`** — async file write; callback receives `err`, which must be checked explicitly (it isn't checked automatically)
- **`new Date().toString()`** — must instantiate with `new Date()` before calling `.toString()`; `Date.toString()` (no `new`) returns the constructor's source code, not a timestamp
- **`import.meta.dirname`** — ES module equivalent of CommonJS's `__dirname` (Node 20.11+)
- **`path.join([...paths])`** — joins path segments using the platform-specific separator
- **`path.dirname(path)`** / **`path.basename(path)`** / **`path.extname(path)`** — directory name, file name, and file extension of a path
- **`path.parse(path)`** — breaks a path into `{ dir, root, base, name, ext }`
- **`dotenv.config()`** — loads `.env` into `process.env`
- **`process.argv.slice(2)`** — strips the node path and script path off `process.argv`, leaving just the CLI args the user passed in

Also implemented a **CI pipeline for lint checks** using ESLint + GitHub Actions (`.github/workflows/lint.yml`), running `npm run lint` on every push/PR to `main`.

#### Additional notes

- **JSDoc**: JS has no built-in docstring like Python's `"""..."""`; the closest is a `/** ... */` block comment with `@param`/`@returns` tags that tools like VS Code can parse for hover docs.
- **Finding a file's path**: from the shell, `find . -name "<file>"` (or `find "$(pwd)" -name "<file>"` for an absolute path, or `realpath <file>`). In Node, `path.resolve('<file>')` for a known relative path, or `fs.readdirSync(dir, { recursive: true })` (Node 20.1+) to search recursively.
- **`.slice(start, end)`** (general): non-mutating extraction on strings/arrays; `end` is exclusive, negative indices count from the end, out-of-range indices are clamped rather than erroring.
- **Loading `.env`**: either the `dotenv` package (`dotenv.config()`, used in this script) or, dependency-free, `node --env-file=.env` (Node 20.6+).
- **`.gitignore`**: created manually, or generated from a template via `curl -sL https://www.toptal.com/developers/gitignore/api/node > .gitignore`.
- Added `.github/PULL_REQUEST_TEMPLATE.md` so GitHub auto-populates new PR descriptions.
