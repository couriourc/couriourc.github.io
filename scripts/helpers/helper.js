/* global hexo */
const url = require("url");
'use strict'
// 判断是否是主页

hexo.extend.helper.register('isInHomePaging', function isInHomePaging(pagePath, route) {
  if (pagePath.length > 5 && route === '/') {
    return pagePath.slice(0, 5) === 'page/';
  } else {
    return false;
  }
});

hexo.extend.helper.register('getAuthorLabel', function getAuthorLabel(postCount, isAuto, labelList) {
  let level = Math.floor(Math.log2(postCount));
  level = level < 2 ? 1 : level - 1;
  if (isAuto === false && Array.isArray(labelList) && labelList.length > 0) {
    return level > labelList.length ? labelList[labelList.length - 1] : labelList[level - 1];
  } else {
    return `Lv${level}`;
  }
});

hexo.extend.helper.register('createNewArchivePosts', function createNewArchivePosts() {
  // 获取新的文章列表
  const postList = [], postYearList = [];

  posts.forEach(post => postYearList.push(post.date.year()));
  Array.from(new Set(postYearList)).forEach(year => {
    postList.push({
      year: year,
      postList: []
    })
  });
  postList.sort((a, b) => b.year - a.year)
  postList.forEach(item => {
    posts.forEach(post => item.year === post.date.year() && item.postList.push(post))
  });
  postList.forEach(item => item.postList.sort((a, b) => b.date.unix() - a.date.unix()));

  return postList;
});

hexo.extend.helper.register('getPostUrl', function (rootUrl, path) {
  if (rootUrl) {
    let {href} = url.parse(rootUrl);
    if (href.substr(href.length - 1, 1) !== '/') {
      href = href + '/';
    }
    return href + path;
  } else {
    return path;
  }
});


/**
 * 列出所有种类目录
 * @param {*} categories
 * @param {*} options
 */

hexo.extend.helper.register('getCategoryTree', function getCategoryTree(categories, options) {
  return [];
});

hexo.extend.helper.register('__js', function (path) {
  const _js = hexo.extend.helper.get('js').bind(hexo);

  let t = ``;

  if (Array.isArray(path)) {
    for (const p of path) {
      t += _js(p);
    }
  } else {
    t = _js(path);
  }

  return t;
});

hexo.extend.helper.register('__css', function (path) {
  const _css = hexo.extend.helper.get('css').bind(hexo);

  return _css(path);
});
