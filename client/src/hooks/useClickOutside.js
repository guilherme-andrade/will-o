import { useEffect } from 'react'

export default function(node, handleClickOutside, excluded) {
  function handleClick(e) {
    if (node.current.contains(e.target) || isIncludedInExcludedNodes(e)) {
      return;
    }
    handleClickOutside(e)
  }

  function isIncludedInExcludedNodes(e) {
    if (!excluded) {
      return;
    }
    return excluded.some(node => node.current.contains(e.target))
  }

  return useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
}
