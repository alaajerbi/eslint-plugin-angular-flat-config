
## Summary

This is a fork of EmmanuelDemey's [eslint-plugin-angular](https://github.com/EmmanuelDemey/eslint-plugin-angular), compatible with ESLint v9.0.0+.

All authorship rights are reserved to the original contributors.

## Context
When upgrading ESLint to version `^9.0.0`, ESLint configuration files must be updated to conform to the [new config system](https://eslint.org/blog/2022/08/new-config-system-part-2/) (AKA flat config). Most of the regularly maintained ESLint plugin packages have a flat config version that can be easily imported into ESLint config files. 

Unfortunately for legacy AngularJS applications that rely on EmmanuelDemey's `eslint-plugin-angular` package for linting, no flat config version was added (the original package's maintenance stopped 3 years ago).

This is a forked version of the original package that is compatible with ESLint's new flat config.
