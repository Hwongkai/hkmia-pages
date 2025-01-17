<!DOCTYPE html><html lang="en" ver=""><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"><meta http-equiv="Pragma" content="no-cache"><meta http-equiv="Expires" content="0"><meta name="robots" content="nofollow,noindex,noarchive"><meta name="hotcss" content="max-width=0"><title></title><script>(function (window, document) {

      'use strict';

      //给hotcss开辟个命名空间，别问我为什么，我要给你准备你会用到的方法，免得用到的时候还要自己写。
      var hotcss = {};

      (function () {
        //根据devicePixelRatio自定计算scale
        //可以有效解决移动端1px这个世纪难题。
        var viewportEl = document.querySelector('meta[name="viewport"]'),
          hotcssEl = document.querySelector('meta[name="hotcss"]'),
          dpr = window.devicePixelRatio || 1,
          maxWidth = 540,
          designWidth = 0;

        dpr = dpr >= 3 ? 3 : (dpr >= 2 ? 2 : 1);

        //允许通过自定义name为hotcss的meta头，通过initial-dpr来强制定义页面缩放
        if (hotcssEl) {
          var hotcssCon = hotcssEl.getAttribute('content');
          if (hotcssCon) {
            var initialDprMatch = hotcssCon.match(/initial\-dpr=([\d\.]+)/);
            if (initialDprMatch) {
              dpr = parseFloat(initialDprMatch[1]);
            }
            var maxWidthMatch = hotcssCon.match(/max\-width=([\d\.]+)/);
            if (maxWidthMatch) {
              maxWidth = parseFloat(maxWidthMatch[1]);
            }
            var designWidthMatch = hotcssCon.match(/design\-width=([\d\.]+)/);
            if (designWidthMatch) {
              designWidth = parseFloat(designWidthMatch[1]);
            }
          }
        }

        document.documentElement.setAttribute('data-dpr', dpr);
        hotcss.dpr = dpr;

        document.documentElement.setAttribute('max-width', maxWidth);
        hotcss.maxWidth = maxWidth;

        if (designWidth) {
          document.documentElement.setAttribute('design-width', designWidth);
          hotcss.designWidth = designWidth;
        }

        var scale = 1 / dpr,
          content = 'width=device-width, initial-scale=' + scale +
          ', minimum-scale=' + scale + ', maximum-scale=' +
          scale + ', user-scalable=no';

        if (viewportEl) {
          viewportEl.setAttribute('content', content);
        } else {
          viewportEl = document.createElement('meta');
          viewportEl.setAttribute('name', 'viewport');
          viewportEl.setAttribute('content', content);
          document.head.appendChild(viewportEl);
        }

      })();

      hotcss.px2rem = function (px, designWidth) {
        //预判你将会在JS中用到尺寸，特提供一个方法助你在JS中将px转为rem。就是这么贴心。
        if (!designWidth) {
          //如果你在JS中大量用到此方法，建议直接定义 hotcss.designWidth 来定义设计图尺寸;
          //否则可以在第二个参数告诉我你的设计图是多大。
          designWidth = parseInt(hotcss.designWidth, 10);
        }

        return parseInt(px, 10) * 320 / designWidth / 20;
      }

      hotcss.rem2px = function (rem, designWidth) {
        //新增一个rem2px的方法。用法和px2rem一致。
        if (!designWidth) {
          designWidth = parseInt(hotcss.designWidth, 10);
        }
        //rem可能为小数，这里不再做处理了
        return rem * 20 * designWidth / 320;
      }

      hotcss.mresize = function () {
        //对，这个就是核心方法了，给HTML设置font-size。
        var innerWidth = document
          .documentElement
          .getBoundingClientRect().width || window.innerWidth;

        if (hotcss.maxWidth && (innerWidth / hotcss.dpr > hotcss.maxWidth)) {
          innerWidth = hotcss.maxWidth * hotcss.dpr;
        }

        if (!innerWidth) {
          return false;
        }

        document.documentElement.style.fontSize = (innerWidth * 20 / 320) + 'px';

        hotcss.callback && hotcss.callback();

      };

      hotcss.mresize();
      //直接调用一次

      window.addEventListener('resize', function () {
        clearTimeout(hotcss.tid);
        hotcss.tid = setTimeout(hotcss.mresize, 33);
      }, false);
      //绑定resize的时候调用

      window.addEventListener('load', hotcss.mresize, false);
      //防止不明原因的bug。load之后再调用一次。


      setTimeout(function () {
        hotcss.mresize();
        //防止某些机型怪异现象，异步再调用一次
      }, 333)

      window.hotcss = hotcss;
      //命名空间暴露给你，控制权交给你，想怎么调怎么调。


    })(window, document);

    var $SRC_IMAGE = Image;

    Image = function() {
      var img = new $SRC_IMAGE()

      var hooks = [];

      img.onload = function() {
        hooks.forEach(function(cb) {
          cb();
        });
      };

      window.$ADD_IMAGE_ONLOAD_HOOK = function(cb) {
        hooks.push(cb);
      };

      return img;
    }</script><link href="/css/complain-send.38167114.css" rel="prefetch"><link href="/css/complain-send~placeholder-detail~record-form~record-form-list~record-history~status-log-list~view-code.5eda403b.css" rel="prefetch"><link href="/css/complain-success.7740cc9e.css" rel="prefetch"><link href="/css/complain.cdd05ccb.css" rel="prefetch"><link href="/css/modify-record-rule-test.bb00c1c9.css" rel="prefetch"><link href="/css/modify-record-rule.3ad3f11f.css" rel="prefetch"><link href="/css/placeholder-detail.acb47410.css" rel="prefetch"><link href="/css/placeholder-detail~record-form~record-form-list~view-code.38d35e8b.css" rel="prefetch"><link href="/css/recent-batch-code.e48c73d3.css" rel="prefetch"><link href="/css/record-form-list.e971fece.css" rel="prefetch"><link href="/css/record-form-list~view-code.bf417464.css" rel="prefetch"><link href="/css/record-form.ceefd4d4.css" rel="prefetch"><link href="/css/record-history.ec1bc36e.css" rel="prefetch"><link href="/css/record-history~status-log-list~view-code.e1af77b1.css" rel="prefetch"><link href="/css/shunt-info.98808718.css" rel="prefetch"><link href="/css/status-detail.3d9c5f31.css" rel="prefetch"><link href="/css/status-log-list.76e1a3a5.css" rel="prefetch"><link href="/css/view-code.69e0b3b3.css" rel="prefetch"><link href="/css/wxwork-admin.aba60036.css" rel="prefetch"><link href="/js/complain-send.4487a9a4.js" rel="prefetch"><link href="/js/complain-send~placeholder-detail~record-form~record-form-list~record-history~status-log-list~view-code.17080d49.js" rel="prefetch"><link href="/js/complain-success.831b8df3.js" rel="prefetch"><link href="/js/complain.1b614e22.js" rel="prefetch"><link href="/js/modify-record-rule-test.e5a60498.js" rel="prefetch"><link href="/js/modify-record-rule.0970c704.js" rel="prefetch"><link href="/js/placeholder-detail.7e5b4b0e.js" rel="prefetch"><link href="/js/placeholder-detail~record-form~record-form-list~view-code.d0cd1432.js" rel="prefetch"><link href="/js/recent-batch-code.934230ed.js" rel="prefetch"><link href="/js/record-form-list.8b5a9fca.js" rel="prefetch"><link href="/js/record-form-list~view-code.13c9d1d4.js" rel="prefetch"><link href="/js/record-form.779b1350.js" rel="prefetch"><link href="/js/record-history.2b81254b.js" rel="prefetch"><link href="/js/record-history~status-log-list~view-code.3b10b1d7.js" rel="prefetch"><link href="/js/shunt-info.e6cd1cae.js" rel="prefetch"><link href="/js/status-detail.3ee7ad1a.js" rel="prefetch"><link href="/js/status-log-list.a8c26669.js" rel="prefetch"><link href="/js/view-code.f73dc6d1.js" rel="prefetch"><link href="/js/wxwork-admin.aec03df1.js" rel="prefetch"><link href="/css/chunk-common.6664e3e2.css" rel="preload" as="style"><link href="/css/chunk-vendors.f598884b.css" rel="preload" as="style"><link href="/css/index.22dc6772.css" rel="preload" as="style"><link href="/js/chunk-common.06a750e3.js" rel="modulepreload" as="script"><link href="/js/chunk-vendors.7779f1d6.js" rel="modulepreload" as="script"><link href="/js/index.2950a93a.js" rel="modulepreload" as="script"><link href="/css/chunk-vendors.f598884b.css" rel="stylesheet"><link href="/css/chunk-common.6664e3e2.css" rel="stylesheet"><link href="/css/index.22dc6772.css" rel="stylesheet"></head><body><div id="app"></div><script>var __indexUtils = {
      loadJs: function (url) {
        var script = document.createElement('script');

        script.type = "text/javascript";
        script.src = url;

        document.body.appendChild(script);
      },
      getUrlParaNav: function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return 0;
      },
      compareVersion: function(a, b) {
        if (a === b) {
          return true;
        }
        const aArr = a.split('.');
        const bArr = b.split('.');
        const maxLen = Math.max(aArr.length, bArr.length);
        if (aArr.length < maxLen) {
          // eslint-disable-next-line no-plusplus
          for (let i = aArr.length; i < maxLen; i++) {
            aArr[i] = 0;
          }
        } else if (bArr.length < maxLen) {
          // eslint-disable-next-line no-plusplus
          for (let i = bArr.length; i < maxLen; i++) {
            bArr[i] = 0;
          }
        }
        /* const newA = aArr.join('');
        const newB = bArr.join('');
        return Number(newA) >= Number(newB); */
        let result = false;
        // eslint-disable-next-line no-plusplus
        for (let i = 0, len = aArr.length; i < len; i++) {
          const numA = Number(aArr[i]);
          const numB = Number(bArr[i]);
          if (numA < numB) {
            break;
          }
          if (numA > numB) {
            result = true;
            break;
          }
        }
        return result;
      },
      qiYeWxVersion: function() {
        const u = navigator.userAgent;
        const info = u.match(/WxWork\/([/\d/.]+)/i);

        if (info) {
          return info[1];
        }

        return '';
      },
      isEnableQiWxToMina: function() {
        const flag = !!__indexUtils.qiYeWxVersion() && __indexUtils.compareVersion(__indexUtils.qiYeWxVersion(), '3.0.36');
        return flag;
      },
      isInQiYeWeixin: function() {
        const browser = navigator.userAgent;
        const isQiYeWeixin = browser.match(/wxwork\//i);

        return !!isQiYeWeixin;
      },
    }
    // function loadJs(url){
    //   var script = document.createElement('script');

    //   script.type = "text/javascript";
    //   script.src = url;

    //   document.body.appendChild(script);
    // }

    // function compareVersion(a, b) {
    //   if (a === b) {
    //     return true;
    //   }
    //   const aArr = a.split('.');
    //   const bArr = b.split('.');
    //   const maxLen = Math.max(aArr.length, bArr.length);
    //   if (aArr.length < maxLen) {
    //     // eslint-disable-next-line no-plusplus
    //     for (let i = aArr.length; i < maxLen; i++) {
    //       aArr[i] = 0;
    //     }
    //   } else if (bArr.length < maxLen) {
    //     // eslint-disable-next-line no-plusplus
    //     for (let i = bArr.length; i < maxLen; i++) {
    //       bArr[i] = 0;
    //     }
    //   }
    //   /* const newA = aArr.join('');
    //   const newB = bArr.join('');
    //   return Number(newA) >= Number(newB); */
    //   let result = false;
    //   // eslint-disable-next-line no-plusplus
    //   for (let i = 0, len = aArr.length; i < len; i++) {
    //     const numA = Number(aArr[i]);
    //     const numB = Number(bArr[i]);
    //     if (numA < numB) {
    //       break;
    //     }
    //     if (numA > numB) {
    //       result = true;
    //       break;
    //     }
    //   }
    //   return result;
    // }

    // function qiYeWxVersion() {
    //   const u = navigator.userAgent;
    //   const info = u.match(/WxWork\/([/\d/.]+)/i);

    //   if (info) {
    //     return info[1];
    //   }

    //   return '';
    // }

    // function isEnableQiWxToMina() {
    //   const flag = !!qiYeWxVersion() && compareVersion(qiYeWxVersion(), '3.0.36');
    //   return flag;
    // }

    // function isInQiYeWeixin() {
    //   const browser = navigator.userAgent;
    //   const isQiYeWeixin = browser.match(/wxwork\//i);

    //   return !!isQiYeWeixin;
    // };

    var isFromPc = __indexUtils.getUrlParaNav("frompc");

    if ((__indexUtils.isInQiYeWeixin() && __indexUtils.isEnableQiWxToMina()) || isFromPc) {
      __indexUtils.loadJs("https://res.wx.qq.com/open/js/jweixin-1.2.0.js");
      __indexUtils.loadJs("https://open.work.weixin.qq.com/wwopen/js/jwxwork-1.0.0.js");
    } else {
      __indexUtils.loadJs("https://res.wx.qq.com/open/js/jweixin-1.6.0.js");
    }</script><script charset="utf-8" src="https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js"></script><script charset="utf-8" src="https://map.qq.com/api/js?v=2.exp&key=4OBZ-5ZYWW-QP4RP-RLNNW-NTBNE-USBLB"></script><script src="//static.clewm.net/cli/js/lib/fastclick.min.js"></script><script>if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
    }, false);
  }
  // new VConsole();</script><script>var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?fe4f5e280909f693f7a8cf31a2d9fc30";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();</script><script>var _mtac = {};
    (function() {
        var mta = document.createElement("script");
        mta.src = "//static.clewm.net/cli/js/lib/stats/qqstats-2.0.4.js";
        mta.setAttribute("name", "MTAH5");
        mta.setAttribute("sid", "500728197");
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(mta, s);
    })();</script><script>var _hmt = _hmt || [];
    (function() {
      const browser = navigator.userAgent;
      const isQiYeWeixin = browser.match(/wxwork\//i);
      if (!isQiYeWeixin) {
        var hm = document.createElement("script");
        hm.src = "//static.clewm.net/public/cli_analytics.js?v=";
        hm.defer = true;
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      }
    })();</script><script src="./src/main.ts" type="module"></script><script type="module" src="/js/chunk-vendors.7779f1d6.js"></script><script type="module" src="/js/chunk-common.06a750e3.js"></script><script type="module" src="/js/index.2950a93a.js"></script><script>!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();</script><script src="/js/chunk-vendors-legacy.150a1ed7.js" nomodule></script><script src="/js/chunk-common-legacy.15597edc.js" nomodule></script><script src="/js/index-legacy.83ac48ac.js" nomodule></script></body></html>