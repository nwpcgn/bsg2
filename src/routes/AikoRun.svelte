<script>
  export let run;
  const handleAniEnd = () => {
    run = false;
  };
</script>

<figure class="aiko-move" on:animationend={handleAniEnd}>
  <div class:run id="aiko" />
</figure>

<style>
  figure {
    margin-bottom: 0;
  }
  #aiko {
    width: 130px;
    height: 180px;
    background: url("./img/aiko.png");
  }
  .aiko-move {
    position: absolute;
    display: inline-block;
    z-index: 10;
    bottom: 0;
    left: 0;
    animation: aikomove 2.5s forwards linear;
  }

  @keyframes aikomove {
    0% {
      left: -130px;
    }

    100% {
      left: 100vw;
    }
  }
  #aiko.run,
  #aiko:hover {
    /* -webkit-animation: animAiko 0.8s steps(10) forwards; */
    -webkit-animation: animAiko 0.8s steps(10) infinite;
  }
  @-webkit-keyframes animAiko {
    0% {
      background-position-x: 0;
    }

    100% {
      background-position-x: -1300px;
    }
  }

  /* -webkit-animation: play .8s steps(10) infinite;
       -moz-animation: play .8s steps(10) infinite;
        -ms-animation: play .8s steps(10) infinite;
         -o-animation: play .8s steps(10) infinite;
            animation: play .8s steps(10) infinite; */
</style>
