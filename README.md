# Usage

In your project:

```bash
# use github package registry
cat > .npmrc <<EOF
@thedeveloper:registry=https://npm.pkg.github.com/thedeveloper
EOF

npm i -D \
  @thedeveloper/js-styleguide \
  eslint
```

Create .eslintrc.yaml:

```yaml
env:
  node: true

parserOptions:
  ecmaVersion: 12

extends:
  - '@thedeveloper/js-styleguide'
```
