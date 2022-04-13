import logo from './logo.svg';
import './App.css';
import { data } from './initialData';
import { RecursiveFilter } from './RecursiveFilter';
import { FilterList } from './FilterList';
import { useEffect } from 'react';

function App() {


  // const data = {
  //   name: "Country Us",
  //   id: "level 1",
  //   items: [
  //     {
  //       name: "City Lamerd",
  //       id: "level 2 1",
  //       items: [
  //         {
  //           name: "Complete",
  //           id: "level 3 1",
  //           full: "Ali",

  //         },
  //         {
  //           name: "Gravida sin",
  //           id: "level 3 2",
  //           full: "Reza",
  //         }
  //       ]
  //     },
  //     {
  //       name: "City Shiraz",
  //       id: "level 2 2",
  //       full: "naser",
  //     }
  //   ]
  // };
  const filterKeys = [
    {
      name: 'country',
      text: 'Country'
    },
    {
      name: 'country',
      text: 'Country'
    },
    {
      name: 'color',
      text: 'Color'
    },

    {
      name: 'level',
      text: 'Level'
    }
  ]
  const temp = [{ name: '', data: '' }];
  const generateData = () => {

    filterKeys.map((filterKey) => {

      getChild(filterKey, '');

    })
  }

  const getChild = (filterKey, mio) => {
    const list = [];
    data.forEach((dataList) => {
      list.push(dataList[filterKey.name])
    });


    const uniqueList = [...new Set(list)]
    uniqueList.forEach((item) => {
      temp.push({ name: item, data: '' })
    });
    uniqueList.forEach((unique) => {
      rec(unique, data.filter((c => c.country == unique)))
    })

    //  console.log(temp);
  }
  let i = 3
  const rec = (name, data) => {


    if (i >= 0) {
      const curr = data.filter(
        (c => c[filterKeys[i].name] === name));
      if (curr.lenght > 0) {

      }

      temp.push({
        name: name,
        data: curr
      });
      rec(name,
        data.filter((c => c[filterKeys[i - 1].name] == data.name)));
      i--;
      console.log(name);

    }

    console.log(temp);



  }

  useEffect(() => {
    generateData();
  }, [])


  return (
    <>
      <div style={{ textAlign: 'center' }}>
        List Of Active Filters: <FilterList filterKeys={filterKeys} />
      </div>
      <RecursiveFilter {...data} />
    </>
  );
}

export default App;
