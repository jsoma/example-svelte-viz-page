<script>
  import Title from "./_components/Title.svelte"
  import Ai2html from "./_components/Ai2html.svelte"
  import { LayerCake, Svg } from "layercake"

  import Line from "./_components/Line.svelte"
  import Area from "./_components/Area.svelte"
  import AxisX from "./_components/AxisX.svelte"
  import AxisY from "./_components/AxisY.svelte"

  import points from "./_data/points.csv"
</script>

<style>
  .container {
    max-width: 960px;
    margin: 0 auto;
	  padding: 0 2em;
  }

  .chart-container {
    max-width: 500px;
    height: 200px;
    margin: 0 auto;
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    padding: 1.3em 0;
    font-size: 16px;
    line-height: 1.6;
  }
</style>

<Title title="This is our webpage with some content on it" subtitle="It even includes graphics! Isn't it amazing?" />

<div class="container">
	<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus enim, hendrerit eu risus a, convallis semper
    erat. Vestibulum id tristique massa, fermentum efficitur felis.
  </p>
  <p>Aliquam laoreet ultricies tortor nec euismod.</p>
  <p>
    This example here is using <a href="https://layercake.graphics/">layercake</a>
    to build a graphic from
    <a href="https://github.com/jsoma/example-svelte-viz-page/blob/main/src/routes/_data/points.csv">points.csv</a>
  </p>

  <div class="chart-container">
    <LayerCake padding={{ right: 10, bottom: 20, left: 25 }} x={"year"} y={"amount"} yDomain={[0, null]} data={points}>
      <Svg>
        <AxisX />
        <AxisY />
        <Line />
        <Area />
      </Svg>
    </LayerCake>
  </div>

  <p>
    Fusce a nisl finibus, finibus dui eu, maximus nunc. Ut pharetra sem rhoncus velit vulputate, nec mollis justo
    pharetra.
  </p>
  <p>Down here we're going to embed some ai2html content.</p>

  <Ai2html name="countries" description="An example chart to show off the framework" />

  <p>And maybe another LayerCake chart?</p>
  <p>This time we'll play with <strong>the options</strong> a little bit. While you can read <a href="https://layercake.graphics/guide">the documentation</a> if you'd like, you can also just take a look at <a href="https://github.com/jsoma/example-svelte-viz-page/tree/main/src/routes/_components">the components' code</a> to see if you can figure the options out.</p>

  <div class="chart-container">
    <LayerCake padding={{ right: 0, bottom: 20, left: 0 }} yDomain={[0, 15]}  x={"year"} y={"amount"} data={points}>
      <Svg>
        <Line stroke='black' />
        <Area fill='#FFFB7D' />
        <AxisY dxTick=10 />
      </Svg>
    </LayerCake>
  </div>

</div>

<Title title="We can even add another title if we want!" subtitle="I'm not sure why we would, but we can." />