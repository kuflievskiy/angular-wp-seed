// The file for the current environment will overwrite this one during build.
// Different environments can be found in ./environment.{dev|prod}.ts, and
// you can create your own and use it with the --env flag.
// The build system defaults to the dev environment.

export const environment = {
    production: false,
    WPAPI:{
        endpoint: 'http://test.kuf.hulk.nixsolutions.com/wp-json/',
        // This assumes you are using basic auth, as described further below
        username: 'username',
        password: 'password'
    }
};