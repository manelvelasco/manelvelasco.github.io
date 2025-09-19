---
layout: default
title: "Inicio"
---

# Entradas

<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <small>— {{ post.date | date: "%Y-%m-%d" }}</small>
  </li>
{% endfor %}
</ul>

<p>Si no ves posts arriba, revisa la fecha del archivo en <code>_posts/</code>.</p>
