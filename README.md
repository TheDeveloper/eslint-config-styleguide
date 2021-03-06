# Usage

In your project:

```bash
# use github package registry
cat > .npmrc <<EOF
@thedeveloper:registry=https://npm.pkg.github.com/thedeveloper
EOF

npm i -D \
  @thedeveloper/eslint-config-styleguide \
  eslint-config-airbnb-base \
  eslint-plugin-import \
  eslint
```

Create .eslintrc.yaml:

```yaml
env:
  node: true

parserOptions:
  ecmaVersion: 12

extends:
  - '@thedeveloper/eslint-config-styleguide'
```

Add `.vscode/settings.json` to auto fix errors:

```bash
mkdir -p .vscode && \
cat > .vscode/settings.json <<EOF
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
EOF
```
