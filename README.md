# image-partisanship-react-ml-app









note to Jeremy 1/21/2020:
fine-tuned Fastai models require the "Shape" operator that onnx.js doesn't support so :(





















This pet project of mine serves as an end-to-end example of how to create a privacy-first machine learning application that runs in the browser. It demonstratetes how to train a PyTorch model with fastai, export it to ONNX format and run it in the browser using onnx.js inside a react app.

## Goal

## Demo

## The model

Trained in the ordinary FastAI way. Exported with:

```
learn.model.eval();
x = torch.randn(1, 3, 128, 128, requires_grad=False).cuda()
torch_out = torch.onnx._export(learn.model, x, "/content/gdrive/My Drive/data/fbads_images/image_partisanship.onnx", export_params=True)
```

## The Frontend

I copied https://github.com/davidpfahler/react-ml-app.

## The Backend

Therer is no backend! Because the model runs in the browser, you don't need a server that runs the model and you preserve your users privacy. You can have your 🎂 and eat it too!

## License and copyright

MIT.