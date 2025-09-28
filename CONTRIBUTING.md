# Contributing Guide

Thank you for your interest in contributing!

## 1. Code of Conduct
Be respectful, constructive, and inclusive. Harassment or discrimination is not tolerated. (You can add a separate CODE_OF_CONDUCT.md later.)

## 2. How to Ask Questions
- General help: Open an issue with the label `question` (or use Discussions if enabled).
- Security issues: Do NOT open a public issue. Instead email the maintainer (add your email/contact here).

## 3. Ways to Contribute
- Report bugs
- Suggest features
- Improve documentation
- Refactor or simplify code
- Add or improve tests
- Improve developer tooling (lint, CI)
- Triage issues (confirm steps, add labels)

## 4. Project Setup (Example Workflow)
```bash
# 1. Fork repository on GitHub
# 2. Clone your fork
git clone https://github.com/<your-username>/<repo>.git
cd <repo>

# 3. Add upstream remote (original)
git remote add upstream https://github.com/<original-owner>/<repo>.git

# 4. Install dependencies (adjust to your stack)
# Example Node:
npm install
# OR Python:
# pip install -r requirements.txt

# 5. Run tests
npm test  # or appropriate command
```

To sync later:
```bash
git fetch upstream
git checkout main
git merge upstream/main
```

## 5. Opening an Issue
Before creating a new one:
- Search existing issues (avoid duplicates).
- For unclear ideas, open a feature request describing the problem first.

Provide:
- Environment (OS, versions)
- Steps to reproduce (if bug)
- Expected vs actual
- Logs / screenshots

Use the templates (Bug / Feature / Improvement).

## 6. Pull Request (PR) Workflow
```bash
git checkout -b feat/add-awesome-thing
# Make changes
git add .
git commit -m "feat: add awesome thing to improve X"
git push origin feat/add-awesome-thing
```

Open a PR:
- Keep it focused and small (prefer < 200 changed lines for early contributions)
- Reference issues: "Closes #12" or "Fixes #12"
- Fill the PR template completely

## 7. Coding Standards
- Follow existing style
- Run formatter / linter before committing
- No commented-out dead code
- Prefer clarity over clever tricks
- Use meaningful variable/function names
- Avoid new dependencies unless necessary (discuss first)

## 8. Commit Message Convention (Conventional Commits)
Format:
```
<type>(optional scope): <short description>
```
Types: feat, fix, docs, test, refactor, chore, perf, ci, style.

Examples:
```
fix(api): handle null session token
docs: clarify setup on Windows
test: add coverage for user expiration
```

## 9. Tests
- Add tests for new logic & bug fixes
- Ensure all tests pass locally
- Avoid flaky tests (random timing, external network)
- Keep/improve coverage where practical

## 10. Documentation
If user-facing behavior changes → update README or related docs.
Add inline comments for complex logic.

## 11. Review & Merge
1. All CI checks green
2. At least one maintainer approval (or configured policy)
3. Address requested changes
4. Squash merge preferred (clean history)

## 12. After Merge
- Celebrate!
- Ask for a suggested "next issue"
- Help others by reviewing simple PRs

## 13. Local Checklist Before Opening PR
- [ ] Tests pass
- [ ] Linter/formatter run
- [ ] Docs updated (if needed)
- [ ] PR template filled
- [ ] Issue referenced
- [ ] No secrets or sensitive data

## 14. FAQ (Quick Help)
Q: I pushed to the wrong branch.  
A: Create a new branch from it: `git checkout -b correct-branch`, push, then reset or ignore the original.

Q: Should I force push?  
A: Avoid unless cleaning history after review. If you do: comment why.

Q: Large feature?  
A: Open an issue first to discuss scope.

Thanks for contributing!