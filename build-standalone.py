from pathlib import Path
import base64

root = Path(__file__).parent / "app" / "public" / "assets"
template = (Path(__file__).parent / "amen-stor-standalone.template.html").read_text()
logo = base64.b64encode((Path(__file__).parent / "app" / "public" / "amen-logo.svg").read_bytes()).decode("ascii")
template = template.replace('./amen-logo.svg', f'data:image/svg+xml;base64,{logo}')
sources = {
    "hero": root / "amen-editorial" / "hero.jpg",
    "look": root / "amen-editorial" / "look.jpg",
    "tee": root / "amen-editorial" / "tee-still.jpg",
    "editorial02": root / "amen-editorial" / "editorial-02.jpg",
    "editorial03": root / "amen-editorial" / "editorial-03.jpg",
    "detail": root / "loomere" / "detail.png",
    "product": root / "loomere" / "product.png",
    "prodCap": root / "products" / "amen-corduroy-cap.jpg",
    "prodStrapback": root / "products" / "amen-strapback-hat.jpg",
    "prodBarcodeBlack": root / "products" / "amen-barcode-black-tee.jpg",
    "prodBarcodeCream": root / "products" / "amen-barcode-cream-tee.jpg",
    "prodSunriseBlack": root / "products" / "amen-sunrise-black-tee.jpg",
    "prodSunriseBlue": root / "products" / "amen-sunrise-blue-tee.jpg",
    "prodBucket": root / "products" / "amen-reversible-bucket-hat.jpg",
    "prodLongSleeve": root / "products" / "amen-logo-cropped-long-sleeve.jpg",
}
for name, path in sources.items():
    ext = path.suffix.lstrip(".")
    encoded = base64.b64encode(path.read_bytes()).decode("ascii")
    template = template.replace(f'data-asset="{name}"', f'src="data:image/{"jpeg" if ext == "jpg" else ext};base64,{encoded}"')
    template = template.replace(f'data-product="{name}"', f'src="data:image/{"jpeg" if ext == "jpg" else ext};base64,{encoded}"')
video = base64.b64encode((root / "amen-editorial" / "hero-motion.mp4").read_bytes()).decode("ascii")
template = template.replace('data-video="hero"', f'src="data:video/mp4;base64,{video}"')
(Path(__file__).parent / "amen-stor-standalone.html").write_text(template)
