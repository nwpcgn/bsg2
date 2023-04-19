<script>
  import { Layer } from "svelte-canvas";
  export let bgs = [
    [
      "./img/s2/1/1.jpg",
      "./img/s2/1/2.jpg",
      "./img/s2/1/3.jpg",
      "./img/s2/1/4.jpg",
      "./img/s2/1/5.jpg",
      "./img/s2/1/6.jpg",
      "./img/s2/1/7.jpg",
      "./img/s2/1/8.jpg",
      "./img/s2/1/9.jpg",
    ],
    [
      "./img/s2/2/1.jpg",
      "./img/s2/2/2.jpg",
      "./img/s2/2/3.jpg",
      "./img/s2/2/4.jpg",
      "./img/s2/2/5.jpg",
      "./img/s2/2/6.jpg",
      "./img/s2/2/7.jpg",
      "./img/s2/2/8.jpg",
      "./img/s2/2/9.jpg",
    ],
    [
      "./img/s2/3/1.jpg",
      "./img/s2/3/2.jpg",
      "./img/s2/3/3.jpg",
      "./img/s2/3/4.jpg",
      "./img/s2/3/5.jpg",
      "./img/s2/3/6.jpg",
      "./img/s2/3/7.jpg",
      "./img/s2/3/8.jpg",
      "./img/s2/3/9.jpg",
    ],
    [
      "./img/s2/4/1.jpg",
      "./img/s2/4/2.jpg",
      "./img/s2/4/3.jpg",
      "./img/s2/4/4.jpg",
      "./img/s2/4/5.jpg",
      "./img/s2/4/6.jpg",
      "./img/s2/4/7.jpg",
      "./img/s2/4/8.jpg",
      "./img/s2/4/9.jpg",
    ],
    [
      "./img/s2/5/1.jpg",
      "./img/s2/5/2.jpg",
      "./img/s2/5/3.jpg",
      "./img/s2/5/4.jpg",
      "./img/s2/5/5.jpg",
      "./img/s2/5/6.jpg",
      "./img/s2/5/7.jpg",
      "./img/s2/5/8.jpg",
      "./img/s2/5/9.jpg",
    ],
    [
      "./img/s2/6/1.jpg",
      "./img/s2/6/2.jpg",
      "./img/s2/6/3.jpg",
      "./img/s2/6/4.jpg",
      "./img/s2/6/5.jpg",
      "./img/s2/6/6.jpg",
      "./img/s2/6/7.jpg",
      "./img/s2/6/8.jpg",
      "./img/s2/6/9.jpg",
    ],
  ];
  export let step = 0;
  export let set = 0;
  $: render = ({ context, width, height }) => {
    let imageObj = new Image();
    imageObj.src = bgs[set][step];
    imageObj.onload = () => {
      let imgWidth = imageObj.width;
      let imgHeight = imageObj.height;
      let ratioHeight = imgHeight / height;
      let ratioWidth = imgWidth / width;
      let ratioAspect =
        ratioWidth > 1 ? ratioWidth : ratioHeight > 1 ? ratioHeight : 1;
      let newHeight = imgHeight / ratioAspect;
      let newWidth = imgWidth / ratioAspect;
      let offsetX = width / 2 - newWidth / 2;
      let offsetY = 0;
      context.drawImage(imageObj, offsetX, offsetY, newWidth, newHeight);
    };
  };
</script>

<Layer {render} />
