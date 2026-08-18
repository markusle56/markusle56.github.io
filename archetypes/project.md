+++
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
# Card fields for the home page and /project/ list. Cards are ordered by date,
# newest first, so `date` above decides where this lands.
kicker = ''
blurb = ''
tags = []
link = ''
linkLabel = ''
# Set featured = true (on one project) to tint the card with the accent.
featured = false
+++
