<script>
    export let title;
    export let subtitle;
</script>

<style>
h1 {
    font-size: 3em;
    margin-top: 0;
}

h3 {
    font-style: italic;
    font-weight: normal;
    padding-top: 1em;
}

h1, h3 {
    max-width: 700px;
    margin: 0 auto;
}

div {
    padding: 2em;
    background-color: #85FFBD;
    background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
}
</style>

<div>
    <h1>{title}</h1>
    <h3>{subtitle}</h3>
</div>