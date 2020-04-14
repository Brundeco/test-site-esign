<nav>
  <ul class="pagination">
    {{-- Previous Page Link --}}
    <li class="page-item disabled" aria-disabled="true" aria-label="&laquo; Previous">
      <span class="page-link" aria-hidden="true">&lsaquo;</span>
    </li>

    {{-- Pagination Elements --}}
    <li class="page-item active" aria-current="page">
      <span class="page-link">1</span>
    </li>
    <li class="page-item">
      <a class="page-link" href="articles.html">2</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="articles.html">3</a>
    </li>

    {{-- Next Page Link --}}
    <li class="page-item">
      <a class="page-link" href="articles.html" rel="next"
         aria-label="Next &raquo;">&rsaquo;</a>
    </li>
  </ul>
</nav>
