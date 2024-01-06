document.addEventListener('DOMContentLoaded', function () {
  const canvas = new fabric.Canvas('c');
  const canvas1 = new fabric.Canvas('c1');

  fabric.Image.fromURL('fruta.webp', function (oImg) {
    oImg.scaleToWidth(200);
    oImg.scaleToHeight(200);
    oImg.set({ left: 200, top: 200, angle: 0 });
    canvas.add(oImg);
  });

  fabric.Image.fromURL('bmw.webp', function (oImg) {
    oImg.scaleToWidth(200);
    oImg.scaleToHeight(200);
    oImg.set({ left: 50, top: 50, angle: 0 });
    canvas.add(oImg);
  });

  fabric.Image.fromURL('pc.webp', function (oImg) {
    oImg.scaleToWidth(200);
    oImg.scaleToHeight(200);
    oImg.set({ left: 350, top: 50, angle: 0 });
    canvas.add(oImg);
  });

  const text = new fabric.Text('hello world', {
    fontSize: 30,
    originX: 'center',
    originY: 'center',
  });

  const circle = new fabric.Circle({
    radius: 100,
    fill: '#eef',
    originX: 'center',
    originY: 'center',
  });

  const group = new fabric.Group([circle, text], {
    left: 150,
    top: 100,
    angle: -10,
  });

  canvas1.add(group);
  canvas1.renderAll();

  var controlPoints = [
    new fabric.Circle({
      left: 200,
      top: 200,
      radius: 5,
      fill: 'red',
      hasControls: false,
    }),
    new fabric.Circle({
      left: 400,
      top: 200,
      radius: 5,
      fill: 'red',
      hasControls: false,
    }),
    new fabric.Circle({
      left: 200,
      top: 400,
      radius: 5,
      fill: 'red',
      hasControls: false,
    }),
    new fabric.Circle({
      left: 400,
      top: 400,
      radius: 5,
      fill: 'red',
      hasControls: false,
    }),
  ];

  controlPoints.forEach(function (point) {
    canvas.add(point);
  });
});
