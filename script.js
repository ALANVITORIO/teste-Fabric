document.addEventListener('DOMContentLoaded', function () {
  const canvas = new fabric.Canvas('c');
  const canvas1 = new fabric.Canvas('c1');

  // fruta
  fabric.Image.fromURL('fruta.webp', function (oImg) {
    oImg.scaleToWidth(200);
    oImg.scaleToHeight(200);
    oImg.set({ left: 200, top: 200, angle: 0 });
    oImg.set({ transformMatrix: [1, 0, 0.5, 1, 0, 0] });

    canvas.add(oImg);
  });

  // carro
  fabric.Image.fromURL('bmw.webp', function (oImg) {
    oImg.scaleToWidth(200);
    oImg.scaleToHeight(200);
    oImg.set({ left: 50, top: 50, angle: 0 });

    canvas.add(oImg);
  });

  //computador
  fabric.Image.fromURL('pc.webp', function (oImg) {
    oImg.scaleToWidth(200);
    oImg.scaleToHeight(200);
    oImg.set({ left: 350, top: 50, angle: 0 });

    canvas.add(oImg);
  });

  //outro canvas

  // Criar o circulo com o texto no (c1)
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
});

//responsividade

window.addEventListener('resize', function () {
  canvas.setWidth(document.getElementById('c').clientWidth);
  canvas.setHeight(document.getElementById('c').clientHeight);
  canvas1.setWidth(document.getElementById('c1').clientWidth);
  canvas1.setHeight(document.getElementById('c1').clientHeight);
  canvas.renderAll();
  canvas1.renderAll();
});
