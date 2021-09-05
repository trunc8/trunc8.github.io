---
layout: default
slug: /search
---
<!-- Html Elements for Search -->
<div id="search-container">
  <input type="text" id="search-input" placeholder="search..." oninput="showSuggestions()">
  <div id="suggestions-container">
    Suggestions:
    <i><ul style="list-style-type:disc">
      <li>bash</li>
      <li>linux</li>
      <li>optimization</li>
      <li>mapping</li>
      <li>ros2</li>
    </ul></i>
  </div>
  <ul id="results-container"/>
</div>

<!-- Script pointing to search-script.js -->
<script src="/assets/js/search-script.js" type="text/javascript"></script>


<script>
// Suggestions function
input = document.getElementById('search-input');
function showSuggestions() {
  let name = input.value;
  var suggest_elem = document.getElementById('suggestions-container');
  if (name == "") {
    suggest_elem.style.display = "block";
  }
  else {
    suggest_elem.style.display = "none";
  }
};

// Configuration
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})

</script>
