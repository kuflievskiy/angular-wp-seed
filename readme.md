# Angular WordPress Seed Project

This project is based on <a href="https://github.com/angular/angular" target="_blank" title="Angular 2">Angular 2</a> (frontend) and <a href="https://github.com/WordPress/WordPress" target="_blank" title="WordPress">WordPress</a> (backend).

## Solution stack
<a href="https://github.com/WordPress/WordPress">![WordPress Logo](https://github.com/WordPress/WordPress/blob/master/wp-includes/images/w-logo-blue.png)</a>
<a href="https://github.com/angular/angular">![Angular2 Logo](https://github.com/angular/angular.io/blob/master/public/resources/images/logos/angular2/angular-logo-banner.png)</a>
<a href="https://github.com/twbs/bootstrap"><img src="http://getbootstrap.com/assets/brand/bootstrap-solid.svg" height="80" width="80" alt="Twitter Bootstrap"></a>

## WordPress site requirements (backend configuration)
You should have installed WordPress site as a backend application part with these plugins installed : 
- <a href="https://github.com/WP-API/WP-API" target="_blank" title="WP REST API v2.0 (WP-API)">WP REST API v2.0 (WP-API)</a>
- <a href="https://github.com/WP-API/Basic-Auth" target="_blank" title="Basic Authentication handler">Basic Authentication handler</a>

## How to set up project

```ssh
mkdir angular-wp-seed
cd angular-wp-seed
git clone https://github.com/kuflievskiy/angular-wp-seed.git .
npm install
npm start
```

## Contributing is appreciate
You can help if you : 
- send pull-request (it's most appreciated)
- send patch (as a real WordPress developer)
```git
git config --global diff.noprefix true

#20425 - issue ID
git diff --no-prefix > ~/#20425_updated_docblocks.diff

# Apply patch
patch -p0 < ~/#20425_updated_docblocks.diff
```
- create an issue with bug/proposition

## License
- The MIT License is a permissive license that is short and to the point. It lets people do anything they want with your code as long as they provide attribution back to you and don't hold you liable.