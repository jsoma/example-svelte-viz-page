This is an example of what a node-driven, Svelte-based visualization page might look like. You can see the "published" result at [https://jsoma.github.io/example-svelte-viz-page](https://jsoma.github.io/example-svelte-viz-page).

> In reality this is just [layercake-template](https://github.com/mhkeller/layercake-template) with a little extra magic sprinkled in.

## To use

```
npm install
npm run dev
```

Then take a peek at [http://localhost:3000](http://localhost:3000).

## To publish

```
npm run build
```

Commit + push up.

## To edit

The **main page** is found at [src/routes/index.svelte](src/routes/index.svelte)

Near the top, it is displaying a [layercake](https://layercake.graphics/) visual, which is a custom visualization library just for Svelte. This graphic appears thanks to the code below:

```svelte
<div class="chart-container">
    <LayerCake
        padding={{ right: 10, bottom: 20, left: 25 }}
        x={'year'}
        y={'amount'}
        yDomain={[0, null]}
        data={points}
    >
        <Svg>
            <AxisX/>
            <AxisY/>
            <Line/>
            <Area/>
        </Svg>
    </LayerCake>
</div>
```

Near the bottom is an **ai2html embed**. It is imported through the following lines:

```svelte
<Ai2html name="countries" description="An example chart to show off the framework"></Ai2html>
```

Instead of cutting and pasting all of the code into an HTML file, you drop the exports into [a folder for ai2html files](src/ai2html) and simply tell the component which file you want.

In this case, we're importing [`countries.svelte`](src/ai2html/countries.svelte) (which is just an export renamed from `.html` to `.svelte`).
