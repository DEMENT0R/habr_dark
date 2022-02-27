// ==UserScript==
// @name         Habr dark
// @version      0.3
// @description  Habr dark theme
// @author       DEMENT0R
// @downloadURL  https://github.com/DEMENT0R/habr_dark/raw/master/habr_dark.user.js
// @updateURL    https://github.com/DEMENT0R/habr_dark/raw/master/habr_dark.user.js
// @match        https://habr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=habr.com
// @grant    GM_addStyle
// @run-at   document-start
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle ( `
        body,
        code,
        pre,
        #app,
        .tm-page,
        .tm-articles-list__after-article,
        .tm-project-block,
        .tm-layout__wrapper,
        .tm-notice,
        .tm-comment-form__editor {
            background-color: #444 !important;
        }
        .tm-section-name,
        .tm-articles-list__item,
        .tm-page__top,
        .tm-my-feed-page__settings-button,
        .tm-block,
        .tm-tabs,
        .tm-article-presenter__body,
        .tm-article-presenter__origin,
        .tm-company-card,
        .tm-user-card,
        .tm-article-comments__article-snippet,
        .tm-comments-wrapper__wrapper,
        .tm-profile__body,
        .tm-user-comments__comment,
        .tm-company-profile-card,
        .tm-data-icons,
        .tm-comment-form {
            background-color: #333 !important;
        }
        .tm-base-layout__header,
        .tm-comment__header_is-by-op,
        .tm-comment-navigation__button {
            background-color: #222 !important;
        }
        h1, h2, h3, h4, p, span, label, dd, code,
        .article-formatted-body,
        .tm-comment__body-content {
            color: #EEE !important;
        }
        a {
            color: #80bfff !important;
        }
    ` );
})();
