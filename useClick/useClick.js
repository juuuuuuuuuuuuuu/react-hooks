export const useClick = onClick => {
  if (typeof onClick !== "function") return;
  const element = useRef();
  useEffect(() => {
    element.current && element.current.addEventListener("click", onClick);
    return () => {
      element.current && element.current.removeEventListener("click", onClick);
    };
  }, []);
  return element;
};