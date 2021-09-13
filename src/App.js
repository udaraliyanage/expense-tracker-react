import ExpensePanel from './components/Expenses/ExpensePanel';

function App() {

  const items = [
      {
          description : 'Singleton',
          date : new Date(2021, 8, 22),
          amount : 200
      },
      {
          description : 'Bite',
          date : new Date(2021, 8, 5),
          amount : 20
      },
      {
          description : 'Cab',
          date : new Date(2021, 8, 8),
          amount : 14
      },
      {
          description : 'Icecube',
          date : new Date(2021, 8, 14),
          amount : 2
      },
      {
          description : 'Ciga',
          date : new Date(2021, 8, 14),
          amount : 14
      }
  ]
  return (

      <div>
        <ExpensePanel items={items}/>

      </div>
  );
}

export default App;
