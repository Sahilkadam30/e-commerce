import React, { useState } from 'react';
import '../selectdrop/select.css';

const Select = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [selectedItem, setselectedItem] = useState('All Categories');

  /*const[listdata, setlistdata]= useState(data);  // search bar incomplete code
  const[listdata2, setlistdata2]= useState(data);*/

  const openSelect=()=>{
    setIsOpenSelect(!isOpenSelect);
  }

  const closeSelect=(index, name)=>{
    setselectedIndex(index);
    setIsOpenSelect(false);
    setselectedItem(name);
  }

  const filterList=(e)=>{
    const keyword = e.target.value.toLowerCase();

   /* const list= listdata2.filter((item)=>{
      return item.toLowerCase().includes(keyword);  // search bar incomplete code
      console.log(list);
    })*/
  }
  return (
    <div className="selectDropWrapper cursor position-relative">
      <span className='openselect' onClick={openSelect}>{selectedItem}</span>
      {
        isOpenSelect === true &&
        <div className='selectdrop'>
          <div className="searchField">
            <input type="text" placeholder="Search categories..." onChange={filterList}/>
          </div>
          <ul className="searchResults">
            <li onClick={()=>closeSelect(0,'All Categories')} className={`${selectedIndex ===0 ? 'active' : ''}`}>All Categories</li>
            <li onClick={()=>closeSelect(1,'Milk and Dairies')} className={`${selectedIndex ===1 ? 'active' : ''}`}>Milk and Dairies</li>
            <li onClick={()=>closeSelect(2,'Wines and Drinks')} className={`${selectedIndex ===2 ? 'active' : ''}`}>Wines and Drinks</li>
            <li onClick={()=>closeSelect(3,'Clothing and Beauty')} className={`${selectedIndex ===3 ? 'active' : ''}`}>Clothing and Beauty</li>
            <li onClick={()=>closeSelect(4,'Fresh Seafood')} className={`${selectedIndex ===4 ? 'active' : ''}`}>Fresh Seafood</li>
            <li onClick={()=>closeSelect(5,'Pet food and Toy')} className={`${selectedIndex ===5 ? 'active' : ''}`}>Pet food and Toy</li>
            <li onClick={()=>closeSelect(6,'Fast Food')} className={`${selectedIndex ===6 ? 'active' : ''}`}>Fast Food</li>
            <li onClick={()=>closeSelect(7,'vegatables')} className={`${selectedIndex ===7 ? 'active' : ''}`}>vegatables</li>
            <li onClick={()=>closeSelect(8,'Fresh Fruit')} className={`${selectedIndex ===8 ? 'active' : ''}`}>Fresh Fruit</li>
            <li onClick={()=>closeSelect(9,'Bread and Juices')} className={`${selectedIndex ===9 ? 'active' : ''}`}>Bread and Juices</li>
          </ul>
        </div>
      }
      </div>
      )}
    

export default Select;
