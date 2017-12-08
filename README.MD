# Conference website for the 27 Rufford small grand conference


## Getting started

1. Install Hugo;
[howto](https://gohugo.io/getting-started/quick-start/#step-1-install-hugo)


2. Checkout the project
```git clone --recursive git@github.com:montenegrodolphinproject/conference.git```
Make sure to use the `--recursive` flasg to check out the submodules.

3. start hugo server locally;
```hugo server -D```


## Deploy
run deploy script;
```./deploy.sh```

The script makes a hugo production build in the `/public` folder. The code is committed on the submodule and pushed to github (github).
