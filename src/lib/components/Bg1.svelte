<script>
  import { Layer } from "svelte-canvas";
  const bgs = [
    "./img/s2/2/1.jpg",
    "./img/s2/2/2.jpg",
    "./img/s2/2/3.jpg",
    "./img/s2/2/4.jpg",
    "./img/s2/2/5.jpg",
    "./img/s2/2/6.jpg",
    "./img/s2/2/7.jpg",
    "./img/s2/2/8.jpg",
    "./img/s2/2/9.jpg",
  ];
  export let step = 0;

  $: render = ({ context, width, height }) => {
    let imageObj = new Image();
    imageObj.src = bgs[step];
    imageObj.onload = () => {
      let imgWidth = imageObj.width;
      let imgHeight = imageObj.height;
      let ratioHeight = imgHeight / height;
      let ratioWidth = imgWidth / width;

      let ratioAspect =
        ratioWidth > 1 ? ratioWidth : ratioHeight > 1 ? ratioHeight : 1;
      let newHeight = imgHeight / ratioAspect;
      let newWidth = imgWidth / ratioAspect;

      let offsetX = width / 2 - newWidth / 2,
        offsetY = 0;
      context.drawImage(imageObj, offsetX, offsetY, newWidth, newHeight);
    };
  };
</script>

<Layer {render} />
