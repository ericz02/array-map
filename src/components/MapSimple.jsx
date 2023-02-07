const items = [
    'item 1',
    'item 2',
    'item 3',
  ];
  
  const MapSimple = () => {
  
    return <ul>
      {items.map((item, index) => {
        return <li key={index}>{item.split('').reverse('').join('').toUpperCase()}</li>
      })}
  
    </ul>
  }
  
  export default MapSimple;