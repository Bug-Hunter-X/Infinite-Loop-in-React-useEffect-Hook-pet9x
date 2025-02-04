```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render, causing an infinite loop
    setCount(count + 1);
  }, []); // Empty dependency array means it runs only once, but still wrong

  return <div>Count: {count}</div>;
}
```