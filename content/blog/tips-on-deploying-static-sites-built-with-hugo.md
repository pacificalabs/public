+++
author = "Pacifica Labs"
title = "How-To-Guide: Publish your Hugo-built static site online."
date = "2021-07-22"
description = "Follow these straightforward steps to deploy your static site built with Hugo for free."
whyitmatters = "Though hosting a free static site sounds tempting, deployment version tracking & configuration can be fraught with unforeseen difficulties."
tags = [
    "hugo",
    "static-site",
    "developer",
    "github",
    "easy"
]
+++
### Background
[Hugo](www.gohugo.com) is a superfast framework built in Googles own language Go. 

When reviewing a static site generator our team were frustrated with the slow build time of Jekyll. 

The motto of Hugo is build sites lightning fast & the build time doesn't disappoint.

*Deploying Hugo is not at all straightforward & the options on the Hugo website don't really offer anything that's fast to setup & user friendly to maintain. Below some considerations when choosing a static site....*  

### Assumptions & Prerequisites
1. You have Hugo installed & you're ready to publish your site online.
2. You have initialized your root folder with git & have made a number of commitments.

### Steps:

1. Ensure your rootURl located in the config file (file extension will be either YAML or TOML) has " " & not a url.
```bash
# config.yaml
title: "Pacifica Labs"
baseURL: ""  # note the absence of any url
languageCode: "en-AU"
```
   
1a. *Start by building your static site*
  
```bash
$ hugo
Start building sites …

                   | EN
-------------------+-----
  Pages            | 21
  Paginator pages  |  0
  Non-page files   |  0
  Static files     | 18
  Processed images | 16
  Aliases          |  6
  Sitemaps         |  1
  Cleaned          |  0

Total in 263 ms
``` 

 2a) You will have content in the public folder

```sh
$ ls public/

404.html
about
articles
blog
docs
favicon.ico
fonts
gallery
index.html
(...)
(...)
(...)
(etc)

```

2b. Create an empty repository on github, setup pages & install a README

3a. Copy the git URL for the repository

``` 
$ git submodule add URL public/
(repository is cloned)

```
3b. cd into the public folder , commit the changes and deploy

4a. cd into the root folder, commit these changes as well

5a you should be able to see commit at github

#### The Big Picture:

Conclusion goes here

#### Go Deeper... 
(Further reading links here)
[]
** Here ** is a bash script I have written to automate the deployment process.



#### ***Appendix***

1. The [top 4](https://jamstack.org/generators/) global static site generators were Next.js, Hugo & Gatsby & Jekyll. 
2. In benchmarking tests Hugo compiled [23x](https://forestry.io/blog/hugo-vs-jekyll-benchmark/#tl-dr) faster than Jekyll.
