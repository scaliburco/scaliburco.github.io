clean:
    uv run -- nikola clean

build: clean
    uv run -- nikola build

serve: build
    uv run -- nikola serve
