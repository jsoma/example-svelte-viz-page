<script>
	import { LayerCake, Svg } from 'layercake';
	import Ai2html from './_components/Ai2html.svelte';

	import Line from './_components/Line.svelte';
	import Area from './_components/Area.svelte';
	import AxisX from './_components/AxisX.svelte';
	import AxisY from './_components/AxisY.svelte';

	import points from './_data/points.csv';
</script>

<style>
	.container {
		max-width: 960px;
		margin: 0 auto;
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

<div class="container">
	<h1>This is our webpage with some content in it</h1>

	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus enim, hendrerit eu risus a, convallis semper erat. Vestibulum id tristique massa, fermentum efficitur felis.</p>
	<p>Aliquam laoreet ultricies tortor nec euismod.</p>
	<p>This example here is using <a href="https://layercake.graphics/">layercake</a> to build a graphic from <a href="https://github.com/jsoma/example-svelte-viz-page/blob/main/src/routes/_data/points.csv">points.csv</a></p>
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

	<p>Fusce a nisl finibus, finibus dui eu, maximus nunc. Ut pharetra sem rhoncus velit vulputate, nec mollis justo pharetra.</p>
	<p>Down here we're going to embed some ai2html content.</p>	

	<Ai2html name="countries" description="An example chart to show off the framework"></Ai2html>
</div>