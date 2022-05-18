<script>
  import { onMount } from "svelte";
  export let name;
  export let description;
  let Visual;

  onMount(async () => {
    Visual = (await import(`../../ai2html/${name}.svelte`)).default;

    // only want one resizer on the page
    if (document.documentElement.className.indexOf("g-resizer-v3-init") > -1)
      return;
    document.documentElement.className += " g-resizer-v3-init";
    // require IE9+
    if (!("querySelector" in document)) return;
    function resizer() {
      var elements = Array.prototype.slice.call(
          document.querySelectorAll(".g-artboard[data-min-width]")
        ),
        widthById = {};
      elements.forEach(function (el) {
        var parent = el.parentNode,
          width = widthById[parent.id] || parent.getBoundingClientRect().width,
          minwidth = el.getAttribute("data-min-width"),
          maxwidth = el.getAttribute("data-max-width");
        widthById[parent.id] = width;

        if (+minwidth <= width && (+maxwidth >= width || maxwidth === null)) {
          el.style.display = "block";
        } else {
          el.style.display = "none";
        }
      });
    }

    // feel free to replace throttle with _.throttle, if available
    window.addEventListener("resize", throttle(resizer, 200));
    setTimeout(resizer, 250)

    function throttle(func, wait) {
      // from underscore.js
      var _now =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        context,
        args,
        result,
        timeout = null,
        previous = 0;
      var later = function () {
        previous = _now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      };
      return function () {
        var now = _now(),
          remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
          previous = now;
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        } else if (!timeout) {
          timeout = setTimeout(later, remaining);
        }
        return result;
      };
    }
  });
</script>

<div class="ai2html-container">
  <div class="sr-only">
    {description}
  </div>
  <div aria-hidden="true">
    <svelte:component this={Visual} />
  </div>
</div>

<style>
  .ai2html-container {
    padding-bottom: 1em;
  }

  .sr-only {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>
