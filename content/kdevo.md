---
weight: 12
date: "2019-05-17T22:25:16-07:00"
title: "KDEVO"
image: "kd.png"
alt: "kdevo"
color: "#263238"
buttons:
  - i18n: view
    url: "https://kdevo.github.io"
  - i18n: code 
    url: "https://github.com/kdevo/"
terminal:
    lines:
    - type: input
      data: mkdir themes
      wait: 200
    - type: input
      data: cd themes
      wait: 200
    - type: input
      data: git clone https://github.com/kdevo/osprey-delight.git
      wait: 300
    - type: progress
      data: 100
      wait: 1000
    - data: ☕ Done! Have fun using Osprey Delight!
      wait: 900
    - type: input
      data: exit
      wait: 500

---

Author of Osprey Delight.