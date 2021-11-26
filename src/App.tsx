import { useEffect, useState } from 'react';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';

import * as C from './App.styles';

const App = () => {
  const [list, setList] = useState(items); 
  const [filteredList, setFilteredList] = useState<Item[]>([]) 
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => { 
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth])

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        
      </C.Body>
    </C.Container>
  )
}

export default App;
