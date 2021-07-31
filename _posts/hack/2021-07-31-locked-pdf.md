---
layout: post
title:  "Accessing locked pdf using crunch and JohnTheRipper"
date:   2021-07-31 19:20:00 +0530
blurb: ""
og_image: /assets/img/content/locked-pdf/Banner.png
category: hack
---

<img src="{{ "/assets/img/content/locked-pdf/Banner.png" | absolute_url }}" alt="Banner image" class="post-pic"/>
<br />
<br />

### Background
**crunch** generates wordlists from a character set according to user-defined patterns and string lengths.

**JohnTheRipper** is designed to test password strength, brute-force encrypted (hashed) passwords, and crack passwords via dictionary attacks. It provides the single crack mode, wordlist mode, and incremental mode.

### Challenge
Get access to the contents of [locked.pdf]({{ '/assets/pdf/locked.pdf' | absolute_url }}) given password is of length 5 of only lowercase letters.

### Solution
#### Installation of Tools
```sh
### For crunch
sudo apt install crunch

### For JohnTheRipper
sudo apt install libssl-dev
git clone https://github.com/magnumripper/JohnTheRipper.git
export JOHN=$PWD/JohnTheRipper
cd $JOHN/src/
./configure && make
```

#### Steps
```sh
## In the same session as above
## (we need the environment variable $JOHN)
crunch 5 5 -t @@@@@ -o ~/wordlist.txt
# crunch <lower_length> <upper_length> -t <pattern> -o <output_file>
# @: lowercase letters

$JOHN/run/pdf2john.pl ~/locked.pdf > ~/locked.hash
# Converts the pdf into hash format that JtR can be run upon

$JOHN/run/john --wordlist=$HOME/wordlist.txt ~/locked.hash
# Uses our generated letter combinations to crack the hash
```
