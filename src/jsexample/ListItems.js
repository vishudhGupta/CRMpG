

// constructor(props){
//     super(props);
//     // Initialize state with a 'date' property
//     this.items = [one,two,three];
// }

function ListItems(props) {
    const items = props.items;
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }

  function App_ListItems() {
    const items = [
      { id: 1, name: ' 1' },
      { id: 2, name: ' 2' },
      { id: 3, name: ' 3' }
    ];
  
    return (
      <div>
        <h1>My List</h1>
        <ListItems items={items} />
        </div>)

    }
  
  export default App_ListItems;