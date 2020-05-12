






<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-FG+rXqMOivrAjdEQE7tO4BwM1poGmg70hJFTlNSxjX87grtrZ6UnPR8NkzwUHlQEGviu9XuRYeO8zH9YwvZhdg==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-146fab5ea30e8afac08dd11013bb4ee0.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-8LkbsZMtIzHnYxbSKVW0IeFFJwvb3vgP78G/Q6GrIESfEf/4+2k55PUHcDWZEx4QVNNdsH3ce16qqUBtK4sxzg==" rel="stylesheet" href="https://github.githubassets.com/assets/github-f0b91bb1932d2331e76316d22955b421.css" />
    
    
    
    


  <meta name="viewport" content="width=device-width">
  
  <title>widget.js</title>
    <meta name="description" content="GitHub Gist: instantly share code, notes, and snippets.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch-gist.xml" title="Gist">
  <link rel="fluid-icon" href="https://gist.github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://github.githubassets.com/images/modules/gists/gist-og-image.png" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="widget.js" /><meta name="twitter:description" content="GitHub Gist: instantly share code, notes, and snippets." />
    <meta property="og:image" content="https://github.githubassets.com/images/modules/gists/gist-og-image.png" /><meta property="og:site_name" content="Gist" /><meta property="og:type" content="article" /><meta property="og:title" content="widget.js" /><meta property="og:url" content="https://gist.github.com/ehynds/591632" /><meta property="og:description" content="GitHub Gist: instantly share code, notes, and snippets." /><meta property="article:author" content="262588213843476" /><meta property="article:publisher" content="262588213843476" />

  <link rel="assets" href="https://github.githubassets.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6NTMwMDc2NjI3OjJiM2IxNzdmMWM5Y2Y5M2NkYjMyZGNhOGI3ZTA3YzdlYmNlNjcxZmVjZTk5MWE0Y2Q2ZTA3MTU2NTg4ZmQxN2E=--52a0a78f1522933219e8e0e19485b28c4fd31277">
  <link rel="sudo-modal" href="/sessions/sudo_modal">

  <meta name="request-id" content="56F8:0D8C:F83E8:143484:5EB5A4D1" data-pjax-transient="true" /><meta name="html-safe-nonce" content="eb6403ace4f4f26d51212d0e85c8a0020dcda2ea" data-pjax-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2VoeW5kcy81OTE2MzIiLCJyZXF1ZXN0X2lkIjoiNTZGODowRDhDOkY4M0U4OjE0MzQ4NDo1RUI1QTREMSIsInZpc2l0b3JfaWQiOiI1MzAyMzMwOTM4ODk0OTc0NDU3IiwicmVnaW9uX2VkZ2UiOiJhcC1zb3V0aC0xIiwicmVnaW9uX3JlbmRlciI6ImlhZCJ9" data-pjax-transient="true" /><meta name="visitor-hmac" content="189ee70a606bb9c873dac8f1c834ad3336e43fd1ecaa1f6ac2821c31b5c8e51c" data-pjax-transient="true" />



  <meta name="github-keyboard-shortcuts" content="" data-pjax-transient="true" />

  

  <meta name="selected-link" value="gist_code" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="gist" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" /><meta name="octolytics-actor-id" content="64704456" /><meta name="octolytics-actor-login" content="vs12" /><meta name="octolytics-actor-hash" content="52e890796c7e1f8a62e440c98f594d41e6f3869bf7a420917faf9e6eece6b6e0" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;gist-id&gt;" data-pjax-transient="true" />


<meta name="optimizely-sdk-key" content="cowimJNste4j7QnBNCjaw" />

    <meta name="google-analytics" content="UA-3769691-4">

  <meta class="js-ga-set" name="userId" content="44d2edc3b9a7f1b4205f9dfb7f8d5f9a">

<meta class="js-ga-set" name="dimension1" content="Logged In">



    <meta name="octolytics-dimension-public" content="true" /><meta name="octolytics-dimension-gist_id" content="591632" /><meta name="octolytics-dimension-gist_name" content="591632" /><meta name="octolytics-dimension-anonymous" content="false" /><meta name="octolytics-dimension-owner_id" content="130820" /><meta name="octolytics-dimension-owner_login" content="ehynds" /><meta name="octolytics-dimension-forked" content="false" />

  <meta
    class="js-ga-set"
    name="dimension5"
    content="public"
  >
  <meta
    class="js-ga-set"
    name="dimension6"
    content="owned"
  >
  <meta
    class="js-ga-set"
    name="dimension7"
    content="javascript"
  >


      <meta name="hostname" content="gist.github.com">
    <meta name="user-login" content="vs12">

      <meta name="expected-hostname" content="gist.github.com">

      <meta name="js-proxy-site-detection-payload" content="YzVjNzI1NzJmNjNiYTZlNjVkYWU3ZjQ4Y2FlNDljZTkxMzdiZDlhOGFmMjJhODI3YWZlMWQ4ZjYyNTI4OGFlNHx7InJlbW90ZV9hZGRyZXNzIjoiNDIuMTA3LjgzLjg0IiwicmVxdWVzdF9pZCI6IjU2Rjg6MEQ4QzpGODNFODoxNDM0ODQ6NUVCNUE0RDEiLCJ0aW1lc3RhbXAiOjE1ODg5NjI1MzUsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="MARKETPLACE_PENDING_INSTALLATIONS,GHE_CLOUD_TRIAL,PAGE_STALE_CHECK">

  <meta http-equiv="x-pjax-version" content="78e70f6d42e7d8ac318a12ba1fdd5ec3">
  

      <link href="/ehynds.atom" rel="alternate" title="atom" type="application/atom+xml">

  <link crossorigin="anonymous" media="all" integrity="sha512-5hVNC4CXyolsNW7Su6XRzySIA8wItt7030sh1rRwjvqH5aASFMWfrEXSkuyWvgYPRZQSUmHqNBNQ+8N3kZ61fQ==" rel="stylesheet" href="https://github.githubassets.com/assets/gist-e6154d0b8097ca896c356ed2bba5d1cf.css" />




  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png">
  <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">

<meta name="theme-color" content="#1e2327">



  </head>

  <body class="logged-in env-production min-width-lg">
    

    <div class="position-relative js-header-wrapper ">
      <a href="#start-of-content" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
      <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
        <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
      </span>

      
      



          <div class="Header" role="banner" >
  <div class="Header-item">
    <a class="Header-link" data-hotkey="g d" aria-label="Gist Homepage " href="/">
  <svg class="octicon octicon-mark-github v-align-middle d-none" height="24" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
  <svg height="24" class="octicon octicon-logo-github v-align-middle" viewBox="0 0 45 16" version="1.1" width="67" aria-hidden="true"><path fill-rule="evenodd" d="M18.53 12.03h-.02c.009 0 .015.01.024.011h.006l-.01-.01zm.004.011c-.093.001-.327.05-.574.05-.78 0-1.05-.36-1.05-.83V8.13h1.59c.09 0 .16-.08.16-.19v-1.7c0-.09-.08-.17-.16-.17h-1.59V3.96c0-.08-.05-.13-.14-.13h-2.16c-.09 0-.14.05-.14.13v2.17s-1.09.27-1.16.28c-.08.02-.13.09-.13.17v1.36c0 .11.08.19.17.19h1.11v3.28c0 2.44 1.7 2.69 2.86 2.69.53 0 1.17-.17 1.27-.22.06-.02.09-.09.09-.16v-1.5a.177.177 0 00-.146-.18zM42.23 9.84c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25zm2.43-.16c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88zm-8.72-3.61h-2.1c-.11 0-.17.08-.17.19v5.44s-.55.39-1.3.39-.97-.34-.97-1.09V6.25c0-.09-.08-.17-.17-.17h-2.14c-.09 0-.17.08-.17.17v5.11c0 2.2 1.23 2.75 2.92 2.75 1.39 0 2.52-.77 2.52-.77s.05.39.08.45c.02.05.09.09.16.09h1.34c.11 0 .17-.08.17-.17l.02-7.47c0-.09-.08-.17-.19-.17zm-23.7-.01h-2.13c-.09 0-.17.09-.17.2v7.34c0 .2.13.27.3.27h1.92c.2 0 .25-.09.25-.27V6.23c0-.09-.08-.17-.17-.17zm-1.05-3.38c-.77 0-1.38.61-1.38 1.38 0 .77.61 1.38 1.38 1.38.75 0 1.36-.61 1.36-1.38 0-.77-.61-1.38-1.36-1.38zm16.49-.25h-2.11c-.09 0-.17.08-.17.17v4.09h-3.31V2.6c0-.09-.08-.17-.17-.17h-2.13c-.09 0-.17.08-.17.17v11.11c0 .09.09.17.17.17h2.13c.09 0 .17-.08.17-.17V8.96h3.31l-.02 4.75c0 .09.08.17.17.17h2.13c.09 0 .17-.08.17-.17V2.6c0-.09-.08-.17-.17-.17zM8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17z"></path></svg>
  <svg height="24" class="octicon octicon-logo-gist v-align-middle" viewBox="0 0 25 16" version="1.1" width="37" aria-hidden="true"><path fill-rule="evenodd" d="M4.7 8.73h2.45v4.02c-.55.27-1.64.34-2.53.34-2.56 0-3.47-2.2-3.47-5.05 0-2.85.91-5.06 3.48-5.06 1.28 0 2.06.23 3.28.73V2.66C7.27 2.33 6.25 2 4.63 2 1.13 2 0 4.69 0 8.03c0 3.34 1.11 6.03 4.63 6.03 1.64 0 2.81-.27 3.59-.64V7.73H4.7v1zm6.39 3.72V6.06h-1.05v6.28c0 1.25.58 1.72 1.72 1.72v-.89c-.48 0-.67-.16-.67-.7v-.02zm.25-8.72c0-.44-.33-.78-.78-.78s-.77.34-.77.78.33.78.77.78.78-.34.78-.78zm4.34 5.69c-1.5-.13-1.78-.48-1.78-1.17 0-.77.33-1.34 1.88-1.34 1.05 0 1.66.16 2.27.36v-.94c-.69-.3-1.52-.39-2.25-.39-2.2 0-2.92 1.2-2.92 2.31 0 1.08.47 1.88 2.73 2.08 1.55.13 1.77.63 1.77 1.34 0 .73-.44 1.42-2.06 1.42-1.11 0-1.86-.19-2.33-.36v.94c.5.2 1.58.39 2.33.39 2.38 0 3.14-1.2 3.14-2.41 0-1.28-.53-2.03-2.75-2.23h-.03zm8.58-2.47v-.86h-2.42v-2.5l-1.08.31v2.11l-1.56.44v.48h1.56v5c0 1.53 1.19 2.13 2.5 2.13.19 0 .52-.02.69-.05v-.89c-.19.03-.41.03-.61.03-.97 0-1.5-.39-1.5-1.34V6.94h2.42v.02-.01z"></path></svg>
</a>
  </div>


  <div class="Header-item Header-item--full js-site-search">
      <div class="header-search mr-3">

<!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative js-quicksearch-form" role="search" aria-label="Site" action="/search" accept-charset="UTF-8" method="get">
  <div class="header-search-wrapper form-control input-sm js-chromeless-input-container">
    <input type="text"
      class="form-control input-sm js-site-search-focus header-search-input js-navigation-enable js-quicksearch-field"
      data-hotkey="s,/"
      name="q"
      aria-label="Search"
      placeholder="Search…"
      autocorrect="off"
      autocomplete="off"
      autocapitalize="off">
  </div>

    <div class="gist-quicksearch-results js-quicksearch-results js-navigation-container" data-quicksearch-url="/search/quick"></div>
</form></div>


    <nav aria-label="Global" class="d-flex">
  <a class="Header-link mr-3" data-ga-click="Header, go to all gists, text:all gists" href="/discover">All gists</a>

  <a class="Header-link mr-3" data-ga-click="Header, go to GitHub, text:Back to GitHub" href="https://github.com">Back to GitHub</a>



</nav>

  </div>





    
    <div class="Header-item ">
      <a aria-label="You have no unread notifications" class="Header-link notification-indicator position-relative tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:64704456" href="https://github.com/notifications">
        <span class="js-indicator-modifier mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
</a>    </div>


    <div class="Header-item ">
      <a class="Header-link" data-ga-click="Header, go to new gist, text:new gist" aria-label="Create new gist" href="/">
        <svg class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg>
</a>    </div>

    <div class="Header-item position-relative mr-0" id="user-links">

      <details class="details-overlay details-reset">
        <summary class="Header-link name"
          aria-label="View profile and more"
          data-ga-click="Header, show menu, icon:avatar">
          <img class="avatar avatar-user" src="https://avatars0.githubusercontent.com/u/64704456?s=40&amp;v=4" width="20" height="20" alt="@vs12" />
          <span class="dropdown-caret"></span>
        </summary>
        <details-menu class="dropdown-menu dropdown-menu-sw" style="width: 180px">
          <div class="css-truncate"><a role="menuitem" class="text-gray-dark  no-underline px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/vs12" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">vs12</strong></a></div>
          <div role="none" class="dropdown-divider"></div>
          <a role="menuitem" class="dropdown-item" href="/vs12" data-ga-click="Header, go to your gists, text:your gists">Your gists</a>
          <a role="menuitem" class="dropdown-item" href="/vs12/starred" data-ga-click="Header, go to starred gists, text:starred gists">Starred gists</a>
          <a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
          <div role="none" class="dropdown-divider"></div>
          <a role="menuitem" class="dropdown-item" href="https://github.com/vs12" data-ga-click="Header, go to profile, text:your profile">Your GitHub profile</a>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="https://gist.github.com/auth/github/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="V6h9dEjWn97clJk8G1OuKD4N/u+W2r+cau5RRmkH12rKG48rFe3EtrPd2U09mY0wJw4lQICsWnPrMBZ8sZuutA==" />
            <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
              Sign out
            </button>
</form>        </details-menu>
      </details>
    </div>
</div>



        

    </div>

  <div id="start-of-content" class="show-on-focus"></div>




    <div id="js-flash-container">


  <template class="js-flash-template">
    <div class="flash flash-full  js-flash-template-container">
  <div class="container-lg px-2" >
    <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
    </button>
    
      <div class="js-flash-template-message"></div>

  </div>
</div>
  </template>
</div>


    

  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>



  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/Code">
    <main id="gist-pjax-container" class="gist-content-wrapper" data-pjax-container>
      




<div class="gisthead pagehead repohead readability-menu bg-gray-light pb-0 pt-3 mb-4">
  <div class="container-lg px-3">
    
  


<div class="mb-3 d-flex">
  <h1 class="public css-truncate float-none flex-auto width-fit pl-0">
    <a class="avatar mr-1" data-hovercard-type="user" data-hovercard-url="/users/ehynds/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ehynds"><img class=" avatar-user" src="https://avatars2.githubusercontent.com/u/130820?s=52&amp;v=4" width="26" height="26" alt="@ehynds" /></a>
    <span class="author"><a data-hovercard-type="user" data-hovercard-url="/users/ehynds/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ehynds">ehynds</a></span><!--
        --><span class="path-divider">/</span><!--
        --><strong itemprop="name" class="css-truncate-target" style="max-width: 410px"><a href="/ehynds/591632">widget.js</a></strong>

    <div class="d-block text-small text-gray">
      Created <time-ago datetime="2010-09-22T13:12:30Z" class="no-wrap">Sep 22, 2010</time-ago>
        &bull;
        <a class="text-gray" href="/contact/report-content?content_url=https%3A%2F%2Fgist.github.com%2F591632&amp;report=ehynds+%28user%29">Report abuse</a>
    </div>
  </h1>

  <ul class="pagehead-actions float-none">


      <li>
          <div class="thread-subscription-status js-socket-channel js-updatable-content"
  data-replace-remote-form-target
  data-channel="list-subscription:user:130820:64704456 thread-subscription:591632:64704456"
  data-url="/ehynds/591632/subscription"
>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-replace-remote-form="true" class="thread-subscribe-form" action="/ehynds/591632/subscribe" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="28ky25UgGiLd8b6eRgDzHbhuKIm/BMvVk1VzsnpOcw/tcst9tvGn8kZWojqGbM+zYNcZzXp4CG/fo3le4O0/Jw==" />      <input type="hidden" name="repository_id" value="130820">
      <input type="hidden" name="thread_id" value="591632">
      <input type="hidden" name="thread_class" value="Gist">
      <input type="hidden" name="id" value="subscribe">
      <button type="submit" class="btn btn-block btn-sm thread-subscribe-button" data-disable-with >
        <svg class="octicon octicon-unmute" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 8.02c0 1.09-.45 2.09-1.17 2.83l-.67-.67c.55-.56.89-1.31.89-2.16 0-.85-.34-1.61-.89-2.16l.67-.67A3.99 3.99 0 0112 8.02zM7.72 2.28L4 6H2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h2l3.72 3.72c.47.47 1.28.14 1.28-.53V2.81c0-.67-.81-1-1.28-.53zm5.94.08l-.67.67a6.996 6.996 0 012.06 4.98c0 1.94-.78 3.7-2.06 4.98l.67.67A7.973 7.973 0 0016 8c0-2.22-.89-4.22-2.34-5.66v.02zm-1.41 1.41l-.69.67a5.05 5.05 0 011.48 3.58c0 1.39-.56 2.66-1.48 3.56l.69.67A5.971 5.971 0 0014 8.02c0-1.65-.67-3.16-1.75-4.25z"></path></svg> Subscribe
      </button>
</form></div>

      </li>

    <li>
          <div class="js-toggler-container js-social-container starring-container ">
    <form class="starred js-social-form" action="/ehynds/591632/unstar" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="GoKy3bFr3hF5KIe3+meXgfgrstQjKuhsCVQLR9PM3Ria1z1x18DgP5HzRna8fA785QTMKYW1XedmPEvgXD2sOQ==" />
      <input type="hidden" name="context" value="gist"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this gist" title="Unstar ehynds/591632" data-ga-click="Repository, click unstar button, action:gists/gists#show; text:Unstar">        <svg height="16" class="octicon octicon-star v-align-text-bottom" vertical_align="text_bottom" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>

        Unstar
</button>        <a class="social-count js-social-count" href="/ehynds/591632/stargazers"
           aria-label="0 users starred this repository">
           0
        </a>
</form>
    <form class="unstarred js-social-form" action="/ehynds/591632/star" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="kU2BK4kM4fl49fkugaTZQWC0vwHrlRc7Ybzm2NMdZwVdk4ywsOffb8c/zax8Gj2dG9/4yaH9PyK+yOJWwSP05w==" />
      <input type="hidden" name="context" value="gist"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this gist" title="Star ehynds/591632" data-ga-click="Repository, click star button, action:gists/gists#show; text:Star">        <svg height="16" class="octicon octicon-star v-align-text-bottom" vertical_align="text_bottom" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>

        Star
</button>        <a class="social-count js-social-count" href="/ehynds/591632/stargazers"
           aria-label="0 users starred this repository">
          0
        </a>
</form>  </div>


    </li>

      <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/ehynds/591632/fork" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="YMAXqB3xn0u6M+7CsfvuK9XrPDb0o9ejJq8ayxVvrxkh7/rB3yZhjWBo/JY+tkRRAlZZTNGMla7XTsCrdeC1rw==" />
    <button class="btn btn-sm btn-with-count" type="submit">
      <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      Fork
    </button>
      <span class="social-count">0</span>
</form>
      </li>
  </ul>

</div>

<div class="d-flex">
  <div class="flex-auto">
    <nav class="reponav js-repo-nav js-sidenav-container-pjax"
     aria-label="Gist"
     data-pjax="#gist-pjax-container">

  <a class="js-selected-navigation-item selected reponav-item" data-pjax="true" data-hotkey="g c" aria-current="page" data-selected-links="gist_code /ehynds/591632" href="/ehynds/591632">
    <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
    Code
</a>
    <a class="js-selected-navigation-item reponav-item" data-pjax="true" data-hotkey="g r" data-selected-links="gist_revisions /ehynds/591632/revisions" href="/ehynds/591632/revisions">
      <svg class="octicon octicon-git-commit" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"></path></svg>
      Revisions
      <span class="Counter">11</span>
</a>

</nav>

  </div>

  <div class="file-navigation-options" data-multiple>

    <div class="file-navigation-option v-align-middle">

  <div class="input-group">
    <div class="input-group-button">
      <details class="details-reset details-overlay select-menu">
        <summary class="btn btn-sm select-menu-button" data-ga-click="Repository, clone Embed, location:repo overview">
          <span data-menu-button>Embed</span>
        </summary>
        <details-menu
          class="select-menu-modal position-absolute"
          data-menu-input="gist-share-url"
          style="z-index: 99;" aria-label="Clone options">
          <div class="select-menu-header">
            <span class="select-menu-title">What would you like to do?</span>
          </div>
          <div class="select-menu-list">
              <button name="button" type="button" class="select-menu-item width-full" aria-checked="true" role="menuitemradio" value="&lt;script src=&quot;https://gist.github.com/ehynds/591632.js&quot;&gt;&lt;/script&gt;" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;EMBED&quot;,&quot;git_repository_type&quot;:&quot;GIST&quot;,&quot;gist_id&quot;:591632,&quot;originating_url&quot;:&quot;https://gist.github.com/ehynds/591632&quot;,&quot;user_id&quot;:64704456}}" data-hydro-click-hmac="c9b92411647ed21444beca271b9d5cf6de7c64957bfcf73b908dfada19fe9a55">
                <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                <div class="select-menu-item-text">
                  <span class="select-menu-item-heading" data-menu-button-text>
                    
                    Embed
                  </span>
                    <span class="description">
                      Embed this gist in your website.
                    </span>
                </div>
</button>              <button name="button" type="button" class="select-menu-item width-full" aria-checked="false" role="menuitemradio" value="https://gist.github.com/ehynds/591632" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;SHARE&quot;,&quot;git_repository_type&quot;:&quot;GIST&quot;,&quot;gist_id&quot;:591632,&quot;originating_url&quot;:&quot;https://gist.github.com/ehynds/591632&quot;,&quot;user_id&quot;:64704456}}" data-hydro-click-hmac="cc83f3eb5dd5974a34953314606166a498f119cc553d24a5239fe5d8e0434b59">
                <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                <div class="select-menu-item-text">
                  <span class="select-menu-item-heading" data-menu-button-text>
                    
                    Share
                  </span>
                    <span class="description">
                      Copy sharable link for this gist.
                    </span>
                </div>
</button>              <button name="button" type="button" class="select-menu-item width-full" aria-checked="false" role="menuitemradio" value="https://gist.github.com/591632.git" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;USE_HTTPS&quot;,&quot;git_repository_type&quot;:&quot;GIST&quot;,&quot;gist_id&quot;:591632,&quot;originating_url&quot;:&quot;https://gist.github.com/ehynds/591632&quot;,&quot;user_id&quot;:64704456}}" data-hydro-click-hmac="3945655d0dd85570bd0c3b447f9ec073f6fd8a66f9a126db27c9a3218bff6879">
                <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                <div class="select-menu-item-text">
                  <span class="select-menu-item-heading" data-menu-button-text>
                    Clone via
                    HTTPS
                  </span>
                    <span class="description">
                      Clone with Git or checkout with SVN using the repository’s web address.
                    </span>
                </div>
</button>              <button name="button" type="button" class="select-menu-item width-full" aria-checked="false" role="menuitemradio" value="git@gist.github.com:591632.git" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;USE_SSH&quot;,&quot;git_repository_type&quot;:&quot;GIST&quot;,&quot;gist_id&quot;:591632,&quot;originating_url&quot;:&quot;https://gist.github.com/ehynds/591632&quot;,&quot;user_id&quot;:64704456}}" data-hydro-click-hmac="cb14d9d990a583b77895530a30b43825dee8a62e3048cb13ebbed231986b5727">
                <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                <div class="select-menu-item-text">
                  <span class="select-menu-item-heading" data-menu-button-text>
                    Clone via
                    SSH
                  </span>
                    <span class="description">
                      Clone with an SSH key and passphrase from your GitHub settings.
                    </span>
                </div>
</button>          </div>
          <div class="select-menu-list">
            <a role="menuitem" class="select-menu-item select-menu-action" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank">
              <svg class="octicon octicon-question select-menu-item-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"></path></svg>
              <div class="select-menu-item-text">
                Learn more about clone URLs
              </div>
            </a>
          </div>
        </details-menu>
      </details>
    </div>

    <input
      id="gist-share-url"
      type="text"
      data-autoselect
      class="form-control input-monospace input-sm"
      value="&lt;script src=&quot;https://gist.github.com/ehynds/591632.js&quot;&gt;&lt;/script&gt;"
      aria-label="Clone this repository at &lt;script src=&quot;https://gist.github.com/ehynds/591632.js&quot;&gt;&lt;/script&gt;"
      readonly>

    <div class="input-group-button">
      <clipboard-copy for="gist-share-url" aria-label="Copy to clipboard" class="btn btn-sm zeroclipboard-button" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;COPY_URL&quot;,&quot;git_repository_type&quot;:&quot;GIST&quot;,&quot;gist_id&quot;:591632,&quot;originating_url&quot;:&quot;https://gist.github.com/ehynds/591632&quot;,&quot;user_id&quot;:64704456}}" data-hydro-click-hmac="69a17e8bb1059eed8e9a4b82f3f3627f487ba4135156ed43a09acb8fc7ae26e2"><svg class="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg></clipboard-copy>
    </div>
  </div>
</div>


    <div class="file-navigation-option">
    <a class="btn btn-sm tooltipped tooltipped-s tooltipped-multiline js-remove-unless-platform" data-platforms="windows,mac" aria-label="Save ehynds/591632 to your computer and use it in GitHub Desktop." data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;OPEN_IN_DESKTOP&quot;,&quot;git_repository_type&quot;:&quot;GIST&quot;,&quot;gist_id&quot;:591632,&quot;originating_url&quot;:&quot;https://gist.github.com/ehynds/591632&quot;,&quot;user_id&quot;:64704456}}" data-hydro-click-hmac="ee75f483a9633742e84bb77fcfdf260451a52746423fd725cfc7bbf4d6820e24" href="https://desktop.github.com"><svg class="octicon octicon-desktop-download" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 6h3V0h2v6h3l-4 4-4-4zm11-4h-4v1h4v8H1V3h4V2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z"></path></svg></a>
</div>


    <div class="file-navigation-option">
      <a class="btn btn-sm" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;clone_or_download.click&quot;,&quot;payload&quot;:{&quot;feature_clicked&quot;:&quot;DOWNLOAD_ZIP&quot;,&quot;git_repository_type&quot;:&quot;GIST&quot;,&quot;gist_id&quot;:591632,&quot;originating_url&quot;:&quot;https://gist.github.com/ehynds/591632&quot;,&quot;user_id&quot;:64704456}}" data-hydro-click-hmac="2a3b22d729c61a2830031b3c263bcb615e180eec28569601f1ba1395f4f72fc8" data-ga-click="Gist, download zip, location:gist overview" href="/ehynds/591632/archive/4625d42763617203e703165b7ae9b954ed465b32.zip">Download ZIP</a>
    </div>
  </div>
</div>


  </div>
</div>

<div class="container-lg px-3 new-discussion-timeline">
  <div class="repository-content gist-content">
    
  <div>
    

        <div class="js-gist-file-update-container js-task-list-container file-box">
  <div id="file-widget-js" class="file">
      <div class="file-header">
        <div class="file-actions">

          <a class="btn btn-sm " href="/ehynds/591632/raw/4625d42763617203e703165b7ae9b954ed465b32/widget.js">Raw</a>
        </div>
        <div class="file-info">
          <span class="icon">
            <svg class="octicon octicon-gist" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z"></path></svg>
          </span>
          <a class="css-truncate" href="#file-widget-js">
            <strong class="user-select-contain gist-blob-name css-truncate-target">
              widget.js
            </strong>
          </a>
        </div>
      </div>
    

  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript ">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip>
      <tr>
        <td id="file-widget-js-L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="file-widget-js-LC1" class="blob-code blob-code-inner js-file-line"><span class=pl-c>// our &quot;Widget&quot; object constructor</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="file-widget-js-LC2" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-v>Widget</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span> <span class=pl-s1>options</span><span class=pl-kos>,</span> <span class=pl-s1>element</span> <span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="file-widget-js-LC3" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>options</span> <span class=pl-c1>=</span> <span class=pl-s1>options</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="file-widget-js-LC4" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>element</span> <span class=pl-c1>=</span> <span class=pl-s1>element</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="file-widget-js-LC5" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="file-widget-js-L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="file-widget-js-LC6" class="blob-code blob-code-inner js-file-line">    <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-en>_init</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="file-widget-js-LC7" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="file-widget-js-LC8" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="file-widget-js-L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="file-widget-js-LC9" class="blob-code blob-code-inner js-file-line"><span class=pl-v>Widget</span><span class=pl-kos>.</span><span class=pl-c1>prototype</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="file-widget-js-LC10" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="file-widget-js-L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="file-widget-js-LC11" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// _init fires when your instance is first created</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="file-widget-js-LC12" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// (from the constructor above), and when you</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="file-widget-js-LC13" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// attempt to initialize the widget again (by the bridge)</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="file-widget-js-LC14" class="blob-code blob-code-inner js-file-line">    <span class=pl-c>// after it has already been initialized.</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="file-widget-js-LC15" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>_init</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="file-widget-js-LC16" class="blob-code blob-code-inner js-file-line">        <span class=pl-c>// init code</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="file-widget-js-LC17" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="file-widget-js-LC18" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>option</span>: <span class=pl-k>function</span><span class=pl-kos>(</span> <span class=pl-s1>key</span><span class=pl-kos>,</span> <span class=pl-s1>value</span> <span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="file-widget-js-LC19" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="file-widget-js-L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="file-widget-js-LC20" class="blob-code blob-code-inner js-file-line">        <span class=pl-c>// get/change options AFTER initialization:</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="file-widget-js-LC21" class="blob-code blob-code-inner js-file-line">        <span class=pl-c>// you don&#39;t have to support all these cases,</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="file-widget-js-LC22" class="blob-code blob-code-inner js-file-line">        <span class=pl-c>// but here&#39;s how:</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="file-widget-js-LC23" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="file-widget-js-L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="file-widget-js-LC24" class="blob-code blob-code-inner js-file-line">        <span class=pl-c>// signature: $(&#39;#foo&#39;).bar({ cool:false });</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="file-widget-js-LC25" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>if</span><span class=pl-kos>(</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>isPlainObject</span><span class=pl-kos>(</span> <span class=pl-s1>key</span> <span class=pl-kos>)</span> <span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="file-widget-js-LC26" class="blob-code blob-code-inner js-file-line">            <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>options</span> <span class=pl-c1>=</span> <span class=pl-s1>$</span><span class=pl-kos>.</span><span class=pl-en>extend</span><span class=pl-kos>(</span><span class=pl-c1>true</span><span class=pl-kos>,</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>options</span><span class=pl-kos>,</span> <span class=pl-s1>key</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="file-widget-js-LC27" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="file-widget-js-L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="file-widget-js-LC28" class="blob-code blob-code-inner js-file-line">        <span class=pl-c>// signature: $(&#39;#foo&#39;).option(&#39;cool&#39;);  - getter</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="file-widget-js-LC29" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>key</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-k>typeof</span> <span class=pl-s1>value</span> <span class=pl-c1>===</span> <span class=pl-s>&quot;undefined&quot;</span> <span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="file-widget-js-LC30" class="blob-code blob-code-inner js-file-line">            <span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>options</span><span class=pl-kos>[</span> <span class=pl-s1>key</span> <span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="file-widget-js-LC31" class="blob-code blob-code-inner js-file-line">            </td>
      </tr>
      <tr>
        <td id="file-widget-js-L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="file-widget-js-LC32" class="blob-code blob-code-inner js-file-line">        <span class=pl-c>// signature: $(&#39;#foo&#39;).bar(&#39;option&#39;, &#39;baz&#39;, false);</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="file-widget-js-LC33" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="file-widget-js-LC34" class="blob-code blob-code-inner js-file-line">            <span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>options</span><span class=pl-kos>[</span> <span class=pl-s1>key</span> <span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>value</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="file-widget-js-LC35" class="blob-code blob-code-inner js-file-line">        <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="file-widget-js-LC36" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="file-widget-js-L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="file-widget-js-LC37" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span> <span class=pl-c>// make sure to return the instance!</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="file-widget-js-LC38" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="file-widget-js-LC39" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>publicFn</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span> <span class=pl-c>// notice no underscore</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="file-widget-js-LC40" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-s>&quot;public method&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="file-widget-js-LC41" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="file-widget-js-LC42" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>_privateFn</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="file-widget-js-LC43" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>return</span> <span class=pl-s>&quot;private method&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="file-widget-js-LC44" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="file-widget-js-L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="file-widget-js-LC45" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
</table>


  </div>

  </div>
</div>


    <a name="comments"></a>
    <div class="js-quote-selection-container" data-quote-markdown=".js-comment-body">
      <div class="js-discussion js-socket-channel" data-channel="marked-as-read:gist:591632">
        <div class="ml-6 pl-3">
          

<!-- Rendered timeline since 2015-09-23 10:38:18 -->
<div id="partial-timeline-marker"
      class="js-timeline-marker js-updatable-content"
      data-last-modified="Wed, 23 Sep 2015 17:38:18 GMT"
      >
</div>

        </div>

        <div class="discussion-timeline-actions">
            <div class="timeline-comment-wrapper timeline-new-comment js-comment-container width-fit">
  <span class="timeline-comment-avatar "><a class="d-inline-block" data-hovercard-type="user" data-hovercard-url="/users/vs12/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/vs12"><img class="avatar avatar-user" src="https://avatars3.githubusercontent.com/u/64704456?s=80&amp;v=4" width="40" height="40" alt="@vs12" /></a></span>

  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-new-comment-form js-needs-timeline-marker-header" action="/ehynds/591632/comments" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="QkGZACSCPwd4eJhKMgVEw69TzLhZStaHQdHOgcU+XXb4gNyn6icGCpoPKvV2xNFJBbxWZ1NgGhAwHmtcbPIADQ==" />
    <div class="timeline-comment">
      <tab-container class="js-previewable-comment-form previewable-comment-form write-selected" data-preview-url="/preview?markdown_unsupported=false&amp;subject=591632&amp;subject_type=Gist">
  <input type="hidden" value="CO1yEoXq4FvbaVScBAndkQEb+MIQw/kxjo/Gsam4JridtpMQbb9ryrvaxK8+U4X/XeLPuj4uTcm3gAtrcXbJaA==" data-csrf="true" class="js-data-preview-url-csrf" />
  <div class="comment-form-head tabnav d-flex flex-justify-between mb-2 ">
      <div class="tabnav-tabs " role="tablist">
        <button type="button" class="btn-link tabnav-tab write-tab js-write-tab  " role="tab" aria-selected="true">Write</button>
        <button type="button" class="btn-link tabnav-tab preview-tab js-preview-tab " role="tab">Preview</button>
      </div>
      <markdown-toolbar role="toolbar" aria-label="Composition" for="new_comment_field" class="js-details-container Details toolbar-commenting d-flex no-wrap flex-items-start flex-wrap px-2 ">


  <div class="flex-nowrap d-inline-block mr-3">
    <md-header tabindex="-1" class="toolbar-item tooltipped tooltipped-n mx-1" aria-label="Add header text" data-ga-click="Markdown Toolbar, click, header">
      <svg class="octicon octicon-text-size" viewBox="0 0 18 16" version="1.1" width="18" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.62 9.08L12.1 3.66h-.06l-1.5 5.42h3.08zM5.7 10.13S4.68 6.52 4.53 6.02h-.08l-1.13 4.11H5.7zM17.31 14h-2.25l-.95-3.25h-4.07L9.09 14H6.84l-.69-2.33H2.87L2.17 14H0l3.3-9.59h2.5l2.17 6.34L10.86 2h2.52l3.94 12h-.01z"></path></svg>
    </md-header>

    <md-bold tabindex="-1" class="toolbar-item tooltipped tooltipped-n mx-1 js-modifier-label-key" aria-label="Add bold text <ctrl+b>" data-ga-click="Markdown Toolbar, click, bold">
      <svg class="octicon octicon-bold" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1 2h3.83c2.48 0 4.3.75 4.3 2.95 0 1.14-.63 2.23-1.67 2.61v.06c1.33.3 2.3 1.23 2.3 2.86 0 2.39-1.97 3.52-4.61 3.52H1V2zm3.66 4.95c1.67 0 2.38-.66 2.38-1.69 0-1.17-.78-1.61-2.34-1.61H3.13v3.3h1.53zm.27 5.39c1.77 0 2.75-.64 2.75-1.98 0-1.27-.95-1.81-2.75-1.81h-1.8v3.8h1.8v-.01z"></path></svg>
    </md-bold>

    <md-italic tabindex="-1" class="toolbar-item tooltipped tooltipped-n mx-1 js-modifier-label-key" aria-label="Add italic text <ctrl+i>" data-ga-click="Markdown Toolbar, click, italic">
      <svg class="octicon octicon-italic" viewBox="0 0 6 16" version="1.1" width="6" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2.81 5h1.98L3 14H1l1.81-9zm.36-2.7c0-.7.58-1.3 1.33-1.3.56 0 1.13.38 1.13 1.03 0 .75-.59 1.3-1.33 1.3-.58 0-1.13-.38-1.13-1.03z"></path></svg>
    </md-italic>
  </div>

  <div class="d-inline-block mr-3">
    <md-quote tabindex="-1" class="toolbar-item tooltipped tooltipped-n p-1 mx-1" aria-label="Insert a quote" data-ga-click="Markdown Toolbar, click, quote">
      <svg class="octicon octicon-quote" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6.16 3.5C3.73 5.06 2.55 6.67 2.55 9.36c.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.9 0-2.99-1.52-2.99-4.25 0-3.8 1.75-6.53 5.02-8.42L6.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.89 0-2.98-1.52-2.98-4.25 0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z"></path></svg>
    </md-quote>

    <md-code tabindex="-1" class="toolbar-item tooltipped tooltipped-n p-1 mx-1" aria-label="Insert code" data-ga-click="Markdown Toolbar, click, code">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
    </md-code>


    <md-link tabindex="-1" class="toolbar-item tooltipped tooltipped-n p-1 d-inline-block mx-1 js-modifier-label-key" aria-label="Add a link <ctrl+k>" data-ga-click="Markdown Toolbar, click, link">
      <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>
    </md-link>
  </div>

  <div class="d-inline-block mr-3">
    <md-unordered-list tabindex="-1" class="toolbar-item tooltipped tooltipped-n mx-1" aria-label="Add a bulleted list" data-ga-click="Markdown Toolbar, click, unordered list">
      <svg class="octicon octicon-list-unordered" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 13c0 .59 0 1-.59 1H.59C0 14 0 13.59 0 13c0-.59 0-1 .59-1h.81c.59 0 .59.41.59 1H2zm2.59-9h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1H4.59C4 2 4 2.41 4 3c0 .59 0 1 .59 1zM1.41 7H.59C0 7 0 7.41 0 8c0 .59 0 1 .59 1h.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm0-5H.59C0 2 0 2.41 0 3c0 .59 0 1 .59 1h.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm10 5H4.59C4 7 4 7.41 4 8c0 .59 0 1 .59 1h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01zm0 5H4.59C4 12 4 12.41 4 13c0 .59 0 1 .59 1h6.81c.59 0 .59-.41.59-1 0-.59 0-1-.59-1h.01z"></path></svg>
    </md-unordered-list>

    <md-ordered-list tabindex="-1" class="toolbar-item tooltipped tooltipped-n mx-1" aria-label="Add a numbered list" data-ga-click="Markdown Toolbar, click, ordered list">
      <svg class="octicon octicon-list-ordered" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12.01 13c0 .59 0 1-.59 1H4.6c-.59 0-.59-.41-.59-1 0-.59 0-1 .59-1h6.81c.59 0 .59.41.59 1h.01zM4.6 4h6.81C12 4 12 3.59 12 3c0-.59 0-1-.59-1H4.6c-.59 0-.59.41-.59 1 0 .59 0 1 .59 1zm6.81 3H4.6c-.59 0-.59.41-.59 1 0 .59 0 1 .59 1h6.81C12 9 12 8.59 12 8c0-.59 0-1-.59-1zm-9.4-6h-.72c-.3.19-.58.25-1.03.34V2h.75v2.14H.17V5h2.84v-.86h-1V1zm.392 8.12c-.129 0-.592.04-.802.07.53-.56 1.14-1.25 1.14-1.89C2.72 6.52 2.18 6 1.38 6c-.59 0-.97.2-1.38.64l.58.58c.19-.19.38-.38.64-.38.28 0 .48.16.48.52 0 .53-.77 1.2-1.7 2.06V10h3v-.88h-.598zm-.222 3.79v-.03c.44-.19.64-.47.64-.86 0-.7-.56-1.11-1.44-1.11-.48 0-.89.19-1.28.52l.55.64c.25-.2.44-.31.69-.31.27 0 .42.13.42.36 0 .27-.2.44-.86.44v.75c.83 0 .98.17.98.47 0 .25-.23.38-.58.38-.28 0-.56-.14-.81-.38l-.48.66c.3.36.77.56 1.41.56.83 0 1.53-.41 1.53-1.16 0-.5-.31-.81-.77-.94v.01z"></path></svg>
    </md-ordered-list>

    <md-task-list tabindex="-1" class="toolbar-item tooltipped tooltipped-n mx-1" aria-label="Add a task list" data-ga-click="Markdown Toolbar, click, task list">
      <svg class="octicon octicon-tasklist" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15.41 9H7.59C7 9 7 8.59 7 8c0-.59 0-1 .59-1h7.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM9.59 4C9 4 9 3.59 9 3c0-.59 0-1 .59-1h5.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1H9.59zM0 3.91l1.41-1.3L3 4.2 7.09 0 8.5 1.41 3 6.91l-3-3zM7.59 12h7.81c.59 0 .59.41.59 1 0 .59 0 1-.59 1H7.59C7 14 7 13.59 7 13c0-.59 0-1 .59-1z"></path></svg>
    </md-task-list>
  </div>

  <div class="d-inline-block">
    <md-mention tabindex="-1" class="flex-auto text-center toolbar-item tooltipped tooltipped-nw p-1 mx-1" aria-label="Directly mention a user or team" data-ga-click="Markdown Toolbar, click, mention">
      <svg class="octicon octicon-mention" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6.58 15c1.25 0 2.52-.31 3.56-.94l-.42-.94c-.84.52-1.89.83-3.03.83-3.23 0-5.64-2.08-5.64-5.72 0-4.37 3.23-7.18 6.58-7.18 3.45 0 5.22 2.19 5.22 5.2 0 2.39-1.34 3.86-2.5 3.86-1.05 0-1.36-.73-1.05-2.19l.73-3.75H8.98l-.11.72c-.41-.63-.94-.83-1.56-.83-2.19 0-3.66 2.39-3.66 4.38 0 1.67.94 2.61 2.3 2.61.84 0 1.67-.53 2.3-1.25.11.94.94 1.45 1.98 1.45 1.67 0 3.77-1.67 3.77-5C14 2.61 11.59 0 7.83 0 3.66 0 0 3.33 0 8.33 0 12.71 2.92 15 6.58 15zm-.31-5c-.73 0-1.36-.52-1.36-1.67 0-1.45.94-3.22 2.41-3.22.52 0 .84.2 1.25.83l-.52 3.02c-.63.73-1.25 1.05-1.78 1.05V10z"></path></svg>
    </md-mention>



    <md-ref tabindex="-1" class="flex-auto text-center toolbar-item tooltipped tooltipped-nw p-1 mx-1" aria-label="Reference an issue or pull request" data-ga-click="Markdown Toolbar, click, reference">
      <svg class="octicon octicon-bookmark" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z"></path></svg>
    </md-ref>


  </div>

</markdown-toolbar>

  </div>

  <div class="comment-form-error js-comment-form-error" role="alert" hidden>
    There was an error creating your Gist.
  </div>

  <file-attachment class="js-upload-markdown-image is-default" input="fc-new_comment_field" role="tabpanel" data-tab-container-no-tabstop="true" data-upload-policy-url="/upload/policies/assets"><input type="hidden" value="aTVv+zEhxkR5GovxDZZ+CCpuz+VWqec8wAFcCHiO3SiZUDXllGnjyhW10MKz/F/18xlimaGQSQ2y9fMBxBXW9g==" data-csrf="true" class="js-data-upload-policy-url-csrf" />
    <div class="write-content js-write-bucket tooltipped tooltipped-ne tooltipped-no-delay tooltipped-align-left-1 hide-reaction-suggestion upload-enabled" >


      <text-expander keys=":"
        data-emoji-url="/ehynds/591632/suggestions"
        >
        <textarea name="comment[body]"
                  id="new_comment_field"
                  
                  
                  placeholder="Leave a comment"
                  aria-label="Comment body"
                  class="form-control input-contrast comment-form-textarea js-comment-field js-paste-markdown js-task-list-field js-quick-submit js-size-to-fit js-session-resumable "
                  ></textarea>
      </text-expander>
        
  <label class="text-normal drag-and-drop hx_drag-and-drop position-relative d-flex flex-justify-between">
    <input accept=".gif,.jpeg,.jpg,.png" type="file"
      multiple
      class="manual-file-chooser manual-file-chooser-transparent top-0 right-0 bottom-0 left-0 width-full ml-0 form-control"
        id="fc-new_comment_field"
      >
    <span class="bg-gray-light position-absolute top-0 left-0 width-full height-full rounded-1" style="pointer-events: none;"></span>
    <span class="position-relative pr-2" style="pointer-events: none;">
      <span class="default">
        Attach files by dragging &amp; dropping, selecting or pasting them.
      </span>
      <span class="loading">
        <img alt="" width="16" height="16" src="https://github.githubassets.com/images/spinners/octocat-spinner-32.gif" /> Uploading your files…
      </span>
      <span class="error bad-file">
        We don’t support that file type.
        <span class="drag-and-drop-error-info">
          <span class="btn-link">Try again</span> with a
          GIF, JPEG, JPG or PNG.
        </span>
      </span>
      <span class="error bad-permissions">
        Attaching documents requires write permission to this repository.
        <span class="drag-and-drop-error-info">
          <span class="btn-link">Try again</span> with a GIF, JPEG, JPG or PNG.
        </span>
      </span>
      <span class="error repository-required">
        We don’t support that file type.
        <span class="drag-and-drop-error-info">
          <span class="btn-link">Try again</span> with a GIF, JPEG, JPG or PNG.
        </span>
      </span>
      <span class="error too-big">
        Yowza, that’s a big file
        <span class="drag-and-drop-error-info">
          <span class="btn-link">Try again</span> with a file smaller than 10MB.
        </span>
      </span>
      <span class="error empty">
        This file is empty.
        <span class="drag-and-drop-error-info">
          <span class="btn-link">Try again</span> with a file that’s not empty.
        </span>
      </span>
      <span class="error hidden-file">
        This file is hidden.
        <span class="drag-and-drop-error-info">
          <span class="btn-link">Try again</span> with another file.
        </span>
      </span>
      <span class="error failed-request">
        Something went really wrong, and we can’t process that file.
        <span class="drag-and-drop-error-info">
          <span class="btn-link">Try again.</span>
        </span>
      </span>
    </span>
    <span class="tooltipped tooltipped-nw" aria-label="Styling with Markdown is supported">
      <a
        class="muted-link position-relative d-inline"
        href="https://guides.github.com/features/mastering-markdown/"
        target="_blank"
        data-ga-click="Markdown Toolbar, click, help"
        aria-label="Learn about styling with Markdown"
        
      >
        <svg class="octicon octicon-markdown v-align-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg>
      </a>
    </span>
  </label>

    </div>
</file-attachment>
  <div role="tabpanel" class="js-preview-panel overflow-auto border-bottom mx-2 mb-2" hidden>
    <input type="hidden" name="path" value="" class="js-path">
    <input type="hidden" name="line" value="" class="js-line-number">
    <input type="hidden" name="start_line" value="" class="js-start-line-number">
    <input type="hidden" name="preview_side" value="" class="js-side">
    <input type="hidden" name="preview_start_side" value="" class="js-start-side">
    <input type="hidden" name="start_commit_oid" value="" class="js-start-commit-oid">
    <input type="hidden" name="end_commit_oid" value="" class="js-end-commit-oid">
    <input type="hidden" name="base_commit_oid" value="" class="js-base-commit-oid">
    <input type="hidden" name="comment_id" value="" class="js-comment-id">
    <div class="comment js-suggested-changes-container" data-thread-side="">
  <div class="comment-body markdown-body js-preview-body" >
    <p>Nothing to preview</p>
  </div>
</div>

  </div>



  <div class="comment-form-error mb-2 js-comment-update-error" hidden></div>
</tab-container>

      <input type="text" name="required_field_2599" hidden="hidden" class="form-control" /><input type="hidden" name="timestamp" value="1588962535269" class="form-control" /><input type="hidden" name="timestamp_secret" value="05ce894e5547a6a0b2cf3b64323bd4e24a747569c22e732feea18c5c809c9d16" class="form-control" />
      <div class="form-actions">
        <div id="partial-new-comment-form-actions">
  <button type="submit" class="btn btn-primary" data-disable-with data-disable-invalid>
    Comment
  </button>
</div>

      </div>
    </div>
</form></div>

        </div>
      </div>
    </div>
</div>
  </div>
</div><!-- /.container -->

    </main>
  </div>

  </div>

        
<div class="footer container-lg width-full px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2020 GitHub, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>

    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" async="async" integrity="sha512-WcQmT2vhcClFVOaaAJV/M+HqsJ2Gq/myvl6F3gCVBxykazXTs+i5fvxncSXwyG1CSfcrqmLFw/R/bmFYzprX2A==" type="application/javascript" id="js-conditional-compat" data-src="https://github.githubassets.com/assets/compat-bootstrap-59c4264f.js"></script>
    <script crossorigin="anonymous" integrity="sha512-Qb7XHcWIafGt8U6FsJrxJqGCgszwjKK1zXv1+fAjIz0HDaYppswlGLxEInNMN2dlMBAZnZNSZL8wAvvhKxYx3A==" type="application/javascript" src="https://github.githubassets.com/assets/environment-bootstrap-41bed71d.js"></script>
    
    
    
    
    
        <script crossorigin="anonymous" async="async" integrity="sha512-giz24I8W4iCuKcP9gFUnBpswiTkpzhClhuGWjWfMlaETANKzGjEKay01LSaXNJBT9ATphqqH75XJ5mxT9JcY+w==" type="application/javascript" src="https://github.githubassets.com/assets/gist-vendor-822cf6e0.js"></script>
    <script crossorigin="anonymous" async="async" integrity="sha512-x3Ph7sPDv+2x85+/K4j1OR6UJRfzY07A0YzGRTnHc/QvPwnF1A16BD5LD96ciffHQJUMz2dlhHcwwmduqUzIqg==" type="application/javascript" src="https://github.githubassets.com/assets/drag-drop-c773e1ee.js"></script>
  <script crossorigin="anonymous" async="async" integrity="sha512-jIsZTmDG1qDqVUFxkByD2pyQz5Rz+DCHkB1VGviv0PDTVXWTy5zx40+dReYbGpsqYaszlLlgutDGqlx693QcLQ==" type="application/javascript" src="https://github.githubassets.com/assets/gist-bootstrap-8c8b194e.js"></script>

    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>


  </body>
</html>

