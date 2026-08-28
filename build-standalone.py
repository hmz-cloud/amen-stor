from pathlib import Path
import base64

root = Path(__file__).parent / "app" / "public" / "assets" / "loomere"
template = (Path(__file__).parent / "amen-stor-standalone.template.html").read_text()
for name, ext in {"hero":"jpg", "look":"jpg", "detail":"png", "product":"png"}.items():
    path = root / f"{name}.{ext}"
    encoded = base64.b64encode(path.read_bytes()).decode("ascii")
    template = template.replace(f'data-asset="{name}"', f'src="data:image/{"jpeg" if ext == "jpg" else ext};base64,{encoded}"')
    template = template.replace(f'data-product="{name}"', f'src="data:image/{"jpeg" if ext == "jpg" else ext};base64,{encoded}"')
(Path(__file__).parent / "amen-stor-standalone.html").write_text(template)
