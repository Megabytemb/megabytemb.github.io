---
layout: post
title: "Write your own Easter Egg"
---
So Recently, through a series of random events, I discovered that Mac's Terminal support Emoji!

So I figured, Why not make my own *Easter Egg!!*

For those who use ZSH, feel free to add this into your Prompt!

```bash
emoji() {
    current_folder=${PWD##*/}
    if [[ $current_folder == 'love' && $platform == 'osx' ]]
    then
        echo "❤️ "
    else
        echo "$"
    fi
}
```

If you like what you see, Check out my whole prompt [Here](https://github.com/megabytemb/dotfiles/blob/master/zsh/prompt.zsh)