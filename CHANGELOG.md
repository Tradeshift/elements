# Change Log

All notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.36.3](https://github.com/Tradeshift/elements/compare/v0.36.1...v0.36.3) (2022-04-06)

### Bug Fixes

- fix happo stories ([c4479ed](https://github.com/Tradeshift/elements/commit/c4479ed2678960e5249db5e4fa90ca5a32db8a49))
- focus on button after template rendered ([cd09e1c](https://github.com/Tradeshift/elements/commit/cd09e1cc86e2e0daf144f04361532c78c0501a44))
- **overlay:** considers scroll position when calculating vertical position ([986ea92](https://github.com/Tradeshift/elements/commit/986ea92bfec0d014c4fe7dcd93488760944578af))
- **select:** positions select overlay from bottom up if it opens upwards ([4ae5492](https://github.com/Tradeshift/elements/commit/4ae5492bbe81511b28760b47887d7ee8d29e30cd))

## [0.36.2](https://github.com/Tradeshift/elements/compare/v0.36.1...v0.36.2) (2022-04-06)

### Bug Fixes

- fix happo stories ([c4479ed](https://github.com/Tradeshift/elements/commit/c4479ed2678960e5249db5e4fa90ca5a32db8a49))
- focus on button after template rendered ([cd09e1c](https://github.com/Tradeshift/elements/commit/cd09e1cc86e2e0daf144f04361532c78c0501a44))
- **overlay:** considers scroll position when calculating vertical position ([986ea92](https://github.com/Tradeshift/elements/commit/986ea92bfec0d014c4fe7dcd93488760944578af))
- **select:** positions select overlay from bottom up if it opens upwards ([4ae5492](https://github.com/Tradeshift/elements/commit/4ae5492bbe81511b28760b47887d7ee8d29e30cd))

## [0.36.1](https://github.com/Tradeshift/elements/compare/v0.36.0...v0.36.1) (2022-03-11)

**Note:** Version bump only for package tradeshift-elements

# [0.36.0](https://github.com/Tradeshift/elements/compare/v0.35.0...v0.36.0) (2022-03-10)

### Bug Fixes

- **button:** fixes missing/broken focus state styling ([fab2966](https://github.com/Tradeshift/elements/commit/fab29668549072dfd262dac651be557094c67bfe))
- **radio-group:** adds back missing/broken hover and active state styling ([b9bc7fd](https://github.com/Tradeshift/elements/commit/b9bc7fd5823c0ba1165cbaeac1682236f3c73886))

### Features

- **button-group:** peaa-885 button-group support horizontal/inline mode ([f420075](https://github.com/Tradeshift/elements/commit/f420075efe4f710fdc2c9183b4f0a531c2e71810))
- **dialog:** adds notification options to dialog element ([da64864](https://github.com/Tradeshift/elements/commit/da64864a8703a1620f1273307bb7938eee9a60f6))
- **dialog:** makes it possible to make dialogs non-dismissable ([cc89bf7](https://github.com/Tradeshift/elements/commit/cc89bf778d2384e334311fc225dfe6d0e651eab2))
- **dialog:** removes noButtons prop and removes other unnecessary code ([aaf3582](https://github.com/Tradeshift/elements/commit/aaf358264c63132e0077dedccd595d9af8ea3459))

### Reverts

- Revert "chore(release): v0.36.0" ([c4da28a](https://github.com/Tradeshift/elements/commit/c4da28aaeda820de7f0754d6259953163514e110))

# [0.35.0](https://github.com/Tradeshift/elements/compare/v0.34.0...v0.35.0) (2022-03-01)

### Bug Fixes

- **tag:** fixes padding issue in locked and deletable items; also cleans up code a bit ([411721f](https://github.com/Tradeshift/elements/commit/411721fda92a8067d30d97d98b3daacee659cade))
- removes import of non-existing export in plop template for auto-generating elements ([91203d6](https://github.com/Tradeshift/elements/commit/91203d63ce9788d7296bf866611eddc70efe5423))
- **select:** do not set input value for multi select and no apply ([b5abd21](https://github.com/Tradeshift/elements/commit/b5abd2129c38e464a719f08b6b7bdaa8599635e6))
- **select:** peaa-941 current selection clears on search input ([15b80ca](https://github.com/Tradeshift/elements/commit/15b80caaa96ace990e9616a317492c5d74397258))
- **select:** show the `View selection` button in multi select with no apply ([c70c4f6](https://github.com/Tradeshift/elements/commit/c70c4f606e9b0548235e6ab539ed124acaa6fce3))

### Features

- adds ts-tag element ([ae9a078](https://github.com/Tradeshift/elements/commit/ae9a078cfd3f57fc030374f068edf3879b92a758))
- **select:** add case-sensitive filtering to select component ([ee8182f](https://github.com/Tradeshift/elements/commit/ee8182f4ca559e2815d6ee4e54f638e20b528dec))
- **select:** add custom filtering to select component ([690abf8](https://github.com/Tradeshift/elements/commit/690abf8ff1cd4164dcfead0d33e1d49c0f934cab))

### Reverts

- Revert "chore(release): v0.35.0" ([e1d235c](https://github.com/Tradeshift/elements/commit/e1d235cf73f262b34a5e7ddeb09e6f06619d2c41))

# [0.34.0](https://github.com/Tradeshift/elements/compare/v0.33.8...v0.34.0) (2022-02-14)

### Bug Fixes

- remove closeOverlay function reference from select-like components when overlay closed ([de84831](https://github.com/Tradeshift/elements/commit/de84831c3a5b87d6938bb30be302657cd4c9ddd4))
- update an event description to reflect a new trigger logic ([e17d42d](https://github.com/Tradeshift/elements/commit/e17d42d518bf813f2786ae9e716e5d8be7757e11))
- **storybook:** fix missing notes for tabs, tab and progress-bar ([caca453](https://github.com/Tradeshift/elements/commit/caca4530b2fc43654da2beca32ff2b978a01b504))

### Features

- [PEAA-593] add search suggestions to a search component ([3690719](https://github.com/Tradeshift/elements/commit/36907194bf7b7ab0c9d0f6e748299d8c32d995b8))

## [0.33.8](https://github.com/Tradeshift/elements/compare/v0.33.7...v0.33.8) (2022-01-27)

### Bug Fixes

- changed the array type in d.ts files from '[]' to 'any[]' ([e6a53dd](https://github.com/Tradeshift/elements/commit/e6a53dd323fab9e07479bdd7572e8b9d66d063a5))

## [0.33.7](https://github.com/Tradeshift/elements/compare/v0.33.6...v0.33.7) (2022-01-25)

**Note:** Version bump only for package tradeshift-elements

## [0.33.6](https://github.com/Tradeshift/elements/compare/v0.33.5...v0.33.6) (2022-01-24)

### Bug Fixes

- add missing types for new components and fix new component template to add them by default ([c491ca8](https://github.com/Tradeshift/elements/commit/c491ca870b5c89fad821757ea0a20a0bf4a50091))

## [0.33.5](https://github.com/Tradeshift/elements/compare/v0.33.3...v0.33.5) (2022-01-24)

### Bug Fixes

- updates position and alignment calculation of action-select dropout ([4275e56](https://github.com/Tradeshift/elements/commit/4275e567933ef5e18bf125c4aef780b3730828b3))

## [0.33.4](https://github.com/Tradeshift/elements/compare/v0.33.3...v0.33.4) (2022-01-24)

### Bug Fixes

- updates position and alignment calculation of action-select dropout ([4275e56](https://github.com/Tradeshift/elements/commit/4275e567933ef5e18bf125c4aef780b3730828b3))

## [0.33.3](https://github.com/Tradeshift/elements/compare/v0.33.2...v0.33.3) (2022-01-19)

### Bug Fixes

- **action-select:** remove background color ([78a8fb8](https://github.com/Tradeshift/elements/commit/78a8fb879f9c944f19e2e8a56470af626b11cf7e))

## [0.33.2](https://github.com/Tradeshift/elements/compare/v0.33.1...v0.33.2) (2022-01-17)

### Bug Fixes

- fix the react types import ([dbb0ac4](https://github.com/Tradeshift/elements/commit/dbb0ac43f232e91d34781dfac54329307d23fbe5))

## [0.33.1](https://github.com/Tradeshift/elements/compare/v0.33.0...v0.33.1) (2022-01-17)

### Bug Fixes

- fix package-lock file ([e821aeb](https://github.com/Tradeshift/elements/commit/e821aebc687731a5ff8a1cc4d875259cb9f36d56))

# [0.33.0](https://github.com/Tradeshift/elements/compare/v0.32.0...v0.33.0) (2022-01-17)

### Features

- [PEAA-851] generate react-types for each component ([b9eb4a5](https://github.com/Tradeshift/elements/commit/b9eb4a5d70442c091350ff899174f54d1f711aad))

# [0.32.0](https://github.com/Tradeshift/elements/compare/v0.31.1...v0.32.0) (2022-01-10)

### Features

- **ts-tabs:** add id property to the tab button ([8e7656c](https://github.com/Tradeshift/elements/commit/8e7656c2de4fa7543b7b0f6bf429e687e22288f6))
- [PEAA-851] add an autogeneration of types for elements ([ba15ab6](https://github.com/Tradeshift/elements/commit/ba15ab68bafd40d9210886a5b527180c113c3712))

## [0.31.1](https://github.com/Tradeshift/elements/compare/v0.31.0...v0.31.1) (2021-11-03)

**Note:** Version bump only for package tradeshift-elements

# [0.31.0](https://github.com/Tradeshift/elements/compare/v0.30.0...v0.31.0) (2021-11-03)

### Bug Fixes

- **action-select:** remove empty space to be aligned center vertically ([edf576f](https://github.com/Tradeshift/elements/commit/edf576faaf5fcf9deec74ba7f6b0a26b0f35dce9))
- **date-picker:** update date-picker story translations ([c0ce771](https://github.com/Tradeshift/elements/commit/c0ce7719ea698c8a2b23e8dd1207fe6eb54c9ef5))
- **deps:** add npm-force-resolution to preinstall to fix dependabot vulns ([ef657a8](https://github.com/Tradeshift/elements/commit/ef657a8247e21fdb7169a7bce7a462e988759518))

### Features

- **ts-board:** [peaa-755] add actions-header slot ([fb814e2](https://github.com/Tradeshift/elements/commit/fb814e27d3578811f1f3b09a5436ea438cbb8dc2))

# [0.30.0](https://github.com/Tradeshift/elements/compare/v0.29.1...v0.30.0) (2021-10-05)

### Features

- **date-picker:** add date-picker component ([cdc6f9d](https://github.com/Tradeshift/elements/commit/cdc6f9dd4cdc891532ab0185c8a722aac63deb4c))

## [0.29.1](https://github.com/Tradeshift/elements/compare/v0.29.0...v0.29.1) (2021-09-28)

### Bug Fixes

- **select:** no-apply-button attribute wrongly set on select-menu ([caeafdf](https://github.com/Tradeshift/elements/commit/caeafdfcd5d33822875e9819c36ca7d689df07dd))

# [0.29.0](https://github.com/Tradeshift/elements/compare/v0.28.0...v0.29.0) (2021-09-23)

### Bug Fixes

- **action-select:** action-select-click event not including the selected action id ([68c181e](https://github.com/Tradeshift/elements/commit/68c181e309c1d7ab0bc4d81db4e17304d883c822))

### Features

- **select:** (PDV-1405) select items without confirmation apply button ([d6d74bc](https://github.com/Tradeshift/elements/commit/d6d74bc434e7e26ca8be6bbc76cf6852803e85b0))

# [0.28.0](https://github.com/Tradeshift/elements/compare/v0.27.6...v0.28.0) (2021-09-10)

### Features

- add action-select component ([d1151f9](https://github.com/Tradeshift/elements/commit/d1151f993212fd628a243609b519578ce7c1e656))
- add overlay component ([fc2d4af](https://github.com/Tradeshift/elements/commit/fc2d4af0f40997dead51fc2cb23098f1ee425af4))
- add the 'more' icon ([28b3ffb](https://github.com/Tradeshift/elements/commit/28b3ffb969e2a27555ec73c3bb5e516d1baebc83))
- move the dropdown logic of select to select-menu and use the overlay to render ([6720af1](https://github.com/Tradeshift/elements/commit/6720af18af7eb2dc17074cf9097d11ec84a51243))

## [0.27.6](https://github.com/Tradeshift/elements/compare/v0.27.5...v0.27.6) (2021-08-10)

### Bug Fixes

- fixed incorrectly displayed value in a select component when a selection changed in property ([6157eca](https://github.com/Tradeshift/elements/commit/6157eca851c2d77fd40bfd3195f0803e8ce71978))

## [0.27.5](https://github.com/Tradeshift/elements/compare/v0.27.4...v0.27.5) (2021-08-04)

### Bug Fixes

- **select:** [PEAA-632] update select documentation and show it in storybook ([9fea7c7](https://github.com/Tradeshift/elements/commit/9fea7c734e649c7d3c58825e77ab4b616aca2869))

## [0.27.4](https://github.com/Tradeshift/elements/compare/v0.27.2...v0.27.4) (2021-07-28)

### Bug Fixes

- **select:** make search in a select case-insensitive ([b8889c2](https://github.com/Tradeshift/elements/commit/b8889c2529796305095e3f08a166961f3c621b41))

## [0.27.3](https://github.com/Tradeshift/elements/compare/v0.27.2...v0.27.3) (2021-07-26)

### Bug Fixes

- **select:** make search in a select case-insensitive ([b8889c2](https://github.com/Tradeshift/elements/commit/b8889c2529796305095e3f08a166961f3c621b41))
