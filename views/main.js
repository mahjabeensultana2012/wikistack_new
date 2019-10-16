const html = require('html-template-tag');
const layout = require('./layout');
const displayPageItem = page => {
  return html`
    <li><a href="wiki/${page.slug}">${page.title}</a></li>
  `;
};
module.exports = pages =>
  layout(html`
    <h3>Pages</h3>
    <hr />
    <form method="GET" action="/wiki/search">
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
    <hr />
    <ul class="list-unstyled">
      <ul>
        <!-- PLACEHOLDER LIST OF PAGES -->
        ${pages.map(displayPageItem)}
      </ul>
    </ul>
  `);
