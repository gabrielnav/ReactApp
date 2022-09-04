/*const [counter, setCounter] = useState(0)

useEffect( () => {
  console.log('Efecto al montaje y cambio en counter');
  // no usar aquí -> setCounter() generará loop infinito
}, [counter])

useEffect( () => {
  console.log('Efecto en cada render');
})

const handleClick = () => {
  console.log('hiciste click');
  setCounter( counter + 1 ) // counter++ -> counter = counter + 1
}

console.log('Hubo render');*/