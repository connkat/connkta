export function ToText(node) {
    let tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  }

  export function ShortenText(text, startingPoint, maxLength) {
    return text.length > maxLength
      ? text.slice(startingPoint, maxLength)
      : text;
  }
  