---
layout: base
---
## Posts

{% for post in collections.posts %}
- {{ post.date | date: "%d/%m/%Y" }}: [{{ post.data.title }}]({{ post.url }}) by {{post.data.author}}
{% endfor %}

{{site.name}} &copy; {{site.year}}
