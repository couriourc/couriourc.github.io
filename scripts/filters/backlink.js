'use strict';
/** global hexo */

hexo.extend.filter.register('after_post_render', (data) => {

  data.content = data.content.replace(/(\[\[)([^\[^\]]+)(\]\])/mg, (_, left, content, path) => {
    return `<a class="backlink">${content}</a>`;
  });
  // });
}, 12);
