from pathlib import Path
import base64

root = Path(__file__).parent / "app" / "public" / "assets"
template = (Path(__file__).parent / "amen-stor-standalone.template.html").read_text()
sources = {
    "hero": root / "amen-editorial" / "hero.jpg",
    "look": root / "amen-editorial" / "look.jpg",
    "detail": root / "loomere" / "detail.png",
    "product": root / "loomere" / "product.png",
}
for name, path in sources.items():
    ext = path.suffix.lstrip(".")
    encoded = base64.b64encode(path.read_bytes()).decode("ascii")
    template = template.replace(f'data-asset="{name}"', f'src="data:image/{"jpeg" if ext == "jpg" else ext};base64,{encoded}"')
    template = template.replace(f'data-product="{name}"', f'src="data:image/{"jpeg" if ext == "jpg" else ext};base64,{encoded}"')
video = base64.b64encode((root / "amen-editorial" / "hero-motion.mp4").read_bytes()).decode("ascii")
template = template.replace('data-video="hero"', f'src="data:video/mp4;base64,{video}"')
(Path(__file__).parent / "amen-stor-standalone.html").write_text(template)
