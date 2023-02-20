---
layout: post
title:  "Tutorial: Disable incognito mode in Chrome (Linux)"
date:   2021-02-17 12:00:00 +0530
blurb: ""
og_image: /assets/img/content/PLACEHOLDER-IMG/Banner.jpg
category: tutorials
---

<img src="{{ "/assets/img/content/PLACEHOLDER-IMG/Banner.jpg" | absolute_url }}" alt="Banner image" class="post-pic"/>
<br />
<br />

### Steps
1. `cd /etc/opt/chrome/policies/managed`
1. If you get an error "cd: no such file or directory", run the following
    + `sudo mkdir -p /etc/opt/chrome/policies/managed`
    + `cd /etc/opt/chrome/policies/managed`
1. `touch incognito-policy.json`

#### incognito-policy.json
```json
{
    "IncognitoModeAvailability":    1
}
```

### Verify
Visit `chrome://policy` from Chrome and click "*Reload policies*" to verify that the policy was successfully applied. It may require a browser restart.

Now clicking Chrome's three-dots menu bar displays an additional message in the last line:
> Managed by your organisation  

Pretty neat, I feel.
